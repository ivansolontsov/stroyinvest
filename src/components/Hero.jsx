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
    {title: 'Avito', icon: avitoIcon, link: ''},
    {title: 'Instagram', icon: instagramIcon, link: ''},
    {title: 'WhatsApp', icon: whatsappIcon, link: ''},
    {title: 'Telegram', icon: telegramIcon, link: ''},
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
                <li key={index} className="hero__socials-item">
                <img src={element.icon} alt={element.title}/>
                {element.title}
                </li>
                )               
            })
            }
          </ul>
        </div>
        <h1 className='hero__title'>Ножи Измельчители</h1>
        <p className="hero__subtitle">
          Мы занимаемся производством запчастей для <strong>сельскохозяйственной техники</strong>, <strong>лазерной резкой</strong> по Вашим эскизам. Оставьте заявку для уточнения 
          интересующей информации.
        </p>
        <button onClick={() => setOpenModal(true)} className="hero__button"><span>📞</span> Оставить заявку</button>
      </div>
    </div>
  )
}

export default Hero;