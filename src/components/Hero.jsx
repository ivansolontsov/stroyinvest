import React from 'react'
import avitoIcon from '../assets/images/icons/avito.svg'
import instagramIcon from '../assets/images/icons/instagram.svg'
import whatsappIcon from '../assets/images/icons/whatsapp.svg'
import telegramIcon from '../assets/images/icons/telegram.svg'
import crossIcon from '../assets/images/icons/cross.svg'
import { ContactUs } from './ContactUs'

const Hero = () => {

  const [openModal, setOpenModal] = React.useState(false);
   
  let heroSocials = [
    {title: 'Avito', icon: avitoIcon, link: 'https://www.avito.ru/user/48a202822aaf4cbddc3dfa5051cc5f37/profile?src=sharing'},
    {title: 'Instagram', icon: instagramIcon, link: 'https://www.instagram.com/stroiinvest_c_64/'},
    {title: 'WhatsApp', icon: whatsappIcon, link: 'https://api.whatsapp.com/send?phone=79272238440'},
    {title: 'Telegram', icon: telegramIcon, link: 'https://t.me/stroyinvests77'},
  ]

  return (
    <div className='content'>
      <div className={`site__modal ${openModal ? 'show' : ''}`}>
        <ContactUs isModal={true}>
          <div className="request__cross"><button onClick={() => setOpenModal(false)} className="request__cross-button"><img src={crossIcon} alt="Закрыть Окно" /></button></div>
        </ContactUs>
      </div>
      <div className="hero__wrapper">
        <div className="bg__image"></div>
        <div className="hero__socials">
          <ul className="hero__socials-list">
            {     
            heroSocials.map((element, index) => {       
                return(
                    <li className="hero__socials-item" key={index}>
                      <a href={element.link} target="_blank" rel="noreferrer">
                        <img src={element.icon} alt={element.title}/>
                        {element.title}
                      </a>
                    </li>
                )               
            })
            }
          </ul>
        </div>
        <h1 className='hero__title'>Ножи Противорежущие</h1>
        <p className="hero__subtitle">
          Мы занимаемся производством запчастей для <strong>сельскохозяйственной техники</strong>, <strong>лазерной резкой</strong> по Вашим эскизам. Оставьте заявку для уточнения 
          интересующей информации.
        </p>
        <div className="hero__button-wrapper">
          <button onClick={() => setOpenModal(true)} className="hero__button"><span>⚡️</span> Узнать Стоимость</button>
          <a href="tel:+79272238440" rel="noreferrer" target="_blank" className="hero__call-button"><span>📞</span> Позвонить</a>
        </div>
      </div>
    </div>
  )
}

export default Hero;