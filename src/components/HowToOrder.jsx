import React from 'react'
import Parser from 'html-react-parser';

const HowToOrder = () => {
    let steps = [
        {index: '1.', title: 'Заявка', text: `
        Оставьте заявку на сайте через 
        форму ниже или напишите 
        нам в <a href="viber://chat?number=%2B79272238440" target="_blank">Viber</a>, <a href="https://t.me/stroyinvest" target="_blank">Telegram</a>, <a href="https://api.whatsapp.com/send?phone=79272238440" target="_blank">WhatsApp</a>, <a href="mailto:stroinvest-s@yandex.ru" target="_blank">Электронную почту</a>, 
        также Вы можете позвонить нам по телефону <a href="">+7-917-308-0937</a>`},
        {index: '2.', title: 'Заказ и Оплата',  text: 'Наш сотрудник свяжется с Вами для согласования цены, сроков поставки и материала изделия, поможет выбрать удобный способ оплаты.'},
        {index: '3.', title: 'Отправка',  text: 'Как только заказ будет готов мы отправляем изделие на доставку собственным транспортом, если Вы находитесь в Саратове или транспортной компанией, например ПЭК или СДЭК, если Вы находитесь в другом регионе России.'},
        {index: '4.', title: 'Получение',  text: 'Поздравляю! Ваш заказ доставлен.'},
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