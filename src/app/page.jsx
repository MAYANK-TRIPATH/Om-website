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
            You know that i am your Daddy!
          </h1>
          <p className={styles.desc}>
            If you want to get success start calling me daddy with all your heart.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nesciunt
            culpa odio temporibus atque odit architecto magnam.
          </p>
        
          <Button url="/contact" text="Register yourself"/>
          
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
