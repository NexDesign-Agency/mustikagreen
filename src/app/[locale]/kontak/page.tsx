'use client';

import { useState, useEffect } from 'react';

export default function KontakPage() {
  const [submitted, setSubmitted] = useState(false);
  const [todayCard, setTodayCard] = useState(-1);

  useEffect(() => {
    // Highlight hari ini
    setTodayCard(new Date().getDay());

    // Reveal
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* ── HERO ── */}
      <div className="pg-hero">
        <div className="pg-hero-glow" />
        <div className="pg-hero-tag">
          <span data-id="true">Kontak</span>
          <span data-en="true">Contact</span>
        </div>
        <div className="kt-hero-layout">
          <div>
            <h1 className="pg-hero-title">
              <span data-id="true">Mari <em>Berkolaborasi</em><br />Bersama Kami</span>
              <span data-en="true">Let's <em>Collaborate</em><br />With Us</span>
            </h1>
            <p className="pg-hero-desc">
              <span data-id="true">Apakah Anda pengepul jelantah, pembeli internasional, atau ingin tahu lebih lanjut tentang Mustika Green — kami siap merespons dengan cepat.</span>
              <span data-en="true">Whether you are a used cooking oil collector, international buyer, or want to learn more about Mustika Green — we are ready to respond quickly.</span>
            </p>
          </div>
          <div className="kt-pills reveal">
            <a className="kt-pill" href="https://wa.me/6281259132223" target="_blank" rel="noopener noreferrer">
              <div className="kt-pill-icon kt-pill-wa">📱</div>
              <div>
                <div className="kt-pill-label">WhatsApp</div>
                <div className="kt-pill-value">+62 812-5913-2223</div>
              </div>
              <span className="kt-pill-arrow">→</span>
            </a>
            <a className="kt-pill" href="mailto:mustikagreenindonesia@gmail.com">
              <div className="kt-pill-icon kt-pill-em">✉️</div>
              <div>
                <div className="kt-pill-label">Email</div>
                <div className="kt-pill-value">mustikagreenindonesia@gmail.com</div>
              </div>
              <span className="kt-pill-arrow">→</span>
            </a>
            <div className="kt-pill">
              <div className="kt-pill-icon kt-pill-loc">📍</div>
              <div>
                <div className="kt-pill-label"><span data-id="true">Lokasi</span><span data-en="true">Location</span></div>
                <div className="kt-pill-value">RT.05/RW.02, Cisoka, Kab. Tangerang</div>
              </div>
            </div>
            <div className="kt-pill">
              <div className="kt-pill-icon kt-pill-ph">🕐</div>
              <div>
                <div className="kt-pill-label"><span data-id="true">Jam Operasional</span><span data-en="true">Working Hours</span></div>
                <div className="kt-pill-value"><span data-id="true">Senin–Sabtu, 08.00–17.00 WIB</span><span data-en="true">Mon–Sat, 08:00–17:00 WIB</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider" />

      {/* ── FORM SECTION ── */}
      <section className="kt-form-section">
        <div className="kt-form-left reveal">
          <span className="tag">
            <span data-id="true">// Kirim Pesan</span>
            <span data-en="true">// Send Message</span>
          </span>
          <h2 className="s-title">
            <span data-id="true">Sampaikan<br /><em style={{ color: 'var(--gold)' }}>Kebutuhan Anda</em></span>
            <span data-en="true">Tell Us<br /><em style={{ color: 'var(--gold)' }}>Your Needs</em></span>
          </h2>
          <p className="kt-form-note">
            <span data-id="true">Isi formulir dan tim kami akan menghubungi Anda dalam 1×24 jam kerja. Untuk respons lebih cepat, gunakan WhatsApp kami.</span>
            <span data-en="true">Fill in the form and our team will contact you within 1×24 business hours. For a faster response, use our WhatsApp.</span>
          </p>
          <div className="kt-chips">
            <div className="kt-chip"><div className="kt-chip-dot" /><span data-id="true">Ingin jadi pengepul mitra</span><span data-en="true">Want to be a collector partner</span></div>
            <div className="kt-chip"><div className="kt-chip-dot" /><span data-id="true">Pembelian UCO untuk ekspor</span><span data-en="true">UCO purchase for export</span></div>
            <div className="kt-chip"><div className="kt-chip-dot" /><span data-id="true">Kerja sama & kemitraan bisnis</span><span data-en="true">Business cooperation & partnership</span></div>
            <div className="kt-chip"><div className="kt-chip-dot" /><span data-id="true">Pertanyaan umum lainnya</span><span data-en="true">Other general inquiries</span></div>
          </div>
        </div>

        <div className="kt-form-right reveal">
          <form className="kt-form" onSubmit={handleSubmit}>
            <div className="kt-form-row">
              <div className="kt-field">
                <label><span data-id="true">Nama Lengkap *</span><span data-en="true">Full Name *</span></label>
                <input type="text" placeholder="Nama Anda" required />
              </div>
              <div className="kt-field">
                <label><span data-id="true">Perusahaan / Usaha</span><span data-en="true">Company / Business</span></label>
                <input type="text" placeholder="Nama perusahaan (opsional)" />
              </div>
            </div>
            <div className="kt-form-row">
              <div className="kt-field">
                <label>Email *</label>
                <input type="email" placeholder="email@anda.com" required />
              </div>
              <div className="kt-field">
                <label><span data-id="true">No. WhatsApp *</span><span data-en="true">WhatsApp No. *</span></label>
                <input type="tel" placeholder="+62 8xx-xxxx-xxxx" required />
              </div>
            </div>
            <div className="kt-field">
              <label><span data-id="true">Topik Pesan</span><span data-en="true">Message Topic</span></label>
              <select>
                <option value="" disabled>Pilih topik...</option>
                <option>Kemitraan Pengepul</option>
                <option>Ekspor Internasional / Pembelian UCO</option>
                <option>Penjualan Lokal</option>
                <option>QC & Sertifikasi</option>
                <option>Investasi & Kerjasama</option>
                <option>Lainnya</option>
              </select>
            </div>
            <div className="kt-field">
              <label><span data-id="true">Lokasi / Kota</span><span data-en="true">Location / City</span></label>
              <input type="text" placeholder="Kota atau wilayah Anda" />
            </div>
            <div className="kt-field">
              <label><span data-id="true">Anda adalah</span><span data-en="true">You are</span></label>
              <div className="kt-radio-group">
                {[
                  { id: 'r1', val: 'pengepul', id_label: 'Pengepul', en_label: 'Collector' },
                  { id: 'r2', val: 'pembeli', id_label: 'Pembeli / Importer', en_label: 'Buyer / Importer' },
                  { id: 'r3', val: 'industri', id_label: 'Industri Lokal', en_label: 'Local Industry' },
                  { id: 'r4', val: 'lainnya', id_label: 'Lainnya', en_label: 'Other' },
                ].map((opt) => (
                  <div key={opt.id} className="kt-radio-opt">
                    <input type="radio" name="role" id={opt.id} value={opt.val} defaultChecked={opt.id === 'r1'} />
                    <label htmlFor={opt.id}>
                      <span data-id="true">{opt.id_label}</span>
                      <span data-en="true">{opt.en_label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="kt-field">
              <label><span data-id="true">Pesan *</span><span data-en="true">Message *</span></label>
              <textarea placeholder="Ceritakan kebutuhan atau pertanyaan Anda secara singkat..." required rows={5} />
            </div>
            {submitted && (
              <div className="kt-success">
                ✅ &nbsp;<span data-id="true">Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.</span><span data-en="true">Your message has been sent! We will contact you shortly.</span>
              </div>
            )}
            <div className="kt-submit-row">
              <button type="submit" className="btn-primary" disabled={submitted}>
                <span data-id="true">{submitted ? 'Terkirim ✓' : 'Kirim Pesan →'}</span>
                <span data-en="true">{submitted ? 'Sent ✓' : 'Send Message →'}</span>
              </button>
              <span className="kt-submit-note">
                <span data-id="true">Atau hubungi via WhatsApp untuk respons instan</span>
                <span data-en="true">Or contact via WhatsApp for instant response</span>
              </span>
            </div>
          </form>
        </div>
      </section>

      <div className="divider" />

      {/* ── LOKASI ── */}
      <section className="kt-location-section">
        <span className="tag">
          <span data-id="true">// Lokasi Kami</span>
          <span data-en="true">// Our Location</span>
        </span>
        <h2 className="s-title">
          <span data-id="true">Temukan <em style={{ color: 'var(--gold)' }}>Kami</em></span>
          <span data-en="true">Find <em style={{ color: 'var(--gold)' }}>Us</em></span>
        </h2>
        <div className="kt-location-grid reveal">
          <div className="kt-map-card">
            <span className="kt-map-pin">📍</span>
            <div className="kt-map-title">RT.05/RW.02, Cisoka</div>
            <div className="kt-map-sub">Kab. Tangerang, Banten 15730</div>
            <a href="https://maps.app.goo.gl/9GpRunXs5DXH7EVg9" target="_blank" rel="noopener noreferrer" className="kt-map-link">
              <span data-id="true">Buka di Google Maps →</span>
              <span data-en="true">Open in Google Maps →</span>
            </a>
          </div>
          <div className="kt-loc-details">
            {[
              { icon: '🏭', lbl_id: 'Fasilitas Utama', lbl_en: 'Main Facility', val_id: 'Pusat pengumpulan, QC, filtrasi, dan penyimpanan UCO', val_en: 'UCO collection, QC, filtration, and storage center' },
              { icon: '📍', lbl_id: 'Alamat Lengkap', lbl_en: 'Full Address', val_id: 'PCPH+FVJ, RT.05/RW.02, Cisoka, Kab. Tangerang, Banten 15730', val_en: 'PCPH+FVJ, RT.05/RW.02, Cisoka, Tangerang, Banten 15730' },
              { icon: '🚗', lbl_id: 'Akses', lbl_en: 'Access', val_id: '±40 menit dari Jakarta Barat via Tol Tangerang–Merak', val_en: '±40 minutes from West Jakarta via Tangerang–Merak Toll Road' },
              { icon: '🌐', lbl_id: 'Cakupan Operasional', lbl_en: 'Operational Coverage', val_id: 'Jabodetabek — pengumpulan aktif di seluruh wilayah', val_en: 'Greater Jakarta — active collection across the entire area' },
            ].map((item, i) => (
              <div key={i} className="kt-loc-item">
                <div className="kt-loc-icon">{item.icon}</div>
                <div>
                  <div className="kt-loc-label"><span data-id="true">{item.lbl_id}</span><span data-en="true">{item.lbl_en}</span></div>
                  <div className="kt-loc-value"><span data-id="true">{item.val_id}</span><span data-en="true">{item.val_en}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── JAM OPERASIONAL ── */}
      <section className="kt-hours-section">
        <span className="tag">
          <span data-id="true">// Jadwal</span>
          <span data-en="true">// Schedule</span>
        </span>
        <h2 className="s-title">
          <span data-id="true">Jam Operasional</span>
          <span data-en="true">Working Hours</span>
        </h2>
        <div className="kt-hours-grid reveal">
          <div className={`kt-hours-card ${[1,2,3,4,5].includes(todayCard) ? 'kt-hours-active' : ''}`}>
            <div className="kt-hours-day"><span data-id="true">Senin – Jumat</span><span data-en="true">Monday – Friday</span></div>
            <div className="kt-hours-time">08.00 – 17.00</div>
            <span className="kt-hours-badge open"><span data-id="true">Buka</span><span data-en="true">Open</span></span>
          </div>
          <div className={`kt-hours-card ${todayCard === 6 ? 'kt-hours-active' : ''}`}>
            <div className="kt-hours-day"><span data-id="true">Sabtu</span><span data-en="true">Saturday</span></div>
            <div className="kt-hours-time">08.00 – 14.00</div>
            <span className="kt-hours-badge open"><span data-id="true">Buka</span><span data-en="true">Open</span></span>
          </div>
          <div className={`kt-hours-card ${todayCard === 0 ? 'kt-hours-active' : ''}`}>
            <div className="kt-hours-day"><span data-id="true">Minggu</span><span data-en="true">Sunday</span></div>
            <div className="kt-hours-time"><span data-id="true">Tutup</span><span data-en="true">Closed</span></div>
            <span className="kt-hours-badge closed"><span data-id="true">Libur</span><span data-en="true">Holiday</span></span>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <div className="kt-cta-strip">
        <div>
          <h3 className="kt-cta-title">
            <span data-id="true">Lebih Cepat via <em>WhatsApp?</em></span>
            <span data-en="true">Faster via <em>WhatsApp?</em></span>
          </h3>
          <p className="kt-cta-sub">
            <span data-id="true">Tim kami aktif merespons pesan di jam kerja. Chat langsung sekarang.</span>
            <span data-en="true">Our team actively responds to messages during working hours. Chat directly now.</span>
          </p>
        </div>
        <div className="kt-cta-btns">
          <a href="https://wa.me/6281259132223" target="_blank" rel="noopener noreferrer" className="kt-btn-wa">
            📱 <span data-id="true">Chat WhatsApp</span><span data-en="true">Chat WhatsApp</span>
          </a>
          <a href="mailto:mustikagreenindonesia@gmail.com" className="btn-outline">
            ✉️ <span data-id="true">Kirim Email</span><span data-en="true">Send Email</span>
          </a>
        </div>
      </div>
    </main>
  );
}
