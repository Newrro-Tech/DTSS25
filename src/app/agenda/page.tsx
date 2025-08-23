'use client';
import { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import styles from './AgendaPage.module.css';

// Define the structure for an agenda item
interface AgendaItem {
  time: string;
  title: string;
  description: string;
  speaker?: string; // Optional field for speaker name
}

// Populate this data from your detailed document
const day1Agenda: AgendaItem[] = [
  { time: "09:00 AM", title: "Opening Keynote", description: "Explore the future of Deep Tech in National & Global Contexts.", speaker: "Keynote Speaker Name" },
  { time: "10:30 AM", title: "Panel: Startups That Made It", description: "Learn from founders of scaled-up deep tech startups.", speaker: "Moderator & Panelists" },
  { time: "12:00 PM", title: "Tech Talks (Track 1)", description: "Dive into applications in Defence, including AI-powered surveillance and autonomous robotics.", speaker: "Various Speakers" },
  { time: "02:00 PM", title: "Startup Pitches", description: "Witness groundbreaking solutions in Defence & Security.", speaker: "Startup Founders & Jury" },
  { time: "03:30 PM", title: "Panel: Academia-Industry Synergy", description: "Understand how research translates into successful startups.", speaker: "Moderator & Panelists" },
  { time: "05:00 PM", title: "Product Expo Tour", description: "Experience physical demos of robotic systems, IoT devices, and medical AI.", speaker: "Exhibitors" },
];

const day2Agenda: AgendaItem[] = [
  { time: "09:00 AM", title: "Keynote: Deep Tech for Humanity", description: "A vision talk from a global thought leader.", speaker: "Keynote Speaker Name" },
  { time: "10:30 AM", title: "Tech Talks (Track 2)", description: "Discover applications in Healthcare & Agriculture, such as precision farming and AI diagnostics.", speaker: "Various Speakers" },
  { time: "12:00 PM", title: "Panel: From Lab to Market", description: "Learn about commercializing research, IP-tech transfer, and regulatory hurdles.", speaker: "Moderator & Panelists" },
  { time: "02:00 PM", title: "Startup Pitches", description: "See innovative solutions in Health & AgriTech.", speaker: "Startup Founders & Jury" },
  { time: "03:30 PM", title: "Panel: Scaling Deep Tech Startups", description: "Gain insights on talent, manufacturing, and early customers.", speaker: "Moderator & Panelists" },
  { time: "05:00 PM", title: "Awards & Closing Ceremony", description: "Celebrate the Best Pitch, Most Promising Tech, and People's Choice.", speaker: "Chief Guest" },
];

const AgendaPage = () => {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.hero}>
        <Fade direction="down" triggerOnce>
          <h1>Summit Agenda</h1>
          <p>Two days of groundbreaking innovation and collaboration.</p>
        </Fade>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.tabs}>
            <button onClick={() => setActiveDay(1)} className={activeDay === 1 ? styles.active : ''}>Day 1: Invention to Impact</button>
            <button onClick={() => setActiveDay(2)} className={activeDay === 2 ? styles.active : ''}>Day 2: Scale & Solve</button>
        </div>

        <div className={styles.timeline}>
            {(activeDay === 1 ? day1Agenda : day2Agenda).map((item, index) => (
                <Slide key={index} direction="up" duration={500} triggerOnce>
                    <div className={styles.timelineItem}>
                        <div className={styles.time}>{item.time}</div>
                        <div className={styles.details}>
                            <h3>{item.title}</h3>
                            <p className={styles.description}>{item.description}</p>
                            {item.speaker && <p className={styles.speaker}><strong>Speaker(s):</strong> {item.speaker}</p>}
                        </div>
                    </div>
                </Slide>
            ))}
        </div>
      </section>
    </div>
  );
};

export default AgendaPage;