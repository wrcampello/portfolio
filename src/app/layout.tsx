import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wilson Ramires - Desenvolvedor Web | Desenvolvedor Site | Desenvolvedor",
  description: "Desenvolvedor Web profissional com mais de 22 anos de experiência. Especializado em desenvolvimento de sites, PHP e WordPress. Contrate um desenvolvedor experiente para criar o site da sua empresa.",
  keywords: [
    "Desenvolvedor",
    "Desenvolvedor Web",
    "Desenvolvedor Site",
    "Desenvolvedor PHP",
    "Desenvolvedor WordPress",
    "Criar Site",
    "Desenvolvimento Web",
    "Programador Web",
    "Desenvolvedor Freelancer",
    "Contratar Desenvolvedor",
    "Desenvolvedor para Empresa",
    "Criação de Sites",
    "Desenvolvimento de Sites",
  ],
  authors: [{ name: "Wilson Ramires" }],
  creator: "Wilson Ramires",
  publisher: "Wilson Ramires",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://wilcampellodev.vercel.app',
    title: 'Wilson Ramires - Desenvolvedor Web | Desenvolvedor Site',
    description: 'Desenvolvedor Web profissional com mais de 22 anos de experiência. Especializado em desenvolvimento de sites, PHP e WordPress.',
    siteName: 'Wilson Ramires - Desenvolvedor Web',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wilson Ramires - Desenvolvedor Web | Desenvolvedor Site',
    description: 'Desenvolvedor Web profissional com mais de 22 anos de experiência. Especializado em desenvolvimento de sites.',
  },
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    google: 'kzaeMS85Efz94aeKjVnqtT0xBPk2K3buiXqcPUUGe88',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Wilson Ramires",
    "jobTitle": "Desenvolvedor Web",
    "description": "Desenvolvedor Web profissional com mais de 22 anos de experiência em desenvolvimento de sites, PHP e WordPress",
    "url": "https://wilcampellodev.vercel.app",
    "sameAs": [],
    "knowsAbout": [
      "Desenvolvimento Web",
      "PHP",
      "WordPress",
      "Criação de Sites",
      "Desenvolvimento de Sites para Empresas"
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "serviceType": "Desenvolvimento Web",
        "description": "Serviços de desenvolvimento de sites e aplicações web",
        "provider": {
          "@type": "Person",
          "name": "Wilson Ramires"
        },
        "areaServed": "BR",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://wilcampellodev.vercel.app"
        }
      }
    }
  };

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
