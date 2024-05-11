// To inform next js, this is a client component 
"use client";
import React,{useState} from 'react';
import Image from 'next/image';  // Import the Image component
import  "../../styles/testimonial.css";
import { testimonialsData } from '../../public/data/TestimonialsData';
import { useRouter } from 'next/navigation';

const Testimonials=() =>{
  const [selected,setSelected] = useState(0);
  const tLength=testimonialsData.length;
  const router = useRouter()
  return (
    <div className="container" id='about'>
    <div className="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span>About <span className='highlights'>us</span></span>
        <span>{testimonialsData[selected].name}</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span>
          {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
        <svg 
        onClick={() => {
          selected===0
          ? setSelected(tLength-1)
          : setSelected((prev) => prev-1)
        }}
         xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none">
            <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#6f55f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg 
        onClick={() => {
          selected===tLength-1
         ? setSelected(0)
          : setSelected((prev) => prev+1)
        }}
        xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none">
            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#6f55f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
      </div>
      
    </div>
      <div className='d-flex justify-content-center align-items-center'>
        <button className='btn btn-light border rounded px-4' onClick={()=>router.push("./About")}>See More...</button>
      </div>
    </div>
  )
}

export default Testimonials;
