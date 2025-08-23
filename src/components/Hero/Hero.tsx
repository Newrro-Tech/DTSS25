'use client';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { Fade } from "react-awesome-reveal";
import Typewriter from 'typewriter-effect';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <Fade direction="down" triggerOnce>
          {/* Logo added here */}
          <div className={styles.logoContainer}>
              <Image 
                src="/images/summit-logo.png" 
                alt="Deep Tech Summit Logo" 
                width={600}
                height={450}
                style={{ objectFit: 'contain' }}
                priority 
              />
          </div>
          <h1 className={styles.title}>DeepTech Start-up Summit 2025</h1>
        </Fade>
        
        <div className={styles.subtitle}>
          <Typewriter
            options={{
              strings: ['"Engineering the Future: Deep Tech for Viksit Bharath"'],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>

        <Fade direction="up" delay={500} triggerOnce>
          <p className={styles.dateLocation}>
            <strong>September 12-13, 2025</strong> | NMIT, Bengaluru, Karnataka
          </p>
          <Link href="/register" className={styles.ctaButton}>Register Now</Link>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;