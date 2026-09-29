/**
 * Legt die drei Signature-Duefte als Shopify-Produkte an, haengt das
 * Flakon-Foto an und ordnet sie der Collection "signature" zu.
 *
 * Daten stammen aus dem Referenzprojekt atramenti-web/lib/mock.ts —
 * nichts davon ist erfunden.
 *
 * Idempotent: Produkte, deren Handle es schon gibt, werden uebersprungen.
 *
 * Lauf:  node scripts/seed-products.mjs [--dry]
 */
import 'dotenv/config';
import fs from 'fs';

const STORE = process.env.SHOPIFY_STORE;
const TOKEN = process.env.SHOPIFY_TOKEN;
const DRY = process.argv.includes('--dry');
const IMAGE = 'C:/Users/G/Downloads/Untitled Project - artboard-1 (1).jpg';

if (!STORE || !TOKEN) {
  console.error('SHOPIFY_STORE oder SHOPIFY_TOKEN fehlt in .env');
  process.exit(1);
}

const PRODUCTS = [
  {
    handle: 'noir-de-plume',
    title: 'Noir de Plume',
    tagline: 'Die erste Zeile auf leerem Papier.',
    familie: 'Holzig-würzig',
    kopf: 'Schwarzer Pfeffer, Bergamotte',
    herz: 'Iris, Veilchen',
    basis: 'Vetiver, Zeder',
    text: `Der Moment, bevor etwas entsteht. Schwarzer Pfeffer und Bergamotte öffnen scharf und wach, dann wird es still: Iris und Veilchen legen sich wie Papierstaub darüber. Was bleibt, ist Vetiver und Zeder — trocken, dunkel, aufrecht.`
  },
  {
    handle: 'encre-blanche',
    title: 'Encre Blanche',
    tagline: 'Tinte, die auf der Haut verschwindet.',
    familie: 'Frisch-floral',
    kopf: 'Weißer Tee, Zitrone',
    herz: 'Jasmin, Moschus',
    basis: 'Zeder, Amber',
    text: `Ein Duft, der sich zurücknimmt. Weißer Tee und Zitrone wirken fast durchsichtig, Jasmin und Moschus geben ihm Wärme, ohne laut zu werden. Zeder und Amber bleiben als leiser Abdruck — näher an Haut als an Parfüm.`
  },
  {
    handle: 'manuscrit',
    title: 'Manuscrit',
    tagline: 'Papier, Staub und alte Bibliotheken.',
    familie: 'Orientalisch-holzig',
    kopf: 'Papyrus, Kardamom',
    herz: 'Tonkabohne, Iris',
    basis: 'Sandelholz, Vanille',
    text: `Der Geruch eines Raums voller Bücher. Papyrus und Kardamom trocken und leicht würzig, darunter Tonkabohne und Iris wie weiches Leder. Sandelholz und Vanille tragen das Ganze — warm, ruhig, ein bisschen altmodisch.`
  }
];

function body(p) {
  return `<p><em>${p.tagline}</em></p>
<p>${p.text}</p>
<h3>Duftnoten</h3>
<ul>
<li><strong>Kopf</strong> — ${p.kopf}</li>
<li><strong>Herz</strong> — ${p.herz}</li>
<li><strong>Basis</strong> — ${p.basis}</li>
</ul>
<p><strong>Duftfamilie:</strong> ${p.familie}</p>
<p>50 ml Eau de Parfum. Die vollständige Inhaltsstoffliste findest du über den QR-Code am Flakon. Bei empfindlicher Haut vor der ersten Anwendung in der Armbeuge testen.</p>`;
}

async function rest(path, method, payload) {
  const res = await fetch(`https://${STORE}/admin/api/2024-10/${path}`, {
    method,
    headers: { 'X-Shopify-Access-Token': TOKEN, 'Content-Type': 'application/json' },
    body: payload ? JSON.stringify(payload) : undefined
  });
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch { json = { raw: text }; }
  return { status: res.status, json };
}

const attachment = fs.readFileSync(IMAGE).toString('base64');
console.log(`Store: ${STORE}${DRY ? '  [DRY RUN]' : ''}`);
console.log(`Bild: ${(attachment.length / 1365).toFixed(0)} KB base64\n`);

// Vorhandene Produkte ermitteln
const existing = await rest('products.json?limit=250&fields=id,handle', 'GET');
if (existing.status !== 200) {
  console.error('Produktliste nicht lesbar:', existing.status, JSON.stringify(existing.json).slice(0, 300));
  process.exit(1);
}
const have = new Map(existing.json.products.map((p) => [p.handle, p.id]));

const created = [];
for (const p of PRODUCTS) {
  if (have.has(p.handle)) {
    console.log(`  uebersprungen  ${p.handle} (existiert)`);
    created.push(have.get(p.handle));
    continue;
  }
  if (DRY) { console.log(`  wuerde anlegen ${p.handle}  "${p.title}"`); continue; }

  const r = await rest('products.json', 'POST', {
    product: {
      title: p.title,
      handle: p.handle,
      body_html: body(p),
      vendor: 'Atramenti',
      product_type: 'Parfum',
      tags: 'signature',
      status: 'active',
      published: true,
      images: [{ attachment, alt: `${p.title} — Eau de Parfum, 50 ml` }],
      variants: [{ title: '50 ml', price: '49.00', inventory_management: null, requires_shipping: true }]
    }
  });

  if (r.status >= 300) {
    console.log(`  FEHLER         ${p.handle}: ${r.status} ${JSON.stringify(r.json).slice(0, 300)}`);
    continue;
  }
  console.log(`  angelegt       ${p.handle}  "${p.title}"  (id ${r.json.product.id})`);
  created.push(r.json.product.id);
}

if (DRY || created.length === 0) process.exit(0);

// Der Collection "signature" zuordnen
const cols = await rest('custom_collections.json?limit=250&fields=id,handle', 'GET');
const sig = (cols.json.custom_collections || []).find((c) => c.handle === 'signature');
if (!sig) {
  console.log('\nCollection "signature" nicht als manuelle Collection gefunden — Zuordnung uebersprungen.');
  process.exit(0);
}

console.log('\n— Zuordnung zur Collection "signature" —');
const collects = await rest(`collects.json?collection_id=${sig.id}&limit=250&fields=product_id`, 'GET');
const already = new Set((collects.json.collects || []).map((c) => c.product_id));
for (const id of created) {
  if (already.has(id)) { console.log(`  schon drin     ${id}`); continue; }
  const r = await rest('collects.json', 'POST', { collect: { product_id: id, collection_id: sig.id } });
  console.log(r.status >= 300
    ? `  FEHLER         ${id}: ${r.status} ${JSON.stringify(r.json).slice(0, 200)}`
    : `  zugeordnet     ${id}`);
}
