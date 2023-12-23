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
      <h1 className={styles.imgTitle}>Om Skills Computer Institute</h1>
      <h2 className={styles.imgDesc}> Empowering Dreams: The Journey of Om Computer Institute in Prayagraj</h2>
      </div> 
    </div>
    <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles.desc}>
        In the bustling city of Prayagraj, where academic aspirations thrive, Om Computer Institute stands tall as a beacon of skill development and empowerment. The brainchild of Mr. Ruchin Verma, the institute's inception in 2015 marked a significant stride in addressing the dearth of vocational skills among students from remote areas and villages. Formerly known as <b>Om Typing Centre</b>, the institute recognized the crucial role of typing skills in various competitive examinations, a need often overlooked.

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