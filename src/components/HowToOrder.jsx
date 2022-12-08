import React from 'react'
import Parser from 'html-react-parser';

const HowToOrder = ({ withBg }) => {
    let steps = [
        {
            index: '1.', title: 'Заявка', text: `
        Оставьте заявку на сайте через 
        форму ниже или напишите 
        нам в <a href="viber://chat?number=%2B79272238440" target="_blank">Viber</a>, <a href="https://t.me/stroyinvests77" target="_blank">Telegram</a>, <a href="https://api.whatsapp.com/send?phone=79272238440" target="_blank">WhatsApp</a>, <a href="mailto:stroinvest-s@yandex.ru" target="_blank">Электронную почту</a>, 
        также Вы можете позвонить нам по телефону <a href="tel:+79272238440">+79272238440</a>`},
        { index: '2.', title: 'Заказ и Оплата', text: 'Наш сотрудник свяжется с Вами для согласования цены, сроков поставки и материала изделия, поможет выбрать удобный способ оплаты.' },
        { index: '3.', title: 'Отправка', text: 'Как только заказ будет готов мы отправляем изделие на доставку собственным транспортом, если Вы находитесь в Саратове или транспортной компанией, например ПЭК или СДЭК, если Вы находитесь в другом регионе России.' },
        { index: '4.', title: 'Получение', text: 'Поздравляю! Ваш заказ доставлен.' },
    ]
    return (
        <div className="howtoorder content">
            {withBg && (
                <div className="howtoorder__bg"></div>
            )}
            <h2 className="howtoorder__title">
                Как Заказать?
            </h2>
            <ol className="howtoorder__list">
                {
                    steps.map((step, index) => (
                        <li className="howtoorder__list-item-wrapper" key={index}>
                            {/* <span>{step.index}</span> */}
                            <h3>{step.index} {step.title}</h3>
                            <p>{Parser(step.text)}</p>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default HowToOrder