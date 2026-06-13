import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Mesh dot-grid overlay */}
      <div
        className="mesh-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
      {/* Ambient gradient blobs */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <div
          className="glow-orb"
          style={{
            width: '600px',
            height: '600px',
            background: 'rgba(94,106,210,0.08)',
            top: '-200px',
            left: '-150px',
          }}
        />
        <div
          className="glow-orb"
          style={{
            width: '500px',
            height: '500px',
            background: 'rgba(255,184,103,0.05)',
            bottom: '10%',
            right: '-100px',
          }}
        />
      </div>

      <Header />

      <main style={{ flex: 1, paddingTop: '80px' }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}
