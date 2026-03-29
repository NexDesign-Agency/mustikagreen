import DownloadPdfButton from '@/components/DownloadPdfButton';

export default function AboutPage() {
  return (
    <main>
      <div className="cp-cover">
        <div className="cover-blob cover-blob-1"></div>
        <div className="cover-blob cover-blob-2"></div>
        <div className="cover-rings">
          <div className="cover-ring"></div>
          <div className="cover-ring"></div>
          <div className="cover-ring"></div>
        </div>

        <div className="cover-eyebrow">
          <span data-id="true">Company Profile · PT Mustika Green Indonesia · 2025</span>
          <span data-en="true">Company Profile · PT Mustika Green Indonesia · 2025</span>
        </div>

        <h1 className="cover-title">
          <span data-id="true">Eksportir UCO<br />Terpercaya<br /><em>Indonesia</em></span>
          <span data-en="true">Indonesia's Trusted<br />UCO<br /><em>Exporter</em></span>
        </h1>

        <p className="cover-tagline">
          <span data-id="true">Mengubah minyak jelantah menjadi bahan bakar masa depan — menghubungkan pengepul lokal Indonesia ke pasar biodiesel internasional.</span>
          <span data-en="true">Transforming used cooking oil into tomorrow's fuel — connecting Indonesian local collectors to the global biodiesel market.</span>
        </p>

        <div className="print-hidden">
          <DownloadPdfButton />
        </div>

        <div className="cover-meta">
          <div className="cover-meta-item">
            <div className="cover-meta-label"><span data-id="true">Didirikan</span><span data-en="true">Founded</span></div>
            <div className="cover-meta-val">2023</div>
          </div>
          <div className="cover-meta-item">
            <div className="cover-meta-label"><span data-id="true">Domisili</span><span data-en="true">Location</span></div>
            <div className="cover-meta-val">Cisoka, Tangerang</div>
          </div>
          <div className="cover-meta-item">
            <div className="cover-meta-label"><span data-id="true">Sertifikasi</span><span data-en="true">Certification</span></div>
            <div className="cover-meta-val">ISCC Certified</div>
          </div>
          <div className="cover-meta-item">
            <div className="cover-meta-label"><span data-id="true">Pasar</span><span data-en="true">Markets</span></div>
            <div className="cover-meta-val">🇪🇺 🇨🇳 🇰🇷 🇯🇵</div>
          </div>
        </div>
      </div>

      <div className="cp-section about-section">
        <span className="tag">
          <span data-id="true">// Tentang Kami</span>
          <span data-en="true">// About Us</span>
        </span>

        <h2 className="s-title reveal">
          <span data-id="true">Siapa Kami</span>
          <span data-en="true">Who We Are</span>
        </h2>

        <div className="about-body reveal">
          <span data-id="true">
            <strong>PT Mustika Green Indonesia</strong> adalah perusahaan eksportir minyak jelantah (Used Cooking Oil / UCO) yang berpusat di Cisoka, Kabupaten Tangerang, Banten. Berdiri sejak 2023, kami hadir untuk menjawab peluang besar dari meningkatnya permintaan global terhadap bahan baku biodiesel dan renewable fuel berbasis limbah minyak nabati.
          </span>
          <span data-en="true">
            <strong>PT Mustika Green Indonesia</strong> is a used cooking oil (UCO) exporter headquartered in Cisoka, Tangerang Regency, Banten. Established in 2023, we were founded to address the growing global demand for biodiesel and renewable fuel feedstock derived from waste vegetable oil.
          </span>
        </div>

        <div className="about-pull reveal">
          <p>
            <span data-id="true">"Kami bukan sekadar eksportir — kami adalah jembatan antara ekonomi sirkular Indonesia dan pasar energi hijau dunia."</span>
            <span data-en="true">"We are more than just an exporter — we are the bridge between Indonesia's circular economy and the world's green energy market."</span>
          </p>
          <small>
            <span data-id="true">— Filosofi Perusahaan</span>
            <span data-en="true">— Company Philosophy</span>
          </small>
        </div>

        <div className="about-body reveal">
          <span data-id="true">
            Kami beroperasi di puncak rantai pasok UCO Indonesia — menerima pasokan minyak jelantah dari jaringan pengepul terverifikasi di seluruh Jabodetabek, memproses dan menyortir sesuai standar kualitas internasional, lalu mengekspornya ke pembeli di Eropa, China, Korea Selatan, dan Jepang. Setiap liter jelantah yang kami tangani adalah kontribusi nyata terhadap pengurangan emisi karbon dan pertumbuhan ekonomi sirkular Indonesia.
          </span>
          <span data-en="true">
            We operate at the top of Indonesia's UCO supply chain — sourcing used cooking oil from verified collector networks across Greater Jakarta, processing and sorting to international quality standards, then exporting to buyers in Europe, China, South Korea, and Japan. Every liter of cooking oil we handle is a real contribution to reducing carbon emissions and growing Indonesia's circular economy.
          </span>
        </div>
      </div>

      <div className="divider"></div>

      {/* Visi Misi */}
      <div className="cp-section vm-section">
        <span className="tag">
          <span data-id="true">// Visi & Misi</span>
          <span data-en="true">// Vision & Mission</span>
        </span>
        <h2 className="s-title reveal">
          <span data-id="true">Arah & Tujuan</span>
          <span data-en="true">Direction & Purpose</span>
        </h2>

        <div className="vm-grid">
          <div className="vm-card vm-card-visi reveal">
            <span className="vm-card-icon">🔭</span>
            <div className="vm-card-label">
              <span data-id="true">Visi</span><span data-en="true">Vision</span>
            </div>
            <div className="vm-card-text">
              <span data-id="true">Menjadi eksportir UCO terkemuka di Asia Tenggara yang mendorong transisi energi bersih melalui pengelolaan limbah minyak yang bertanggung jawab dan berkelanjutan.</span>
              <span data-en="true">To become the leading UCO exporter in Southeast Asia, driving the clean energy transition through responsible and sustainable cooking oil waste management.</span>
            </div>
          </div>

          <div className="vm-card vm-card-misi reveal">
            <span className="vm-card-icon">🎯</span>
            <div className="vm-card-label">
              <span data-id="true">Misi</span><span data-en="true">Mission</span>
            </div>
            <ul className="misi-list">
              <li><span data-id="true">Membangun ekosistem pengumpulan UCO yang terstruktur dan terverifikasi di Indonesia</span><span data-en="true">Build a structured and verified UCO collection ecosystem across Indonesia</span></li>
              <li><span data-id="true">Mengekspor UCO berkualitas tinggi sesuai standar ISCC dan regulasi internasional</span><span data-en="true">Export high-quality UCO compliant with ISCC standards and international regulations</span></li>
              <li><span data-id="true">Memberdayakan pengepul lokal dengan harga adil dan pembayaran transparan</span><span data-en="true">Empower local collectors with fair pricing and transparent payment</span></li>
              <li><span data-id="true">Berkontribusi pada target pengurangan emisi karbon Indonesia</span><span data-en="true">Contribute to Indonesia's carbon emission reduction targets</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="divider print-hidden"></div>

      {/* Milestones */}
      <div className="cp-section milestone-section">
        <span className="tag">
          <span data-id="true">// Perjalanan Kami</span>
          <span data-en="true">// Our Milestones</span>
        </span>
        <h2 className="s-title reveal">
          <span data-id="true">Sejarah & Pencapaian</span>
          <span data-en="true">History & Achievements</span>
        </h2>
        <div className="milestones-grid reveal" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="milestone-item" style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--gold)', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--sun)' }}></div>
            <h4 style={{ color: 'var(--forest)', fontSize: '1.1rem', marginBottom: '0.4rem' }}><span data-id="true">2023 - Pendirian</span><span data-en="true">2023 - Foundation</span></h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--mist)' }}>
              <span data-id="true">PT Mustika Green Indonesia didirikan di Cisoka, Tangerang. Mulai membangun fasilitas pengumpulan dan jaringan pengepul lokal tahap awal.</span>
              <span data-en="true">PT Mustika Green Indonesia was founded in Cisoka, Tangerang. Started building collection facilities and early-stage local collector networks.</span>
            </p>
          </div>
          <div className="milestone-item" style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--gold)', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--sun)' }}></div>
            <h4 style={{ color: 'var(--forest)', fontSize: '1.1rem', marginBottom: '0.4rem' }}><span data-id="true">2024 - Ekspansi Jaringan</span><span data-en="true">2024 - Network Expansion</span></h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--mist)' }}>
              <span data-id="true">Mencapai kapasitas pengumpulan 500 ton per bulan. Memperluas titik kumpul (collection point) operasional ke seluruh area Jabodetabek.</span>
              <span data-en="true">Reached a collection capacity of 500 tons per month. Expanded operational collection points across the Greater Jakarta area.</span>
            </p>
          </div>
          <div className="milestone-item" style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--gold)', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--sun)' }}></div>
            <h4 style={{ color: 'var(--forest)', fontSize: '1.1rem', marginBottom: '0.4rem' }}><span data-id="true">2025 - Sertifikasi & Ekspor</span><span data-en="true">2025 - Certification & Export</span></h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--mist)' }}>
              <span data-id="true">Memperoleh Sertifikasi ISCC dan secara resmi memulai ekspor UCO langsung ke pasar Eropa dan Asia Timur (Tiongkok, Jepang, Korea).</span>
              <span data-en="true">Obtained ISCC Certification and officially commenced direct UCO exports to European and East Asian markets (China, Japan, Korea).</span>
            </p>
          </div>
        </div>
      </div>

      <div className="divider print-hidden"></div>

      {/* Legalitas */}
      <div className="cp-section legal-section">
        <span className="tag">
          <span data-id="true">// Legalitas</span>
          <span data-en="true">// Legal</span>
        </span>
        <h2 className="s-title reveal">
          <span data-id="true">Identitas & Legalitas</span>
          <span data-en="true">Identity & Legality</span>
        </h2>
        <p className="s-desc reveal">
          <span data-id="true">Perusahaan kami terdaftar resmi dan beroperasi sesuai peraturan yang berlaku di Indonesia.</span>
          <span data-en="true">Our company is officially registered and operates in full compliance with Indonesian regulations.</span>
        </p>

        <div className="legal-grid">
          <div className="legal-item reveal">
            <div className="legal-icon">🏢</div>
            <div>
              <div className="legal-label"><span data-id="true">Nama Perusahaan</span><span data-en="true">Company Name</span></div>
              <div className="legal-val">PT Mustika Green Indonesia</div>
            </div>
          </div>
          <div className="legal-item reveal">
            <div className="legal-icon">📋</div>
            <div>
              <div className="legal-label">NIB</div>
              <div className="legal-val">1204230006497</div>
            </div>
          </div>
          <div className="legal-item reveal">
            <div className="legal-icon">📄</div>
            <div>
              <div className="legal-label">NPWP</div>
              <div className="legal-val">40.584.108.3-451.000</div>
            </div>
          </div>
          <div className="legal-item reveal">
            <div className="legal-icon">📍</div>
            <div>
              <div className="legal-label"><span data-id="true">Alamat</span><span data-en="true">Address</span></div>
              <div className="legal-val">Desa Cisoka, Kec. Cisoka, Kab. Tangerang, Banten</div>
            </div>
          </div>
          <div className="legal-item reveal">
            <div className="legal-icon">📅</div>
            <div>
              <div className="legal-label"><span data-id="true">Tahun Berdiri</span><span data-en="true">Founded</span></div>
              <div className="legal-val">2023</div>
            </div>
          </div>
        </div>
      </div>

      {/* Skipping Team for brevity, going to Services & Stats */}
      <div className="cp-section services-section">
        <span className="tag">
          <span data-id="true">// Layanan Kami</span>
          <span data-en="true">// Our Services</span>
        </span>
        <h2 className="s-title reveal">
          <span data-id="true">Apa Yang Kami Tawarkan</span>
          <span data-en="true">What We Offer</span>
        </h2>

        <div className="services-grid">
          <div className="svc-card reveal">
            <span className="svc-icon">🏠</span>
            <div className="svc-title"><span data-id="true">Penjualan Lokal</span><span data-en="true">Domestic Sales</span></div>
            <p className="svc-desc"><span data-id="true">UCO tersortasi untuk industri lokal dengan kontrak terstruktur.</span><span data-en="true">Sorted UCO for local industry with structured contracts.</span></p>
          </div>
          <div className="svc-card reveal">
            <span className="svc-icon">✈️</span>
            <div className="svc-title"><span data-id="true">Ekspor Internasional</span><span data-en="true">International Export</span></div>
            <p className="svc-desc"><span data-id="true">Ekspor UCO ke pasar Eropa & Asia dengan dokumen penuh.</span><span data-en="true">UCO export to European & Asian markets with full documentation.</span></p>
          </div>
          <div className="svc-card reveal">
            <span className="svc-icon">🔬</span>
            <div className="svc-title"><span data-id="true">QC & Sortasi</span><span data-en="true">QC & Sorting</span></div>
            <p className="svc-desc"><span data-id="true">Uji kualitas FFA, moisture, dan filtrasi multi-tahap.</span><span data-en="true">FFA & moisture quality testing, multi-stage filtration.</span></p>
          </div>
          <div className="svc-card reveal">
            <span className="svc-icon">🤝</span>
            <div className="svc-title"><span data-id="true">Kemitraan Pengepul</span><span data-en="true">Collector Partnership</span></div>
            <p className="svc-desc"><span data-id="true">Program mitra pengepul dengan harga kompetitif & pembayaran cepat.</span><span data-en="true">Collector partner program with competitive pricing & fast payment.</span></p>
          </div>
        </div>
      </div>

      <div className="stats-section cp-section">
        <span className="tag">
          <span data-id="true">// Angka Kami</span>
          <span data-en="true">// Our Numbers</span>
        </span>
        <h2 className="s-title reveal" style={{color: 'var(--white)'}}>
          <span data-id="true">Dalam Angka</span>
          <span data-en="true">By the Numbers</span>
        </h2>

        <div className="stats-grid">
          <div className="stat-box reveal">
            <div className="stat-val">4+</div>
            <div className="stat-lbl"><span data-id="true">Pasar Ekspor</span><span data-en="true">Export Markets</span></div>
          </div>
          <div className="stat-box reveal">
            <div className="stat-val">ISCC</div>
            <div className="stat-lbl"><span data-id="true">Bersertifikasi</span><span data-en="true">Certified</span></div>
          </div>
          <div className="stat-box reveal">
            <div className="stat-val">B2B</div>
            <div className="stat-lbl"><span data-id="true">Ekpsor Langsung</span><span data-en="true">Direct Export</span></div>
          </div>
          <div className="stat-box reveal">
            <div className="stat-val">100%</div>
            <div className="stat-lbl"><span data-id="true">Berbasis Limbah</span><span data-en="true">Waste-Based</span></div>
          </div>
        </div>
      </div>

    </main>
  );
}
