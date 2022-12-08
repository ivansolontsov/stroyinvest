import React from 'react'
import '../css/catalog/catalog.scss';
import { CatalogItem } from '../components/catalog/CatalogItem'
import HowToOrder from '../components/HowToOrder'
import nozhik from '../assets/images/catalog/nozhi.png'
import noPhoto from '../assets/images/catalog/noPhoto.webp'
import DocumentMeta from 'react-document-meta'
import { ContactUs } from '../components/ContactUs'

const Catalog = () => {
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
    { id: 1, image: nozhik, title: 'Нож противорежущий для комбайнов Claas', l: '190', b: '50', s: '4', d: '10', price: 400, category: 0, combine: [1] },
    { id: 2, image: nozhik, title: 'Нож противорежущий для комбайнов CASE 1322233C2, 51011.1', l: '175', b: '40', s: '4', d: '11', price: 330, category: 0, combine: [2] },
    { id: 3, image: nozhik, title: 'Нож противорежущий для комбайнов Tucano, Mega, Lexion 060030.0 (42253)', l: '173', b: '50', s: '4', d: '20', price: 330, category: 0, combine: [3, 4, 5] },
    { id: 4, image: nozhik, title: 'Нож противорежущий для комбайнов', l: '190', b: '50', s: '5', d: '20', price: 550, category: 0, combine: [] },
    { id: 5, image: nozhik, title: 'Нож противорежущий для комбайнов New Holland', l: '170', b: '50', s: '5', d: '20', price: 400, category: 0, combine: [6] },
    { id: 6, image: nozhik, title: 'Нож противорежущий для комбайнов Акрос, Вектор, Торум 42228.10', l: '173', b: '50', s: '4', d: '18', price: 330, category: 0, combine: [7, 8, 9] },
    { id: 7, image: nozhik, title: 'Нож противорежущий для комбайнов CLAAS 2166/2388/5088/7088', l: '125', b: '95', s: '6', d: '14x2', price: 825, category: 0, combine: [1] },
    { id: 8, image: nozhik, title: 'Нож противорежущий для комбайнов CASE 5102401 1994760C4', l: '155', b: '50', s: '5', d: '20', price: 825, category: 0, combine: [2] },
    { id: 9, image: nozhik, title: 'Нож противорежущий для комбайнов Lexion 460', l: '220', b: '60', s: '5', d: '20', price: 825, category: 0, combine: [5] },
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

  return (
    <DocumentMeta {...meta}>
      <div className='content'>
        <section className="page__wrapper">
          <h1 className="page__title">Каталог</h1>
          <p className="page__subtitle">
            У нас <strong>14</strong> вариантов ножей измельчителей для комбайнов <strong>LEXION, NEW HOLLAND, CLASS, MEGA, VEKTOR, NEW HOLLAND, АКРОС, ТОРУМ, ТУКАНО</strong> и <strong>27</strong> видов ящиков для упаковки аккумуляторов и любые ящики по вашим размерам и чертежам
          </p>
        </section>
        {
          categories.map((category, index) => {
            return (
              <CatalogItem title={category.title} subtitle={category.description} key={index} products={catalog} categoryId={category.id} />
            )
          })
        }

        <HowToOrder />
        <ContactUs isOrder={true} />
      </div>
    </DocumentMeta>
  )
}

export default Catalog


