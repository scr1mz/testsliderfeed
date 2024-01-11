import React from "react";
import Image from "next/image"
import "./Slide.scss"

interface SlideProps {
    id: number;
    types: string;
    img: string;
    title: string;
    date: string;
    shape: string;
}

export const Slide: React.FC<SlideProps> = ({ id, types, img, title, date, shape }) => {
    const isDoubleSlide = title.length > 35;
    const slideType = isDoubleSlide ? "double" : "single";

    return (
        <div className={`slide ${slideType} shape-${shape}`}>
            <img src={img} alt={`Slide ${id}`}/>
            <p>{title}</p>
            <p>{date}</p>
        </div>
    );
};
