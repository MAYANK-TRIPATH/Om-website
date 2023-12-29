import React from 'react'
import styles from './page.module.css'
import Link from "next/link";


const Centres = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.mainTitle}>Our Centres</h1>
    <h1 className={styles.selectTitle}>Our Allahabad Centres</h1>

    <div className={styles.items}>
      <Link href="/#" className={styles.item}>
        {/* <span className={styles.title}>Choose 1</span> */}
        <h1 className={styles.title}>Salori</h1>
      </Link>
      <Link href="/#" className={styles.item}>
        {/* <span className={styles.title}>Choose 2</span> */}
        <h1 className={styles.title}>GovindPur</h1>
      </Link>
      <Link href="/#" className={styles.item}>
        {/* <span className={styles.title}>Choose 3</span> */}
        <h1 className={styles.title}>Bhaghra</h1>
      </Link>
    </div>


    <div className={styles.items2}>
      <Link href="/#" className={styles.item1}>
        {/* <span className={styles.title}>Choose 4</span> */}
        <h1 className={styles.title}>Rajapur</h1>
      </Link>
      <Link href="/#" className={styles.item1}>
        {/* <span className={styles.title}>Choose 2</span> */}
        <h1 className={styles.title}>Allahpur</h1>
      </Link>
      <Link href="/#" className={styles.item1}>
        {/* <span className={styles.title}>Choose 3</span> */}
        <h1 className={styles.title}>Shukla Market</h1>
      </Link>
    </div>
  </div>
  )
}

export default Centres