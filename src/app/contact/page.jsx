"use client"

import React, { useRef } from 'react'
import styles from './page.module.css'
import callus from "public/callus.png"
import Image from "next/image";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5ykfz0k', 'template_k3v79mn', form.current, 'jCQV83uOwjRpzn8Ll')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return  (
    <div className={styles.container}>
    <h1 className={styles.title}>Lets Keep in Touch</h1>
    <div className={styles.content}>
      <div className={styles.imgContainer}>
      <Image src={callus} alt="" className={styles.image} />
      </div>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <input type="text" name="user_name" placeholder="Name" className={styles.input}/>
        <input type="text" name="user_email" placeholder="Email" className={styles.input}/>
        <input type="text" name="user_phone" placeholder="Phone Number" className={styles.input}/>
        <textarea className={styles.textArea} placeholder="Message" cols="30" rows="10"></textarea>
          <br/>       
          <input type="submit" value="Send"/>
       
      </form>
      </div> 
    </div>
  )
}

export default Contact