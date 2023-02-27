import React from 'react'
import Slider from './Slider';
import useWindowDimensions from './WindowSize';
import img1 from '../assets/images/gallery/1.webp' 
import img2 from '../assets/images/gallery/2.webp' 
import img3 from '../assets/images/gallery/3.webp' 
import img4 from '../assets/images/gallery/4.webp' 
import img5 from '../assets/images/gallery/5.webp' 
import img6 from '../assets/images/gallery/6.webp' 
import img7 from '../assets/images/gallery/7.webp' 
import img8 from '../assets/images/gallery/8.webp' 
import img9 from '../assets/images/gallery/9.webp' 
import img10 from '../assets/images/gallery/10.webp' 
import img11 from '../assets/images/gallery/11.webp' 
import img12 from '../assets/images/gallery/12.webp' 
import img13 from '../assets/images/gallery/13.webp' 
import img14 from '../assets/images/gallery/14.webp' 
import img15 from '../assets/images/gallery/15.webp' 
import img16 from '../assets/images/gallery/16.webp' 
import img17 from '../assets/images/gallery/17.webp' 
import img18 from '../assets/images/gallery/18.webp' 
import img19 from '../assets/images/gallery/19.webp' 
import img20 from '../assets/images/gallery/20.webp'
import img21 from '../assets/images/gallery/21.webp' 
import img22 from '../assets/images/gallery/22.webp'  



const Gallery = () => {

    const { width } = useWindowDimensions();

    let space = 30;

    if (width <= "438") {
      space = 15;
    }
    const imageAlt = 'Изображение галереи';

    let gallery = [
        { title: imageAlt, image: img1, },
        { title: imageAlt, image: img2, },
        { title: imageAlt, image: img3, },
        { title: imageAlt, image: img4, },
        { title: imageAlt, image: img5, },
        { title: imageAlt, image: img6, },
        { title: imageAlt, image: img7, },
        { title: imageAlt, image: img8, },
        { title: imageAlt, image: img9, },
        { title: imageAlt, image: img10, },
        { title: imageAlt, image: img11, },
        { title: imageAlt, image: img12, },
        { title: imageAlt, image: img13, },
        { title: imageAlt, image: img14, },
        { title: imageAlt, image: img15, },
        { title: imageAlt, image: img16, },
        { title: imageAlt, image: img17, },
        { title: imageAlt, image: img18, },
        { title: imageAlt, image: img19, },
        { title: imageAlt, image: img20, },
        { title: imageAlt, image: img21, },
        { title: imageAlt, image: img22, },
      ];
      
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