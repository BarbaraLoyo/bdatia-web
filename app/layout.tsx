import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BDatia – Data Analytics Consulting',
  description: 'Datos confiables para decisiones estratégicas. Dashboards confiables, indicadores bien definidos y automatización.',
  metadataBase: new URL('https://www.bdatia.com.ar'),
  canonical: 'https://www.bdatia.com.ar',
  openGraph: {
    title: 'BDatia – Data Analytics Consulting',
    description: 'Datos confiables para decisiones estratégicas.',
    url: 'https://www.bdatia.com.ar',
    siteName: 'BDatia',
    images: [
      {
        url: 'https://www.bdatia.com.ar/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BDatia – Data Analytics Consulting',
    description: 'Datos confiables para decisiones estratégicas.',
    images: ['https://www.bdatia.com.ar/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
