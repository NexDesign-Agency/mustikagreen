'use client';
import { usePathname } from 'next/navigation';

export default function DownloadPdfButton() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'id';

  const filename = `compro-${locale}.pdf`;
  const label = locale === 'id'
    ? '⬇ Download Company Profile (PDF)'
    : '⬇ Download Company Profile (PDF)';

  return (
    <a
      href={`/${filename}`}
      download={filename}
      className="btn-primary print-hidden"
      style={{ marginTop: '1rem', width: 'auto', display: 'inline-flex' }}
    >
      {label}
    </a>
  );
}
