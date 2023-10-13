import styles from './Card.module.css'
import React from 'react'
import Image from 'next/image';

function Card({title, imageUrl, body }) {
    return (
        <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={imageUrl}
          alt={title}
          width={300} // Adjust the width as needed
          height={200} // Adjust the height as needed
        />
      </div>
      <div className={styles.card}>
        {/* Any additional card content can go here */}
      </div>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.body}>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Card;
