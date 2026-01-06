import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const problems = [
  {
    symptom: 'Indicadores que confunden más de lo que ayudan',
    solution: 'Definimos métricas claras y objetivas, con reglas explícitas para evitar interpretaciones subjetivas.',
  },
  {
    symptom: 'Datos dispersos: Excel, sistemas y "versiones de la verdad"',
    solution: 'Centralizamos fuentes y creamos una sola versión confiable del dato, con trazabilidad completa.',
  },
  {
    symptom: 'Reportes lentos, manuales y frágiles',
    solution: 'Automatizamos la generación de reportes y dashboards, reduciendo tiempos y errores humanos.',
  },
  {
    symptom: 'Decisiones sin contexto (comparar sin entender)',
    solution: 'Proporcionamos dashboards con contexto histórico y comparativos para decisiones informadas.',
  },
]

export function Problems() {
  return (
    <section id="problemas" className="py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
            Problemas que resolvemos
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Situaciones comunes que enfrentan equipos que dependen de datos para tomar decisiones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-lg text-text-dark">
                  {problem.symptom}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">{problem.solution}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
