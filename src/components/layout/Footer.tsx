export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        width: '100%',
        padding: '48px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: '#090f15',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: 'Geist, system-ui, sans-serif',
            fontSize: '18px',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            color: '#dee3ec',
          }}
        >
          PM_NEXUS
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '32px' }}>
          {[
            { label: 'Email',    href: 'mailto:hello@pmnexus.dev' },
            { label: 'GitHub',   href: '#' },
            { label: 'LinkedIn', href: '#' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="cursor-target"
              style={{
                fontFamily: 'Geist, system-ui, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#c6c5d5',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffb867'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#c6c5d5'; }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div
          style={{
            fontFamily: 'Geist, system-ui, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#908f9e',
          }}
        >
          © {year} Precision Engineered by PM_NEXUS. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
