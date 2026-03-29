'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function LayananPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main>
      {/* ── HERO ── */}
      <div className="pg-hero">
        <div className="pg-hero-glow" />
        <div className="pg-hero-tag">
          <span data-id="true">Layanan Kami</span>
          <span data-en="true">Our Services</span>
        </div>
        <h1 className="pg-hero-title">
          <span data-id="true">Solusi UCO<br /><em>End-to-End</em></span>
          <span data-en="true">End-to-End<br /><em>UCO Solutions</em></span>
        </h1>
        <p className="pg-hero-desc">
          <span data-id="true">Dari pengumpulan jelantah hingga ekspor internasional — kami menyederhanakan seluruh rantai pasok UCO untuk mitra lokal dan pembeli global.</span>
          <span data-en="true">From used cooking oil collection to international export — we simplify the entire UCO supply chain for local partners and global buyers.</span>
        </p>
        <div className="pg-hero-stats">
          <div className="pg-stat">
            <div className="pg-stat-num">4+</div>
            <div className="pg-stat-lbl"><span data-id="true">Pasar Ekspor</span><span data-en="true">Export Markets</span></div>
          </div>
          <div className="pg-stat">
            <div className="pg-stat-num">ISCC</div>
            <div className="pg-stat-lbl"><span data-id="true">Bersertifikasi</span><span data-en="true">Certified</span></div>
          </div>
          <div className="pg-stat">
            <div className="pg-stat-num">B2B</div>
            <div className="pg-stat-lbl"><span data-id="true">Ekspor Langsung</span><span data-en="true">Direct Export</span></div>
          </div>
          <div className="pg-stat">
            <div className="pg-stat-num">100%</div>
            <div className="pg-stat-lbl"><span data-id="true">Berbasis Limbah</span><span data-en="true">Waste-Based</span></div>
          </div>
        </div>
      </div>

      <div className="divider" />

      {/* ── LAYANAN UTAMA ── */}
      <section className="svc-main-section">
        <span className="tag">
          <span data-id="true">// Layanan Kami</span>
          <span data-en="true">// Our Services</span>
        </span>
        <h2 className="s-title reveal">
          <span data-id="true">Dua Jalur Bisnis <em style={{ color: 'var(--gold)' }}>Utama Kami</em></span>
          <span data-en="true">Our Two Main <em style={{ color: 'var(--gold)' }}>Business Channels</em></span>
        </h2>
        <p className="s-desc reveal">
          <span data-id="true">Kami melayani penjualan domestik maupun ekspor internasional dengan standar kualitas, verifikasi, dan dokumen lengkap.</span>
          <span data-en="true">We serve both domestic sales and international exports with full quality standards, verification, and documentation.</span>
        </p>

        <div className="svc-main-grid reveal">
          <div className="svc-main-card svc-highlight">
            <div className="svc-main-num">01</div>
            <div className="svc-main-icon">🏠</div>
            <div className="svc-main-name">
              <span data-id="true">Penjualan Lokal</span>
              <span data-en="true">Domestic Sales</span>
            </div>
            <p className="svc-main-desc">
              <span data-id="true">Minyak jelantah yang dikumpulkan dan disaring sesuai standar kualitas, disalurkan ke pembeli lokal industri dengan harga kompetitif dan pengiriman tepat waktu.</span>
              <span data-en="true">Collected and filtered used cooking oil meeting quality standards, supplied to local industrial buyers at competitive prices with on-time delivery.</span>
            </p>
            <ul className="svc-main-features">
              <li><span data-id="true">Kontrol & kesepakatan harga transparan</span><span data-en="true">Transparent pricing & agreements</span></li>
              <li><span data-id="true">Pengiriman terjadwal ke lokasi pembeli</span><span data-en="true">Scheduled delivery to buyer location</span></li>
              <li><span data-id="true">Dokumentasi serah terima lengkap</span><span data-en="true">Complete handover documentation</span></li>
              <li><span data-id="true">Jaringan pengepul Jabodetabek</span><span data-en="true">Greater Jakarta collector network</span></li>
            </ul>
            <span className="svc-main-badge">
              <span data-id="true">Domestik</span>
              <span data-en="true">Domestic</span>
            </span>
          </div>

          <div className="svc-main-card">
            <div className="svc-main-num">02</div>
            <div className="svc-main-icon">🌍</div>
            <div className="svc-main-name">
              <span data-id="true">Ekspor Internasional</span>
              <span data-en="true">International Export</span>
            </div>
            <p className="svc-main-desc">
              <span data-id="true">UCO berkualitas tinggi ke mitra internasional dengan dokumen dan logistik standar pasar. Memenuhi persyaratan regulasi Eropa, Korea, Cina, dan Jepang.</span>
              <span data-en="true">High-quality UCO to international partners with market-standard documentation and logistics. Meeting regulatory requirements for Europe, Korea, China, and Japan.</span>
            </p>
            <ul className="svc-main-features">
              <li><span data-id="true">Invoice, Packing List, COO lengkap</span><span data-en="true">Complete Invoice, Packing List, COO</span></li>
              <li><span data-id="true">Bersertifikasi ISCC untuk pasar EU</span><span data-en="true">ISCC certified for EU market</span></li>
              <li><span data-id="true">Pengiriman B2B langsung ke pembeli</span><span data-en="true">Direct B2B delivery to buyers</span></li>
              <li><span data-id="true">Target pasar: EU, CN, KR, JP</span><span data-en="true">Target markets: EU, CN, KR, JP</span></li>
            </ul>
            <span className="svc-main-badge">
              <span data-id="true">Internasional</span>
              <span data-en="true">International</span>
            </span>
          </div>

          <div className="svc-main-card">
            <div className="svc-main-num">03</div>
            <div className="svc-main-icon">🔬</div>
            <div className="svc-main-name">
              <span data-id="true">QC & Sortasi UCO</span>
              <span data-en="true">UCO QC & Sorting</span>
            </div>
            <p className="svc-main-desc">
              <span data-id="true">Quality control menyeluruh yang memastikan setiap batch UCO memenuhi spesifikasi pembeli internasional — dari FFA, moisture, hingga filtrasi.</span>
              <span data-en="true">Comprehensive quality control ensuring every UCO batch meets international buyer specifications — from FFA, moisture, to filtration.</span>
            </p>
            <ul className="svc-main-features">
              <li><span data-id="true">Uji FFA, moisture, dan impuritas</span><span data-en="true">FFA, moisture, and impurity testing</span></li>
              <li><span data-id="true">Filtrasi berlapis sesuai standar ekspor</span><span data-en="true">Multi-layer filtration to export standards</span></li>
              <li><span data-id="true">Laporan QC setiap pengiriman</span><span data-en="true">QC report per shipment</span></li>
              <li><span data-id="true">Fasilitas sortasi di Ciasoko, Tangerang</span><span data-en="true">Sorting facility in Ciasoko, Tangerang</span></li>
            </ul>
            <span className="svc-main-badge">
              <span data-id="true">Quality Control</span>
              <span data-en="true">Quality Control</span>
            </span>
          </div>

          <div className="svc-main-card svc-highlight">
            <div className="svc-main-num">04</div>
            <div className="svc-main-icon">🤝</div>
            <div className="svc-main-name">
              <span data-id="true">Kemitraan Pengepul</span>
              <span data-en="true">Collector Partnership</span>
            </div>
            <p className="svc-main-desc">
              <span data-id="true">Kami bermitra dengan pengepul resmi di seluruh Jabodetabek — menyediakan harga adil, pembiayaan transportasi, dan ekosistem pengumpulan UCO yang terstruktur.</span>
              <span data-en="true">We partner with certified collectors across Greater Jakarta — offering fair pricing, transport support, and a structured UCO collection ecosystem.</span>
            </p>
            <ul className="svc-main-features">
              <li><span data-id="true">Harga beli kompetitif & konsisten</span><span data-en="true">Competitive & consistent purchase pricing</span></li>
              <li><span data-id="true">Dukungan operasional & logistik</span><span data-en="true">Operational & logistics support</span></li>
              <li><span data-id="true">Onboarding mudah tanpa birokrasi</span><span data-en="true">Easy onboarding without bureaucracy</span></li>
              <li><span data-id="true">Pembayaran tepat waktu terjamin</span><span data-en="true">Guaranteed on-time payment</span></li>
            </ul>
            <span className="svc-main-badge">
              <span data-id="true">Mitra Pengepul</span>
              <span data-en="true">Collector Partner</span>
            </span>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── PROSES ── */}
      <section className="svc-process-section">
        <div className="svc-process-inner">
          <span className="tag">
            <span data-id="true">// Alur Kerja</span>
            <span data-en="true">// Workflow</span>
          </span>
          <h2 className="s-title reveal">
            <span data-id="true">Proses Sederhana,<br />Hasil Maksimal</span>
            <span data-en="true">Simple Process,<br />Maximum Results</span>
          </h2>
          <p className="s-desc reveal">
            <span data-id="true">Empat tahap yang terstruktur dari pengumpulan hingga pengiriman ekspor.</span>
            <span data-en="true">Four structured stages from collection to export delivery.</span>
          </p>

          <div className="svc-process-steps reveal">
            {[
              { num: '01', icon: '🚛', name_id: 'Pengiriman UCO', name_en: 'UCO Delivery', desc_id: 'Pengepul mitra mengirimkan jelantah ke titik pengumpulan kami di Ciasoko, Tangerang.', desc_en: 'Partner collectors deliver used cooking oil to our collection point in Ciasoko, Tangerang.' },
              { num: '02', icon: '🔬', name_id: 'QC & Filtrasi', name_en: 'QC & Filtration', desc_id: 'Setiap batch diuji FFA, moisture, dan difiltrasi hingga memenuhi standar ekspor internasional.', desc_en: 'Each batch is FFA & moisture tested and filtered to meet international export standards.' },
              { num: '03', icon: '📄', name_id: 'Sertifikasi & Dokumen', name_en: 'Certification & Docs', desc_id: 'Penyiapan ISCC, invoice, packing list, dan dokumen ekspor sesuai regulasi negara tujuan.', desc_en: 'Preparing ISCC, invoice, packing list, and export documents per destination regulations.' },
              { num: '04', icon: '🌏', name_id: 'Pengiriman Ekspor', name_en: 'Export Shipment', desc_id: 'UCO dikirim langsung ke pembeli EU, CN, KR, atau JP sesuai jadwal dan kontrak.', desc_en: 'UCO shipped directly to EU, CN, KR, or JP buyers per schedule and contract.' },
            ].map((step, i) => (
              <div key={i} className="svc-process-step">
                <div className={`svc-step-circle ${i === 0 || i === 3 ? 'step-gold' : 'step-outline'}`}>{step.num}</div>
                <div className="svc-step-icon">{step.icon}</div>
                <div className="svc-step-name">
                  <span data-id="true">{step.name_id}</span>
                  <span data-en="true">{step.name_en}</span>
                </div>
                <div className="svc-step-desc">
                  <span data-id="true">{step.desc_id}</span>
                  <span data-en="true">{step.desc_en}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── KENAPA KAMI ── */}
      <section className="svc-why-section">
        <span className="tag">
          <span data-id="true">// Keunggulan</span>
          <span data-en="true">// Why Us</span>
        </span>
        <h2 className="s-title reveal">
          <span data-id="true">Kenapa Pilih<br /><em style={{ color: 'var(--gold)' }}>Mustika Green?</em></span>
          <span data-en="true">Why Choose<br /><em style={{ color: 'var(--gold)' }}>Mustika Green?</em></span>
        </h2>

        <div className="svc-why-grid">
          {[
            { icon: '🏆', title_id: 'ISCC Bersertifikasi', title_en: 'ISCC Certified', desc_id: 'Satu-satunya eksportir UCO lokal di wilayah Banten dengan sertifikasi ISCC penuh — syarat utama masuk pasar biodiesel Eropa.', desc_en: 'The only local UCO exporter in Banten with full ISCC certification — a key requirement for the European biodiesel market.' },
            { icon: '🔗', title_id: 'Rantai Pasok Terintegrasi', title_en: 'Integrated Supply Chain', desc_id: 'Kami berdiri di puncak supply chain UCO — dari pengepul lokal hingga pembeli internasional, semuanya terkoordinasi dalam satu sistem.', desc_en: 'We sit at the top of the UCO supply chain — from local collectors to international buyers, all coordinated in one system.' },
            { icon: '🌿', title_id: '100% Berbasis Limbah', title_en: '100% Waste-Based', desc_id: 'Seluruh UCO kami berasal dari limbah minyak jelantah — tidak ada bahan baku baru. Setiap liter yang kami ekspor mengurangi emisi karbon nyata.', desc_en: 'All our UCO comes from used cooking oil waste — no new raw materials. Every liter we export reduces real carbon emissions.' },
            { icon: '📍', title_id: 'Jaringan Lokal Luas', title_en: 'Extensive Local Network', desc_id: 'Lebih dari 50 titik pengepul aktif di Jabodetabek yang terverifikasi, memastikan pasokan UCO stabil setiap bulannya.', desc_en: 'More than 50 verified active collection points across Greater Jakarta, ensuring stable monthly UCO supply.' },
            { icon: '📄', title_id: 'Dokumen Lengkap', title_en: 'Full Documentation', desc_id: 'Invoice, COO, MSDS, Packing List, dan semua dokumen ekspor disiapkan secara profesional sesuai standar negara tujuan.', desc_en: 'Invoice, COO, MSDS, Packing List, and all export documents prepared professionally per destination standards.' },
            { icon: '🤝', title_id: 'Mitra Jangka Panjang', title_en: 'Long-term Partner', desc_id: 'Bukan sekadar transaksi — kami membangun relasi bisnis yang berkesinambungan dengan harga adil dan transparansi penuh.', desc_en: 'More than just transactions — we build sustained business relationships with fair pricing and full transparency.' },
          ].map((item, i) => (
            <div key={i} className="svc-why-card reveal">
              <div className="svc-why-icon">{item.icon}</div>
              <div className="svc-why-title">
                <span data-id="true">{item.title_id}</span>
                <span data-en="true">{item.title_en}</span>
              </div>
              <p className="svc-why-text">
                <span data-id="true">{item.desc_id}</span>
                <span data-en="true">{item.desc_en}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" className="svc-cta-section">
        <div className="cta-glow" />
        <div className="cta-content">
          <span className="tag">
            <span data-id="true">// Mulai Sekarang</span>
            <span data-en="true">// Get Started</span>
          </span>
          <h2 className="cta-title">
            <span data-id="true">Siap Jadi Mitra<br /><em>Pengepul Kami?</em></span>
            <span data-en="true">Ready to Become<br /><em>Our Partner?</em></span>
          </h2>
          <p className="cta-desc">
            <span data-id="true">Bergabunglah dengan ekosistem jelantah Mustika Green dan dapatkan harga terbaik, dukungan logistik, serta kepastian pembayaran.</span>
            <span data-en="true">Join the Mustika Green cooking oil ecosystem and get the best prices, logistics support, and payment certainty.</span>
          </p>
          <div className="cta-btns">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="btn-primary">
              📱 <span data-id="true">WhatsApp Kami</span><span data-en="true">WhatsApp Us</span>
            </a>
            <Link href="/kontak" className="btn-outline">
              ✉️ <span data-id="true">Kirim Pesan</span><span data-en="true">Send Message</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
