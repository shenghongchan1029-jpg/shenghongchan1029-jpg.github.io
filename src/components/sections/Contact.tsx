import { useState, useRef } from 'react';

const C = {
  onSurface:         '#dee3ec',
  onSurfaceVar:      '#c6c5d5',
  primary:           '#bdc2ff',
  primaryContainer:  '#5e6ad2',
  onPrimaryContainer:'#fdfaff',
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" style={{ padding: '80px 48px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* CTA heading (matches wireframe bottom section) */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '72px',
          padding: '80px 48px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(94,106,210,0.12) 0%, rgba(5,5,6,0.6) 100%)',
          border: '1px solid rgba(189,194,255,0.1)',
        }}
      >
        <h2
          style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: C.onSurface,
            marginBottom: '32px',
            lineHeight: 1.2,
          }}
        >
          准备好构建您的下一个卓越项目了吗？
        </h2>
        <button
          className="cursor-target"
          onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            background: C.onSurface,
            color: '#020203',
            padding: '16px 40px',
            borderRadius: '9999px',
            fontFamily: 'Geist, sans-serif',
            fontSize: '18px',
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 40px rgba(222,227,236,0.25)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
          }}
        >
          即刻启航
        </button>
      </div>

      {/* Contact form */}
      <div ref={formRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
        {/* Left info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ width: '48px', height: '1px', background: C.primary }} />
            <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '13px', fontWeight: 500, color: C.primary, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Contact</span>
          </div>
          <h2 style={{ fontFamily: 'Geist, sans-serif', fontSize: '36px', fontWeight: 600, letterSpacing: '-0.03em', color: C.onSurface, marginBottom: '24px', lineHeight: 1.2 }}>
            联系我。
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.8, color: C.onSurfaceVar, marginBottom: '40px' }}>
            无论是项目合作、咨询还是单纯的技术交流，我都很乐意倾听。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: 'mail',     label: 'Email',    value: 'hello@pmnexus.dev' },
              { icon: 'code',     label: 'GitHub',   value: 'github.com/pmnexus' },
              { icon: 'business', label: 'LinkedIn', value: 'linkedin.com/in/pmnexus' },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className="cursor-target"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(5,5,6,0.4)',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(189,194,255,0.2)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.06)'; }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: C.primary }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '12px', color: C.onSurfaceVar, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: C.onSurface }}>{item.value}</div>
                </div>
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: C.onSurfaceVar, marginLeft: 'auto', opacity: 0.5 }}>north_east</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit}>
          {[
            { id: 'name',    label: '姓名',   type: 'text',  placeholder: 'Your Name' },
            { id: 'email',   label: '邮箱',   type: 'email', placeholder: 'your@email.com' },
          ].map((field) => (
            <div key={field.id} style={{ marginBottom: '20px' }}>
              <label style={{ fontFamily: 'Geist, sans-serif', fontSize: '13px', color: C.onSurfaceVar, display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(5,5,6,0.6)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  color: C.onSurface,
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(189,194,255,0.4)'; }}
                onBlur={(e)  => { (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
              />
            </div>
          ))}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontFamily: 'Geist, sans-serif', fontSize: '13px', color: C.onSurfaceVar, display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              消息
            </label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(5,5,6,0.6)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                color: C.onSurface,
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                outline: 'none',
                resize: 'vertical',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'rgba(189,194,255,0.4)'; }}
              onBlur={(e)  => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
            />
          </div>
          <button
            type="submit"
            className="cursor-target"
            style={{
              width: '100%',
              padding: '14px',
              background: C.primaryContainer,
              color: C.onPrimaryContainer,
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '9999px',
              fontFamily: 'Geist, sans-serif',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.02)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
          >
            {sent
              ? <><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>check_circle</span> 已发送！</>
              : <><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span> 发送消息</>
            }
          </button>
        </form>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
