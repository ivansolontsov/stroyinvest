import React from 'react'
import AvitoIcon from '../assets/images/avito.svg'

const Whyus = () => {
    let avitoLink = "#";
    let features = [
      {icon: '',  title: '', text: ''},
      {icon: '',  title: '', text: ''},
      {icon: '',  title: '', text: ''},
      {icon: '',  title: '', text: ''},
    ]
    
  return (
    <div className="whyus">
    <div className="whyus__features">
    <div className="whyus__features-image">
        <div className="whyus__features-image-bg"></div>
        <div className="whyus__features-image-human"></div>
    </div>
    <div className="whyus__features-list">
        <div className="whyus__features-list-title">Почему нас выбирают?</div>
        <ul className="whyus__features-list-ul">
        {
            features.map(feature => (
            <li className='whyus__features-list-item'>
                <div className="whyus__features-list-item-icon">
                {feature.icon}
                </div>
                <div className='whyus__features-list-item-body'>
                <span>{feature.title}</span>
                <p>{feature.text}</p>
                </div>
            </li>
            ))
        }
        </ul>
    </div>
    </div>
    <div className="whyus__avito">
    <span className="whyus__avito-title">Мы есть на</span>
    <img src={AvitoIcon} alt="Avito Logo" />
    <a href={avitoLink} traget="_blank">Объявления</a>
    </div>
    </div>
  )
}

export default Whyus;