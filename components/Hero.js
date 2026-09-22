import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className='container'>
        <div className={styles.contentWrap}>
          <div className={styles.badgeRow}>
            <span className='badge'>Resolve in Arabic • Fuses</span>
            <span className={styles.metaTag}>DaVinci Resolve Fusion</span>
          </div>

          <h1 className={styles.headline}>
            Motion graphics fuses built for practical Fusion workflows.
          </h1>

          <p className={styles.subhead}>
            Speed up 3D card carousels, proximity physics, and organic vector lines. Pure Lua and OpenCL fuses engineered natively inside DaVinci Resolve.
          </p>

          <div className={styles.actions}>
            <Link href='/tools' className='btn btn-primary btn-lg'>
              Browse 3 Core Fuses
              <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                <line x1='5' y1='12' x2='19' y2='12' />
                <polyline points='12 5 19 12 12 19' />
              </svg>
            </Link>
            <a
              href='https://www.youtube.com/@Resolve.in.Arabic'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-secondary btn-lg'
            >
              Watch Video Walkthroughs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}