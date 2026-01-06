# BDatia - Landing Page

Landing page premium para BDatia – Data Analytics Consulting, construida con Next.js 14, TypeScript y TailwindCSS.

## 🚀 Características

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **TailwindCSS** con tema personalizado
- Diseño responsive y accesible
- Formulario de contacto con validación
- API Route para manejo de formularios
- SEO optimizado con metadata

## 🛠️ Tecnologías

- Next.js 14
- TypeScript
- TailwindCSS
- Zod (validación de formularios)

## 📁 Estructura del proyecto

```
bdatia-web/
├── app/
│   ├── api/contact/route.ts    # API para formulario de contacto
│   ├── globals.css             # Estilos globales
│   ├── layout.tsx              # Layout principal
│   └── page.tsx                # Página principal
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Header con navegación
│   │   └── Footer.tsx          # Footer
│   ├── sections/
│   │   ├── Hero.tsx            # Sección hero
│   │   ├── Problems.tsx        # Problemas que resolvemos
│   │   ├── Services.tsx        # Servicios
│   │   ├── Method.tsx          # Metodología
│   │   ├── Cases.tsx           # Casos de éxito
│   │   ├── About.tsx           # Quién soy
│   │   └── Contact.tsx         # Formulario de contacto
│   └── ui/
│       ├── Button.tsx          # Componente botón reutilizable
│       ├── Card.tsx            # Componentes de tarjeta
│       ├── Input.tsx           # Input con validación
│       ├── Textarea.tsx        # Textarea con validación
│       └── Container.tsx       # Contenedor responsive
├── lib/
│   ├── site.ts                 # Configuración del sitio
│   └── utils.ts                # Utilidades
└── public/                     # Assets estáticos
```

## 🚀 Cómo ejecutar

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en navegador:**
   Visita [http://localhost:3000](http://localhost:3000)

## 📝 Cómo editar contenido

### Textos y configuración
- Edita `lib/site.ts` para cambiar emails, enlaces y configuración general
- Los textos están centralizados en este archivo para facilitar ediciones

### Colores y estilos
- Paleta de colores definida en `tailwind.config.js`
- Variables CSS disponibles en `app/globals.css`

### Secciones
- Cada sección es un componente independiente en `components/sections/`
- Comentarios detallados en cada archivo explican qué editar

### Agregar nuevas secciones
1. Crear componente en `components/sections/`
2. Importar y agregar al `app/page.tsx`
3. Actualizar navegación en `components/layout/Header.tsx` y `Footer.tsx`

## 🔧 Personalización

### Cambiar colores
Edita `tailwind.config.js`:
```js
colors: {
  'night': '#0F172A',    // Fondo oscuro
  'surface': '#F8F6F2',  // Fondo claro
  'brand': '#7A1F2B',    // Bordó principal
  'accent': '#C9A24D',   // Dorado
}
```

### Modificar tipografía
- Actualmente usa Inter de Google Fonts
- Cambia en `app/layout.tsx`

### SEO y metadata
- Configurado para `https://www.bdatia.com.ar`
- Edita metadata en `app/layout.tsx`

## 📧 Formulario de contacto

- Validación en cliente con Zod
- API Route en `app/api/contact/route.ts`
- Actualmente guarda en consola (placeholder)
- Para producción: reemplazar con servicio de email (Resend, SendGrid, etc.)

## 🚀 Despliegue

### Vercel (recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno si es necesario
3. Desplegar automáticamente

### Cloudflare Pages
1. Conectar repositorio
2. Configurar build command: `npm run build`
3. Configurar output directory: `.next`

### Otro proveedor
```bash
npm run build
npm start
```

## 📄 Licencia

Proyecto privado para BDatia.
