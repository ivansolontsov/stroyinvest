import React from 'react'
import Slider from './Slider';
import useWindowDimensions from './WindowSize';

const Gallery = () => {

    const { width } = useWindowDimensions();

    let space = 30;

    if (width <= "438") {
      space = 15;
    }

    let gallery = [
        {
          title: 'Будка для собаки', 
          image: 'https://glav-dacha.ru/wp-content/uploads/2018/11/svoimi-rukami-budka-dlya-sobaki-2.jpg',
        },
        {
            title: 'Будка для собаки', 
            image: 'https://glav-dacha.ru/wp-content/uploads/2018/11/svoimi-rukami-budka-dlya-sobaki-2.jpg',
        },
        {
            title: 'Будка для собаки', 
            image: 'https://glav-dacha.ru/wp-content/uploads/2018/11/svoimi-rukami-budka-dlya-sobaki-2.jpg',
        },
        {
            title: 'Будка для собаки', 
            image: 'https://glav-dacha.ru/wp-content/uploads/2018/11/svoimi-rukami-budka-dlya-sobaki-2.jpg',
        },
        {
            title: 'Будка для собаки', 
            image: 'https://glav-dacha.ru/wp-content/uploads/2018/11/svoimi-rukami-budka-dlya-sobaki-2.jpg',
        },
        {
            title: 'Будка для собаки', 
            image: 'https://glav-dacha.ru/wp-content/uploads/2018/11/svoimi-rukami-budka-dlya-sobaki-2.jpg',
        },
        {
            title: 'Будка для собаки', 
            image: 'https://glav-dacha.ru/wp-content/uploads/2018/11/svoimi-rukami-budka-dlya-sobaki-2.jpg',
        },
      ]
      
  return (
    <div className="gallery content">
    <h2 className='gallery__title'>
      Наши Изделия
    </h2>
    <Slider slides={gallery} space={space} sliderStyle={'gallery__slider'} sliderId={'gallery'} sliderType={'gallery'} setWidth={'100%'} />
  </div>
  )
}

export default Gallery;