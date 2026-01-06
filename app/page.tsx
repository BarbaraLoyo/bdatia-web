import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Problems } from '@/components/sections/Problems'
import { Services } from '@/components/sections/Services'
import { Method } from '@/components/sections/Method'
import { Cases } from '@/components/sections/Cases'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Method />
        <Cases />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
