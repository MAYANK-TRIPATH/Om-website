import React from 'react';
import styles from "./footer.module.css";
import Image from 'next/image';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.linkGrid}>
        <b>COMPANY</b>
        <b>LEGAL</b>
        <b>CONTACT US</b>
        
        
        
        <a href='/about'>About Us</a>
        <a href='/'>Privacy Policy</a>
        <a href="tel:+91 75708 36804" className="phone-link" aria-label="Call us">&#x260E; Call-Us</a>
        <a href='/courses'>Courses</a>
        <a href='/link1'>Terms of Use</a>
        <a href='https://wa.me/+917570836804' className='whats-app' aria-label="">Whatsapp</a>
        <a href='/centres'>Centres</a>
        <a href='/centres'>Sitemap</a>
        <a href="https://www.instagram.com/om.skill/" className="instagram-link" aria-label="Instagram"> Instagram</a>

        <a href='/centres'>Gallery</a>
        <a href='/'></a>
        {/* <a href="https://www.linkedin.com/company/om-skills-institute/about/" className="linkedin-link" aria-label="LinkedIn">LinkedIN</a> */}
        <a href='sms:+917570836804' class='text-message' aria-label=''>Text Message</a>

      </div>

      <a href='/'>
        <Image src='/foot-img.svg' alt="foot-img" width={300} height={150}/>
      </a>

      <div>
      
      <a href="/">
      <Image src="/logo.png"  alt="logo" width ={100} height={100}/>
      </a><br/><br/>
        Copyright &#169; {currentYear} Om Skills Private Limited | All rights reserved
        </div>
      </div>
  )
}

export default Footer