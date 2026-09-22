import Link from 'next/link';
import { notFound } from 'next/navigation';
import { tools, getToolBySlug, getAllSlugs } from '@/data/tools';
import FeatureList from '@/components/FeatureList';
import styles from './page.module.css';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: 'Tool Not Found' };
  return {
    title: tool.name + ' — ARFusion',
    description: tool.tagline + '. ' + tool.description,
  };
}

export default async function ToolDetailPage({ params }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  return (
    <div className={styles.wrap}>
      <div className='container'>
        <Link href='/tools' className={styles.backLink}>
          <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
            <line x1='19' y1='12' x2='5' y2='12' />
            <polyline points='12 19 5 12 12 5' />
          </svg>
          Back to All Fuses
        </Link>

        <div className={styles.grid}>
          <div className={styles.mediaCol}>
            <div className={styles.imageCard}>
              {tool.discount && (
                <div className={styles.saleOverlayBadge}>
                  SPECIAL OFFER · {tool.discount}
                </div>
              )}
              <img src={tool.previewImage} alt={tool.name} className={styles.image} />
            </div>
          </div>

          <div className={styles.infoCol}>
            <div className={styles.metaRow}>
              <span className='badge'>{tool.category}</span>
              <span className={styles.version}>{tool.version}</span>
              {tool.discount && (
                <span className={styles.saleHeaderPill}>LIMITED DEAL</span>
              )}
            </div>

            <h1 className={styles.title}>{tool.name}</h1>
            <p className={styles.tagline}>{tool.tagline}</p>
            <p className={styles.desc}>{tool.description}</p>

            <div className={styles.specs}>
              <div className={styles.spec}>
                <span className={styles.specLabel}>Price</span>
                {tool.originalPrice ? (
                  <div className={styles.priceRow}>
                    <span className={styles.originalPrice}>{tool.originalPrice}</span>
                    <span className={styles.specValuePrice}>{tool.price}</span>
                    <span className={styles.discountBadgeDetail}>{tool.discount}</span>
                  </div>
                ) : (
                  <span className={styles.specValue}>{tool.price}</span>
                )}
              </div>
              <div className={styles.divider} />
              <div className={styles.spec}>
                <span className={styles.specLabel}>Compatibility</span>
                <span className={styles.specValue}>{tool.compatibility}</span>
              </div>
              <div className={styles.divider} />
              <div className={styles.spec}>
                <span className={styles.specLabel}>License</span>
                <span className={styles.specValue}>Commercial</span>
              </div>
            </div>

            <div className={styles.actions}>
              <a href={tool.whopUrl} target='_blank' rel='noopener noreferrer' className='btn btn-primary btn-lg' style={{ width: '100%', justifyContent: 'center', gap: '0.6rem' }}>
                <span>Get Instant Access {tool.originalPrice ? `(${tool.price})` : 'on Whop'}</span>
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                  <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
                  <polyline points='15 3 21 3 21 9' />
                  <line x1='10' y1='14' x2='21' y2='3' />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.features}>
          <div className='section-header'>
            <div className='section-label'>Technical Specifications</div>
            <h2 className='section-title' style={{ fontSize: '1.5rem' }}>Feature Breakdown</h2>
          </div>
          <FeatureList features={tool.features} />
        </div>
      </div>
    </div>
  );
}
