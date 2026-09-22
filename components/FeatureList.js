import styles from './FeatureList.module.css';

export default function FeatureList({ features }) {
  return (
    <div className={styles.list}>
      {features.map((feature, idx) => (
        <div key={idx} className={styles.item}>
          <div className={styles.bullet}>
            <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'>
              <polyline points='20 6 9 17 4 12' />
            </svg>
          </div>
          <span className={styles.text}>{feature}</span>
        </div>
      ))}
    </div>
  );
}