import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Subscribe from './components/Subscribe'
import Brands from './components/Brands'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <body>
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
      </body>
    </div>
  )
}

export default App
