import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Parser from 'html-react-parser';
import successIcon from '../assets/images/icons/success.svg'

export const ContactUs = ({isModal, children, someInfo, isOrder}) => {
  const form = useRef();
  const [formStatus, setFormStatus] = React.useState(false);
  const [blockError, setBlockError] = React.useState(false);
  const [title, setTitle] = React.useState('Связаться с нами');
  const [subtitle, setSubTitle] = React.useState("Оставьте Ваше имя и <strong>номер телефона</strong>. Мы свяжемся с Вами в рабочие часы <strong>(Пн-Пт 8:00 - 18:00, Сб, Вс - Выходные)</strong> для уточнения деталей заказа.");
  const [buttonText, setButtonText] = React.useState("Отправить");  
  const [buttonState, setButtonState] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    setTimeout(() => {
            emailjs.sendForm('service_alpxpdn', 'template_jnx110m', form.current, 'lokp0UZx98PJrVUzE')
            .then((result) => {
                setLoading(false)
                setFormStatus(true);
                setTitle('Заявка Отправлена!')
                setSubTitle('Скоро мы с вами свяжемся, спасибо большое за заявку!')
                setButtonText('')
                setButtonState(false)
            }, (error) => {
                setLoading(false)
                setBlockError(true);
                setTitle('Ошибка!')
                setSubTitle(`Текст Ошибки: ${error.text}`)
                setButtonText('Отправить Заново')
                setButtonState(true)
                console.log(error);
            });
    }, 500);
  };

  return (
    <div className="request content">
        <div className={`request__wrapper ${formStatus ? 'success' : ''} ${blockError ? 'error' : ''} ${isModal ? 'request__wrapper-border' : ''}`}>
            {isModal 
            ? children
            : ''}
            <h2 className="request__title">
            {isOrder
            ? "Оставить Заказ"
            : `${title}`
            }
            </h2>
            <p className="request__subtitle">
                {Parser(subtitle)}
            </p>
            <form ref={form} onSubmit={sendEmail} className="request__form">
                <input type="text" name="user_name" id="userName" placeholder="Введите Ваше имя" className="request__input" required min="1" max="32"/>
                <input type="tel" name="phone_number" id="userPhone" placeholder="Номер телефона" className="request__input" required min="3" max="32"/>
                <input type="hidden" name="user_text" id="userText" value={someInfo}/>
                <button className={`request__submit-button ${buttonState ? '' : 'disabled'}`}>
                    {loading ? <div className="lds-ripple"><div></div><div></div></div> : `${buttonText}`}
                    {formStatus ? <img src={successIcon} alt={buttonText} /> : ``}
                </button>
            </form>
        </div>
    </div>

  );
};