'use client';
import { Slide } from "react-awesome-reveal";
import styles from './Pitch.module.css';

const Pitch = () => (
    <section id="pitch" className={styles.pitch}>
        <div className={styles.container}>
            <h2 className={styles.title}>Pitch Your Way to the Future!</h2>
            <p className={styles.subtitle}>Present your breakthrough deep tech solution to a live audience of investors, industry veterans, and innovation champions. </p>
            <div className={styles.grid}>
                <Slide direction="left" triggerOnce>
                    <div className={styles.column}>
                        <h3>Why Participate?</h3>
                        <ul>
                            <li><strong>Investor Exposure:</strong> Present directly to VCs, angel investors, and corporate venture arms.</li>
                            <li><strong>Media Visibility:</strong> Get noticed by tech journalists and media partners.</li>
                            <li><strong>Expert Feedback:</strong> Receive constructive input from a panel of seasoned experts.</li>
                            <li><strong>Funding & Partnerships:</strong> Stand a chance to secure funding, incubation, or strategic collaborations.</li>
                        </ul>
                    </div>
                </Slide>
                <Slide direction="right" triggerOnce>
                    <div className={styles.column}>
                        <h3>Pitch Format & Awards </h3>
                        <ul>
                             <li><strong>Format:</strong> 5-Minute Pitch + 3-Minute Q&A with the jury. </li>
                             <li><strong>Grand Prize:</strong> Opportunity to be Incubated at Co-Innovation Centre in Collaboration with IHFC, TIH, IIT Delhi. </li>
                             <li><strong>Other Awards:</strong> Best Pitch Award, Most Promising Technology Award, People's Choice Award. </li>
                             <li><strong>Registration Fee:</strong> ₹2,000 per team. </li>
                        </ul>
                    </div>
                </Slide>
            </div>
        </div>
    </section>
);
export default Pitch;