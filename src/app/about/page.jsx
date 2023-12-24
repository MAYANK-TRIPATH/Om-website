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
      <h1 className={styles.imgTitle}>Om Computer Institute</h1>
      </div> 

      <h2 className={styles.imgDesc}> Empowering Dreams: The Journey of Om Computer Institute in Prayagraj</h2>
    </div>
    <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles.desc}>
        In the bustling city of Prayagraj, where academic aspirations thrive, Om Computer Institute stands tall as a beacon of skill development and empowerment. The brainchild of <b>Mr. Ruchin Verma</b>, the institute's inception in <b>2015</b> marked a significant stride in addressing the dearth of vocational skills among students from remote areas and villages. Formerly known as <b>Om Typing Centre</b>, the institute recognized the crucial role of typing skills in various competitive examinations, a need often overlooked. <br/>

          <br/>
        <b>A Humble Beginning:</b> <br/>
The first branch near Salori, IERT College, Prayagraj, was a modest start that burgeoned into a success story. Understanding the challenges faced by students preparing for competitive exams in the hub area, the institute grew steadily, achieving remarkable heights by securing over a thousand selections in prestigious examinations like High Court Review Officer, Assistant Review Officer, Stenographer, and Constable.

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