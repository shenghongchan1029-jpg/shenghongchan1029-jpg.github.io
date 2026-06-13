import { useEffect, useRef } from 'react';

/* ── Shared tokens ── */
const C = {
  bg:              '#020203',
  surface:         '#0e141a',
  surfaceHigh:     '#252a32',
  onSurface:       '#dee3ec',
  onSurfaceVar:    '#c6c5d5',
  primary:         '#bdc2ff',
  primaryContainer:'#5e6ad2',
  onPrimaryContainer:'#fdfaff',
  tertiary:        '#ffb867',
  outlineVar:      '#454652',
};

const sectionStyle: React.CSSProperties = {
  padding: '80px 48px 96px',
  maxWidth: '1200px',
  margin: '0 auto',
};

/* ── Mouse-spotlight effect on glass cards ── */
function useCardGlow(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(94,106,210,0.07), transparent 40%)`;
    };
    const onLeave = () => {
      el.style.background = 'rgba(5,5,6,0.7)';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [ref]);
}

/* ── Featured card: Sensology ── */
function SensologyCard() {
  const ref = useRef<HTMLDivElement>(null);
  useCardGlow(ref);
  return (
    <div
      ref={ref}
      className="glass-card cursor-target"
      style={{
        gridColumn: 'span 8',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '480px',
        cursor: 'none',
      }}
    >
      <div>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
          <div style={{
            background: 'rgba(189,194,255,0.1)',
            border: '1px solid rgba(189,194,255,0.2)',
            borderRadius: '9999px',
            padding: '4px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: C.primary, fontVariationSettings: "'FILL' 1" }}>star</span>
            <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '12px', fontWeight: 500, color: C.primary, letterSpacing: '0.08em' }}>FEATURED PROJECT</span>
          </div>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: C.onSurfaceVar }}>2024 V1.0</span>
        </div>

        {/* Title */}
        <h2 style={{ fontFamily: 'Geist, sans-serif', fontSize: '40px', fontWeight: 600, letterSpacing: '-0.02em', color: C.onSurface, marginBottom: '16px', lineHeight: 1.2 }}>
          Sensology
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.6, color: C.onSurfaceVar, maxWidth: '440px', marginBottom: '32px' }}>
          基于神经网络的感官分析平台。专为高频数据流设计，实现亚毫秒级的延迟响应与多维可视化反馈。
        </p>
      </div>

      {/* Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginTop: 'auto' }}>
        {[
          { label: 'Latency',  value: '0.8ms' },
          { label: 'Accuracy', value: '99.4%' },
          { label: 'Uptime',   value: '4Nines' },
        ].map((m) => (
          <div key={m.label} style={{ borderLeft: `1px solid rgba(189,194,255,0.2)`, paddingLeft: '16px' }}>
            <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '11px', fontWeight: 500, color: C.onSurfaceVar, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.6, marginBottom: '4px' }}>{m.label}</div>
            <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '24px', fontWeight: 900, color: C.primary }}>{m.value}</div>
          </div>
        ))}
      </div>

      {/* Arrow icon on hover */}
      <div className="card-arrow" style={{
        position: 'absolute',
        bottom: '32px',
        right: '32px',
        opacity: 0,
        transition: 'opacity 0.3s ease',
      }}>
        <span className="material-symbols-outlined" style={{ fontSize: '32px', color: C.primary }}>north_east</span>
      </div>
      <style>{`.glass-card:hover .card-arrow { opacity: 1 !important; }`}</style>
    </div>
  );
}

/* ── Neural Core card ── */
function NeuralCoreCard() {
  const ref = useRef<HTMLDivElement>(null);
  useCardGlow(ref);
  return (
    <div
      ref={ref}
      className="glass-card cursor-target"
      style={{ gridColumn: 'span 4', padding: '32px', display: 'flex', flexDirection: 'column', cursor: 'none' }}
    >
      <div style={{ marginBottom: '48px' }}>
        <span className="material-symbols-outlined" style={{ fontSize: '40px', color: C.tertiary, display: 'block', marginBottom: '24px' }}>hub</span>
        <h3 style={{ fontFamily: 'Geist, sans-serif', fontSize: '24px', fontWeight: 500, color: C.onSurface, marginBottom: '8px' }}>Neural Core</h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.6, color: C.onSurfaceVar }}>
          分布式计算引擎，专门优化深度学习推理流。
        </p>
      </div>
      <div style={{ marginTop: 'auto' }}>
        {[
          { label: 'Nodes',      value: '128+',    color: C.tertiary },
          { label: 'Throughput', value: '1.2 TB/s', color: C.tertiary },
        ].map((row, i) => (
          <div
            key={row.label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 0',
              borderBottom: i === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            }}
          >
            <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '13px', color: C.onSurfaceVar }}>{row.label}</span>
            <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '14px', fontWeight: 700, color: row.color }}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Prisma UI card ── */
function PrismaCard() {
  const ref = useRef<HTMLDivElement>(null);
  useCardGlow(ref);
  return (
    <div
      ref={ref}
      className="glass-card cursor-target"
      style={{ gridColumn: 'span 4', padding: '32px', display: 'flex', flexDirection: 'column', cursor: 'none' }}
    >
      <div style={{ marginBottom: '48px' }}>
        <span className="material-symbols-outlined" style={{ fontSize: '40px', color: C.primary, display: 'block', marginBottom: '24px' }}>layers</span>
        <h3 style={{ fontFamily: 'Geist, sans-serif', fontSize: '24px', fontWeight: 500, color: C.onSurface, marginBottom: '8px' }}>Prisma UI</h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.6, color: C.onSurfaceVar }}>
          为极端密度仪表板设计的模块化设计系统。
        </p>
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {['React', 'Tailwind', 'Three.js'].map((tag) => (
          <span
            key={tag}
            style={{
              padding: '4px 12px',
              borderRadius: '4px',
              background: 'rgba(255,255,255,0.05)',
              fontFamily: 'Geist, sans-serif',
              fontSize: '13px',
              color: C.onSurfaceVar,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Flux Engine card ── */
function FluxEngineCard() {
  const ref = useRef<HTMLDivElement>(null);
  useCardGlow(ref);
  return (
    <div
      ref={ref}
      className="glass-card cursor-target"
      style={{ gridColumn: 'span 8', padding: '32px', display: 'flex', gap: '32px', alignItems: 'center', cursor: 'none' }}
    >
      <div style={{ flex: 1 }}>
        <h3 style={{ fontFamily: 'Geist, sans-serif', fontSize: '24px', fontWeight: 500, color: C.onSurface, marginBottom: '16px' }}>Flux Engine</h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.6, color: C.onSurfaceVar, marginBottom: '24px' }}>
          高性能交易模拟器，在虚拟化网络环境中利用零拷贝内存技术实现。
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '40px', fontWeight: 700, color: C.onSurface, letterSpacing: '-0.02em' }}>4.2M</span>
          <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '13px', color: C.onSurfaceVar, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Events / Sec</span>
        </div>
      </div>

      {/* Abstract visual */}
      <div style={{
        width: '200px',
        height: '200px',
        borderRadius: '12px',
        background: C.surfaceHigh,
        border: '1px solid rgba(255,255,255,0.05)',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div className="animate-spin-slow" style={{
          width: '96px',
          height: '96px',
          borderRadius: '50%',
          border: '2px dashed rgba(189,194,255,0.3)',
        }} />
        <div className="animate-pulse-glow" style={{
          position: 'absolute',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'rgba(189,194,255,0.2)',
          filter: 'blur(16px)',
        }} />
      </div>
    </div>
  );
}

/* ── Main Projects Section ── */
export default function Projects() {
  return (
    <section id="projects" style={sectionStyle}>
      {/* Section header */}
      <div style={{ marginBottom: '64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '48px', height: '1px', background: C.primary }} />
          <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '13px', fontWeight: 500, color: C.primary, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Portfolio 2024</span>
        </div>
        <h1 style={{ fontFamily: 'Geist, sans-serif', fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 600, letterSpacing: '-0.04em', color: C.onSurface, lineHeight: 1.1, marginBottom: '24px' }}>
          精选项目。
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: 1.7, color: C.onSurfaceVar, maxWidth: '640px' }}>
          探索一系列以前沿技术构建的高性能数字化解决方案。从精密的工程工具到复杂的感官数据分析，
          每个项目都体现了卓越的性能与极致的极简设计。
        </p>
      </div>

      {/* Bento grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '24px',
      }}>
        <SensologyCard />
        <NeuralCoreCard />
        <PrismaCard />
        <FluxEngineCard />
      </div>

      {/* Responsive collapse for small screens */}
      <style>{`
        @media (max-width: 900px) {
          #projects [style*="gridColumn: span 8"],
          #projects [style*="gridColumn: span 4"],
          #projects [style*="grid-column: span 8"],
          #projects [style*="grid-column: span 4"] {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
