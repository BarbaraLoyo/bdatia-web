import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
