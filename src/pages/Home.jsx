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
    title: 'Купить Противорез, Нож Противорежущий Измельчителя с доставкой по России',
    description: 'Мы изготавливаем противорежущие ножи и другие запчасти для сельскохозяйственной техники и комбайнов LEXION, NEW HOLLAND, CLASS, MEGA, VEKTOR, NEW HOLLAND, АКРОС, ТОРУМ, ТУКАНО.',
    canonical: 'https://stroyinvests.ru/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'ножи противорежущие, запчасти для сельскохозяйственной техники, ножи для комбайнов, противорез, ножи для зерноуборочных комбайнов, купить, нож противорежущий измельчителя'
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
        <HowToOrder withBg={true}/>
        <ContactUs />
        <Map />
      </section>
    </DocumentMeta>
  )
}

export default Home