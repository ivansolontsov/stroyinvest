import React from 'react'
import telIcon from '../assets/images/icons/telephone-icon.svg'
import mailIcon from '../assets/images/icons/email-icon.svg'
import adressIcon from '../assets/images/icons/adress-icon.svg'
import DocumentMeta from 'react-document-meta'


const Contacts = () => {  

  const contacts = [
    {icon: telIcon, title: 'Телефон', value: '+7 (927) 223 - 84 - 40', buttonLink: 'tel:+79272238440', buttonTitle: 'Позвонить'},
    {icon: mailIcon, title: 'Почта', value: 'stroinvest-s@yandex.ru', buttonLink: 'mailto:stroinvest-s@yandex.ru', buttonTitle: 'Написать'},
    {icon: adressIcon, title: 'Адрес', value: 'Россия, г. Саратов, улица имени Азина В.М., дом 81', buttonLink: 'https://yandex.com.ge/maps/194/saratov/house/ulitsa_imeni_v_m_azina_81a/YEwYfwZiSU0BQFtrfXh0dHVlYw==/?ll=45.912085%2C51.455967&z=17', buttonTitle: 'Проложить Путь'},
  ]

  
  const meta = {
    title: 'Контакты | ООО "СТРОЙИНВЕСТ-С"',
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
      <div className='content'>
        <section className="page__wrapper">
          <h1 className="page__title">Контакты</h1>
          <ul className="contacts__list"> {
            contacts.map((contact, index) => {
              return(
                <li className="contacts__list-item" key={index}>
                  <div className='contacts__list-item-body-wrapper'>
                    <div className="contacts__list-icon">
                      <img src={contact.icon} alt={contact.title} />
                    </div>
                    <div className="contcats__list-item-body">
                      <h3 className="contacts__list-item-title">
                        {contact.title}
                      </h3>
                      <p className="contacts__list-item-value">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                  <a href={contact.buttonLink} target="_blank" rel='noreferrer' className="contacts__list-item-button">
                    {contact.buttonTitle}
                  </a>
                </li>
              )
            })
          }
          </ul>
        </section>
      </div>
    </DocumentMeta>
  )
}

export default Contacts