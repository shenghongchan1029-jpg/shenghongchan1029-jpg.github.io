import type React from 'react';
import { Link } from 'react-router-dom';

const S = {
  section: {
    padding: '96px 48px 80px',
    maxWidth: '1200px',
    margin: '0 auto',
  } as React.CSSProperties,
  eyebrow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
  } as React.CSSProperties,
  eyebrowLine: {
    width: '48px',
    height: '1px',
    background: '#bdc2ff',
  } as React.CSSProperties,
  eyebrowText: {
    fontFamily: 'Geist, system-ui, sans-serif',
    fontSize: '13px',
    fontWeight: 500,
    color: '#bdc2ff',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
  },
  headline: {
    fontFamily: 'Geist, system-ui, sans-serif',
    fontSize: 'clamp(48px, 8vw, 80px)',
    fontWeight: 600,
    lineHeight: 1.1,
    letterSpacing: '-0.04em',
    color: '#dee3ec',
    marginBottom: '24px',
  } as React.CSSProperties,
  subheadline: {
    fontFamily: 'Geist, system-ui, sans-serif',
    fontSize: 'clamp(24px, 4vw, 36px)',
    fontWeight: 500,
    lineHeight: 1.3,
    color: '#bdc2ff',
    marginBottom: '24px',
  } as React.CSSProperties,
  bio: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '18px',
    lineHeight: 1.7,
    color: '#c6c5d5',
    maxWidth: '640px',
    marginBottom: '40px',
  } as React.CSSProperties,
  actions: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap' as const,
  },
  btnPrimary: {
    background: '#5e6ad2',
    color: '#fdfaff',
    padding: '14px 32px',
    borderRadius: '9999px',
    fontFamily: 'Geist, system-ui, sans-serif',
    fontSize: '15px',
    fontWeight: 600,
    border: '1px solid rgba(255,255,255,0.15)',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    boxShadow: '0 4px 20px rgba(94,106,210,0.3)',
  } as React.CSSProperties,
  btnSecondary: {
    background: 'transparent',
    color: '#dee3ec',
    padding: '14px 32px',
    borderRadius: '9999px',
    fontFamily: 'Geist, system-ui, sans-serif',
    fontSize: '15px',
    fontWeight: 600,
    border: '1px solid rgba(255,255,255,0.15)',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'border-color 0.25s ease, color 0.25s ease',
  } as React.CSSProperties,
  statsRow: {
    display: 'flex',
    gap: '48px',
    marginTop: '64px',
    paddingTop: '40px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    flexWrap: 'wrap' as const,
  },
  stat: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
  },
  statValue: {
    fontFamily: 'Geist, system-ui, sans-serif',
    fontSize: '32px',
    fontWeight: 700,
    color: '#dee3ec',
    letterSpacing: '-0.02em',
  },
  statLabel: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '13px',
    color: '#908f9e',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
  },
};

export default function Hero() {
  return (
    <section id="hero" style={S.section}>
      <div style={S.eyebrow}>
        <span style={S.eyebrowLine} />
        <span style={S.eyebrowText}>Portfolio 2024</span>
      </div>

      <h1 style={S.headline}>
        你好，我是<br />
        <span style={{ color: '#bdc2ff' }}>陈明远。</span>
      </h1>

      <h2 style={S.subheadline}>产品经理 · 全栈开发者</h2>

      <p style={S.bio}>
        专注于构建高性能数字产品。从精密的工程工具到复杂的感官数据分析，
        每个项目都体现了卓越的性能与极致的极简设计哲学。
      </p>

      <div style={S.actions}>
        <Link
          to="/projects"
          className="cursor-target"
          style={{ ...S.btnPrimary, cursor: 'none' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.04)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(94,106,210,0.45)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(94,106,210,0.3)';
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>rocket_launch</span>
          查看项目
        </Link>
        <Link
          to="/contact"
          className="cursor-target"
          style={{ ...S.btnSecondary, cursor: 'none' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(189,194,255,0.4)';
            (e.currentTarget as HTMLAnchorElement).style.color = '#bdc2ff';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)';
            (e.currentTarget as HTMLAnchorElement).style.color = '#dee3ec';
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>mail</span>
          联系我
        </Link>
      </div>

      <div style={S.statsRow}>
        {[
          { value: '4+',   label: 'Years Experience' },
          { value: '20+',  label: 'Projects Shipped' },
          { value: '99.4%',label: 'Avg. Uptime' },
          { value: '4.2M', label: 'Events / Sec' },
        ].map((s) => (
          <div key={s.label} style={S.stat}>
            <span style={S.statValue}>{s.value}</span>
            <span style={S.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
