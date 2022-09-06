import React from 'react'
import Delivery from '../components/Delivery'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import Whyus from '../components/Whyus'

const Home = () => {  
 
  return (
    <section className='home'>
      <Hero/>
      <Delivery/>
      <Gallery/>
      <Whyus/>
    </section>
  )
}

export default Home