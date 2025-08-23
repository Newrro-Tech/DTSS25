'use client';
import { Slide } from "react-awesome-reveal";
import styles from './PitchPage.module.css';
import Link from 'next/link';

const PitchPage = () => (
    <div className={styles.pageWrapper}>
        <section className={styles.hero}>
            <h1>Startup Pitch Competition</h1>
            <p>Your moment to shine. Pitch your way to the future!</p>
        </section>

        <section className={styles.contentSection}>
            <div className={styles.grid}>
                <Slide direction="left" triggerOnce className={styles.column}>
                    <h2>Why Participate?</h2>
                    <ul>
                        <li><strong>Investor Exposure:</strong> Present directly to VCs, angel investors, and corporate venture arms.</li>
                        <li><strong>Media Visibility:</strong> Get noticed by tech journalists and media partners.</li>
                        <li><strong>Expert Feedback:</strong> Receive constructive input from a panel of seasoned entrepreneurs and domain experts.</li>
                        <li><strong>Funding & Partnerships:</strong> Stand a chance to secure funding, incubation, or strategic collaborations.</li>
                    </ul>
                </Slide>
                <Slide direction="right" triggerOnce className={styles.column}>
                    <h2>Format & Awards</h2>
                    <ul>
                        <li><strong>Pitch Format:</strong> A 5-Minute Pitch + 3-Minute Q&A with the jury.</li>
                        <li><strong>Grand Prize:</strong> An opportunity to be Incubated at Co-Innovation Centre in Collaboration with IHFC, TIH, IIT Delhi.</li>
                        <li><strong>Awards:</strong> Compete for the Best Pitch Award, Most Promising Technology Award, and People's Choice Award.</li>
                    </ul>
                </Slide>
            </div>
             <div className={styles.ctaSection}>
                <h2>Registration Fee: ₹2,000 per team.</h2>
                <p>Spots are limited. Secure your chance to be the next deep tech success story!</p>
                <Link href="/register" className={styles.ctaButton}>Apply to Pitch Now</Link>
            </div>
        </section>
    </div>
);

export default PitchPage;