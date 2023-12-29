import React from 'react'
import styles from './page.module.css'
import Link from "next/link"

const Gallery = () => {
  return (
    
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Photo Gallery</h1>
      <div className={styles.items}>
        <Link href="" className={styles.item}>
          {/* <span className={styles.title}>Choose 1</span> */}
        </Link>
        <Link href="" className={styles.item}>
          {/* <span className={styles.title}>Choose 2</span> */}
        </Link>
        <Link href="" className={styles.item}>
          {/* <span className={styles.title}>Choose 3</span> */}
        </Link>
      </div>

      <div className={styles.items2}>
        <Link href="" className={styles.item1}>
          {/* <span className={styles.title}>Choose 4</span> */}
        </Link>
        <Link href="" className={styles.item1}>
          {/* <span className={styles.title}>Choose 5</span> */}
        </Link>
        <Link href="" className={styles.item1}>
          {/* <span className={styles.title}>Choose 6</span> */}
        </Link>
      </div>

      <div className={styles.items2}>
        <Link href="" className={styles.item2}>
          {/* <span className={styles.title}>Choose 7</span> */}
        </Link>
        <Link href="" className={styles.item2}>
          {/* <span className={styles.title}>Choose 8</span> */}
        </Link>
        <Link href="" className={styles.item2}>
          {/* <span className={styles.title}>Choose 9</span> */}
        </Link>
      </div>

      <div className={styles.items3}>
        <Link href="" className={styles.item2}>
          {/* <span className={styles.title}>Choose 7</span> */}
        </Link>
        <Link href="" className={styles.item2}>
          {/* <span className={styles.title}>Choose 8</span> */}
        </Link>
        <Link href="" className={styles.item2}>
          {/* <span className={styles.title}>Choose 9</span> */}
        </Link>
      </div>

      <div className={styles.items4}>
        <Link href="" className={styles.item2}>
          {/* <span className={styles.title}>Choose 7</span> */}
        </Link>
        <Link href="" className={styles.item2}>
          {/* <span className={styles.title}>Choose 8</span> */}
        </Link>
        <Link href="" className={styles.item2}>
          {/* <span className={styles.title}>Choose 9</span> */}
        </Link>
      </div>
  
    </div>
  )
}

export default Gallery