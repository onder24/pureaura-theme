import 'dotenv/config';
import fs from 'fs';

const KEY = process.env.GEMINI_API_KEY;

const OILS = [
  { file: 'oil-vanille.jpg', prompt: 'Ultra-high quality product photography. Pure black background, no colored backgrounds. A single vanilla pod split open, placed upper third of frame. Warm amber backlight from behind makes black seeds glisten. Tiny resin droplets visible. Lower two-thirds: pure black with faint vanilla smoke wisps only. No orange background. Cinematic side lighting. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-schwarze-orchidee.jpg', prompt: 'Ultra-high quality product photography. Pure black background only. A single deep purple-black orchid blossom, upper third of frame. Cold blue-purple rim lighting from behind. Fine dew droplets on petals. Lower two-thirds: pure black with floating pollen particles only. No colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-meersalz.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Raw sea salt crystals cluster, upper third of frame. Cold icy-blue side lighting refracting through crystals. Fine sea mist drifting downward. Lower two-thirds: pure black with suspended water droplets only. No colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-amber.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Raw amber resin stone, upper third of frame. Warm backlight shining through stone revealing trapped air bubbles. Golden resin droplets dripping downward. Lower two-thirds: pure black only. No orange or colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-african-tonka.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Two tonka beans, dark wrinkled mahogany surface, upper third of frame. Soft warm golden side lighting. Fine golden coumarin dust drifting downward. Lower two-thirds: pure black only. No colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-oud.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Raw agarwood piece, dark resin-soaked wood, upper third of frame. Dramatic side lighting on wood grain texture. Thin aromatic smoke wisps curling downward. Lower two-thirds: pure black only. No colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-olibanum.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Raw frankincense resin tears, milky-white to pale gold, upper third of frame. Cold white backlight making them glow. Fine white smoke drifting downward. Lower two-thirds: pure black only. No colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-white-musk.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Abstract translucent white crystalline particles, upper third of frame. Cold rim lighting only revealing form. Fine white powder drifting downward into pure black. Lower two-thirds: pure black only. Minimal, no colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-tobacco-leaves.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Two dried tobacco leaves draped, rich brown and gold tones, upper third of frame. Warm amber side lighting on papery texture. Fine tobacco dust drifting downward. Lower two-thirds: pure black only. No colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-palo-santo.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Single palo santo wood piece, pale cream-beige, upper third of frame. Tip faintly glowing as if just extinguished. Single thin white smoke thread curling upward then drifting down. Lower two-thirds: pure black only. No colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-zedernholz.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Raw cedar wood block freshly cut surface, warm honey-brown, upper third of frame. Sharp side lighting on wood grain. Fine sawdust particles drifting downward. Lower two-thirds: pure black only. No colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-schwarzer-pfeffer.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Black peppercorn cluster, one cracked open, upper third of frame. Cold sharp side lighting on wrinkled texture. Fine pepper dust exploding downward. Lower two-thirds: pure black only. No colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-patchouli.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Bundle of dried patchouli leaves, deep earthy green-brown, upper third of frame. Warm diffused side lighting on dried texture. Fine dust and oil droplets drifting downward. Lower two-thirds: pure black only. No colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-white-amber.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Smooth polished white amber stone, pale ivory, upper third of frame. Soft cold backlight creating gentle halo. Fine luminous powder drifting downward. Lower two-thirds: pure black only. No colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-oud-and-tobacco.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Dark oud wood piece and dried tobacco leaf intertwined, upper third of frame. Warm amber side lighting. Thin smoke threads from both materials drifting downward. Lower two-thirds: pure black only. No colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-rauch.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Single glowing ember, deep orange-red glow, upper third of frame. Thick dark grey and white smoke column rising from ember. Smoke tendrils dissolving into pure black below. Lower two-thirds: pure black only. No colored background. 3:4 vertical, photorealistic, long exposure, 8K.' },
  { file: 'oil-kokosnuss.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Coconut split in half showing white flesh interior, upper third of frame. Warm tropical backlight creating soft white glow. Fine coconut milk droplets and white fibers drifting downward. Lower two-thirds: pure black only. No colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-oriental-vanilla.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Split vanilla pod surrounded by saffron gold and cinnamon red spice dust, upper third of frame. Rich warm amber backlight. Mixed spice particles and vanilla smoke drifting downward. Lower two-thirds: pure black only. No colored or orange background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-balsam-wood.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Freshly cut balsam wood cross-section showing ring pattern, upper third of frame. Warm side lighting with golden resin streaks. Sticky golden resin droplets dripping downward. Lower two-thirds: pure black only. No colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-ananas.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Single pineapple crown intact, upper third of frame. Dramatic cold side lighting on diamond-pattern skin in hyper detail. Fine golden juice droplets and tropical mist drifting downward. Lower two-thirds: pure black only. No colored background. 3:4 vertical, photorealistic, 8K.' },
  { file: 'oil-weisses-sandelholz.jpg', prompt: 'Ultra-high quality product photography. Pure black background. Smooth pale sandalwood piece, creamy white to light beige, upper third of frame. Soft warm backlight creating ivory glow at edges. Fine white sandalwood dust drifting like snow downward. Lower two-thirds: pure black only. No colored background. 3:4 vertical, photorealistic, 8K.' },
];

async function generate(oil, index) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-fast-generate-001:predict?key=${KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instances: [{ prompt: oil.prompt }],
        parameters: { sampleCount: 1, aspectRatio: '3:4' }
      })
    }
  );
  const data = await response.json();
  if (data.error) throw new Error(data.error.message);
  const b64 = data.predictions?.[0]?.bytesBase64Encoded;
  if (!b64) throw new Error('Kein Bild erhalten');
  fs.writeFileSync(`assets/${oil.file}`, Buffer.from(b64, 'base64'));
  console.log(`[${index+1}/21] ✓ ${oil.file}`);
}

async function main() {
  console.log('Generiere 21 Ölbilder...\n');
  for (let i = 0; i < OILS.length; i++) {
    try {
      await generate(OILS[i], i);
      // Kurze Pause um Rate Limits zu vermeiden
      if (i < OILS.length - 1) await new Promise(r => setTimeout(r, 1500));
    } catch (e) {
      console.error(`[${i+1}/21] ✗ ${OILS[i].file}: ${e.message}`);
    }
  }
  console.log('\nFertig!');
}

main();
