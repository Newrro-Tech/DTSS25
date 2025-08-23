'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); //

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated links to include Contact
  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src="/images/summit-logo.png" className={styles.logoImg} alt="Deep Tech Summit Logo" width={180} height={50} style={{ objectFit: 'contain' }}/>
        </Link>
      </div>
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <Link href="/about" className={pathname === '/about' ? styles.activeLink : ''} onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/agenda" className={pathname === '/agenda' ? styles.activeLink : ''} onClick={() => setIsOpen(false)}>Agenda</Link>
        <Link href="/sponsors" className={pathname === '/sponsors' ? styles.activeLink : ''} onClick={() => setIsOpen(false)}>Sponsors</Link>
        <Link href="/pitch" className={pathname === '/pitch' ? styles.activeLink : ''} onClick={() => setIsOpen(false)}>Pitch</Link>
        <Link href="/contact" className={pathname === '/contact' ? styles.activeLink : ''} onClick={() => setIsOpen(false)}>Contact</Link>
        <Link href="/register" className={`${styles.registerButton} ${pathname === '/register' ? styles.activeLink : ''}`}> Register</Link>
      </div>
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span /><span /><span />
      </div>
    </nav>
  );
};
export default Navbar;