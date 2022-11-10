import React from 'react'
import { ContactUs } from './ContactUs'
import laserIcon from '../assets/images/icons/showcase/laser.png'
import tokarIcon from '../assets/images/icons/showcase/tokarnie.png'
import stolarIcon from '../assets/images/icons/showcase/wood.png'
import svarkaIcon from '../assets/images/icons/showcase/svarka.png'
import shlifovkaIcon from '../assets/images/icons/showcase/shlifovka.png'
import gibkaIcon from '../assets/images/icons/showcase/gibka.png'
import frezIcon from '../assets/images/icons/showcase/gear.png'
import nozhiIcon from '../assets/images/icons/showcase/protivo.png'
import traktorIcon from '../assets/images/icons/showcase/selhoz.png'
import pressIcon from  '../assets/images/icons/showcase/press.png'
import crossIcon from '../assets/images/icons/cross.svg'

const WeMake = () => {

    const [openModal, setOpenModal] = React.useState(false);
    const [info, setInfo] = React.useState('');

    let showcaseItems = [
        {icon: laserIcon, title: 'Лазерная Резка Металла', text: 'Режем металл от 0,5мм до 16мм'},
        {icon: tokarIcon, title: 'Токарные Работы', text: 'Нарезка резьбы, расточка отверстий, вытачивание канавок различной конфигурации'},
        {icon: stolarIcon, title: 'Столярные Работы', text: 'Изготовим деревянную тару(ящики) и изделия изделия в размер'},
        {icon: svarkaIcon, title: 'Сварочные Работы', text: 'Изготовим промышленные конструкции, изделия из металла с использованием дерева'},
        {icon: shlifovkaIcon, title: 'Шлифовальные Работы', text: 'Создание деталей необходимых форм и размеров, удаление дефектов с поверхностей, создание эстетического внешнего вида'},
        {icon: gibkaIcon, title: 'Гибка Металла', text: 'Гнем металл от 5мм до 8мм, длиной до 3-ех метров'},
        {icon: frezIcon, title: 'Фрезерные Работы', text: 'Сверление отверстий, расточка шпоночного паза'},
        {icon: nozhiIcon, title: 'Противорежущие Ножи', text: 'Изготовим для Вас 14 вариантов противорежущих ножей для комбайнов'},
        {icon: traktorIcon, title: 'Ремонт узлов и деталей для сельхозтехники', text: 'Восстановление посадочных мест и пазов у вала'},
        {icon: pressIcon, title: 'Пресс 40/60 тонн', text: 'Запрессовка, Рихтовка, Завтуливание'},
    ]

  return (
    <div className="wemake content">
        <div className={`site__modal ${openModal ? 'show' : ''}`}>
            <ContactUs isModal={true} someInfo={info} isOrder={true}>
                <div className="request__cross"><button onClick={() => setOpenModal(false)} className="request__cross-button"><img src={crossIcon} alt="Закрыть Окно" /></button></div>
            </ContactUs>
        </div>
        <div className="wemake__wrapper">
            <h2 className='wemake__title'>
                Услуги
            </h2>
            <ul className="wemake__showcase">
                {
                    showcaseItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className='wemake__showcase-image'>
                                    <img src={item.icon} alt={item.title} loading="lazy" />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <div className="wemake__button-wrapper">
                                    <button onClick={() => {
                                        setOpenModal(true)
                                        setInfo(`${item.title} + ${item.text}`)
                                        }
                                    } className='wemake__button'>Заказать</button>
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