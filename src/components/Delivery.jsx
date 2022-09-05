import React from 'react'
import Slider from './Slider';

const Delivery = () => {
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
    <div className="delivery">
    <div className="delivery__bg">
      <div className="delivery__bg-box"></div>
    </div>
    <h2 className='delivery__title'>
      Доставка по России
    </h2>
    <p className="delivery__subtitle">
      Мы можем отправить любое наше изделие нашим покупателем 
      со всей России, мы работаем с транспортными компаниями ПЭК, СДЭК.
      Стоимость доставки рассчитывается после составления заявки нашими сотрудниками, так же возможна доставка по городу или самовывоз с ул.Азина 81, город Саратов.
    </p>
    <Slider slides={reviews} space={27} sliderStyle={'delivery__slider'} sliderId={'delivery'} sliderType={'delivery'} />
  </div>
  )
}

export default Delivery;