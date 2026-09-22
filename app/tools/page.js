import ToolCard from '@/components/ToolCard';
import EgyptPaymentNotice from '@/components/EgyptPaymentNotice';
import { tools } from '@/data/tools';

export const metadata = {
  title: 'All Fuses — ARFusion',
  description: 'Browse all native motion graphics fuses for DaVinci Resolve Fusion.',
};

export default function ToolsPage() {
  return (
    <div style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className='container'>
        <div className='section-header'>
          <div className='section-label'>Fuses Catalog</div>
          <h1 className='section-title'>All Fusion Tools</h1>
          <p className='section-description'>
            GPU-accelerated tools for 3D card layouts, proximity effectors, and organic tapered vector lines.
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
    </div>
  );
}