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
        In the bustling city of Prayagraj, where academic aspirations thrive, Om Computer Institute stands tall as a beacon of skill development and empowerment. The brainchild of <b>Mr. Ruchin Verma</b>, the institute's inception in <b>2015</b> marked a significant stride in addressing the dearth of vocational skills among students from remote areas and villages. Formerly known as <b>Om Typing Centre</b>, the institute recognized the crucial role of typing skills in various competitive examinations, a need often overlooked. <br/></p>

          
    <h1 className={styles.title}>A Humble Beginning</h1>
    <p className={styles.desc}>
The first branch near Salori, IERT College, Prayagraj, was a modest start that burgeoned into a success story. Understanding the challenges faced by students preparing for competitive exams in the hub area, the institute grew steadily, achieving remarkable heights by securing over a thousand selections in prestigious examinations like High Court Review Officer, Assistant Review Officer, Stenographer, and Constable.

        </p>

    <h1 className={styles.title}>Diverse Courses Catering to Varied Needs</h1>
    <p className={styles.desc}>
      
Om Computer Institute prides itself on offering a diverse array of courses, catering to the dynamic demands of the modern job market. These courses are meticulously designed to empower students with practical skills, ensuring their relevance in today's competitive world.
<br/> <br/>
<b>
1. Professional Courses: </b> <br/><br/>
    <b>PGDCA</b> (Post Graduate Diploma in Computer Applications): <br/>
    Tailored for those seeking advanced knowledge, PGDCA equips students with in-depth insights into computer applications, preparing them for roles that demand expertise.<br/><br/>

  <b> O LEVEL, ADCA, DCA </b>(Diploma in Computer Applications):<br/>
    These diploma courses cover a spectrum of computer applications, providing foundational knowledge for various professional avenues.<br/><br/>

    <b> TALLY and CCC: </b><br/>
    TALLY, focusing on accounting software, and CCC, a government-certified course, enhance employability by addressing specific industry needs.<br/><br/>

    <b>
2. Skill Enhancement Courses:
  </b> <br/><br/><b>Basic Computer and Soft Skills: </b><br />
    Recognizing the importance of fundamental computer literacy and communication skills, these courses empower individuals for diverse roles.<br/>
<br/>
   <b>Programming and Design:</b><br/>
    Courses like Python, AutoCAD 2D, and 3D open doors to the world of programming and design, crucial in technology-driven sectors.
    </p>


      </div>

      <div className={styles.item}>
        <h1 className={styles.title}>Inclusivity and Vision</h1>
        <p className={styles.desc}>
        With a dedicated staff strength of over 35 individuals, Om Computer Institute holds a vision to make quality education accessible to all. The institute aspires to bridge the gap by offering affordable education and plans to extend its reach through digital/online modes, aiming for expansion into different cities within the state.

        </p>
        <h1 className={styles.title}>Comprehensive Facilities</h1>
        <p className={styles.desc}>To facilitate effective learning, the institute provides state-of-the-art facilities. The libraries offer a conducive environment with features such as air conditioning, WiFi, power backup, peaceful atmospheres, and good lighting—elements crucial for an enriching learning experience.
        </p>
        
      

<h1 className={styles.title}>Examination Details</h1>
<p className={styles.desc}>
The institute's success is evident in the numerous selections achieved in competitive exams. High Court Review Officer, Assistant Review Officer, Stenographer, and Constable exams are just a glimpse of the achievements that showcase the institute's commitment to excellence.

        </p>

<h1 className={styles.title}>Empowering Students</h1>
<p className={styles.desc}>
  


Om Computer Institute believes in breaking barriers to education, and each course is crafted to benefit students from varied backgrounds.<br/>

<b>1. Vocational Skills for Rural Empowerment: </b> 

  The institute's origin story aligns with its commitment to uplift students from rural areas. Typing skills, often underestimated, play a pivotal role in various examinations, leveling the playing field for aspirants from remote regions.<br/><br/>

<b>2. Affordable Excellence: </b>

   Offering low-cost libraries with premium facilities, the institute ensures that financial constraints do not hinder education. This affordability extends to course fees, making quality education accessible to all, irrespective of economic backgrounds.<br/><br/>

<b>3. Language Proficiency for All: </b>

   Soft skill courses, especially spoken English, aim to enhance communication abilities. This is particularly beneficial for students from non-English speaking backgrounds, broadening their opportunities in a globalized job market.

</p>

<h1 className={styles.title}>Future-Forward Approach</h1>
<p className={styles.desc}>Om Computer Institute's commitment doesn't end with the present. The visionary approach includes plans for digital and online education modes, ensuring that geographical limitations are overcome. The goal is not just to extend within Prayagraj but to branch out into different cities within the state, creating a network of empowerment and education.</p>

        
      </div>

      
    </div> <br/>
    <h1 className={styles.title}>Conclusion</h1><br/><br/>
    <p className={styles.desc}>
Om Computer Institute stands not only as a provider of education but as a catalyst for transformation. From its inception to its expansion, the journey reflects a dedication to empowering students with skills that transcend geographical and socio-economic barriers. As it continues to evolve, the institute remains committed to its founding principles — accessible education, vocational empowerment, and a vision that encompasses the digital horizon.

Embark on a learning journey with Om Computer Institute, where education knows no bounds, and every student's dream is a step closer to reality.</p>
    <br/>
    <div className={styles.element}>
    <Button url="/contact" text="Contact Us"/>
    <Image src='/about-img.svg' alt="about-img" width={400} height={200} />

   
    </div>
   

   </div>
  )
}

export default About