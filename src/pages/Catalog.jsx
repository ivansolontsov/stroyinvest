import React from 'react'
import nozhik from '../assets/images/catalog/nozhi.png'

const Catalog = () => {  
 
  return (
    <div className='content'>
      <section className="page__wrapper">
        <h1 className="page__title">Каталог</h1>
        <p className="page__subtitle">
          У нас <strong>14</strong> вариантов ножей измельчителей для комбайнов <strong>LEXION, NEW HOLLAND, CLASS, MEGA, VEKTOR, NEW HOLLAND, АКРОС, ТОРУМ, ТУКАНО</strong> и <strong>27</strong> видов ящиков для упаковки аккумуляторов и любые ящики по вашим размерам и чертежам
        </p>
      </section>
      <section className="catalog">
        <h2 className="catalog__title">Ножи Противорежущие</h2>
        <p className="catalog__subtitle">Краткое описание категории</p>
        <div className="catalog__list">
          <div className="catalog__list-item">
            <img src={nozhik} alt="Нож противорежущи  й" className="catalog__list-item-img" />
            <div className="catalog__list-item-body">
              <span className="catalog__list-item-category">Запчасти для сельхозтехники</span>
              <h3 className="catalog__list-item-name">Нож Противорежущий</h3>
              <div className="catalog__list-item-specs">
                <div className="catalog__list-item-specs-item">
                  <span>Длина (L):</span> 190мм
                </div>
                <div className="catalog__list-item-specs-item">
                  <span>Ширина (B):</span> 190мм
                </div>
                <div className="catalog__list-item-specs-item">
                  <span>Толщина (s):</span> 190мм
                </div>
                <div className="catalog__list-item-specs-item">
                  <span>Диаметр отверстия (d):</span> 190мм
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Catalog