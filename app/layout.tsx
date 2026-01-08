import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BDatia – Data Analytics Consulting',
  description: 'Datos confiables para decisiones estratégicas.',
  metadataBase: new URL('https://www.bdatia.com.ar'),
  alternates: {
    canonical: 'https://www.bdatia.com.ar',
  },
  openGraph: {
    title: 'BDatia – Data Analytics Consulting',
    description: 'Datos confiables para decisiones estratégicas.',
    url: 'https://www.bdatia.com.ar',
    siteName: 'BDatia',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}

        {/* Google Translate */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                {
                  pageLanguage: 'es',
                  includedLanguages: 'es,en,pt,zh-CN',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                },
                'google_translate_element'
              );
            }
          `}
        </Script>
      </body>
    </html>
  )
}
