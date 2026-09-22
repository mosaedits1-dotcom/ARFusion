import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'ARFusion — Professional Fusion Tools for DaVinci Resolve',
  description: 'Clean, native motion graphics fuses and tools built specifically for DaVinci Resolve Fusion.',
  openGraph: {
    title: 'ARFusion — Professional Fusion Tools for DaVinci Resolve',
    description: 'Professional motion graphics tools built natively for DaVinci Resolve Fusion.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', saved);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}