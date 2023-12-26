"use client"

import React, { useRef, useState } from 'react';
import styles from './page.module.css';
import callus from 'public/callus.svg';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import Button from '@/components/Button/Button';

const Contact = () => {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // put credentials in .env file for security.
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          // Show success message
          setShowSuccess(true);
          // Reset the form
          form.current.reset();
          // Hide success message after 3000 milliseconds (3 seconds)
          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={callus} alt="" className={styles.image} />
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input type="text" name="user_name" placeholder="Name" className={styles.input} />
          <input type="text" name="user_email" placeholder="Email" className={styles.input} />
          <input type="text" name="user_phone" placeholder="Phone Number" className={styles.input} />
          <textarea
            className={styles.textArea}
            name="message"
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <div className={styles.button}>
          <Button url="/contact" text="Contact Us"/>
          </div>
        </form>
      </div>
      {showSuccess && (
        <div className={styles.successMessage}>
          <p><b>Your message has been sent successfully!</b></p>
        </div>
      )}
    </div>
  );
};

export default Contact;

