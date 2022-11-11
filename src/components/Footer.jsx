import React from 'react'
import instagramIcon from '../assets/images/icons/instagram.svg'
import whatsappIcon from '../assets/images/icons/whatsapp.svg'
import telegramIcon from '../assets/images/icons/telegram.svg'
import emailIcon from '../assets/images/icons/eMailicon.svg'
import viberIcon from '../assets/images/icons/viberIcon.svg'
import { Link } from 'react-router-dom'

const Footer = () => {

  let companyInfo = [
    {item: "ИНН 6451428953"},
    {item: "КПП 645101001"},
    {item: "ОГРН 1116451001138"},
  ]

  let companyContacts = [
    {title: "Адрес", text: "Россия, Саратов, ул. Азина 81а", link: "https://yandex.com.ge/maps/194/saratov/house/ulitsa_imeni_v_m_azina_81a/YEwYfwZiSU0BQFtrfXh0dHVlYw==/?ll=45.912085%2C51.455967&z=17"},
    {title: "Телефон", text: "+7(927)223-84-40, Шитяков Сергей Владимирович", link: "tel:+79272238440"}
  ]


  let workingHours = [
    {text: "Пн-Пт: 8:00 - 18:00"},
    {text: "Сб-Вс: Выходные дни"}
  ]

  let contacts = [
    {icon: telegramIcon, text: "Написать в Telegram", link: "https://t.me/stroyinvests77"},
    {icon: whatsappIcon, text: "Написать в WhatsApp", link: "https://api.whatsapp.com/send?phone=79272238440"},
    {icon: viberIcon, text: "Написать в Viber", link: "viber://chat?number=%2B79272238440"},
    {icon: instagramIcon, text: "Написать в Instagram", link: "https://www.instagram.com/stroiinvest_c_64/"},
    {icon: emailIcon, text: "Написать на Почту", link: "mailto:stroinvest-s@yandex.ru"},
  ]


  let menu = [
    {title: "Главная", link: "/"},
    {title: "Каталог", link: "/catalog"},
    {title: "Контакты", link: "/contacts"},
    {title: "О нас", link: "/aboutus"},
  ]


  return (
    <footer className='footer wide-content'>
      <div className="content">
        <div className="footer__wrapper">
            <div className="footer__block footer-logo">
              <div className="footer__block-logo-wrapper">
                <h2 className="footer__logo">ООО «СТРОЙИНВЕСТ-С»</h2>
                <ul className="footer__logo-sub-list">
                  {
                    companyInfo.map((item, index) => (
                      <li key={index}>
                        {item.item}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="footer__logo-adress">
                {
                  companyContacts.map((item, index) => (
                    <div key={index}>
                      <h3>{item.title}</h3>
                      <a href={item.link} target="_blank" rel="noreferrer">{item.text}</a>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="footer__block footer-hours">
              <div className="footer__block-title">ЧАСЫ РАБОТЫ</div>
              <div className="footer__block-working-hours">
              {
                workingHours.map((item, index) => (
                  <p key={index}>{item.text}</p>
                ))
              }
              </div>
            </div>
            <div className="footer__block footer-contacts">
              <div className="footer__block-title">СВЯЗАТЬСЯ С НАМИ</div>
              <ul className="footer__block-contacts">
              {
                contacts.map((item, index) => (
                    <li key={index}>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.icon
                        ? <img src={item.icon} alt={item.text}/>
                        : ''}
                        {item.text}
                      </a>
                    </li>
                ))
              }
              </ul>
            </div>
            <div className="footer__block footer-navigation">
              <div className="footer__block-title">НАВИГАЦИЯ</div>
              <ul className="footer__block-menu">
              {
                menu.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                ))
              }
              </ul>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;