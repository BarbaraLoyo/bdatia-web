"use client";

import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'

export function Hero() {
  return (
    <section className="bg-night text-text-light">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Datos confiables para decisiones estratégicas.
              </h1>
              <p className="text-lg text-muted max-w-lg">
                Diseñamos métricas claras, dashboards robustos y procesos de datos que sostienen decisiones reales en organizaciones complejas.
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-muted">Definición de indicadores sin ambigüedad</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-muted">Calidad y trazabilidad del dato</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-muted">Entrega rápida, iteración y soporte</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('#contacto')}
                variant="primary"
                size="lg"
              >
                Solicitar consulta
              </Button>
              <Button
                onClick={() => scrollToSection('#casos')}
                variant="secondary"
                size="lg"
              >
                Ver casos
              </Button>
            </div>
          </div>

   {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-night to-muted/20 rounded-lg p-8 flex items-center justify-center">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full text-accent/30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
      
                {/* Nodes */}
                <circle cx="100" cy="100" r="8" fill="currentColor" />
                <circle cx="300" cy="100" r="8" fill="currentColor" />
                <circle cx="200" cy="200" r="8" fill="currentColor" />
                <circle cx="100" cy="300" r="8" fill="currentColor" />
                <circle cx="300" cy="300" r="8" fill="currentColor" />

                {/* Lines */}
                <line x1="100" y1="100" x2="300" y2="100" stroke="currentColor" strokeWidth="2" />
                <line x1="100" y1="100" x2="200" y2="200" stroke="currentColor" strokeWidth="2" />
                <line x1="300" y1="100" x2="200" y2="200" stroke="currentColor" strokeWidth="2" />
                <line x1="200" y1="200" x2="100" y2="300" stroke="currentColor" strokeWidth="2" />
                <line x1="200" y1="200" x2="300" y2="300" stroke="currentColor" strokeWidth="2" />
                <line x1="100" y1="300" x2="300" y2="300" stroke="currentColor" strokeWidth="2" />

                {/* Central accent */}
                <circle cx="200" cy="200" r="12" fill="none" stroke="#C9A24D" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
