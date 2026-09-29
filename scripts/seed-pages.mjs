/**
 * Legt die im Theme verlinkten Pages und Collections im Shopify-Store an.
 *
 * Idempotent: Was es schon gibt, wird uebersprungen statt ueberschrieben —
 * damit ein zweiter Lauf keine im Admin gepflegten Texte plattmacht.
 *
 * Lauf:  node scripts/seed-pages.mjs          (echter Lauf)
 *        node scripts/seed-pages.mjs --dry    (nur anzeigen)
 */
import 'dotenv/config';
import { PAGES, COLLECTIONS } from './seed-content.mjs';

const STORE = process.env.SHOPIFY_STORE;
const TOKEN = process.env.SHOPIFY_TOKEN;
const DRY = process.argv.includes('--dry');

if (!STORE || !TOKEN) {
  console.error('SHOPIFY_STORE oder SHOPIFY_TOKEN fehlt in .env');
  process.exit(1);
}

async function gql(query, variables = {}) {
  const res = await fetch(`https://${STORE}/admin/api/2024-10/graphql.json`, {
    method: 'POST',
    headers: { 'X-Shopify-Access-Token': TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

async function existingPageHandles() {
  const handles = new Set();
  let cursor = null;
  for (;;) {
    const data = await gql(
      `query($cursor: String) {
        pages(first: 100, after: $cursor) {
          edges { cursor node { handle } }
          pageInfo { hasNextPage }
        }
      }`,
      { cursor }
    );
    const edges = data.pages.edges;
    edges.forEach((e) => handles.add(e.node.handle));
    if (!data.pages.pageInfo.hasNextPage) break;
    cursor = edges[edges.length - 1].cursor;
  }
  return handles;
}

async function existingCollectionHandles() {
  const data = await gql(`{ collections(first: 250) { edges { node { handle } } } }`);
  return new Set(data.collections.edges.map((e) => e.node.handle));
}

async function createPage(page) {
  const data = await gql(
    `mutation($page: PageCreateInput!) {
      pageCreate(page: $page) {
        page { handle }
        userErrors { field message }
      }
    }`,
    {
      page: {
        title: page.title,
        handle: page.handle,
        body: page.body,
        isPublished: true
      }
    }
  );
  const errs = data.pageCreate.userErrors;
  if (errs.length) throw new Error(errs.map((e) => `${e.field}: ${e.message}`).join('; '));
  return data.pageCreate.page.handle;
}

async function createCollection(col) {
  const data = await gql(
    `mutation($input: CollectionInput!) {
      collectionCreate(input: $input) {
        collection { handle }
        userErrors { field message }
      }
    }`,
    { input: { title: col.title, handle: col.handle, descriptionHtml: col.description } }
  );
  const errs = data.collectionCreate.userErrors;
  if (errs.length) throw new Error(errs.map((e) => `${e.field}: ${e.message}`).join('; '));
  return data.collectionCreate.collection.handle;
}

const results = { created: [], skipped: [], failed: [] };

console.log(`Store: ${STORE}${DRY ? '  [DRY RUN]' : ''}\n`);

const haveCols = await existingCollectionHandles();
console.log('— Collections —');
for (const col of COLLECTIONS) {
  if (haveCols.has(col.handle)) {
    console.log(`  uebersprungen  ${col.handle} (existiert)`);
    results.skipped.push(col.handle);
    continue;
  }
  if (DRY) {
    console.log(`  wuerde anlegen ${col.handle}`);
    continue;
  }
  try {
    await createCollection(col);
    console.log(`  angelegt       ${col.handle}`);
    results.created.push(col.handle);
  } catch (err) {
    console.log(`  FEHLER         ${col.handle}: ${err.message}`);
    results.failed.push(col.handle);
  }
}

const havePages = await existingPageHandles();
console.log('\n— Pages —');
for (const page of PAGES) {
  if (havePages.has(page.handle)) {
    console.log(`  uebersprungen  ${page.handle} (existiert)`);
    results.skipped.push(page.handle);
    continue;
  }
  if (DRY) {
    console.log(`  wuerde anlegen ${page.handle}  "${page.title}"`);
    continue;
  }
  try {
    await createPage(page);
    console.log(`  angelegt       ${page.handle}  "${page.title}"`);
    results.created.push(page.handle);
  } catch (err) {
    console.log(`  FEHLER         ${page.handle}: ${err.message}`);
    results.failed.push(page.handle);
  }
}

if (!DRY) {
  console.log(
    `\nFertig. ${results.created.length} angelegt, ${results.skipped.length} uebersprungen, ${results.failed.length} fehlgeschlagen.`
  );
  if (results.failed.length) process.exitCode = 1;
}
