import { Link } from "@/i18n/routing";

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">PT Mustika Green Indonesia</div>
      <ul className="footer-links">
        <li>
          <Link href="/about">
            <span data-id="true">Tentang Kami</span>
            <span data-en="true">About Us</span>
          </Link>
        </li>
        <li>
          <Link href="/layanan">
            <span data-id="true">Layanan</span>
            <span data-en="true">Services</span>
          </Link>
        </li>
        <li>
          <Link href="/kontak">
            <span data-id="true">Kontak</span>
            <span data-en="true">Contact</span>
          </Link>
        </li>
        <li>
          <Link href="/#alur">
            <span data-id="true">Ekosistem</span>
            <span data-en="true">Ecosystem</span>
          </Link>
        </li>
      </ul>
      <div className="footer-copy">© 2025 PT Mustika Green Indonesia. UCO Exporter · Cisoka, Tangerang</div>
    </footer>
  );
}
