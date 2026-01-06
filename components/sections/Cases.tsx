import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const cases = [
  {
    problem: 'Cierre mensual tardío por planillas y datos inconsistentes',
    solution: 'Implementamos un proceso automatizado de consolidación con validaciones que redujo el tiempo de cierre de 2 semanas a 3 días.',
    result: 'Reducción del 85% en tiempo de cierre mensual y eliminación de reprocesos por errores.',
  },
  {
    problem: 'Operación sin visibilidad (stock/gasto/ventas) y decisiones reactivas',
    solution: 'Creamos un dashboard ejecutivo con indicadores en tiempo real y alertas automáticas para situaciones críticas.',
    result: 'Mejora del 40% en la rotación de inventario y reducción de gastos operativos no planificados.',
  },
]

export function Cases() {
  return (
    <section id="casos" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
            Casos de éxito
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Resultados reales de implementaciones en diferentes tipos de organizaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg text-text-dark mb-4">
                  Problema
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted">{case_.problem}</p>

                <div>
                  <h4 className="font-semibold text-text-dark mb-2">Solución</h4>
                  <p className="text-muted">{case_.solution}</p>
                </div>

                <div className="pt-4 border-t border-muted/20">
                  <h4 className="font-semibold text-accent mb-2">Resultado</h4>
                  <p className="text-muted">{case_.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
