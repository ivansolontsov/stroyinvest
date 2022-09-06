import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Parser from 'html-react-parser';

export const ContactUs = () => {
  const form = useRef();
  const [formState, setFormState] = React.useState(false);
  const [blockError, setBlockError] = React.useState(false);
  const [title, setTitle] = React.useState('Связаться с нами');
  const [subtitle, setSubTitle] = React.useState("Оставьте ваше имя и  любую контактную информацию <strong>(телефон, e-mail)</strong>, мы свяжемся с вами в наши рабочие часы для уточнения всей информации.");
  const [buttonText, setButtonText] = React.useState("Отправить");
  const [buttonState, setButtonState] = React.useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_alpxpdn 123', 'template_jnx110m 123', form.current, 'lokp0UZx98PJrVUzE 123')
      .then((result) => {
        setFormState(true);
        setTitle('Заявка Отправлена!')
        setSubTitle('Скоро мы с вами свяжемся, спасибо большое за заявку!')
        setButtonText('Успешно')
        setButtonState(false)
      }, (error) => {
        setBlockError(true);
        setTitle('Ошибка!')
        setSubTitle(`Текст Ошибки: ${error.text}`)
        setButtonText('Отправить Заново')
        setButtonState(true)
        console.log(error);
      });
  };

  return (
    <div className="request content">
        <div className={`request__wrapper ${formState ? 'success' : ''} ${blockError ? 'error' : ''}`}>
            <h2 className="request__title">
                {title}
            </h2>
            <p className="request__subtitle">
                {Parser(subtitle)}
            </p>
            <form ref={form} onSubmit={sendEmail} className="request__form">
                <input type="text" name="user_name" id="formInfo" placeholder="Введите Ваше имя и номер телефона" className="request__input" required min="3" max="32"/>
                <input type="submit" value={buttonText} className={`request__submit-button ${buttonState ? '' : 'disabled'}`} />
            </form>
        </div>
    </div>

  );
};