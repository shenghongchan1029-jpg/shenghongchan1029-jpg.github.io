import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: '首页',   to: '/' },
  { label: '关于我', to: '/about' },
  { label: '项目',   to: '/projects' },
  { label: '联系',   to: '/contact' },
];

export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: 'rgba(14,20,26,0.85)',
        backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 40px rgba(94,106,210,0.05)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '80px',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: 'Geist, system-ui, sans-serif',
            fontSize: '20px',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: '#dee3ec',
            textDecoration: 'none',
          }}
        >
          Shenghong-Chan
        </Link>

        {/* Desktop Nav */}
        <nav className="header-nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className="cursor-target"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '16px',
                  fontWeight: active ? 700 : 500,
                  color: active ? '#bdc2ff' : '#c6c5d5',
                  textDecoration: 'none',
                  borderBottom: active ? '2px solid #bdc2ff' : '2px solid transparent',
                  paddingBottom: '4px',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  cursor: 'none',
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLAnchorElement).style.color = '#bdc2ff';
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLAnchorElement).style.color = '#c6c5d5';
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <a
          href="/resume.pdf"
          download
          className="cursor-target header-resume-btn"
          style={{
            background: '#5e6ad2',
            color: '#fdfaff',
            padding: '10px 24px',
            borderRadius: '9999px',
            fontFamily: 'Geist, system-ui, sans-serif',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.02em',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
            transition: 'transform 0.2s ease',
            display: 'inline-block',
            cursor: 'none',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}
        >
          下载简历
        </a>

        {/* Mobile menu toggle */}
        <button
          className="header-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#dee3ec',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
          }}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(14,20,26,0.97)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '16px 24px 24px',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '16px',
                color: isActive(item.to) ? '#bdc2ff' : '#c6c5d5',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .header-nav-desktop  { display: none !important; }
          .header-resume-btn   { display: none !important; }
          .header-menu-btn     { display: block !important; }
        }
      `}</style>
    </header>
  );
}
