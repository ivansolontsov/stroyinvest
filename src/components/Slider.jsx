import React from 'react'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import crossIcon from '../assets/images/icons/cross.svg'
import { Portal } from 'react-portal';
import 'swiper/css';


const Slider = ({ slides, space, sliderStyle, sliderId, sliderType, setWidth }) => {

    const [galleryOpen, setGalleryOpen] = React.useState(false);
    const [picture, setPicture] = React.useState('');

    let navLeft = `.${sliderId}-left`;
    let navRight = `.${sliderId}-right`;
    let navLeftButtonClassNames = `slider__arrow slider__arrow-left ${sliderId}-left`;
    let navRightButtonClassNames = `slider__arrow slider__arrow-right ${sliderId}-right`;

    return (
        <div className='slider__wrapper' style={{ maxWidth: setWidth }}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={space}
                slidesPerView={'auto'}
                preloadImages={false}
                loop={true}
                autoplay={{
                    pauseOnMouseEnter: true,
                }}
                navigation={{
                    prevEl: navLeft,
                    nextEl: navRight,
                    disabledClass: 'slider__arrow-disabled',
                }}
                className={sliderStyle}>
                {
                    slides.map((slides, index) => {
                        return (
                            (() => {
                                if (sliderType === 'delivery') {
                                    return (
                                        <SwiperSlide className="delivery__slider-slide" key={index}>
                                            <div className="delivery__slide-header">
                                                <img src={slides.avatar} alt={slides.title} className="delivery__slide-avatar" />
                                                <h3 className="delivery__slide-title">{slides.title}</h3>
                                            </div>
                                            <p className="delivery__slide-body">
                                                {slides.text}
                                            </p>
                                        </SwiperSlide>
                                    )
                                } else if (sliderType === "gallery") {
                                    return (
                                        <SwiperSlide key={index} className='gallery__slide'>
                                            <img src={slides.image} className='gallery__slide-bg' loading="lazy" alt={slides.title} onClick={() => { setGalleryOpen(true); setPicture(slides.image); }} />
                                            {/* <h3 className="gallery__slide-title">{slides.title}</h3> */}
                                        </SwiperSlide>
                                    )
                                }
                            })()
                        )
                    })
                }
                {galleryOpen
                    ? <Portal>
                        <div className="gallery__modal" onClick={() => setGalleryOpen(false)}>
                            <div className="gallery__popup">
                                <img src={picture} className='gallery__slide-big' alt={slides.title} />
                                <div className="request__cross"><button onClick={() => setGalleryOpen(false)} className="request__cross-button"><img src={crossIcon} alt="Закрыть Окно" /></button></div>
                            </div>
                        </div>
                    </Portal>
                    : ""
                }
            </Swiper>
            <button className={navLeftButtonClassNames}>
                <svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.3536 4.35355C27.5488 4.15829 27.5488 3.84171 27.3536 3.64645L24.1716 0.464466C23.9763 0.269204 23.6597 0.269204 23.4645 0.464466C23.2692 0.659728 23.2692 0.976311 23.4645 1.17157L26.2929 4L23.4645 6.82843C23.2692 7.02369 23.2692 7.34027 23.4645 7.53553C23.6597 7.7308 23.9763 7.7308 24.1716 7.53553L27.3536 4.35355ZM0 4.5H27V3.5H0V4.5Z" fill="#0040E6" />
                </svg>
            </button>
            <button className={navRightButtonClassNames}>
                <svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.3536 4.35355C27.5488 4.15829 27.5488 3.84171 27.3536 3.64645L24.1716 0.464466C23.9763 0.269204 23.6597 0.269204 23.4645 0.464466C23.2692 0.659728 23.2692 0.976311 23.4645 1.17157L26.2929 4L23.4645 6.82843C23.2692 7.02369 23.2692 7.34027 23.4645 7.53553C23.6597 7.7308 23.9763 7.7308 24.1716 7.53553L27.3536 4.35355ZM0 4.5H27V3.5H0V4.5Z" fill="#0040E6" />
                </svg>
            </button>
        </div>
    )
}

export default Slider;