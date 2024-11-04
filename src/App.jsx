import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Faq from './components/Faq'
import Subscribe from './components/Subscribe'
import Brands from './components/Brands'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <div>
      
        <main className="page-wrapper">
          <Header />
          <Hero />
          <Brands />
          <Features />
          <Testimonials />
          <Faq />
          <Subscribe />
          <Footer />
        </main>
      
    </div>
  )
}

export default App
