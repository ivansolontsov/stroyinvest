import React from 'react'
import instagramIcon from '../assets/images/icons/instagram.svg'
import whatsappIcon from '../assets/images/icons/whatsapp.svg'
import telegramIcon from '../assets/images/icons/telegram.svg'

const Footer = () => {

  let companyInfo = [
    {item: "ИНН 6451428953"},
    {item: "КПП 645101001"},
    {item: "ОГРН 1116451001138"},
  ]

  let companyContacts = [
    {title: "Адрес", text: "Россия, Саратов, ул. Азина 81а", link: "/"},
    {title: "Телефон", text: "+7(917)-308-09-37, Шитяков Сергей Владимирович", link: "/"}
  ]


  let workingHours = [
    {text: "Пн-Пт, 8:00 - 18:00"},
    {text: "Сб, Вс - выходной"}
  ]

  let contacts = [
    {icon: telegramIcon, text: "Написать в Telegram", link: "/"},
    {icon: whatsappIcon, text: "Написать в WhatsApp", link: "/"},
    {icon: telegramIcon, text: "Написать в Viber", link: "/"},
    {icon: instagramIcon, text: "Написать в Instagram", link: "/"},
    {icon: telegramIcon, text: "Написать на Почту", link: "/"},
  ]


  let menu = [
    {title: "Каталог", link: "/"},
    {title: "Оборудование", link: "/"},
    {title: "О Нас", link: "/"},
    {title: "Оставить заявку", link: "/"},
  ]


  return (
    <footer className='footer wide-content'>
      <div className="content">
        <div className="footer__wrapper">
            <div className="footer__block">
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
                  companyContacts.map((item) => (
                    <div>
                      <h3>{item.title}</h3>
                      <a href={item.href} target="_blank" rel="noreferrer">{item.text}</a>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__block-title">ЧАСЫ РАБОТЫ</div>
              <div className="footer__block-working-hours">
              {
                workingHours.map((item, index) => (
                  <p>{item.text}</p>
                ))
              }
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__block-title">СВЯЗАТЬСЯ С НАМИ</div>
              <ul className="footer__block-contacts">
              {
                contacts.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>
                        <img src={item.icon} alt={item.text}/>
                        {item.text}
                      </a>
                    </li>
                ))
              }
              </ul>
            </div>
            <div className="footer__block">
              <div className="footer__block-title">НАВИГАЦИЯ</div>
              <ul className="footer__block-menu">
              {
                menu.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.title}</a>
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