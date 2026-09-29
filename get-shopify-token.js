import 'dotenv/config';
import http from 'http';
import { exec } from 'child_process';
import fs from 'fs';

const CLIENT_ID = process.env.SHOPIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SHOPIFY_CLIENT_SECRET;
const STORE = process.env.SHOPIFY_STORE;
const SCOPES = 'write_products,read_products,write_files,read_files,write_content,read_content,read_themes,write_themes';
const REDIRECT_URI = 'http://localhost:3000/callback';

const authUrl = `https://${STORE}/admin/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}`;

const server = http.createServer(async (req, res) => {
  if (!req.url.startsWith('/callback')) return;

  const code = new URL(req.url, 'http://localhost:3000').searchParams.get('code');

  if (!code) {
    res.end('Kein Code erhalten.');
    return;
  }

  console.log('\n Code erhalten, tausche gegen Access Token...');

  const response = await fetch(`https://${STORE}/admin/oauth/access_token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code })
  });

  const data = await response.json();

  if (data.access_token) {
    // Token in .env speichern
    let env = fs.readFileSync('.env', 'utf8');
    // Ganze Zeile ersetzen — ein blosses replace auf 'SHOPIFY_TOKEN=' wuerde den
    // neuen Token vor den alten Wert schieben.
    env = env.replace(/^SHOPIFY_TOKEN=.*$/m, `SHOPIFY_TOKEN=${data.access_token}`);
    fs.writeFileSync('.env', env);

    // Nur die letzten vier Zeichen zeigen — der Token soll nicht im Terminal-Log landen.
    console.log(` Token gespeichert (endet auf ${data.access_token.slice(-4)})`);

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h2> Fertig! Token wurde gespeichert. Du kannst dieses Fenster schließen.</h2>');
    server.close();
    process.exit(0);
  } else {
    console.error('Fehler:', data);
    res.end('Fehler beim Token-Abruf: ' + JSON.stringify(data));
    server.close();
    process.exit(1);
  }
});

server.listen(3000, () => {
  console.log('\n Öffne Browser für Shopify-Autorisierung...');
  // Browser öffnen (Windows)
  exec(`start "" "${authUrl}"`);
  console.log('\nFalls der Browser nicht automatisch öffnet, öffne diese URL manuell:');
  console.log(authUrl);
});
