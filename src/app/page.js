"use client"
import Header from "../../components/Header/Header";
import Hero from "../../components/UI/Hero";
import Exercises from "../../components/UI/Exercises";
import Start from "../../components/UI/Start";
import Pricing from "../../components/UI/Pricing";
import Testimonials from "../../components/UI/Testimonials";
import Footer from "../../components/Footer";
import Comment from "../../components/UI/comment";
import Nutiration from "../../components/UI/nutiration";
import Training from "../../components/UI/training";
import Sportshop from "../../components/UI/sportshop";
import Hometraining from "../../components/UI/Hometraining";
import Link from "next/link";
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


function Home() {
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
