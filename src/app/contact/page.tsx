'use client';
import { useState } from 'react';
import { Slide } from "react-awesome-reveal";
import styles from './ContactPage.module.css';

const ContactPage = () => {
    // State to handle form submission status
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        
        const formData = new FormData(e.target as HTMLFormElement);
        // IMPORTANT: Replace with your actual Access Key from Web3Forms
        formData.append("access_key", "d76978ed-2ce1-4468-8af3-b29abb3d5d11")

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            setStatus("Message sent successfully!");
            (e.target as HTMLFormElement).reset(); // Reset form fields
        } else {
            setStatus("Error: " + result.message);
        }
    };

    return (
        <div className={styles.pageWrapper}>
            <section className={styles.hero}>
                <h1>Get In Touch</h1>
                <p>We're here to help with any questions you may have about the summit.</p>
            </section>

            <section className={styles.contentSection}>
                <div className={styles.grid}>
                    <Slide direction="left" triggerOnce>
                        <div className={styles.contactDetails}>
                            <h2>Contact Information</h2>
                            <div className={styles.infoBlock}>
                                <h4>Location</h4>
                                <p>Co-Innovation Centre</p>
                                <p>Nitte Meenakshi Institute of Technology</p>
                                <p>Bengaluru-560064, Karnataka, INDIA</p>
                            </div>
                            <div className={styles.infoBlock}>
                                <h4>Email</h4>
                                {/* Displaying the email as text is helpful for users without a mail client */}
                                <p>cic@nmit.ac.in</p>
                                <a href="mailto:cic@nmit.ac.in">Click to Send Email</a>
                            </div>
                            <div className={styles.infoBlock}>
                                <h4>Phone</h4>
                                <a href="tel:+919964541327">+91 9964541327</a>
                            </div>
                             <div className={styles.mapContainer}>
                               <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.536973634939!2d77.56027387484405!3d13.065495987261994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19493cb57371%3A0x678a635842f15e24!2sNitte%20Meenakshi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1691621535123" 
                                    width="100%" 
                                    height="300" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={false}
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </Slide>
                    
                    <Slide direction="right" triggerOnce>
                        <div className={styles.contactForm}>
                            <h2>Send us a Message</h2>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows={5} required></textarea>
                                </div>
                                <button type="submit" className={styles.submitButton}>Send Message</button>
                                {status && <p className={styles.statusMessage}>{status}</p>}
                            </form>
                        </div>
                    </Slide>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;