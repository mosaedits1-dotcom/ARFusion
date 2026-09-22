import Link from 'next/link';
import Hero from '@/components/Hero';
import ToolCard from '@/components/ToolCard';
import EgyptPaymentNotice from '@/components/EgyptPaymentNotice';
import { tools } from '@/data/tools';

export default function HomePage() {
  return (
    <div>
      <Hero />

      <section style={{ padding: '3.5rem 0' }}>
        <div className='container'>
          <div className='section-header'>
            <div className='section-label'>Available Fuses</div>
            <h2 className='section-title'>Motion Graphics Tools</h2>
            <p className='section-description'>
              Each tool is delivered as a .fuse file with native inspector parameters, interactive viewer gizmos, and built-in presets.
            </p>
          </div>

          <EgyptPaymentNotice variant="banner" />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '3.5rem 0',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-surface)',
      }}>
        <div className='container'>
          <div className='section-header'>
            <div className='section-label'>Workflow Advantage</div>
            <h2 className='section-title'>Why Use Native Fuses?</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}>
            <div style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1.5rem',
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                Zero Overhead
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Written directly in Lua & OpenCL. No background daemon, no license dongle, no external runtime slowing down Resolve.
              </p>
            </div>

            <div style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1.5rem',
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                Interactive Viewport Handles
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Move pivots, control points, and null effectors directly in the Fusion viewer with responsive on-screen gizmos.
              </p>
            </div>

            <div style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1.5rem',
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                Instant Presets
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Switch animation styles, layouts, and physics with one click from the inspector dropdown.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}