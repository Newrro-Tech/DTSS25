'use client';
import { Zoom } from "react-awesome-reveal";
import styles from './Passes.module.css';
import Link from "next/link";

const Passes = () => (
    <section id="passes" className={styles.passes}>
        <div className={styles.container}>
            <h2 className={styles.title}>Get Your Pass</h2>
            <p className={styles.subtitle}>Choose your gateway to innovation. We have tailored options for visitors, startups, and exhibitors.</p>
            <div className={styles.grid}>
                <Zoom delay={0} triggerOnce>
                    <div className={styles.card}>
                        <h3>Visitor Pass</h3>
                        <div className={styles.price}>₹499<span> / 2 Days</span></div>
                        <p className={styles.cardDescription}>Immerse yourself in the world of deep tech and connect with pioneers.</p>
                        <ul>
                            <li>Full Access to all Panel Discussions</li>
                            <li>Basic Registration Kit</li>
                            <li>Delicious Lunch & Snacks</li>
                        </ul>
                        <Link href="/register" className={styles.cta}>Register as Visitor</Link>
                    </div>
                </Zoom>
                <Zoom delay={200} triggerOnce>
                    <div className={styles.card}>
                        <h3>Exhibitor Pass</h3>
                        <div className={styles.price}>₹5,000<span> / stall</span></div>
                        <p className={styles.cardDescription}>Showcase your product and research to a targeted audience of investors and industry leaders.</p>
                        <ul>
                            <li>Dedicated 5x5 Stall Space</li>
                            <li>Branding Display with Table & Chairs</li>
                            <li>Full Access Passes for 2 Members</li>
                        </ul>
                        <Link href="/register" className={styles.cta}>Register as Exhibitor</Link>
                    </div>
                </Zoom>
                 <Zoom delay={400} triggerOnce>
                    <div className={styles.card}>
                        <h3>Pitch Competition</h3>
                        <div className={styles.price}>₹2,000<span> / team</span></div>
                        <p className={styles.cardDescription}>Your moment to shine! Present your solution to investors and win incubation opportunities.</p>
                        <ul>
                            <li>5-Minute Pitch + 3-Minute Q&A</li>
                            <li>Direct Exposure to VCs & Angel Investors</li>
                            <li>Chance for Incubation at Co-Innovation Centre</li>
                        </ul>
                        <Link href="/register" className={styles.cta}>Apply to Pitch</Link>
                    </div>
                </Zoom>
            </div>
        </div>
    </section>
);

export default Passes;