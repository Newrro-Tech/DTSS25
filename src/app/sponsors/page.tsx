'use client';
import { Zoom, Fade } from "react-awesome-reveal";
import styles from './SponsorsPage.module.css';
import Image from 'next/image'; 

const SponsorsPage = () => {

    const createWhatsAppLink = (tier: string) => {
        const whatsAppNumber = "919964541327"; // Your number
        const message = `Hello! I'm interested in the ${tier} Sponsorship for the Deep Tech Summit 2025. Could you please provide more details?`;
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;
    };

    return (
        <div className={styles.pageWrapper}>
            {/* Updated Hero Section */}
            <section className={styles.hero}>
                <Image
                    src="/images/sponsors-hero.png"
                    alt="Robotic hand holding a sign"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <Fade direction="down" triggerOnce>
                        <h1>Sponsorship Opportunities</h1>
                        <p>Partner with the future and gain prominent visibility at a premier deep tech event.</p>
                    </Fade>
                </div>
            </section>

            <section className={styles.contentSection}>
                <h2>Maximize Your Impact</h2>
                <p className={styles.subtitle}>Choose the sponsorship level that best suits your goals. For custom packages, please contact us directly.</p>
                <div className={styles.grid}>
                    <Zoom triggerOnce>
                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <h3>Platinum Sponsor</h3>
                                <div className={styles.price}>₹35,000</div>
                                <ul>
                                    <li>5x7 size stall with tables and chairs</li>
                                    <li>Branding banners & TV for advertising in the stall</li>
                                    <li>Exclusive 10-minute Tech Talk Spot</li>
                                    <li>Exclusive spot as a panel member in panel discussion</li>
                                    <li>Lunch and snacks for 4 members</li>
                                    <li>Access to participate in the competition</li>
                                </ul>
                            </div>
                            <a href={createWhatsAppLink('Platinum')} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                                Inquire about Platinum
                            </a>
                        </div>
                    </Zoom>
                    <Zoom delay={200} triggerOnce>
                        <div className={styles.card}>
                             <div className={styles.cardContent}>
                                <h3>Gold Sponsor</h3>
                                <div className={styles.price}>₹20,000</div>
                                <ul>
                                    <li>5x5 size stall with table and chairs</li>
                                    <li>Branding banners</li>
                                    <li>Exclusive 10-minute Tech Talk Spot</li>
                                    <li>Exclusive spot as a panel member in panel discussion</li>
                                    <li>Lunch and snacks for 3 members</li>
                                    <li>Access to participate in the competition</li>
                                </ul>
                            </div>
                             <a href={createWhatsAppLink('Gold')} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                                Inquire about Gold
                            </a>
                        </div>
                    </Zoom>
                </div>
            </section>
        </div>
    );
};

export default SponsorsPage;