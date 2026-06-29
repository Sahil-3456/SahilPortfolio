import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

const stats = [
  { value: '4+', label: 'Projects' },
  { value: '1+', label: 'Years Exp.' },
  { value: '7.5', label: 'CGPA / 10' },
  { value: 'DSA', label: 'Expert' },
]

const info = [
  { icon: '📍', label: 'Location', value: 'Pune, India' },
  { icon: '📧', label: 'Email', value: 'sahildhoke564@email.com' },
  { icon: '📞', label: 'Phone', value: '+91 6232779285' },
  { icon: '🎓', label: 'Education', value: 'B.Tech CSE, 2026' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" style={{ padding: '8rem 2rem', position: 'relative' }}>
      <div className="grid-bg" />
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Heading */}
        <motion.div {...(inView ? fade() : { initial: { opacity: 0 } })} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-label">&lt;about /&gt;</p>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <div className="divider" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px,380px) 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left — profile */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem' }}
          >
            {/* Photo ring */}
            <div className="float" style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-5px', borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #00d4ff, #0077b6, #00b4d8, #00d4ff)',
                animation: 'spin-ring 4s linear infinite', zIndex: 0,
              }} />
              <div style={{
                position: 'absolute', inset: '-2px', borderRadius: '50%',
                background: '#050816', zIndex: 1,
              }} />
              <div style={{
                position: 'relative', zIndex: 2,
                width: '210px', height: '210px', borderRadius: '50%',
                overflow: 'hidden',
                background: 'linear-gradient(135deg,rgba(0,212,255,0.12),rgba(0,119,182,0.18))',
                border: '2px solid rgba(0,212,255,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img
                  src="profile.jpeg"
                  alt="Sahil Dhoke"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex' }}
                />
                <div style={{
                  display: 'none', width: '100%', height: '100%',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '3.5rem', fontWeight: '800',
                  fontFamily: "'JetBrains Mono',monospace",
                  background: 'linear-gradient(135deg,#00d4ff,#0077b6)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>SD</div>
              </div>
            </div>

            {/* Info card */}
            <div className="glass" style={{ padding: '1.5rem', width: '100%', maxWidth: '310px' }}>
              {info.map(i => (
                <div key={i.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                  <span style={{ fontSize: '1rem' }}>{i.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.65rem', color: '#90a4ae', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{i.label}</div>
                    <div style={{ fontSize: '0.875rem', color: '#e8eaf6', fontWeight: '500' }}>{i.value}</div>
                  </div>
                </div>
              ))}
              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(0,212,255,0.1)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="glow-dot" />
                <span style={{ fontSize: '0.82rem', color: '#00d4ff', fontWeight: '600' }}>Open to Opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
          >
            <div>
              <h3 style={{ fontSize: '1.7rem', fontWeight: '700', color: '#e8eaf6', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                Building the future with <span className="gradient-text">code & AI</span>
              </h3>
              <p style={{ color: '#90a4ae', lineHeight: '1.8', marginBottom: '0.875rem' }}>
                I'm a results-driven Full Stack Developer with strong foundations in Java, Spring Boot, React,
                and Data Structures & Algorithms. I'm passionate about building scalable, cloud-native applications
                using microservices, REST APIs, Docker, and AWS.
              </p>
              <p style={{ color: '#90a4ae', lineHeight: '1.8' }}>
                With 4+ production-style projects covering AI integration, real-time systems, and e-commerce platforms,
                I'm actively pursuing enterprise-grade development opportunities while expanding my expertise in
                Agentic AI and Generative AI technologies.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                'Microservices architecture with Docker & AWS cloud deployment',
                'OpenAI API integration & Agentic AI development',
                'JWT / OAuth 2.0 secured REST APIs & role-based access control',
                'Active DSA problem solver — Arrays, Trees, Graphs, Dynamic Programming',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0, marginTop: '2px',
                    background: 'rgba(0,212,255,0.12)', border: '1px solid rgba(0,212,255,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span style={{ color: '#b0bec5', fontSize: '0.9rem', lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.875rem' }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.5 + i * 0.08 }}
                  className="glass"
                  style={{ padding: '1rem', textAlign: 'center' }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#00d4ff', fontFamily: "'JetBrains Mono',monospace" }}>{s.value}</div>
                  <div style={{ fontSize: '0.68rem', color: '#90a4ae', marginTop: '4px', lineHeight: 1.3 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-outline">Contact Me</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
