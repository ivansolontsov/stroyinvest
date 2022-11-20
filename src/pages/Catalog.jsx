import React from 'react'
import nozhik from '../assets/images/catalog/nozhi.png'
import noPhoto from '../assets/images/catalog/noPhoto.webp'
import { ContactUs } from '../components/ContactUs'
import crossIcon from '../assets/images/icons/cross.svg'
import DocumentMeta from 'react-document-meta'
import { Portal } from 'react-portal'


const Catalog = () => {

  const [openModal, setOpenModal] = React.useState(false);
  const [info, setInfo] = React.useState('');

  let categories = [
    {
      id: 0,
      categoryTitle: "Ножи Противорежущие",
      title: "Ножи для сельхозтехники",
      description: 'Наш каталог ножей измельчителей или противорежущих ножей для сельскохозяйственной техники АКРОС, ВЕКТОР, ТУКАН, ДОН и другие виды комбайнов.',
    },
    {
      id: 1,
      categoryTitle: "Запчасти для сельхоз. техники",
      categoryCaption: "",
      title: "Запчасти для сельхозтехники",
      description: '',
    },
    {
      id: 2,
      categoryTitle: "Тара",
      categoryCaption: "",
      title: "Тара",
      description: '',
    },
  ]

  let catalog = [
    { id: 1, image: nozhik, title: 'Нож измельчителя', l: '190', b: '50', s: '4', d: '10', price: 299, category: 0, },
    { id: 2, image: nozhik, title: 'Нож измельчителя', l: '175', b: '40', s: '4', d: '11', price: 299, category: 0, },
    { id: 3, image: nozhik, title: 'Нож измельчителя', l: '173', b: '50', s: '5', d: '20', price: 299, category: 0, },
    { id: 4, image: nozhik, title: 'Нож измельчителя', l: '190', b: '50', s: '5', d: '20', price: 299, category: 0, },
    { id: 5, image: nozhik, title: 'Нож измельчителя', l: '173', b: '50', s: '4', d: '20', price: 299, category: 0, },
    { id: 6, image: nozhik, title: 'Нож измельчителя', l: '173', b: '50', s: '4', d: '18', price: 299, category: 0, },
    { id: 7, image: nozhik, title: 'Нож измельчителя', l: '125', b: '95', s: '6', d: '14x2', price: 299, category: 0, },
    { id: 8, image: nozhik, title: 'Нож измельчителя', l: '173', b: '50', s: '5', d: '20', price: 299, category: 0, },
    { id: 9, image: nozhik, title: 'Нож измельчителя', l: '155', b: '50', s: '5', d: '20', price: 299, category: 0, },
    { id: 10, image: nozhik, title: 'Нож измельчителя', l: '150', b: '60', s: '6', d: '11', price: 299, category: 0, },
    { id: 11, image: noPhoto, title: '127459A1 Граблина', price: 299, category: 1, },
    { id: 12, image: noPhoto, title: 'Подшипник деревянный (бук)', price: 299, category: 1, },
    { id: 13, image: noPhoto, title: 'Натяжитель деревянный (бук)', price: 299, category: 1, },
    { id: 14, image: noPhoto, title: 'Вал Ходового', price: 299, category: 1, },
    { id: 15, image: noPhoto, title: 'Вал Тормозного', price: 299, category: 1, },
    { id: 16, image: noPhoto, title: 'Вал Зернового', price: 299, category: 1, },
    { id: 17, image: noPhoto, title: 'Вал Колосового 19178C1', price: 299, category: 1, },
    { id: 18, image: noPhoto, title: 'Вал под игольчатый подшипник', price: 299, category: 1, },
    { id: 19, image: noPhoto, title: 'Шкварень', price: 299, category: 1, },
    { id: 20, image: noPhoto, title: 'Муфта Ветров', price: 299, category: 1, },
    { id: 21, image: noPhoto, title: 'Муфта ГСТ', price: 299, category: 1, },
    { id: 22, image: noPhoto, title: 'Муфта Ходового Вала', price: 299, category: 1, },
    { id: 23, image: noPhoto, title: 'Палец Консульного Шнека', price: 299, category: 1, },
    { id: 24, image: noPhoto, title: 'Вал Звездочка', price: 299, category: 1, },
    { id: 25, image: noPhoto, title: 'Натяжник', price: 299, category: 1, },
    { id: 26, image: noPhoto, title: 'Хомут Мотовило', price: 299, category: 1, },
    { id: 27, image: noPhoto, title: 'Тара Упаковочная Деревянная (Ящики)', price: 299, category: 2, },
  ]

  const meta = {
    title: 'Купить Противорез, Нож Противорежущий Измельчителя для Комбайнов АКРОС, ДОН, КИР, ТОРУМ',
    description: 'В нашем каталоге представлено 14 видов противорезов для комбайнов LEXION, NEW HOLLAND, CLASS, MEGA, VEKTOR, NEW HOLLAND, АКРОС, ТОРУМ, ТУКАНО.',
    canonical: 'https://stroyinvests.ru/catalog',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'ножи противорежущие, ножи противорезы, ножи для комбайнов, ножи для сельхоз техники, LEXION, NEW HOLLAND, CLASS, MEGA, VEKTOR, NEW HOLLAND, АКРОС, ТОРУМ, ТУКАНО'
      }
    }
  }

  const handleOpen = (event) => {
    if(!event.target.closest('.catalog').querySelector('.catalog__list').classList.contains('catalog__list_open')) {
      event.target.innerText = 'ЗАКРЫТЬ';
      event.target.closest('.catalog').querySelector('.catalog__list').classList.add('catalog__list_open');
    } else {
      event.target.innerText = 'ОТКРЫТЬ';
      event.target.closest('.catalog').querySelector('.catalog__list').classList.remove('catalog__list_open');
    }
  };

  return (
    <DocumentMeta {...meta}>
      <div className='content'>
        <Portal>
          <div className={`site__modal ${openModal ? 'show' : ''}`}>
            <ContactUs isModal={true} someInfo={info} isOrder={true}>
              <div className="request__cross"><button onClick={() => setOpenModal(false)} className="request__cross-button"><img src={crossIcon} alt="Закрыть Окно" /></button></div>
            </ContactUs>
          </div>
        </Portal>
        <section className="page__wrapper">
          <h1 className="page__title">Каталог</h1>
          <p className="page__subtitle">
            У нас <strong>14</strong> вариантов ножей измельчителей для комбайнов <strong>LEXION, NEW HOLLAND, CLASS, MEGA, VEKTOR, NEW HOLLAND, АКРОС, ТОРУМ, ТУКАНО</strong> и <strong>27</strong> видов ящиков для упаковки аккумуляторов и любые ящики по вашим размерам и чертежам
          </p>
        </section>
        {
          categories.map((category, index) => {
            return (
              <section className="catalog" key={index}>
                <div className="catalog__header">
                  <div className="catalog__header-title">
                    <h2 className="catalog__title">{category.categoryTitle}</h2>
                    <p className="catalog__subtitle">
                      {category.description}
                    </p>
                  </div>
                  <button className="catalog__header-button" onClick={(event) => { handleOpen(event) }}>
                    ОТКРЫТЬ
                  </button>
                </div>
                <div key={index} className={`catalog__list`}>
                  {
                    catalog.map((catalogItem, index) => {
                      if (catalogItem.category === category.id) {
                        if (catalogItem.l && catalogItem.b && catalogItem.s && catalogItem.d) {
                          return (
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
                                <button onClick={
                                  () => {
                                    setOpenModal(true);
                                    setInfo(`${catalogItem.title} + Длина (L): ${catalogItem.l}мм + Ширина (B): ${catalogItem.b}мм + олщина (s): ${catalogItem.s}мм + Диаметр отверстия (d): ${catalogItem.d}мм, стоимость на сайте была ${catalogItem.price}`)
                                  }
                                }
                                  className="catalog__order-button">Заказать от <strong>{catalogItem.price}₽</strong></button>
                              </div>
                            </div>
                          )
                        } else {
                          return (
                            <div className="catalog__list-item" key={index}>
                              <img src={catalogItem.image} alt={catalogItem.title} className="catalog__list-item-img" />
                              <div className="catalog__list-item-body">
                                <span className="catalog__list-item-category">
                                  {categories[catalogItem.category].title}
                                </span>
                                <h3 className="catalog__list-item-name">{catalogItem.title}</h3>
                                <button onClick={
                                  () => {
                                    setOpenModal(true);
                                    setInfo(`${catalogItem.title}, стоимость, которая отображалась на сайте ${catalogItem.price}`)
                                  }
                                }
                                  className="catalog__order-button">Заказать от <strong>{catalogItem.price}₽</strong></button>
                              </div>
                            </div>
                          )
                        }
                      }
                      return null;
                    })
                  }
                </div>
              </section>
            )
          })
        }
      </div>
    </DocumentMeta>
  )
}

export default Catalog


