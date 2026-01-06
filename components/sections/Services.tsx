import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const services = [
  {
    title: 'Diagnóstico analítico y modelado de métricas',
    description: 'Evaluación completa de tus datos actuales, identificación de problemas y diseño de indicadores objetivos.',
    target: 'Para equipos que necesitan claridad en sus métricas y quieren evitar decisiones basadas en intuición.',
  },
  {
    title: 'Dashboards ejecutivos (Power BI / Looker / Web)',
    description: 'Creación de visualizaciones interactivas y dashboards personalizados para diferentes niveles de la organización.',
    target: 'Para líderes que requieren visibilidad en tiempo real y reportes automatizados.',
  },
  {
    title: 'Automatización (ETL liviano, validaciones, alertas)',
    description: 'Procesos automatizados para la extracción, transformación y carga de datos, con controles de calidad.',
    target: 'Para operaciones que pasan mucho tiempo en tareas manuales de datos.',
  },
  {
    title: 'Calidad de datos y auditoría lógica (reglas, controles)',
    description: 'Implementación de reglas de validación, controles de calidad y auditorías para asegurar integridad.',
    target: 'Para organizaciones que han sufrido problemas por datos inconsistentes o errores.',
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
            Servicios
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Soluciones especializadas en datos para mejorar la toma de decisiones en tu organización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-text-dark mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted">{service.description}</p>
                <div className="pt-4 border-t border-muted/20">
                  <p className="text-sm font-medium text-brand">{service.target}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
