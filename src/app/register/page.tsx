'use client';
import { useState } from 'react';
import styles from './RegisterPage.module.css';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

const RegisterPage = () => {
    const [activeTab, setActiveTab] = useState('visitor');

    const formUrls = {
        visitor: 'https://forms.gle/DmhpwqMNmuBN6F5L6',
        exhibitor: 'https://forms.gle/DmhpwqMNmuBN6F5L6',
        pitch: 'https://forms.gle/DmhpwqMNmuBN6F5L6',
        sponsor: 'https://forms.gle/DmhpwqMNmuBN6F5L6'
    };

    const renderContent = () => {
        let title, description, price, content;
        const activeFormUrl = formUrls[activeTab as keyof typeof formUrls];

        switch(activeTab) {
            case 'exhibitor':
                title = "Exhibitor Registration";
                description = "Showcase your product and connect with a targeted audience.";
                price = "Fee: ₹5,000 per stall";
                content = <a href={activeFormUrl} target="_blank" rel="noopener noreferrer" className={styles.formButton}>Proceed to Exhibitor Form</a>;
                break;
            case 'pitch':
                title = "Pitch Competition Registration";
                description = "Pitch your startup to investors, media, and industry leaders.";
                price = "Fee: ₹2,000 per team";
                content = <a href={activeFormUrl} target="_blank" rel="noopener noreferrer" className={styles.formButton}>Proceed to Pitch Application</a>;
                break;
            case 'sponsor':
                title = "Sponsor Inquiry";
                description = "Partner with the future and gain prominent visibility.";
                price = "Packages start from ₹20,000";
                content = <a href={activeFormUrl} target="_blank" rel="noopener noreferrer" className={styles.formButton}>Proceed to Sponsors Form</a>;
                break;
            case 'visitor':
            default:
                title = "Visitor Registration";
                description = "Join us for two days of innovation, learning, and networking.";
                price = "Fee: ₹499 for two days";
                content = <a href={activeFormUrl} target="_blank" rel="noopener noreferrer" className={styles.formButton}>Proceed to Visitor Form</a>;
        }

        return (
            <div className={styles.tabContent}>
                <Fade key={activeTab}>
                    <h2>{title}</h2>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>{price}</p>
                    {content}
                    <p className={styles.note}>
                        {activeTab !== 'sponsor' ? "You will be redirected to a Google Form to complete your registration." : "You will be redirected to WhatsApp to start a conversation."}
                    </p>
                </Fade>
            </div>
        );
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.headerContainer}>
                <Fade direction="down" triggerOnce>
                    <h1>Register Now</h1>
                    <p>Secure your spot and be a part of the future of technology.</p>
                </Fade>
            </div>
            
            <Fade triggerOnce delay={300}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/images/register-inline.png" /* Using the summit logo */
                        alt="Deep Tech Summit Logo"
                        width={220} /* Changed to a smaller size */
                        height={220} /* Changed to a smaller size */
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </Fade>

            <div className={styles.tabsContainer}>
                <div className={styles.tabs}>
                    <button onClick={() => setActiveTab('visitor')} className={activeTab === 'visitor' ? styles.active : ''}>Visitor Pass</button>
                    <button onClick={() => setActiveTab('exhibitor')} className={activeTab === 'exhibitor' ? styles.active : ''}>Exhibitor Pass</button>
                    <button onClick={() => setActiveTab('pitch')} className={activeTab === 'pitch' ? styles.active : ''}>Apply to Pitch</button>
                    <button onClick={() => setActiveTab('sponsor')} className={activeTab === 'sponsor' ? styles.active : ''}>Sponsor Inquiry</button>
                </div>
                {renderContent()}
            </div>
        </div>
    );
};

export default RegisterPage;