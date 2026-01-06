"use client";

import Link from 'next/link'
import { scrollToSection } from '@/lib/utils'

const footerLinks = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Metodología', href: '#metodologia' },
  { name: 'Casos', href: '#casos' },
  { name: 'Quién soy', href: '#quien-soy' },
  { name: 'Contacto', href: '#contacto' },
]

export function Footer() {
  return (
    <footer className="bg-night text-text-light border-t border-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-xl font-bold">BDatia</div>
            <p className="text-muted text-sm max-w-xs">
              Datos confiables para decisiones estratégicas.
              Especialistas en analítica de datos y automatización.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Navegación</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted hover:text-text-light transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contacto</h3>
            <div className="space-y-2 text-sm">
              <p className="text-muted">
                Email: <a href="mailto:info@bdatia.com.ar" className="hover:text-accent transition-colors">info@bdatia.com.ar</a>
              </p>
              <p className="text-muted">
                <a
                  href="https://www.linkedin.com/in/barbara-loyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-muted/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted text-sm">
              © 2024 BDatia. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
