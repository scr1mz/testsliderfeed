'use client'
import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { Slide } from '../Slide/Slide'
import './Slider.scss'

// Интерфейс для данных слайда
interface Slide {
    id: number;
    types: string;
    img: string;
    title: string;
    date: string;
    shape: string;
}

// props с типизированным массивом слайдов
interface SliderProps {
    slides: Slide[]
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
    const swiperRef = useRef<any | null>(null);
    return (
        <div className="slider">
            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={2}
                autoplay={{ delay: 10000 }}
                navigation={{
                    nextEl: '.custom-next-button',
                    prevEl: '.custom-prev-button',
                }}
                onSwiper={(swiper: any) => (swiperRef.current = swiper)}
                breakpoints= {{
                    576: {
                        slidesPerView: 2,
                    },
                    700: {
                        slidesPerView: 3,
                    },
                    1000: {
                        slidesPerView: 4,
                    }
                }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <Slide {...slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
                <div className={'nav-arrows'}>
                    <button
                        className="custom-prev-arrow arrow"
                        onClick={() => swiperRef.current?.slidePrev()}
                    />
                    <button
                        className="custom-next-arrow arrow"
                        onClick={() => swiperRef.current?.slideNext()}
                    />
                </div>
        </div>
    )
}

export default Slider
