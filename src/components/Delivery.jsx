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
          title: 'Ольга Кузнецова', 
          avatar: 'https://sun7-14.userapi.com/s/v1/ig2/Uhwb-GISd6M5Q62WIOgZnjGn151MdxdmCSkfSOTwHES4yoSQF1Cpwo0YkOO02DbQoiryFr3SAec4zaoasPpP4YTt.jpg?size=100x100&quality=95&crop=168,2,850,850&ava=1', 
          text: 'Все дошло в целости и сохранности, спасибо большое за вашу работу!'
        },
        {
          title: 'Ольга Кузнецова', 
          avatar: 'https://sun7-14.userapi.com/s/v1/ig2/Uhwb-GISd6M5Q62WIOgZnjGn151MdxdmCSkfSOTwHES4yoSQF1Cpwo0YkOO02DbQoiryFr3SAec4zaoasPpP4YTt.jpg?size=100x100&quality=95&crop=168,2,850,850&ava=1', 
          text: 'Все дошло в целости и сохранности, спасибо большое за вашу работу!'
        },
        {
          title: 'Ольга Кузнецова', 
          avatar: 'https://sun7-14.userapi.com/s/v1/ig2/Uhwb-GISd6M5Q62WIOgZnjGn151MdxdmCSkfSOTwHES4yoSQF1Cpwo0YkOO02DbQoiryFr3SAec4zaoasPpP4YTt.jpg?size=100x100&quality=95&crop=168,2,850,850&ava=1', 
          text: 'Все дошло в целости и сохранности, спасибо большое за вашу работу!'
        },
        {
          title: 'Ольга Кузнецова', 
          avatar: 'https://75.img.avito.st/avatar/social/256x256/12716835675.jpg', 
          text: 'Все дошло в целости и сохранности, спасибо большое за вашу работу!'
        },
      ]
      
  return (
    <div className="delivery content">
    <div className="delivery__bg">
      <div className="delivery__bg-box"></div>
    </div>
    <h2 className='delivery__title'>
      Доставка по России
    </h2>
    <p className="delivery__subtitle">
      Мы можем отправить наше изделие в любую точку России. Работаем с транспортными компаниями ПЭК, СДЭК.
      Стоимость доставки рассчитывается индивидуально для каждого заказа, также возможна доставка по городу или самовывоз с ул.Азина 81, город Саратов.
    </p>
    <Slider slides={reviews} space={space} sliderStyle={'delivery__slider'} sliderId={'delivery'} sliderType={'delivery'} />
  </div>
  )
}

export default Delivery;