import React from 'react';
import styles from "./footer.module.css";
import '@fortawesome/fontawesome-free/css/all.css';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    
    <div className={styles.container}>
      <div> Copyright © {currentYear} Om Skills Private Limited. All rights reserved.</div>
      <div className={styles.row}>
      <div className={styles.socialIcons}>
          {/* Add your social icons here, you can use font-awesome or any other library */}
          <a href="https://your-facebook-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://your-twitter-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          {/* Add more social icons as needed */}
        </div>
      </div>
      </div>

  );
};
export default Footer