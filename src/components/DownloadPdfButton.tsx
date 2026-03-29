'use client';
import React from 'react';

export default function DownloadPdfButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button onClick={handlePrint} className="btn-primary print-hidden" style={{ marginTop: '1rem', width: 'auto', display: 'inline-flex' }}>
      <span data-id="true">⬇ Download Company Profile (PDF)</span>
      <span data-en="true">⬇ Download Company Profile (PDF)</span>
    </button>
  );
}
