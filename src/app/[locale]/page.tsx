export default function HomePage() {
  return (
    <main>
      <section id="hero">
        <div className="hero-bg">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-rings">
            <div className="hero-ring"></div>
            <div className="hero-ring"></div>
            <div className="hero-ring"></div>
          </div>
        </div>

        <div className="hero-drop-wrap">
          <div className="hero-drop-orbit"><div className="orbit-dot"></div></div>
          <div className="hero-drop-orbit"><div className="orbit-dot"></div></div>
          <div className="hero-drop-core"></div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span data-id="true">🇮🇩 Eksportir UCO Indonesia</span>
            <span data-en="true">🇮🇩 Indonesia UCO Exporter</span>
          </div>

          <h1 className="hero-title">
            <span data-id="true">Mengubah<br /><em>Jelantah</em><br />Jadi Energi</span>
            <span data-en="true">Turning<br /><em>Waste Oil</em><br />Into Energy</span>
          </h1>

          <p className="hero-desc">
            <span data-id="true">PT Mustika Green Indonesia adalah eksportir minyak jelantah (Used Cooking Oil) terpercaya. Kami menjembatani pengepul lokal ke pasar biodiesel internasional — mendorong ekonomi hijau yang berkelanjutan.</span>
            <span data-en="true">PT Mustika Green Indonesia is a trusted used cooking oil exporter. We bridge local collectors to the international biodiesel market — driving a sustainable green economy.</span>
          </p>

          <div className="hero-btns">
            <a href="#cta" className="btn-primary">
              <span data-id="true">Jadi Mitra Kami →</span><span data-en="true">Partner With Us →</span>
            </a>
            <a href="#alur" className="btn-outline">
              <span data-id="true">Lihat Ekosistem</span><span data-en="true">Our Ecosystem</span>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-val">100%</div>
              <div className="stat-lbl"><span data-id="true">Berbasis Limbah</span><span data-en="true">Waste-Based</span></div>
            </div>
            <div className="stat-item">
              <div className="stat-val">ISCC</div>
              <div className="stat-lbl"><span data-id="true">Bersertifikasi</span><span data-en="true">Certified</span></div>
            </div>
            <div className="stat-item">
              <div className="stat-val">B2B</div>
              <div className="stat-lbl"><span data-id="true">Ekspor Langsung</span><span data-en="true">Direct Export</span></div>
            </div>
          </div>

          <div className="hero-location">
            <span className="hero-location-icon">📍</span>
            <span data-id="true">Desa Cisoka, Kec. Cisoka, Kab. Tangerang — Banten</span>
            <span data-en="true">Cisoka, Tangerang Regency — Banten, Indonesia</span>
          </div>
        </div>
      </section>

      {/* Alur Ekosistem */}
      <section id="alur">
        <div className="alur-header">
          <span className="tag"><span data-id="true">// ekosistem jelantah</span><span data-en="true">// UCO ecosystem</span></span>
          <h2 className="s-title"><span data-id="true">Dari Dapur ke<br />Pasar Global</span><span data-en="true">From Kitchens to<br />Global Markets</span></h2>
          <p className="s-desc">
            <span data-id="true">Kami berada di puncak rantai pasok UCO Indonesia — menerima dari pengepul terpercaya dan menyalurkan langsung ke pembeli internasional.</span>
            <span data-en="true">We sit at the top of Indonesia's UCO supply chain — sourcing from trusted collectors and delivering directly to international buyers.</span>
          </p>
        </div>

        <div className="flow-track">
          <div className="flow-node reveal">
            <div className="flow-node-bullet">🍳</div>
            <div className="flow-node-label"><span data-id="true">Sumber Jelantah</span><span data-en="true">UCO Sources</span></div>
            <div className="flow-node-cards">
              <div className="flow-card"><span className="flow-card-ico">🍳</span> <span data-id="true">Restoran & Katering</span><span data-en="true">Restaurants & Catering</span></div>
              <div className="flow-card"><span className="flow-card-ico">🏫</span> <span data-id="true">Kantin & Kafetaria</span><span data-en="true">Canteens & Cafeterias</span></div>
              <div className="flow-card"><span className="flow-card-ico">🏠</span> <span data-id="true">Rumah Tangga</span><span data-en="true">Households</span></div>
              <div className="flow-card"><span className="flow-card-ico">🏭</span> <span data-id="true">Industri Makanan</span><span data-en="true">Food Industry</span></div>
            </div>
          </div>
          <div className="flow-arrow reveal">
            <span className="flow-arrow-lbl"><span data-id="true">Setor ke pengepul</span><span data-en="true">Collected by aggregators</span></span>
          </div>
          <div className="flow-node reveal">
            <div className="flow-node-bullet">🔄</div>
            <div className="flow-node-label"><span data-id="true">Pengepul / Aggregator</span><span data-en="true">Collectors / Aggregators</span></div>
            <div className="flow-node-cards">
              <div className="flow-card"><span className="flow-card-ico">🔄</span> cureahh.com</div>
              <div className="flow-card"><span className="flow-card-ico">🔄</span> mijel.id</div>
              <div className="flow-card"><span className="flow-card-ico">🔄</span> jelantahgo.com</div>
              <div className="flow-card"><span className="flow-card-ico">🔄</span> <span data-id="true">Pengepul Lokal</span><span data-en="true">Local Collectors</span></div>
            </div>
          </div>
          <div className="flow-arrow reveal">
            <span className="flow-arrow-lbl"><span data-id="true">Kirim ke eksportir</span><span data-en="true">Sent to exporters</span></span>
          </div>
          <div className="flow-node reveal" style={{paddingLeft: 0}}>
            <div className="flow-node-hero">
              <div className="fnh-logo">Mustika Green</div>
              <div className="fnh-sub">PT Mustika Green Indonesia</div>
              <div className="fnh-badge">🌿 UCO Collector & Exporter</div>
              <div className="fnh-process">
                <span data-id="true">Sortasi · Filtrasi · Uji Kualitas<br />Dokumen Ekspor · ISCC</span>
                <span data-en="true">Sorting · Filtration · Quality Test<br />Export Docs · ISCC</span>
              </div>
              <div style={{fontSize:'.72rem',color:'var(--sun)',fontFamily:'"JetBrains Mono",monospace',marginBottom:'.8rem'}}>↓ <span data-id="true">Pasar Global</span><span data-en="true">Global Market</span> ↓</div>
              <div className="fnh-markets">
                <span className="fnh-flag" title="Eropa">🇪🇺</span>
                <span className="fnh-flag" title="Cina">🇨🇳</span>
                <span className="fnh-flag" title="Korea">🇰🇷</span>
                <span className="fnh-flag" title="Jepang">🇯🇵</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan">
        <div className="layanan-head">
          <span className="tag"><span data-id="true">// layanan kami</span><span data-en="true">// our services</span></span>
          <h2 className="s-title"><span data-id="true">Dua Jalur Bisnis<br />Utama Kami</span><span data-en="true">Our Two Main<br />Business Lines</span></h2>
          <p className="s-desc">
            <span data-id="true">Kami melayani penjualan domestik maupun ekspor internasional dengan standar kualitas terverifikasi dan dokumen lengkap.</span>
            <span data-en="true">We serve both domestic sales and international exports with verified quality standards and complete documentation.</span>
          </p>
        </div>
        <div className="layanan-grid">
          <div className="l-card reveal">
             <div className="l-card-icon">🏠</div>
             <div className="l-card-title"><span data-id="true">Penjualan Lokal</span><span data-en="true">Domestic Sales</span></div>
             <p className="l-card-desc"><span data-id="true">Minyak jelantah yang disortasi dan disaring sesuai standar kualitas, disalurkan ke pembeli lokal industri.</span><span data-en="true">Sorted and filtered UCO distributed to local industrial buyers.</span></p>
             <ul className="l-card-list">
               <li><span data-id="true">Kontrak & kesepakatan harga</span><span data-en="true">Contracts & pricing deals</span></li>
               <li><span data-id="true">Pengiriman terjadwal</span><span data-en="true">Scheduled delivery</span></li>
             </ul>
          </div>
          <div className="l-card reveal">
             <div className="l-card-icon">✈️</div>
             <div className="l-card-title"><span data-id="true">Ekspor Internasional</span><span data-en="true">International Export</span></div>
             <p className="l-card-desc"><span data-id="true">Ekspor UCO berkualitas tinggi ke mitra internasional dengan dokumen dan logistik ditangani penuh.</span><span data-en="true">High-quality UCO exports to international partners with fully managed logistics and docs.</span></p>
             <ul className="l-card-list">
               <li><span data-id="true">Invoice, Packing List, COO</span><span data-en="true">Invoice, Packing List, COO</span></li>
               <li><span data-id="true">ISCC & Sertifikasi</span><span data-en="true">ISCC & Certifications</span></li>
             </ul>
          </div>
          <div className="l-card reveal">
             <div className="l-card-icon">🔬</div>
             <div className="l-card-title"><span data-id="true">QC & Sortasi UCO</span><span data-en="true">UCO QC & Sorting</span></div>
             <p className="l-card-desc"><span data-id="true">Quality control menyeluruh memastikan setiap batch UCO memenuhi spesifikasi pembeli internasional.</span><span data-en="true">Thorough quality control ensures each batch meets international specifications.</span></p>
             <ul className="l-card-list">
               <li><span data-id="true">Uji FFA & Filtrasi</span><span data-en="true">FFA Testing & Filtration</span></li>
             </ul>
          </div>
          <div className="l-card reveal">
             <div className="l-card-icon">🤝</div>
             <div className="l-card-title"><span data-id="true">Kemitraan Pengepul</span><span data-en="true">Collector Partnership</span></div>
             <p className="l-card-desc"><span data-id="true">Kami bermitra dengan pengepul resmi di seluruh Jabodetabek untuk pasokan UCO konsisten.</span><span data-en="true">We partner with official collectors for consistent & high-quality UCO supply.</span></p>
          </div>
        </div>
      </section>

      {/* Proses */}
      <section id="proses">
        <div className="proses-header">
          <span className="tag"><span data-id="true">// alur kerja</span><span data-en="true">// workflow</span></span>
          <h2 className="s-title"><span data-id="true">Proses Sederhana,<br />Hasil Maksimal</span><span data-en="true">Simple Process,<br />Maximum Results</span></h2>
        </div>
        <div className="proses-steps">
          <div className="proses-step reveal">
            <div className="proses-num">01</div>
            <div className="proses-step-title"><span data-id="true">Pengiriman UCO</span><span data-en="true">UCO Delivery</span></div>
          </div>
          <div className="proses-step reveal">
            <div className="proses-num">02</div>
            <div className="proses-step-title"><span data-id="true">QC & Filtrasi</span><span data-en="true">QC & Filtration</span></div>
          </div>
          <div className="proses-step reveal">
            <div className="proses-num">03</div>
            <div className="proses-step-title"><span data-id="true">Sertifikasi & Dokumen</span><span data-en="true">Docs & Certs</span></div>
          </div>
          <div className="proses-step reveal">
            <div className="proses-num">04</div>
            <div className="proses-step-title"><span data-id="true">Pengiriman Ekspor</span><span data-en="true">Export Shipping</span></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="cta-glow"></div>
        <div className="cta-content">
          <span className="tag" style={{display:'block', marginBottom:'.8rem'}}>
            <span data-id="true">// bergabung bersama kami</span><span data-en="true">// join us</span>
          </span>
          <h2 className="cta-title">
            <span data-id="true">Siap Jadi Mitra<br /><em>Pengepul</em> Kami?</span>
            <span data-en="true">Ready to Become<br />Our <em>Partner</em>?</span>
          </h2>
          <div className="cta-btns">
            <a href="https://wa.me/6281259132223" className="btn-primary" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            <a href="mailto:mustikagreenindonesia@gmail.com" className="btn-outline">📧 Kirim Email</a>
          </div>
        </div>
      </section>
    </main>
  );
}
