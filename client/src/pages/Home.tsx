import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ContactForm />
      <Footer />
    </div>
  )
}