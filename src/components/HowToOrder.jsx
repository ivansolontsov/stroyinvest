import React from 'react'
import Parser from 'html-react-parser';

const HowToOrder = () => {
    let steps = [
        {index: '1.', title: 'Заявка', text: `
        Оставьте заявку на нашем сайте через 
        форму ниже или напишите 
        нам в <a href="">Viber</a>, <a href="">Telegram</a>, <a href="">WhatsApp</a>, <a href="">Электронную почту</a>, 
        так же можете позвонить нам по номеру телефона <a href="">+7-917-308-0937</a>`},
        {index: '2.', title: 'Заказ и Оплата',  text: 'Один из наших сотрудников свяжется с Вами для согласования цены, сроков поставки и материала изделия, вместе выберем удобный вам способ оплаты.'},
        {index: '3.', title: 'Отправка',  text: 'Сразу по готовности вашего заказа, мы отправляем готовое изделие на доставку на собственном автомобиле, если вы находитесь в Саратове или транспортной компанией например ПЭК или СДЭК, если вы находитесь в другом регионе России.'},
        {index: '4.', title: 'Получение',  text: 'Поздравляю, ваш заказ доставлен, вы можете <a href="">оставить нам отзыв на Яндекс</a>'},
    ]
  return (
    <div className="howtoorder content">
        <div className="howtoorder__bg"></div>
        <h2 className="howtoorder__title">
            Как Заказать?
        </h2>
        <ol className="howtoorder__list">
            {
                steps.map((step, index) => (
                    <li key={index}>
                        <div className="howtoorder__list-item-wrapper">
                            <span>{step.index}</span>
                            <h3>{step.title}</h3>
                            <p>{Parser(step.text)}</p>
                        </div>
                    </li>
                )) 
            }
        </ol>
    </div>
  )
}

export default HowToOrder