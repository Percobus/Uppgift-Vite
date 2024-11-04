import React from 'react'

import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Subscribe from '../components/Subscribe'

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Features />
      <Testimonials />
      <Faq />
      <Subscribe />
    </>
  )
}

export default Home