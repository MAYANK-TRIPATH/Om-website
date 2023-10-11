import React from 'react';
import styles from "./page.module.css";
import websites from "public/websites.jpg"
import Image from 'next/image';
import Button from '@/components/Button/Button';



const About = () => {
  return (
   <div className={styles.container}>
    <div className={styles.imagContainer}>
      <Image
      src={websites} 
      
      alt="websites"
      className={styles.img}
      />
     <div className={styles.imgText}>
      <h1 className={styles.imgTitle}>OmSkills Computer Institute</h1>
      <h2 className={styles.imgDesc}>We will be teaching every skills for computer knowledge</h2>
      </div> 
    </div>
    <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni odit nisi sapiente 
          possimus facere hic alias amet dolorum laudantium accusantium, veritatis illum quos id du
          cimus soluta temporibus vero deleniti.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni odit nisi sapiente 
          possimus facere hic alias amet dolorum laudantium accusantium, veritatis illum quos id du
          cimus soluta temporibus vero deleniti.
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni odit nisi sapiente 
          possimus facere hic alias amet dolorum laudantium accusantium, veritatis illum quos id du
          cimus soluta temporibus vero deleniti.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni odit nisi sapiente 
          possimus facere hic alias amet dolorum laudantium accusantium, veritatis illum quos id du
          cimus soluta temporibus vero deleniti.
        </p>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>What we Do?</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, suscipit minus. 
          Laudantium qui quibusdam hic dignissimos, harum quos adipisci iusto nesciunt soluta
           optio illum, aspernatur eveniet tempora, omnis perferendis aut?
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, suscipit minus. 
          Laudantium qui quibusdam hic dignissimos, harum quos adipisci iusto nesciunt soluta
           optio illum, aspernatur eveniet tempora, omnis perferendis aut?
           <br/>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, suscipit minus. 
          Laudantium qui quibusdam hic dignissimos, harum quos adipisci iusto nesciunt soluta
           optio illum, aspernatur eveniet tempora, omnis perferendis aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, suscipit minus. 
          Laudantium qui quibusdam hic dignissimos, harum quos adipisci iusto nesciunt soluta
           optio illum, aspernatur eveniet tempora, omnis perferendis aut?
        </p>
        
      </div>
    </div>
    <br/>
    <Button url="/contact" text="Contact"/>
   </div>
  )
}

export default About