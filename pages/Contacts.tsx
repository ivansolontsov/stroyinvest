import React from 'react'
import telIcon from '../public/images/icons/telephone-icon.svg'
import mailIcon from '../public/images/icons/email-icon.svg'
import adressIcon from '../public/images/icons/adress-icon.svg'


const Contacts = () => {

  const contacts = [
    { icon: telIcon, title: 'Телефон', value: '+7 (927) 223 - 84 - 40', buttonLink: 'tel:+79272238440', buttonTitle: 'Позвонить' },
    { icon: mailIcon, title: 'Почта', value: 'stroinvest-s@yandex.ru', buttonLink: 'mailto:stroinvest-s@yandex.ru', buttonTitle: 'Написать' },
    { icon: adressIcon, title: 'Адрес', value: 'Россия, г. Саратов, улица имени Азина В.М., дом 81', buttonLink: 'https://yandex.com.ge/maps/194/saratov/house/ulitsa_imeni_v_m_azina_81a/YEwYfwZiSU0BQFtrfXh0dHVlYw==/?ll=45.912085%2C51.455967&z=17', buttonTitle: 'Проложить Путь' },
  ]

  return (
    <div className='content'>
      <section className="page__wrapper">
        <h1 className="page__title">Контакты</h1>
        <ul className="contacts__list"> {
          contacts.map((contact, index) => {
            return (
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
  )
}

export default Contacts