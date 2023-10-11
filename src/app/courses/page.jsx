import React from 'react';
import styles from './page.module.css'
import Link from "next/link";

const Courses = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Our Courses</h1>
      <h1 className={styles.selectTitle}>Choose our courses</h1>
      <div className={styles.items}>
        <Link href="/#" className={styles.item}>
          <span className={styles.title}>Choose 1</span>
        </Link>
        <Link href="/#" className={styles.item}>
          <span className={styles.title}>Choose 2</span>
        </Link>
        <Link href="/#" className={styles.item}>
          <span className={styles.title}>Choose 3</span>
        </Link>
      </div>
      <div className={styles.items2}>
        <Link href="/#" className={styles.item}>
          <span className={styles.title}>Choose 1</span>
        </Link>
        <Link href="/#" className={styles.item}>
          <span className={styles.title}>Choose 2</span>
        </Link>
        <Link href="/#" className={styles.item}>
          <span className={styles.title}>Choose 3</span>
        </Link>
      </div>
    </div>
  )
}

export default Courses