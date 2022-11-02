import React from 'react'
import '../css/about/about.scss';
import DocumentMeta from 'react-document-meta'

const About = () => {  

  const aboutList = [
    {title: 'Директор', value: 'Шитяков Сергей Владимирович'},
    {title: 'Телефон', value: '79272238440, Шитяков Сергей Владимирович'},
    {title: 'КПП', value: '645101001'},
    {title: 'ОГРН', value: '1116451001138'},
    {title: 'ИНН', value: '6451428953'},
    {title: 'ЮР. АДРЕС', value: 'Россия, г. Саратов, улица имени Азина В.М., дом 81'},
  ]
 
  const meta = {
    title: 'О Нас | ООО "СТРОЙИНВЕСТ-С"',
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
      <div className='content content__bg'>
        <section className="page__wrapper page__wrapper_extended">
          <h1 className="page__title">О Нас</h1>
          <p className="page__subtitle about__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum repellat ipsum porro ea! Omnis voluptates accusantium odio officiis blanditiis, voluptate iste ipsam veniam maiores hic ea vero eum alias.
          Modi atque voluptatibus sed quia quibusdam animi non quis adipisci error! Pariatur aliquam fugiat facere sequi odit unde sed tempore, ea at? Accusamus pariatur nulla, fugit quaerat iure voluptatum beatae!
          Tempora aliquam sint dolor dolorem voluptatibus ad nisi. Accusamus impedit laudantium dolore ipsum soluta eos voluptatem unde. Laborum qui beatae similique? Aliquid praesentium eos neque voluptatibus aspernatur saepe iure impedit.
          Magnam tempore dicta harum quae cum enim reiciendis obcaecati maiores aliquid voluptate, voluptatibus debitis minus veniam mollitia sed quasi. Veniam repellat sapiente reprehenderit laboriosam exercitationem provident nisi unde beatae nostrum.
          Natus aperiam nemo dicta similique. Cumque nihil amet quisquam laboriosam accusantium odio, illum blanditiis corrupti doloremque iusto quibusdam ullam consequatur tenetur minima veritatis maxime quae assumenda sed quam nulla. Quidem?</p>
          <ul className="about__contact-list">
            {
              aboutList.map((listItem, index) => {
                return(
                  <li className="about__contact-list-item" key={index}>
                  <span>{listItem.title}: </span>
                  {listItem.value}
                  </li>
                )
              })
            }
          </ul>
          <div className="about__photo">
            <div className="about__photo-title">
              <span>Шитяков</span> 
              Сергей Владимирович
            </div>
          </div>
        </section>
      </div>
    </DocumentMeta>
  )
}

export default About