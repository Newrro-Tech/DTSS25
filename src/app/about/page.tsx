'use client';
import { Fade, Slide } from "react-awesome-reveal";
import styles from './AboutPage.module.css';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => (
    <div className={styles.pageWrapper}>
        <section className={styles.hero}>
            <Image
                src="/images/about-hero.png"
                alt="Scientists working in a tech lab"
                fill
                style={{ objectFit: 'cover' }}
                priority
            />
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroContent}>
                <Fade direction="down" triggerOnce>
                    <h1>About the Summit</h1>
                    {/* Corrected this line */}
                    <p>{'"Engineering the Future: Deep Tech for Viksit Bharath"'}</p>
                </Fade>
            </div>
        </section>

        {/* ... rest of the file remains the same ... */}
        <section className={styles.contentSection}>
            <Slide direction="up" triggerOnce>
                <h2>Welcome to the Deep Tech Startup Summit 2025!</h2>
                <p>
                    Join us for two power-packed days where innovation meets impact! This summit is designed to bring together the brightest minds in deep technology, fostering collaboration, enabling funding, and sparking policy discourse for responsible deep tech development. Whether you are a startup, investor, academic, or industry leader, this event offers unparalleled opportunities to engage with the future of technology.
                </p>
            </Slide>
        </section>

        <section className={styles.whyAttend}>
             <Fade triggerOnce><h2>Why Attend?</h2></Fade>
             <div className={styles.grid}>
                 <Slide direction="left" triggerOnce>
                     <div className={styles.card}>
                         <h3>Showcase Innovations</h3>
                         <p>Prominently feature cutting-edge deep tech advancements from various sectors.</p>
                     </div>
                 </Slide>
                 <Fade triggerOnce>
                     <div className={styles.card}>
                         <h3>Facilitate Collaboration</h3>
                         <p>Connect startups, academia, industry, and government bodies to forge powerful partnerships.</p>
                     </div>
                 </Fade>
                 <Slide direction="right" triggerOnce>
                     <div className={styles.card}>
                         <h3>Enable Funding & Partnerships</h3>
                         <p>Support groundbreaking solutions by connecting them with crucial resources and influential investors.</p>
                     </div>
                 </Slide>
             </div>
        </section>
        
        <section className={styles.ctaSection}>
            <Fade direction="up" triggerOnce>
                <h2>Ready to Engineer the Future?</h2>
                <Link href="/register" className={styles.ctaButton}>Secure Your Spot</Link>
            </Fade>
        </section>
    </div>
);

export default AboutPage;