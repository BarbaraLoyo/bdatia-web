export function Method() {
  const steps = [
    {
      number: 1,
      title: 'Relevamiento del problema y criterios',
      description: 'Entendemos tus necesidades específicas, identificamos los puntos de dolor y definimos criterios claros de éxito.',
    },
    {
      number: 2,
      title: 'Inventario de fuentes y definición de "dato confiable"',
      description: 'Mapeamos todas las fuentes de datos, evaluamos su calidad y establecemos reglas para identificar información confiable.',
    },
    {
      number: 3,
      title: 'Diseño de modelo e indicadores',
      description: 'Creamos el modelo de datos y definimos indicadores objetivos, medibles y relevantes para tu negocio.',
    },
    {
      number: 4,
      title: 'Implementación y validación con usuarios',
      description: 'Desarrollamos las soluciones y validamos su funcionamiento con los equipos que las usarán diariamente.',
    },
    {
      number: 5,
      title: 'Iteración, documentación y soporte',
      description: 'Ajustamos basado en feedback, documentamos procesos y proporcionamos soporte para adopción sostenible.',
    },
  ]

  return (
    <section id="metodologia" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
            Metodología
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Un proceso estructurado para transformar datos en decisiones confiables.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex items-start">
                {/* Step number */}
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
