import React from 'react';
import styles from './page.module.css'
import Link from "next/link";
import Image from "next/image"
import Choose1 from "public/Choose1.jpg"

const Courses = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={Choose1} alt="" width={400} height={250} className={styles.image}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Course1</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing 
          elit. Aspernatur recusandae ipsa molestias? Numquam consequuntur, quas aperiam
           odio maxime praesentium eligendi quod voluptatum accusamus autem? Sit, iure 
           repellat. Distinctio, laudantium expedita?</p>
        </div>
      </Link>
      <Link href="/" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={Choose1} alt="" width={400} height={250} className={styles.image}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Course2</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing 
          elit. Non nostrum eaque adipisci at magnam veniam necessitatibus repellat aliquid
           minus debitis quis a id omnis quas iusto magni, consectetur reprehenderit in.</p>
        </div>
      </Link>
      <Link href="/" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={Choose1} alt="" width={400} height={250} className={styles.image}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Course3</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis 
          autem maiores voluptatum asperiores, commodi voluptate expedita facere tenetur ratione
           eius ipsam odio? Similique laboriosam nam perspiciatis minima ipsam placeat?</p>
        </div>
      </Link>
      <Link href="/" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={Choose1} alt="" width={400} height={250} className={styles.image}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Course4</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
           optio expedita impedit repudiandae quae. Sunt impedit fugiat magni aliquam natus
            aspernatur exercitationem? Vel nesciunt dicta doloribus iusto sequi. Blanditiis,
             cupiditate?</p>
        </div>
      </Link>
    </div>
  )
}

export default Courses