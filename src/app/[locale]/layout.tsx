import { Syne, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LanguageToggle from '@/components/LanguageToggle';
import ScrollReveal from '@/components/ScrollReveal';
import '../globals.css';

const syne = Syne({ 
  subsets: ['latin'], 
  variable: '--font-syne' 
});

const cormorant = Cormorant_Garamond({ 
  weight: ['400', '600', '700'], 
  style: ['normal', 'italic'], 
  subsets: ['latin'], 
  variable: '--font-cormorant' 
});

const jetbrains = JetBrains_Mono({ 
  weight: ['400', '700'], 
  subsets: ['latin'], 
  variable: '--font-jetbrains' 
});

export const metadata = {
  title: 'PT Mustika Green Indonesia',
  description: 'Mustika Green Indonesia Export Used Cooking Oil'
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${syne.variable} ${cormorant.variable} ${jetbrains.variable}`}>
      <body className={`lang-${locale}`}>
        <NextIntlClientProvider messages={messages}>
          <ScrollReveal />
          <Navigation />
          <LanguageToggle />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
