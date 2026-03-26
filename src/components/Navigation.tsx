"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <li>
            <Link href="/" onClick={closeDrawer}>
              <span data-id="true">Beranda</span>
              <span data-en="true">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeDrawer}>
              <span data-id="true">Tentang</span>
              <span data-en="true">About Us</span>
            </Link>
          </li>
          <li>
            <Link href="/#cta" className="nav-cta-link" onClick={closeDrawer}>
              <span data-id="true">Hubungi Kami</span>
              <span data-en="true">Contact Us</span>
            </Link>
          </li>
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
          <li>
            <Link href="/" className="drawer-link" onClick={closeDrawer}>
              <span data-id="true">Beranda</span>
              <span data-en="true">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="drawer-link" onClick={closeDrawer}>
              <span data-id="true">Tentang</span>
              <span data-en="true">About Us</span>
            </Link>
          </li>
        </ul>
        <Link href="/#cta" className="nav-drawer-cta drawer-link" onClick={closeDrawer}>
          <span data-id="true">💬 Hubungi Kami</span>
          <span data-en="true">💬 Contact Us</span>
        </Link>
      </div>
    </>
  );
}
