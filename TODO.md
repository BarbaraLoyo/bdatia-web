# Fix Runtime Error: Event handlers cannot be passed to Client Component props

## Steps to Complete
- [x] Add "use client"; to components/ui/Button.tsx
- [x] Add "use client"; to components/sections/About.tsx
- [x] Add "use client"; to components/layout/Footer.tsx
- [x] Add "use client"; to components/sections/Hero.tsx
- [x] Restart dev server
- [x] If error persists, run npm run build and report the exact file that breaks
  - Build error: EINVAL: invalid argument, readlink 'C:\Users\User\OneDrive\Documentos\bdatia-web\.next\server\middleware-manifest.json' (unrelated to runtime error, likely OneDrive/Windows issue)
