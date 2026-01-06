"use client";

import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/utils";

export function About() {
  return (
    <section id="quien-soy" className="py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
            Quién soy
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-text-dark mb-4">
              Bárbara Loyo Olivo
            </h3>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
              Profesional en analítica de datos con experiencia en estadística
              aplicada y sistemas orientados a gestión. Especializada en diseño
              de indicadores, integridad y calidad del dato, automatización y
              reporting. Trabajo con equipos multidisciplinarios en entornos
              complejos, asegurando que los datos sean la base sólida para
              decisiones estratégicas y operativas.
            </p>
          </div>

          {/* Experiencia y conocimiento (centrado) */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-text-dark">
              Experiencia y conocimiento
            </h3>

            <ul className="mt-6 inline-block text-left space-y-2 text-muted">
              <li>-   SQL y modelado de datos relacional</li>
              <li>-   Dashboards ejecutivos (Power BI, Looker)</li>
              <li>-   Python para análisis de datos (pandas)</li>
              <li>-   Excel avanzado y automatización</li>
              <li>-   Calidad de datos y validaciones</li>
              <li>-   Diseño de métricas e indicadores</li>
              <li>-  Documentación técnica y procesos</li>
            </ul>
          </div>

          <div className="mt-12 flex items-center justify-center">
            <Button
              onClick={() => scrollToSection("#contacto")}
              variant="secondary"
              size="lg"
            >
              Pedime un diagnóstico
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

