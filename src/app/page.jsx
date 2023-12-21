import Image from "next/image";
import styles from './page.module.css';
import Hero from "public/hero.png";
import Detail from '@/components/detail/Detail'
import Testimonial from '@/components/testimonial/Testimonial'
import Button from '@/components/Button/Button';

export default function Home() {
  return (


    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
          Empower your future with OM Institute !
          </h1>
          <p className={styles.desc}>
          Unlocking various opportunities through specialized Computer Courses and achieving excellence with Over 1000+ selections in State-Level examinations like RO/ARO/UPSSSC
          </p>
        
          <Button url="/contact" text="Enroll Now !!"/>
          
        </div>
        <div className={styles.item}>
          <Image src={Hero} alt="Hero" className={styles.img} />
        </div>
      </div>
      <br />
      <br /> 
      <div>
        <Detail />
      </div>
      <br />
      <br />
      <div>
        <Testimonial />
      </div>
      <br />
    </div>




  )
}
