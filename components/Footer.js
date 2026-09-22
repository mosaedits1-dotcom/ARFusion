import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={'container ' + styles.content}>
        <div className={styles.left}>
          <div className={styles.brandRow}>
            <span className={styles.brandMark}>AR</span>
            <span className={styles.brandName}>Fusion</span>
          </div>
          <p className={styles.copy}>
            Fuses and motion tools designed for DaVinci Resolve Fusion by Resolve in Arabic.
          </p>
        </div>

        <div className={styles.linksRow}>
          <Link href='/' className={styles.link}>Overview</Link>
          <Link href='/tools' className={styles.link}>All Fuses</Link>
          <a href='https://www.youtube.com/@Resolve.in.Arabic' target='_blank' rel='noopener noreferrer' className={styles.link}>
            YouTube Channel
          </a>
          <a href='https://whop.com/youtube-8f73/' target='_blank' rel='noopener noreferrer' className={styles.link}>
            Whop Store
          </a>
        </div>
      </div>

      <div className={'container ' + styles.bottomRow}>
        <span className={styles.copyright}>
          &copy; {new Date().getFullYear()} Resolve in Arabic. All rights reserved.
        </span>
        <span className={styles.note}>100% Native Fusion Pipeline</span>
      </div>
    </footer>
  );
}