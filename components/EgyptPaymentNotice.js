import styles from './EgyptPaymentNotice.module.css';

const INSTAGRAM_URL = 'https://www.instagram.com/resolve.in.arabic/';

function InstagramIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function AlertIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  );
}

export default function EgyptPaymentNotice({ variant = 'card' }) {
  if (variant === 'banner') {
    return (
      <div className={styles.noticeBanner}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', flex: 1 }}>
          <span className={styles.tag}>
            <AlertIcon size={14} />
            تنبيه للمشترين من مصر
          </span>
          <p className={styles.textBanner}>
            لابد من وجود حساب دولاري لإمكانية شراء الأداة من داخل مصر، أو التواصل على إنستجرام للدفع من خلال إنستا باي.
          </p>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.instaBtn} ${styles.instaBtnLarge}`}
        >
          <InstagramIcon size={18} />
          <span>تواصل عبر إنستجرام (@resolve.in.arabic)</span>
        </a>
      </div>
    );
  }

  if (variant === 'detail') {
    return (
      <div className={styles.noticeDetail}>
        <div className={styles.headerRow}>
          <span className={styles.tag}>
            <AlertIcon size={13} />
            تنبيه للشراء من داخل مصر
          </span>
        </div>
        <p className={styles.textDetail}>
          تنبيه: لابد من وجود حساب دولاري لإمكانية شراء الأداة من داخل مصر، أو التواصل على إنستجرام للدفع من خلال إنستا باي.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.instaBtn} ${styles.instaBtnLarge}`}
        >
          <InstagramIcon size={16} />
          <span>تواصل على إنستجرام للدفع بـ InstaPay</span>
        </a>
      </div>
    );
  }

  // Default: 'card' (compact for tool cards)
  return (
    <div className={styles.noticeCard}>
      <div className={styles.headerRow}>
        <span className={styles.tag}>
          <AlertIcon size={12} />
          تنبيه للشراء من مصر
        </span>
      </div>
      <p className={styles.textCard}>
        تنبيه: لابد من وجود حساب دولاري لإمكانية شراء الأداة من داخل مصر، أو التواصل على إنستجرام للدفع من خلال إنستا باي.
      </p>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.instaBtn}
      >
        <InstagramIcon size={14} />
        <span>تواصل عبر إنستجرام</span>
      </a>
    </div>
  );
}