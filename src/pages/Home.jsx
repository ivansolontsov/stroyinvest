import React from 'react'
import Delivery from '../components/Delivery'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import HowToOrder from '../components/HowToOrder'
import WeMake from '../components/WeMake'
import Whyus from '../components/Whyus'
import Map from '../components/Map'
import { ContactUs } from '../components/ContactUs'
import DocumentMeta from 'react-document-meta'




const Home = () => {  

  const meta = {
    title: 'Главная | ООО "СТРОЙИНВЕСТ-С"',
    description: 'I am a description, and I can create multiple tags',
    canonical: 'http://example.com/path/to/page',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'стройинвест, позвонить, контакты, номер, адрес'
      }
    }
  }

  return (
    <DocumentMeta {...meta}>
      <section className='home'>
        <Hero/>
        <Delivery/>
        <Gallery/>
        <Whyus/>
        <WeMake/>
        <HowToOrder/>
        <ContactUs />
        <Map />
      </section>
    </DocumentMeta>
  )
}

export default Home