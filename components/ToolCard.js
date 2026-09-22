import Link from 'next/link';
import styles from './ToolCard.module.css';

export default function ToolCard({ tool }) {
  return (
    <div className={styles.card}>
      <Link href={'/tools/' + tool.slug} className={styles.mediaWrap}>
        {tool.discount && (
          <span className={styles.cardSaleBadge}>{tool.discount}</span>
        )}
        <img src={tool.previewImage} alt={tool.name} className={styles.image} />
      </Link>

      <div className={styles.body}>
        <div className={styles.metaTop}>
          <span className={styles.category}>{tool.category}</span>
          <span className={styles.compatibility}>{tool.compatibility}</span>
        </div>

        <h3 className={styles.title}>
          <Link href={'/tools/' + tool.slug}>{tool.name}</Link>
        </h3>

        <p className={styles.tagline}>{tool.tagline}</p>
        <p className={styles.desc}>{tool.description}</p>

        <div className={styles.priceRow}>
          {tool.originalPrice ? (
            <div className={styles.priceContainer}>
              <span className={styles.originalPrice}>{tool.originalPrice}</span>
              <span className={styles.currentPrice}>{tool.price}</span>
              {tool.discount && <span className={styles.discountPill}>{tool.discount}</span>}
            </div>
          ) : (
            <div className={styles.priceContainer}>
              <span className={styles.regularPrice}>{tool.price}</span>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <Link href={'/tools/' + tool.slug} className='btn btn-secondary btn-sm'>
            View Specs
          </Link>
          <a href={tool.whopUrl} target='_blank' rel='noopener noreferrer' className='btn btn-primary btn-sm'>
            {tool.originalPrice ? `Get · ${tool.price}` : 'Get on Whop'}
          </a>
        </div>
      </div>
    </div>
  );
}
