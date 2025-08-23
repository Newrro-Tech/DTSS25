'use client';
import { Fade } from "react-awesome-reveal";
import styles from './Speakers.module.css';
import Image from "next/image";

// Speaker data remains the same
const speakersData = [
  {
    name: "Dr. T. Asokan",
    role: "Distinguished Speaker",
    title: "Professor, Dept. of Engineering Design",
    org: "IIT Madras",
    image: "/images/speakers/Dr_T_Ashok.png",
  },
];

const Speakers = () => {
    return (
        <section className={styles.speakers}>
            <div className={styles.container}>
                <h2 className={styles.title}>Featured Speakers</h2>
                <p className={styles.subtitle}>Meet the visionaries and trailblazers shaping the future of deep technology.</p>
                
                {/* Replaced Slider with a simple div for the grid */}
                <div className={styles.grid}>
                    <Fade cascade damping={0.1} triggerOnce>
                        {speakersData.map((speaker, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    <Image 
                                        src={speaker.image}
                                        alt={`Photo of ${speaker.name}`}
                                        width={150}
                                        height={150}
                                        className={styles.speakerImage}
                                    />
                                </div>
                                <p className={styles.role}>{speaker.role}</p>
                                <h3>{speaker.name}</h3>
                                <p className={styles.titleOrg}>{speaker.title}</p>
                                <p className={styles.titleOrg}>{speaker.org}</p>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Speakers;