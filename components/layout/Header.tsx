'use client';

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'


const navigation = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Metodología', href: '#metodologia' },
  { name: 'Casos', href: '#casos' },
  { name: 'Quién soy', href: '#quien-soy' },
  { name: 'Contacto', href: '#contacto' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    scrollToSection(href)
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-night/95 backdrop-blur-sm border-b border-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-text-light">
              BDatia
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-muted hover:text-text-light transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop: Language + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              onClick={() => handleNavClick('#contacto')}
              variant="primary"
            >
              Solicitar consulta
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-light hover:text-accent"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-muted/20">
            <div className="px-2 pt-2 pb-3 space-y-2">
              {/* Mobile: Language Switcher */}
              <div className="px-3 pt-2">
                <LanguageSwitcher />
              </div>

              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-muted hover:text-text-light hover:bg-muted/10 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}

              <div className="px-3 py-2">
                <Button
                  onClick={() => handleNavClick('#contacto')}
                  variant="primary"
                  className="w-full"
                >
                  Solicitar consulta
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
