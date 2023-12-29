"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

import Choose1 from 'public/om1.jpg';
import Choose2 from 'public/Choose2.jpg';
import Choose3 from 'public/om2.jpg';
import Choose4 from 'public/Choose4.jpg';

import styles from './detail.module.css';

const images = [Choose1, Choose2, Choose3, Choose4];
const autoSlideInterval = 2000;

export default function Detail() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    const newIndex = (currentImage + 1) % images.length;
    setCurrentImage(newIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextImage, autoSlideInterval);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentImage, nextImage]); // Added nextImage to the dependency array

  return (
    <div className={styles.container}>
      <Image
        src={images[currentImage]}
        alt=""
        className={styles.image}
        width={800}
        height={600}
      />

      <div className={styles.thumbnails}>
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt=""
            className={index === currentImage ? styles.active : ''}
            width={50}
            height={30}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
}
