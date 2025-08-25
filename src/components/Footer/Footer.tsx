import styles from './Footer.module.css';
import Image from 'next/image';

// Define your logos in an array to easily manage them
const collabLogos = [
  { src: "/images/collaborators/collab-logo-1.png", alt: "Collaborator Logo 1" },
  { src: "/images/collaborators/collab-logo-2.png", alt: "Collaborator Logo 2" },
  { src: "/images/collaborators/collab-logo-3.png", alt: "Collaborator Logo 3" },
  { src: "/images/collaborators/collab-logo-4.png", alt: "Collaborator Logo 4" },
  { src: "/images/collaborators/collab-logo-5.png", alt: "Collaborator Logo 5" },
  { src: "/images/collaborators/collab-logo-6.png", alt: "Collaborator Logo 6" }
  // Add as many new logos as you want here
];

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.downloadSection}>
                <h4>Event Brochure</h4>
                <p>Get all the details about the summit, including the full agenda, speaker profiles, and sponsorship opportunities, in our comprehensive brochure.</p>
                <a 
                    href="/Deep-Tech-Start-up-Summit-2025.pdf" 
                    className={styles.downloadButton}
                    download="Deep-Tech-Summit-Brochure.pdf"
                >
                    Download Brochure
                </a>
            </div>
            
            <div className={styles.grid}>
                <div className={styles.column}>
                    <h4>Deep Tech Start-up Summit 2025</h4>
                    <p>{'"Engineering the Future: Deep Tech for Viksit Bharath"'}</p>
                </div>
                <div className={styles.column}>
                    <h4>Contact Us</h4>
                    <p>Co-Innovation Centre</p>
                    <p>Nitte Meenakshi Institute of Technology</p>
                    <p>Bengaluru-560064, Karnataka</p>
                </div>
                 <div className={styles.column}>
                    <h4>Get in Touch</h4>
                    <a href="mailto:cic@nmit.ac.in">Email: cic@nmit.ac.in</a>
                    <a href="tel:+919964541327">Ph: +91 9964541327</a>
                </div>
            </div>

            <div className={styles.collabContainer}>
                <h4>In Collaboration With</h4>
                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeContent}>
                        {/* Render the logos twice for a seamless loop */}
                        {[...collabLogos, ...collabLogos].map((logo, index) => (
                            <div className={styles.logoItem} key={index}>
                                <Image src={logo.src} alt={logo.alt} width={160} height={64} style={{ objectFit: 'contain' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>© 2025 Deep Tech Summit. All rights reserved. Organized by Co-Innovation Centre, NMIT, in collaboration with IHFC, IIT Delhi.</p>
            </div>
        </div>
    </footer>
);
export default Footer;