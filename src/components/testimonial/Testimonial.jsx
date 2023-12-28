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
      title: 'Kunal Chaurasia',
      imageUrl: Choose9,
      body: "Om Computer Institute transformed my skills and empowered me for competitive exams. The comprehensive courses and dedicated staff made my journey truly enriching.", 
      
    },
    {
      title: 'Amit Verma',
      imageUrl: Choose8,
      body: 'Inclusive, visionary, and future-forward—Om Computer Institute goes beyond. Achieving success in exams became a reality, thanks to their commitment to excellence',
      
    },
    {
      title: 'Saurabh Pandey',
      imageUrl: Choose7,
      body: 'A humble start led to remarkable heights! Grateful to Om Computer Institute for quality education, inclusive vision, and facilities that ensured my success.',
      
    },
    {
      title: 'Abhilash Maurya',
      imageUrl: Choose6,
      body: 'Empowering students from rural areas, Om Computer Institute breaks barriers. Affordable excellence and language proficiency courses broadened my horizons.',
      
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