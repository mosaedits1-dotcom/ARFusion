'use client';
import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={'container ' + styles.navRow}>
        <div className={styles.leftCol}>
          <Link href='/' className={styles.brand}>
            <span className={styles.brandMark}>AR</span>
            <span className={styles.brandName}>Fusion</span>
          </Link>
          <nav className={styles.links}>
            <Link href='/' className={styles.link}>Overview</Link>
            <Link href='/tools' className={styles.link}>Fuses</Link>
            <a href='https://www.youtube.com/@Resolve.in.Arabic' target='_blank' rel='noopener noreferrer' className={styles.link}>
              YouTube
            </a>
          </nav>
        </div>

        <div className={styles.rightCol}>
          <ThemeToggle />
          <Link href='/tools' className='btn btn-primary btn-sm'>
            Browse Fuses
          </Link>
          <button className={styles.mobileBtn} onClick={() => setOpen(!open)} aria-label='Menu'>
            <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
              <line x1='3' y1='12' x2='21' y2='12' />
              <line x1='3' y1='6' x2='21' y2='6' />
              <line x1='3' y1='18' x2='21' y2='18' />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          <Link href='/' className={styles.mobileLink} onClick={() => setOpen(false)}>Overview</Link>
          <Link href='/tools' className={styles.mobileLink} onClick={() => setOpen(false)}>Fuses</Link>
          <a href='https://www.youtube.com/@Resolve.in.Arabic' target='_blank' rel='noopener noreferrer' className={styles.mobileLink} onClick={() => setOpen(false)}>
            YouTube Channel
          </a>
        </div>
      )}
    </header>
  );
}