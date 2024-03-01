"use client"
import React from 'react';
import { useState } from 'react';
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";


const Card = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length === 0) {
        return null;
    }

    return (
        <div>
            <section className='slider flex flex-col gap-4  flex-wrap ' style={{height:"fit-content",width:"70vw"}}>
                {slides.map((slide, index) => (
                    <div
                        className={index === current ? 'slideactive opacity-100 transition duration-1000' : 'slide opacity-0 transition duration-1000  '}
                        key={index}
                    >
                        {index === current && (
                            <div className='detail flex flex-col mt-8' style={{gap:"10px"}}>
                                <p className='comments' style={{width:"90%",fontSize:"1.6rem"}}>{slide.comments}</p>
                                <p className='by ' style={{fontSize:"1.3rem",paddingLeft:"10px",color:"#6995B1"}}>{slide.by}</p>
                            </div>
                        )}
                    </div>
                ))}
                <div className='arrows flex align-start justify-start' style={{height:"30%",color:"#DBDBDB",gap:"30px"}}>
                    <HiArrowSmallLeft className='left-arrow' style={{left:"32px",fontSize:"2rem",color:"#DBDBDB",zIndex:"10",cursor:"pointer",userSelect:"none"}} onClick={prevSlide} />
                    <HiArrowSmallRight className='right-arrow' style={{right:"32px",fontSize:"2rem",color:"#DBDBDB",zIndex:"10",cursor:"pointer",userSelect:"none"}} onClick={nextSlide} />
                
                </div>
            </section>
        </div>
    );
};

export default Card;