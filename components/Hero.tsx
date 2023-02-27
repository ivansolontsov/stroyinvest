import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../lib/store/modal/modalSlice'
import Image from 'next/image'
import { RootState } from '../lib/store/store'



const Hero = () => {

  const socials = useSelector((state: RootState) => state.socials)
  const dispatch = useDispatch()

  return (
    <div className='content'>
      <div className="hero__wrapper">
        <div className="bg__image"></div>
        <div className="hero__socials">
          <ul className="hero__socials-list">
            {
              socials.map((social, index) => {
                return (
                  <li className="hero__socials-item" key={index}>
                    <a href={social.link} target="_blank" rel="noreferrer">
                      <Image src={social.icon} alt={social.title} width={16} height={16} />
                      {social.title}
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
          <button onClick={() => dispatch(openModal())} className="hero__button"><span>⚡️</span> Узнать Стоимость</button>
          <a href="tel:+79272238440" rel="noreferrer" target="_blank" className="hero__call-button"><span>📞</span> Позвонить</a>
        </div>
      </div>
    </div>
  )
}

export default Hero;