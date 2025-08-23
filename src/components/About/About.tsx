'use client';
import { Fade, Slide } from "react-awesome-reveal";
import styles from './About.module.css';
import Link from 'next/link';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.aboutContent}>
                <Slide direction="left" triggerOnce>
                    <h2 className={styles.title}>Welcome to the Summit!</h2>
                    <p className={styles.description}>
                        Join us for two power-packed days where innovation meets impact! Discover cutting-edge deep tech, connect with industry leaders, and explore the future of technology.
                    </p>
                    <Link href="/about" className={styles.learnMore}>Learn More About the Summit →</Link>
                </Slide>

                <div className={styles.featuresGrid}>
                    <Fade cascade damping={0.2} triggerOnce>
                        <div className={styles.featureCard}>
                            <h3>Cutting-Edge Innovations</h3>
                            <p>Showcase of deep tech advancements across various sectors.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>Expert Panels</h3>
                            <p>Discussions on startup success, industry-academia collaboration, and ethics.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>Networking Opportunities</h3>
                            <p>Connect with investors, researchers, and fellow startups.</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};
export default About;