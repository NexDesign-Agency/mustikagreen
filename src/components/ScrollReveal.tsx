"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function initReveal() {
  const reveals = document.querySelectorAll<HTMLElement>('.reveal:not(.visible)');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.transitionDelay = '0ms';
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  reveals.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Langsung visible untuk elemen yang sudah di viewport (above the fold)
    const immediate = document.querySelectorAll<HTMLElement>('.reveal');
    immediate.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });

    // Beri jeda kecil supaya DOM fully rendered sebelum observe
    const timer = setTimeout(() => {
      const cleanup = initReveal();
      return cleanup;
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run setiap ganti halaman

  return null;
}
