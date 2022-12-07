import React from 'react'
import Slider from './Slider';
import useWindowDimensions from './WindowSize';

const Delivery = () => {

    const { width } = useWindowDimensions();

    let space = 30;

    if (width <= "438") {
      space = 15;
    }

    let reviews = [
        {
          title: 'Сергей', 
          avatar: 'https://static.avito.ru/stub_avatars/%D0%A1/4_256x256.png', 
          text: 'Будка хорошая'
        },
        {
          title: 'Дмитрий', 
          avatar: 'https://static.avito.ru/stub_avatars/%D0%94/13_256x256.png', 
          text: 'Человек оперативно ответил и помог.'
        },
        {
          title: 'MyBestCar', 
          avatar: 'https://static.avito.ru/stub_avatars/M/9_256x256.png', 
          text: 'Все как хотел- быстро и точно'
        },
        {
          title: 'Вячеслав', 
          avatar: 'https://static.avito.ru/stub_avatars/%D0%92/13_256x256.png', 
          text: 'Все быстро и аккуратно, рекомендую 👍'
        },
        {
          title: 'Дмитрий', 
          avatar: 'https://29.img.avito.st/image/1/1.qFxn6La2ErVRT4azO6q1FYhLBL_ZywI31UsG.O0gB-da_mh5ClhSsgZGPfGW0qh0uy4QaxA2wDZNoDqw', 
          text: 'Быстро, качественно, в срок. Спасибо.'
        },
        {
          title: 'Вячеслав Слепов', 
          avatar: 'https://48.img.avito.st/image/1/1.UbSwH7a2612GuH9bnjJzxxu8_VcOPPvfArz_.gIoxxxmQWCl09FvE0KsHZNlIOJWUntXgM1hVurpGYwk', 
          text: '👍. Гидратаран удивил, установил и без электричества и бензина качает воду, сейчас это актуально и иметь преимущество работать автономная без участвия человека.'
        },
        {
          title: 'Сергей Чарук', 
          avatar: 'https://50.img.avito.st/image/1/1.M5ru9ba2iXPYUh11hIlIlRxWn3lQ1pnxXFad.sg4jCCMNTiflnekBZ9_fEa4-t8wi-4qYoaKJ8S7J9wY', 
          text: 'Обратился к ним с просьбой сварить офисное кресло, сделали все аккуратно в тот же день, рекоммендую'
        },
      ]
      
  return (
    <div className="delivery content">
    <div className="delivery__bg">
      <div className="delivery__bg-box"></div>
    </div>
    <h2 className='delivery__title'>
      Доставка
    </h2>
    <p className="delivery__subtitle">
      Доставка осуществляется в любую точку России транспортными компаниями ПЭК, СДЭК, Почтой России. Наши менеджеры помогут рассчитать её стоимость, также возможна доставка по городу Саратов или самовывоз с ул. Азина 81.
    </p>
    <h3>Отзывы Avito</h3>
    <Slider slides={reviews} space={space} sliderStyle={'delivery__slider'} sliderId={'delivery'} sliderType={'delivery'} />
  </div>
  )
}

export default Delivery;