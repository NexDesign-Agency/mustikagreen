// scripts/generate-pdf.js
// Jalankan: node scripts/generate-pdf.js
// Pastikan `npm run dev` sudah running di terminal lain!

const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');
const os = require('os');

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.join(__dirname, '..', 'public');

function findChrome() {
  const candidates = [
    // Windows
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    path.join(os.homedir(), 'AppData\\Local\\Google\\Chrome\\Application\\chrome.exe'),
    // Mac
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    // Linux
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
  ];

  for (const p of candidates) {
    if (fs.existsSync(p)) {
      console.log(`✅ Chrome ditemukan: ${p}`);
      return p;
    }
  }
  throw new Error('Chrome tidak ditemukan! Pastikan Google Chrome terinstall.');
}

async function generatePDF(locale) {
  const executablePath = findChrome();

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
    ],
  });

  const page = await browser.newPage();

  // Mobile Viewport (iPhone 12 Pro Max)
  await page.setViewport({ width: 428, height: 926, deviceScaleFactor: 2, isMobile: true, hasTouch: true });

  const url = `${BASE_URL}/${locale}/about`;
  console.log(`\n📄 Membuka: ${url}`);

  await page.goto(url, { waitUntil: 'networkidle0', timeout: 90000 });

  // Tunggu font & render selesai
  await new Promise(r => setTimeout(r, 3000));

  // Paksa pakai style layaan layar HP (screen), abaikan @media print
  await page.emulateMediaType('screen');

  // Sembunyikan UI elemen yang tidak perlu, paksa semua visible
  await page.evaluate(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    ['nav','footer','.wa-float','.lang-toggle','.print-hidden','.nav-drawer','.nav-burger']
      .forEach(sel => document.querySelectorAll(sel).forEach(el => (el.style.display = 'none')));
  });

  const filename = locale === 'id' ? 'compro-id.pdf' : 'compro-en.pdf';
  const outputPath = path.join(OUTPUT_DIR, filename);

  await page.pdf({
    path: outputPath,
    width: '428px',
    height: '926px',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    displayHeaderFooter: false,
  });

  await browser.close();
  console.log(`✅ Tersimpan: public/${filename}`);
}

(async () => {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('🚀 Memulai generate PDF statis...');
  console.log('⚠️  Pastikan `npm run dev` sudah running di port 3000!\n');

  try {
    await generatePDF('id');
    await generatePDF('en');
    console.log('\n🎉 Selesai! File PDF statis tersimpan di folder /public');
    console.log('📁 public/compro-id.pdf');
    console.log('📁 public/compro-en.pdf');
  } catch (err) {
    console.error('\n❌ Error:', err.message);
    process.exit(1);
  }
})();
