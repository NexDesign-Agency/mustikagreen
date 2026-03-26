"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Optional: add useTranslations if you want to localize nav links later

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDrawer = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const toggleDrawer = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    document.body.style.overflow = nextState ? "hidden" : "";
  };

  return (
    <>
      <nav style={{ boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,.35)" : "none" }}>
        <Link href="/" className="nav-logo" onClick={closeDrawer}>
          <div className="nav-logo-mark">🌿</div>
          <div className="nav-logo-text">
            Mustika Green
            <small>Indonesia</small>
          </div>
        </Link>

        {/* Desktop */}
        <ul className="nav-links-desktop">
          <li><Link href="/#alur">Ekosistem</Link></li>
          <li><Link href="/#layanan">Layanan</Link></li>
          <li><Link href="/#keunggulan">Keunggulan</Link></li>
          <li><Link href="/#proses">Proses</Link></li>
          <li><Link href="/about">Profil</Link></li>
          <li><Link href="/#cta" className="nav-cta-link">Hubungi Kami</Link></li>
        </ul>

        {/* Mobile hamburger */}
        <button 
          className={`nav-burger ${isOpen ? 'open' : ''}`} 
          onClick={toggleDrawer}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="nav-drawer-links">
          <li><Link href="/#alur" className="drawer-link" onClick={closeDrawer}>Ekosistem</Link></li>
          <li><Link href="/#layanan" className="drawer-link" onClick={closeDrawer}>Layanan</Link></li>
          <li><Link href="/#keunggulan" className="drawer-link" onClick={closeDrawer}>Keunggulan</Link></li>
          <li><Link href="/#proses" className="drawer-link" onClick={closeDrawer}>Proses</Link></li>
          <li><Link href="/about" className="drawer-link" onClick={closeDrawer}>Profil</Link></li>
        </ul>
        <Link href="/#cta" className="nav-drawer-cta drawer-link" onClick={closeDrawer}>
          💬 Hubungi Kami
        </Link>
      </div>
    </>
  );
}
