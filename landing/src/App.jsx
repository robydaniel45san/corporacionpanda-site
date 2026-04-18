import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Process from './components/sections/Process'
import Portfolio from './components/sections/Portfolio'
import Pricing from './components/sections/Pricing'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
