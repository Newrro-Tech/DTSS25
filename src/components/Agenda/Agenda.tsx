'use client';
import { Slide } from "react-awesome-reveal";
import styles from './Agenda.module.css';

const agendaDay1 = [
    { title: "Opening Keynote", description: "Explore the future of Deep Tech in National & Global Contexts." },
    { title: "Panel: Startups That Made It", description: "Learn from founders of scaled-up deep tech startups." },
    { title: "Tech Talks (Track 1)", description: "Dive into applications in Defence, including Al-powered surveillance and autonomous robotics." },
];
const agendaDay2 = [
    { title: "Keynote: Deep Tech for Humanity", description: "A vision talk from a global thought leader." },
    { title: "Tech Talks (Track 2)", description: "Discover applications in Healthcare & Agriculture, such as precision farming and Al diagnostics." },
    { title: "Awards & Closing Ceremony", description: "Celebrate the Best Pitch, Most Promising Tech, and People's Choice." },
];

const Agenda = () => (
    <section id="agenda" className={styles.agenda}>
        <div className={styles.titleContainer}><h2 className={styles.title}>Summit Highlights</h2></div>
        <div className={styles.agendaGrid}>
            <div className={styles.dayColumn}>
                <h3>Day 1: Invention to Impact</h3>
                <div className={styles.timeline}>
                    {agendaDay1.map((item, index) => (
                        <Slide key={index} direction="left" delay={index * 100} triggerOnce>
                            <div className={styles.timelineItem}>
                                <h4>{item.title}</h4><p>{item.description}</p>
                            </div>
                        </Slide>
                    ))}
                </div>
            </div>
            <div className={styles.dayColumn}>
                <h3>Day 2: Scale & Solve</h3>
                <div className={styles.timeline}>
                    {agendaDay2.map((item, index) => (
                        <Slide key={index} direction="right" delay={index * 100} triggerOnce>
                            <div className={styles.timelineItem}>
                                <h4>{item.title}</h4><p>{item.description}</p>
                            </div>
                        </Slide>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
export default Agenda;