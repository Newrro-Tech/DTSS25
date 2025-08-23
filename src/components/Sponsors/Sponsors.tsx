'use client';
import { Zoom, Fade } from "react-awesome-reveal";
import styles from './Sponsors.module.css';
import Link from "next/link";

const Sponsors = () => (
    <>
        <section id="sponsors" className={styles.sponsors}>
            <div className={styles.container}>
                <h2 className={styles.title}>Partner with the Future</h2>
                <p className={styles.subtitle}>Showcase your brand, facilitate collaboration, and support groundbreaking solutions by sponsoring the summit.</p>
                <div className={styles.grid}>
                    <Zoom triggerOnce>
                        <div className={styles.card}>
                            <h3>Platinum Sponsor</h3>
                            <div className={styles.price}>₹35,000</div>
                            <ul>
                                <li>5x7 size stall</li>
                                <li>Exclusive Tech Talk Spot</li>
                                <li>Panel Member Spot</li>
                            </ul>
                        </div>
                    </Zoom>
                    <Zoom delay={200} triggerOnce>
                        <div className={styles.card}>
                            <h3>Gold Sponsor</h3>
                            <div className={styles.price}>₹20,000</div>
                            <ul>
                                <li>5x5 size stall</li>
                                <li>Exclusive Tech Talk Spot</li>
                                <li>Panel Member Spot</li>
                            </ul>
                        </div>
                    </Zoom>
                </div>
                 <div className={styles.learnMore}>
                    <Fade direction="up" triggerOnce>
                        <Link href="/sponsors">See All Sponsorship Details →</Link>
                    </Fade>
                </div>
            </div>
        </section>

        <section id="exhibit" className={styles.exhibit}>
             <div className={styles.container}>
                <h2 className={styles.title}>Exhibit Your Innovation</h2>
                <p className={styles.subtitle}>Gain a high-visibility platform to showcase your products to a targeted audience of investors, industry leaders, and academia.</p>
                 <div className={styles.feeSection}>
                     <Zoom triggerOnce>
                         <div className={styles.feeCard}>
                             <h4>Exhibitor Fee: ₹5,000</h4>
                             <p>Includes a 5x5 stall, table, chairs, branding display, and full access passes for 2 members.</p>
                             <Link href="/register" className={styles.cta}>Register as Exhibitor</Link>
                         </div>
                     </Zoom>
                 </div>
            </div>
        </section>
    </>
);
export default Sponsors;