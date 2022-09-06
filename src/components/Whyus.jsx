import React from 'react'
import AvitoIcon from '../assets/images/avito.svg'
import PercentageIcon from '../assets/images/icons/percentage.svg'
import GearIcon from '../assets/images/icons/gear.svg'
import Calendar from '../assets/images/icons/calendar.svg'
import DeliveryIcon from '../assets/images/icons/delivery.svg'

const Whyus = () => {
    let avitoLink = "#";
    let features = [
      {icon: PercentageIcon,  title: 'Низкие Цены', text: 'Самые доступные цены на рынке для наших заказчиков, звоните и можете убедиться сами.'},
      {icon: Calendar,  title: 'Сроки', text: 'Наши заказы изготавливаются в самые кратчайшие сроки, все сроки согласуются с заказчиком перед оплатой, всегда в срок!'},
      {icon: GearIcon,  title: 'Собственное Оборудование', text: 'Собственный цех со станками, сборочным и покрасочным цехами, обеспечиваем наилучшее качество продукции.'},
      {icon: DeliveryIcon,  title: 'Доставка', text: 'Доставляем на собственном транспорте в любую точку города Саратов или ТК по всей России!'},
    ]
    
  return (
    <div className="whyus wide-content">
      <div className="whyus__wrapper-of-wrapper">
        <div className="whyus__wrapper content">
          <div className="whyus__features">
            <div className="whyus__features-image">
                <div className="whyus__features-image-bg"></div>
                <div className="whyus__features-image-human"></div>
            </div>
            <div className="whyus__features-list">
                <h3 className="whyus__features-list-title">Почему нас выбирают?</h3>
                <ul className="whyus__features-list-ul">
                {
                    features.map((feature, index) => (
                    <li key={index} className='whyus__features-list-item'>
                        <div className="whyus__features-list-item-icon">
                        <img src={feature.icon} alt={feature.title}/>
                        </div>
                        <div className='whyus__features-list-item-body'>
                        <h4>{feature.title}</h4>
                        <p>{feature.text}</p>
                        </div>
                    </li>
                    ))
                }
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="whyus__avito">
        <div className="whyus__avito-blur"></div>
        <span className="whyus__avito-title">Мы есть на</span>
        <img src={AvitoIcon} alt="Avito Logo" />
        <a href={avitoLink} traget="_blank" className='whyus__avito-button'>Объявления</a>
      </div>
    </div>
  )
}

export default Whyus;