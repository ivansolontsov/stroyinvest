import React from 'react'
import Delivery from '../components/Delivery'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'

const Home = () => {  
  return (
    <section className='home'>
      <Hero/>
      <Delivery/>
      <Gallery/>
    </section>
  )
}

export default Home