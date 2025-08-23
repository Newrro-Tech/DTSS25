'use client';
import Typewriter from 'typewriter-effect';
import styles from './Preloader.module.css';
import { Fade } from 'react-awesome-reveal';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <Fade direction="down" triggerOnce>
                <div className={styles.logo}>
                    {/* This is a simple coded logo animation for the preloader */}
                    <div className={`${styles.ring} ${styles.ring1}`}></div>
                    <div className={`${styles.ring} ${styles.ring2}`}></div>
                    <div className={`${styles.ring} ${styles.ring3}`}></div>
                </div>
            </Fade>
            <div className={styles.message}>
                <Typewriter
                    options={{
                        strings: ["Welcome to DeepTech Summit 2025"],
                        autoStart: true,
                        loop: false,
                        delay: 80,
                    }}
                />
            </div>
        </div>
    );
};

export default Preloader;