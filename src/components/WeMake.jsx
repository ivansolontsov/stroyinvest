import React from 'react'
import DoorIcon from '../assets/images/icons/showcase/door.png'

const WeMake = () => {

    let showcaseItems = [
        {icon: DoorIcon, title: 'Ножи', text: 'Мы продаем Ножи на заказ и готовые варианты'},
        {icon: DoorIcon, title: 'Ножи', text: 'Мы продаем Ножи на заказ и готовые варианты'},
        {icon: DoorIcon, title: 'Ножи', text: 'Мы продаем Ножи на заказ и готовые варианты'},
        {icon: DoorIcon, title: 'Ножи', text: 'Мы продаем Ножи на заказ и готовые варианты'},
        {icon: DoorIcon, title: 'Ножи', text: 'Мы продаем Ножи на заказ и готовые варианты'},
        {icon: DoorIcon, title: 'Ножи', text: 'Мы продаем Ножи на заказ и готовые варианты'},
        {icon: DoorIcon, title: 'Ножи', text: 'Мы продаем Ножи на заказ и готовые варианты'},
        {icon: DoorIcon, title: 'Ножи', text: 'Мы продаем Ножи на заказ и готовые варианты'},
        {icon: DoorIcon, title: 'Ножи', text: 'Мы продаем Ножи на заказ и готовые варианты'},
        {icon: DoorIcon, title: 'Ножи', text: 'Мы продаем Ножи на заказ и готовые варианты'},
        {icon: DoorIcon, title: 'Ножи', text: 'Мы продаем Ножи на заказ и готовые варианты'},
        {icon: DoorIcon, title: 'Ножи', text: 'Мы продаем Ножи на заказ и готовые варианты'},
        {icon: DoorIcon, title: 'Ножи', text: 'Мы продаем Ножи на заказ и готовые варианты'},
        {icon: DoorIcon, title: 'Ножи', text: 'Мы продаем Ножи на заказ и готовые варианты'},
        {icon: DoorIcon, title: 'Ножи', text: 'Мы продаем Ножи на заказ и готовые варианты'},
    ]

  return (
    <div className="wemake content">
        <div className="wemake__wrapper">
            <h2 className='wemake__title'>
                У нас в продаже
            </h2>
            <ul className="wemake__showcase">
                {
                    showcaseItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className='wemake__showcase-image'>
                                    <img src={item.icon} alt={item.title}  />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <div className="wemake__button-wrapper">
                                    <button className='wemake__button'>Заказать</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default WeMake