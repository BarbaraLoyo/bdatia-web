'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'

interface FormData {
  name: string
  company: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  company?: string
  email?: string
  message?: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nombre es requerido'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Empresa es requerida'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensaje es requerido'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensaje debe tener al menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', company: '', email: '', message: '' })
      } else {
        console.error('Error submitting form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
              ¡Gracias por contactarme!
            </h2>
            <p className="text-lg text-muted">
              Te contacto a la brevedad para conversar sobre tu proyecto.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
            Contacto
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Hablemos sobre cómo podemos mejorar la calidad de tus datos y decisiones.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />

            <Input
              type="text"
              name="company"
              placeholder="Empresa"
              value={formData.company}
              onChange={handleChange}
              error={errors.company}
              required
            />

            <Input
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <Textarea
              name="message"
              placeholder="Cuéntame sobre tu proyecto o consulta..."
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              rows={5}
              required
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
