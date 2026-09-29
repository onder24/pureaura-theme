import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import https from 'https';
import readline from 'readline';

const GEMINI_KEY = process.env.GEMINI_API_KEY;
const SHOPIFY_TOKEN = process.env.SHOPIFY_TOKEN;
const SHOPIFY_STORE = process.env.SHOPIFY_STORE;

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise(res => rl.question(q, res));

async function generateImage(prompt) {
  console.log('\n Bild wird generiert...');

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview-image-generation:generateContent?key=${GEMINI_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ['IMAGE', 'TEXT'] }
      })
    }
  );

  const data = await response.json();

  if (data.error) {
    throw new Error(`Gemini Fehler: ${data.error.message}`);
  }

  const parts = data.candidates?.[0]?.content?.parts;
  const imagePart = parts?.find(p => p.inlineData);

  if (!imagePart) {
    throw new Error('Kein Bild erhalten. Antworte: ' + JSON.stringify(data).slice(0, 300));
  }

  return imagePart.inlineData.data; // base64
}

async function saveAsThemeAsset(base64Data, filename) {
  const filepath = path.join('assets', filename);
  fs.writeFileSync(filepath, Buffer.from(base64Data, 'base64'));
  console.log(` Gespeichert: assets/${filename}`);
  console.log(' Führe jetzt "shopify theme push" aus um es hochzuladen.');
}

async function uploadAsProductImage(base64Data, productId, filename) {
  if (!SHOPIFY_TOKEN) {
    console.log('\n Kein Shopify Token — Bild wird nur lokal gespeichert.');
    return saveAsThemeAsset(base64Data, filename);
  }

  console.log('\n Bild wird als Produktbild hochgeladen...');

  const response = await fetch(
    `https://${SHOPIFY_STORE}/admin/api/2024-01/products/${productId}/images.json`,
    {
      method: 'POST',
      headers: {
        'X-Shopify-Access-Token': SHOPIFY_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image: { attachment: base64Data, filename }
      })
    }
  );

  const data = await response.json();
  if (data.image) {
    console.log(` Produktbild hochgeladen: ${data.image.src}`);
  } else {
    console.log(' Fehler:', JSON.stringify(data));
  }
}

async function main() {
  console.log('\n=== PureAura Bild-Generator ===\n');

  const typ = await ask('Was möchtest du generieren?\n  1 = Theme-Bild (Banner, Hintergrund)\n  2 = Produktbild\nDeine Wahl: ');
  const prompt = await ask('\nBeschreibe das Bild (auf Englisch für beste Ergebnisse):\n> ');
  const filename = (await ask('Dateiname (z.B. hero-banner.jpg): ')).trim() || 'generated-image.jpg';

  const base64 = await generateImage(prompt);

  if (typ.trim() === '2') {
    const productId = await ask('Shopify Produkt-ID (findest du in der URL beim Produkt im Admin): ');
    await uploadAsProductImage(base64, productId.trim(), filename);
  } else {
    await saveAsThemeAsset(base64, filename);
  }

  rl.close();
}

main().catch(err => {
  console.error('\n Fehler:', err.message);
  rl.close();
  process.exit(1);
});
