"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="lang-toggle">
      <button 
        className={`lang-btn ${locale === 'id' ? 'active' : ''}`} 
        onClick={() => switchLanguage('id')}
      >
        ID
      </button>
      <button 
        className={`lang-btn ${locale === 'en' ? 'active' : ''}`} 
        onClick={() => switchLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}
