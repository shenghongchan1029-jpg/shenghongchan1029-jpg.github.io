interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <div
      style={{
        padding: '64px 48px 0',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <span style={{ width: '48px', height: '1px', background: '#bdc2ff' }} />
        <span
          style={{
            fontFamily: 'Geist, system-ui, sans-serif',
            fontSize: '13px',
            fontWeight: 500,
            color: '#bdc2ff',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          {eyebrow}
        </span>
      </div>

      <h1
        style={{
          fontFamily: 'Geist, system-ui, sans-serif',
          fontSize: 'clamp(40px, 6vw, 72px)',
          fontWeight: 600,
          letterSpacing: '-0.04em',
          color: '#dee3ec',
          lineHeight: 1.1,
          marginBottom: description ? '20px' : '0',
        }}
      >
        {title}
      </h1>

      {description && (
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '18px',
            lineHeight: 1.7,
            color: '#c6c5d5',
            maxWidth: '640px',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
