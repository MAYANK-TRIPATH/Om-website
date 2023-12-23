"use client"

import React,{ useEffect, useRef } from 'react';
import styles from './testimonial.module.css'
import Card from '@/components/card/Card'
import Choose9 from "public/Choose9.jpg"
import Choose8 from "public/Choose8.jpg"
import Choose7 from "public/Choose7.jpg"
import Choose6 from "public/Choose6.jpg"

const Testimonial = () => {
  const test = [
    {
      title: 'AI-Image Generator',
      imageUrl: Choose9,
      body: "Developed a full-stack AI Image Generator using MERN stack for generating unique images based on user inputs and pre-defined styles.", 
      
    },
    {
      title: 'Youtube_clone',
      imageUrl: Choose8,
      body: 'Develop a fully functional YouTube clone web application using modern front-end technologies and Rapid API.',
      
    },
    {
      title: 'Real-Estate Site',
      imageUrl: Choose7,
      body: 'Designed and developed a Real Estate application using ReactJS and TailwindCSS. User-friendly and intuitive application',
      
    },
    {
      title: 'Crypto-Trans.',
      imageUrl: Choose6,
      body: 'It\'s a WEB 3.0 based WebApp that has a feature of transaction of Ethereum. UI is made by using ReactJS, Tailwind CSS, Metamask Wallet',
      
    },
   
  ];

  const cardContainerRef = useRef(null);

  // Function to reset animation after completion
   const resetAnimation = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.classList.remove(styles.slideIn);
      void cardContainerRef.current.offsetWidth; // Trigger reflow to reset the animation
      cardContainerRef.current.classList.add(styles.slideIn);
    }
  };
  useEffect(() => {
    resetAnimation();
  }, []);


  return (
    <div className={styles.container}>
      <h1>Testimonials</h1>
      <br />
      <div className={`${styles.card} ${styles.slideIn}`}>
        {test.map((testimonial, index) => (
          <Card
            key={index}
            title={testimonial.title}
            imageUrl={testimonial.imageUrl} // Pass the image URL as a prop
            body={testimonial.body}
            className={styles.slideIn}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;