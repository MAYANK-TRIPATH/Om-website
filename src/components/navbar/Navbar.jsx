import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';


const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Courses",
    url: "/courses",
  },
  {
    id: 4,
    title: "Centres",
    url: "/centres",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Gallery",
    url: "/gallery",
  },
  
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <a href="/">
      <Image src="/logo.png"  alt="logo" width ={90} height={80}/>
      </a>
      <div className={styles.links}>
        
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <DarkModeToggle/>
      </div>
    </div>
  )
}

export default Navbar