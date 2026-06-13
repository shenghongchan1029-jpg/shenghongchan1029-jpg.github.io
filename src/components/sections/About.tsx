const C = {
  onSurface:    '#dee3ec',
  onSurfaceVar: '#c6c5d5',
  primary:      '#bdc2ff',
  tertiary:     '#ffb867',
  surfaceHigh:  '#252a32',
};

export default function About() {
  return (
    <section id="about" style={{ padding: '48px 48px 80px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
        {/* Left: bio */}
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: 1.8, color: C.onSurfaceVar, marginBottom: '24px' }}>
            我是一名热爱极简主义的产品经理兼全栈开发者，过去四年深耕于高性能数字产品的规划与研发。
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: 1.8, color: C.onSurfaceVar, marginBottom: '32px' }}>
            我相信优秀的产品源于对细节的极致追求——每一行代码、每一像素、每一次交互都是精心设计的结果。
          </p>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { icon: 'location_on',  text: '上海，中国' },
              { icon: 'school',       text: '复旦大学 CS' },
              { icon: 'work',         text: '开放合作' },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: C.primary }}>{item.icon}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: C.onSurfaceVar }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: highlight cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { icon: 'bolt',         title: '高性能系统',  desc: '专注于亚毫秒级响应的实时系统设计' },
            { icon: 'design_services', title: '极简设计',  desc: '以减法哲学打磨每个视觉细节' },
            { icon: 'psychology',   title: '以人为本',    desc: '深度理解用户心智模型，构建直觉化产品' },
          ].map((card) => (
            <div
              key={card.title}
              className="glass-card cursor-target"
              style={{ padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: '16px', cursor: 'none' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '28px', color: C.tertiary, flexShrink: 0, marginTop: '2px' }}>{card.icon}</span>
              <div>
                <div style={{ fontFamily: 'Geist, sans-serif', fontSize: '16px', fontWeight: 600, color: C.onSurface, marginBottom: '4px' }}>{card.title}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: C.onSurfaceVar, lineHeight: 1.6 }}>{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div[style*="grid"] { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
