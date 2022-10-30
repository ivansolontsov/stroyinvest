import React from 'react'
import nozhik from '../assets/images/catalog/nozhi.png'
import { ContactUs } from '../components/ContactUs'
import crossIcon from '../assets/images/icons/cross.svg'

const Catalog = () => {  

  const [openModal, setOpenModal] = React.useState(false);
  const [info, setInfo] = React.useState('');

  let categories = [
    {
      id: 0,
      title: "Ножи для сельхозтехники",
    },
  ]
  let catalog = [
    {
      id: 0, image: nozhik, title: 'Нож противорежущий', l: '199', b: '199', s: '199', d: '199', price: 299, category: 0,
    },
    {
      id: 0, image: nozhik, title: 'Нож противорежущий', l: '199', b: '199', s: '199', d: '199', price: 100, category: 0,
    },
    {
      id: 0, image: nozhik, title: 'Нож противорежущий', l: '199', b: '199', s: '199', d: '199', price: 299, category: 0,
    },
    {
      id: 0, image: nozhik, title: 'Нож противорежущий', l: '199', b: '199', s: '199', d: '199', price: 299, category: 0,
    },
    {
      id: 0, image: nozhik, title: 'Нож противорежущий', l: '199', b: '199', s: '199', d: '199', price: 299, category: 0,
    },
    {
      id: 0, image: nozhik, title: 'Нож противорежущий', l: '199', b: '199', s: '199', d: '199', price: 299, category: 0,
    },
    {
      id: 0, image: nozhik, title: 'Нож противорежущий', l: '199', b: '199', s: '199', d: '199', price: 299, category: 0,
    },
    {
      id: 0, image: nozhik, title: 'Нож противорежущий', l: '199', b: '199', s: '199', d: '199', price: 299, category: 0,
    },
  ]


 
  return (
    <div className='content'>
      <div className={`site__modal ${openModal ? 'show' : ''}`}>
        <ContactUs isModal={true} someInfo={info}>
          <div className="request__cross"><button onClick={() => setOpenModal(false)} className="request__cross-button"><img src={crossIcon} alt="Закрыть Окно" /></button></div>
        </ContactUs>
      </div>
      <section className="page__wrapper">
        <h1 className="page__title">Каталог</h1>
        <p className="page__subtitle">
          У нас <strong>14</strong> вариантов ножей измельчителей для комбайнов <strong>LEXION, NEW HOLLAND, CLASS, MEGA, VEKTOR, NEW HOLLAND, АКРОС, ТОРУМ, ТУКАНО</strong> и <strong>27</strong> видов ящиков для упаковки аккумуляторов и любые ящики по вашим размерам и чертежам
        </p>
      </section>
      <section className="catalog">
        <h2 className="catalog__title">Ножи Противорежущие</h2>
        <p className="catalog__subtitle">НУЖНО ПРИДУМАТЬ ОПИСАНИЕ</p>
        <div className="catalog__list">
          {
              catalog.map((catalogItem, index) => {       
                return(
                  <div className="catalog__list-item" key={index}>
                    <img src={catalogItem.image} alt={catalogItem.title} className="catalog__list-item-img" />
                    <div className="catalog__list-item-body">
                      <span className="catalog__list-item-category">
                        {categories[catalogItem.category].title}
                      </span>
                      <h3 className="catalog__list-item-name">{catalogItem.title}</h3>
                      <div className="catalog__list-item-specs">
                        <div className="catalog__list-item-specs-item">
                          <span>Длина (L):</span> {catalogItem.l}мм
                        </div>
                        <div className="catalog__list-item-specs-item">
                          <span>Ширина (B):</span> {catalogItem.b}мм
                        </div>
                        <div className="catalog__list-item-specs-item">
                          <span>Толщина (s):</span> {catalogItem.s}мм
                        </div>
                        <div className="catalog__list-item-specs-item">
                          <span>Диаметр отверстия (d):</span> {catalogItem.d}мм
                        </div>
                      </div>
                    </div>
                    <button onClick={() => { 
                      setOpenModal(true);
                      setInfo(`${catalogItem.title} + Длина (L): ${catalogItem.l}мм + Ширина (B): ${catalogItem.b}мм + олщина (s): ${catalogItem.s}мм + Диаметр отверстия (d): ${catalogItem.d}мм, стоимость на сайте была ${catalogItem.price}`)
                    }} className="catalog__order-button">Заказать от <strong>{catalogItem.price}₽</strong></button>
                  </div>                 
                )               
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Catalog


