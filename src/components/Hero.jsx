import React from 'react'
import avitoIcon from '../assets/images/icons/avito.svg'
import instagramIcon from '../assets/images/icons/instagram.svg'
import whatsappIcon from '../assets/images/icons/whatsapp.svg'
import telegramIcon from '../assets/images/icons/telegram.svg'

const Hero = () => {
   
  let heroSocials = [
    {title: 'Avito', icon: avitoIcon, link: ''},
    {title: 'Instagram', icon: instagramIcon, link: ''},
    {title: 'WhatsApp', icon: whatsappIcon, link: ''},
    {title: 'Telegram', icon: telegramIcon, link: ''},
  ]

  return (
    <div className='hero content'>
    <div className="hero__socials">
    <ul className="hero__socials-list">
        {     
        heroSocials.map(element => {       
            return(
            <li className="hero__socials-item">
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
    Мы занимаемся производством запчастей для <strong>сельскохозяйственной техники</strong>, <strong>лазерной резкой</strong> по вашим эскизам. Оставьте заявку для уточнения любой 
    интересующей вас информации 
    касающийся наших услуг.
    </p>
    <a href="/#" className="hero__button"><span>📞</span> Оставить заявку</a>
    </div>
  )
}

export default Hero;