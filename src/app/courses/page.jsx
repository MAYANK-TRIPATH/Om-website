import React from 'react';
import styles from './page.module.css'
import Link from "next/link";
import Image from "next/image"
import course1 from "public/course1.png"
import course2 from "public/course2.png"

const Courses = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainTitle}>Courses Offered</h1>
      <Link href="/" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={course1} alt="" width={400} height={250} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>&apos;O&apos; Level</h1>
          <p className={styles.desc}>&apos;O&apos; level course of DOEACC Scheme is equivalent to a Foundation Level Course in Computer Applications. Students can acquire this qualification by undergoing this course and passing the examination conducted by NIELIT. After completion of ‘O’ Level course, students can further enroll for next level IT course of NIELIT ‘A’ level. The course commences in the month of January and July every year.</p>
        </div>
      </Link>
      <Link href="/" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={course2} alt="" width={400} height={250} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>ADCA + TALLY</h1>
          <p className={styles.desc}>The Advanced Diploma in Computer Applications (ADCA) is a one-year course that includes computer training and accounting practical knowledge on Tally ERP. The ADCA course prepares students for work in the field of computers and software. It includes computer fundamentals, database management systems, operation systems, web designing, programming with C and C++, graphics, animation, and multimedia. 
After completing the ADCA course, many small firms recruit candidates for jobs such as computer operator and data entry.</p>
        </div>
      </Link>
      <Link href="/" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={course1} alt="" width={400} height={250} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>DCA</h1>
          <p className={styles.desc}>Diploma in Computer Applications, is a 1-year diploma course in the field of Computer Applications that involves the study of numerous computer applications such as MS Office, Internet Applications, Operating System, Database Management System (DBMS), HTML among other subjects.
<br/> DCA Syllabus includes subjects such as Basics Computer Skills, MS Office Applications, Internet Basics, E-Business, PC Assembly and Troubleshooting.</p>
        </div>
      </Link>
      <Link href="/" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={course2} alt="" width={400} height={250} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>CCC</h1>
          <p className={styles.desc}>Course on Computer Concepts(CCC) is designed to aim at imparting a basic level IT Literacy programme for the common man. This programme has essentially been conceived with an idea of giving an opportunity to the common man to attain computer literacy thereby contributing to increased and speedy PC penetration in different walks of life.</p>
        </div>
      </Link>
      <Link href="/" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={course1} alt="" width={400} height={250} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>AUTOCAD(2D/3D)</h1>
          <p className={styles.desc}>AutoCAD is a 2D and 3D computer-aided design (CAD) software application for desktop, web, and mobile developed by Autodesk. It is a general drafting and design application used in industry by architects, project managers, engineers, graphic designers, city planners and other professionals to prepare technical drawings.</p>
        </div>
      </Link>

      <Link href="/" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={course2} alt="" width={400} height={250} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Basic Computer</h1>
          <p className={styles.desc}>In step with effort to achieve the objective of achieving computer literacy in an inclusive manner, NIELIT has launched a new programme, “Basic Computer Course (BCC)”. The objective of the course is to impart basic level computer appreciation programme with more emphasis on hands on training. Initially, the course was conceived as to boost the concept of introducing a course on computer fundamentals, especially for students, studying vocational courses at ITIs/ITCs.</p>
        </div>
      </Link>

      <Link href="/" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={course1} alt="" width={400} height={250} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Typing (English/Hindi)</h1>
          <p className={styles.desc}>
Embark on a transformative journey with our Typing Course, available in both English and Hindi. Master the art of efficient keyboarding through interactive lessons, engaging exercises, and personalized feedback. Boost your typing speed and accuracy, unlocking a world of productivity. Elevate your skills with our user-friendly and bilingual learning experience.</p>
        </div>
      </Link>

      <Link href="/" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={course2
          
          } alt="" width={400} height={250} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Short Hand (English/Hindi)</h1>
          <p className={styles.desc}>

          Embark on a journey to fast-track your note-taking skills with our Shorthand Course, available in both English and Hindi. Master the art of concise writing, boosting your efficiency in meetings, lectures, and more.<br/> Our comprehensive lessons, enriched with practical exercises, will empower you to capture information effortlessly. Elevate your communication prowess with this versatile and bilingual learning experience.</p>
        </div>
      </Link>

      <Link href="/" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={course1} alt="" width={400} height={250} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Graphic Design</h1>
          <p className={styles.desc}>
          Unlock your creative potential with our Graphic Design Course. Dive into a dynamic learning experience where you&apos;ll grasp design principles, master industry-standard tools, and unleash your imagination. From creating stunning visuals to honing your digital artistry, our comprehensive curriculum empowers aspiring designers. Elevate your skills with hands-on projects and expert guidance. Join us and embark on a visual journey to turn your ideas into captivating designs.
          </p>
        </div>
      </Link>

      <Link href="/" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={course1} alt="" width={400} height={250} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Spoken English</h1>
          <p className={styles.desc}>
          Unleash your oratory potential with our Spoken English Course. Navigate the intricacies of language fluency and refine your communication prowess. Through engaging modules and practical dialogues, master the art of effective expression. Whether for career growth or social interactions, our program empowers you to articulate thoughts with clarity and charisma. Join us, and let your words become a powerful instrument in shaping your success.
        </p>
        </div>
      </Link>

    </div>
  )
}

export default Courses;