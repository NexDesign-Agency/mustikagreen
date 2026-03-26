import { Link } from "@/i18n/routing";

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">PT Mustika Green Indonesia</div>
      <ul className="footer-links">
        <li><Link href="/#alur">Ekosistem</Link></li>
        <li><Link href="/#layanan">Layanan</Link></li>
        <li><Link href="/#keunggulan">Keunggulan</Link></li>
        <li><Link href="/#cta">Kontak</Link></li>
        <li><Link href="/about">Profil Kami</Link></li>
      </ul>
      <div className="footer-copy">© 2025 PT Mustika Green Indonesia. UCO Exporter · Cisoka, Tangerang</div>
    </footer>
  );
}
