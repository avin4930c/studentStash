import React from 'react'
import Card from './card'
import { SliderData } from './SliderData'
import { FaQuoteRight } from "react-icons/fa";

const page = () => {
    
  return (
    <div className='Comments w-90vw h-40vh flex items-center justify-center gap-8'>
      <FaQuoteRight  className='rightquotes text-gray-400 pl-8' style={{height:"220px",width:"220px" }}/>
      <Card slides = {SliderData} className="cards" style={{height:"50px",width:"80px"}} />
    </div>
  )
}

export default page