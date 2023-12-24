import React from 'react';
import styles from "./footer.module.css";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <div> Copyright © {currentYear} Om Skills Private Limited. All rights reserved</div>
      </div>
  )
}

export default Footer