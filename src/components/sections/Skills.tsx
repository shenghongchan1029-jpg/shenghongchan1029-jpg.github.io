const C = {
  onSurface:    '#dee3ec',
  onSurfaceVar: '#c6c5d5',
  primary:      '#bdc2ff',
  tertiary:     '#ffb867',
};

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    icon: 'web',
    color: C.primary,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Next.js', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: 'dns',
    color: C.tertiary,
    skills: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'GraphQL'],
  },
  {
    category: 'Infrastructure',
    icon: 'cloud',
    color: '#6ee7b7',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Prometheus'],
  },
  {
    category: 'Product',
    icon: 'lightbulb',
    color: '#fbbf24',
    skills: ['PRD 撰写', '用户研究', 'A/B 测试', 'OKR 制定', 'Figma', '数据分析'],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '0 48px 80px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontFamily: 'Geist, sans-serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600, letterSpacing: '-0.03em', color: C.onSurface, marginBottom: '32px', lineHeight: 1.2 }}>
        技术栈。
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.category}
            className="glass-card cursor-target"
            style={{ padding: '28px 32px', cursor: 'none' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '24px', color: group.color }}>{group.icon}</span>
              <span style={{ fontFamily: 'Geist, sans-serif', fontSize: '18px', fontWeight: 600, color: C.onSurface }}>{group.category}</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: '4px 12px',
                    borderRadius: '4px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: C.onSurfaceVar,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills > div[style*="grid"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
