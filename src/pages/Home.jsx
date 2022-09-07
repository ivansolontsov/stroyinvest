import React from 'react'
import Delivery from '../components/Delivery'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import HowToOrder from '../components/HowToOrder'
import WeMake from '../components/WeMake'
import Whyus from '../components/Whyus'
import Map from '../components/Map'
import { ContactUs } from '../components/ContactUs'

const Home = () => {  
 
  return (
    <section className='home'>
      <Hero/>
      <Delivery/>
      <Gallery/>
      <Whyus/>
      {/* <WeMake/>
      <HowToOrder/>
      <ContactUs />
      <Map /> */}
    </section>
  )
}

export default Home