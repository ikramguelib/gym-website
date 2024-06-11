"use client"

import Hero from "../../components/UI/Hero";
import Exercises from "../../components/UI/Exercises";
import Start from "../../components/UI/Start";
import Pricing from "../../components/UI/Pricing";
import Testimonials from "../../components/UI/Testimonials";
import Comment from "../../components/UI/comment";
import * as React from 'react';
import { useEffect } from "react";
import Aos from "aos";


function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  
  return (
    <main className="overflow-x-hidden">
      <Hero/>
      <Start/>
      <Exercises/>
        
      <Pricing/>
      <Testimonials/> 
      <Comment/>


    </main>
  );
}

export default Home;
