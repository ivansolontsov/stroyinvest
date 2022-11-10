import React from 'react'
import '../css/about/about.scss';
import DocumentMeta from 'react-document-meta'

const About = () => {  

  // const aboutList = [
  //   {title: 'Директор', value: 'Шитяков Сергей Владимирович'},
  //   {title: 'Телефон', value: '79272238440, Шитяков Сергей Владимирович'},
  //   {title: 'КПП', value: '645101001'},
  //   {title: 'ОГРН', value: '1116451001138'},
  //   {title: 'ИНН', value: '6451428953'},
  //   {title: 'ЮР. АДРЕС', value: 'Россия, г. Саратов, улица имени Азина В.М., дом 81'},
  // ]
 
  const meta = {
    title: 'О Нас | ООО "СТРОЙИНВЕСТ-С"',
    description: 'I am a description, and I can create multiple tags',
    canonical: 'http://example.com/path/to/page',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'стройинвест, позвонить, контакты, номер, адрес'
      }
    }
  }


  return (
    <DocumentMeta {...meta}>
      <div className='content content__bg'>
        <section className="page__wrapper page__wrapper_extended">
          <h1 className="page__title">О Нас</h1>
          <div className="page__subtitle about__subtitle">
            <p>Уважаемые коллеги, партнеры, клиенты, мы рады приветствовать Вас!</p>
            <p>Компания «Стройинвест-С» была основана 25 марта 2011 года. Уже более 10 лет предприятие возглавляет 
              Шитяков Сергей Владимирович. За годы работы на производстве сложился 
              коллектив настоящих профессионалов своего дела. 
              Главная цель компании - создавать лучшее оборудования, 
              используя собственный опыт, мировую практику и пожелания заказчика.
            </p>  
            <p>Основными направлениями деятельности компании являются:</p>   
            <ul>
              <li>производство и механическая обработка металлических изделий;</li>
              <li>производство деревянных изделий для нужд промышленности;</li>
              <li>производство индивидуальных изделий из дерева и металла по запросу клиента;</li>
              <li>лазерная резка.</li>
            </ul>
            <p>
            Компания имеет собственные механические мастерские, площадью 300 м², расположенные на земельном участке 1000 м², а также станки и оборудование для производства работ.
            В собственности компании есть свой автопарк для отгрузки оборудования, что значительно упрощает доставку до клиента и снижает расходы на логистику.
            Наши менеджеры будут рады ответить на любые интересующие Вас вопросы и помочь в выборе необходимого товара. 
            Надеемся на долговременное и взаимовыгодное сотрудничество! 
            </p>
          </div>
          {/* <ul className="about__contact-list">
            {
              aboutList.map((listItem, index) => {
                return(
                  <li className="about__contact-list-item" key={index}>
                  <span>{listItem.title}: </span>
                  {listItem.value}
                  </li>
                )
              })
            }
          </ul> */}
          <div className="about__photo">
            <div className="about__photo-title">
              <span>Шитяков</span> 
              Сергей Владимирович
            </div>
          </div>
        </section>
      </div>
    </DocumentMeta>
  )
}

export default About