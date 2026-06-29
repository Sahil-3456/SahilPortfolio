import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const subjects = [
  'Data Structures & Algorithms', 'Object-Oriented Programming',
  'Database Management Systems', 'Operating Systems',
  'Computer Networks', 'System Design',
  'Multithreading', 'Software Engineering',
]

const platforms = [
  { name: 'LeetCode', desc: 'Arrays, Strings, Trees, Graphs, DP', color: '#FFA116', href: 'https://leetcode.com/u/sahildhoke2003/' },
  { name: 'Coding Ninja', desc: 'DSA practice & competitions', color: '#F97316', href: 'https://codingninjas.com' },
  { name: 'GitHub', desc: '4+ production-style repositories', color: '#00d4ff', href: 'https://github.com/Sahil-3456' },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" style={{ padding: '8rem 2rem', position: 'relative' }}>
      <div className="grid-bg" />
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label">&lt;education /&gt;</p>
          <h2 className="section-title">Education & <span className="gradient-text">Learning</span></h2>
          <div className="divider" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Edu card */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="glass"
            style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: 0, right: 0, width: '110px', height: '110px', background: 'radial-gradient(circle at 100% 0%,rgba(0,212,255,0.07) 0%,transparent 70%)', borderRadius: '0 16px 0 0' }} />

            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.5rem' }}>🎓</div>

            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#e8eaf6', marginBottom: '8px', lineHeight: 1.3 }}>
              B.Tech – Computer Science Engineering
            </h3>
            <div style={{ color: '#00d4ff', fontWeight: '600', fontSize: '0.9rem', marginBottom: '4px' }}>
              IPS Academy – Institute of Engineering & Science
            </div>
            <div style={{ color: '#90a4ae', fontSize: '0.8rem', marginBottom: '1.5rem' }}>📍 Indore, Madhya Pradesh</div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {[{ label: 'Period', val: '2022 – 2026', c: '#00d4ff' }, { label: 'CGPA', val: '7.5 / 10', c: '#00b4d8' }].map(b => (
                <div key={b.label} style={{ background: `${b.c}12`, border: `1px solid ${b.c}28`, borderRadius: '8px', padding: '8px 16px' }}>
                  <div style={{ fontSize: '0.62rem', color: '#90a4ae', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>{b.label}</div>
                  <div style={{ fontSize: '0.88rem', color: b.c, fontWeight: '700', fontFamily: "'JetBrains Mono',monospace" }}>{b.val}</div>
                </div>
              ))}
            </div>

            {[
              'Core subjects: DSA, OOP, DBMS, OS, Computer Networks, System Design',
              'Hands-on experience building full-stack production-grade applications',
              'Active in coding contests and AI/ML upskilling',
              '4+ self-initiated projects covering diverse technology domains',
            ].map(h => (
              <div key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00d4ff', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '0.84rem', color: '#90a4ae', lineHeight: '1.7' }}>{h}</p>
              </div>
            ))}
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Core subjects */}
            <div className="glass" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#e8eaf6', marginBottom: '1.25rem' }}>Core CS Subjects</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                {subjects.map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.35, delay: 0.4 + i * 0.05 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      padding: '9px 12px',
                      background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.13)',
                      borderRadius: '9px',
                    }}
                  >
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00d4ff', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.78rem', color: '#b0bec5', fontWeight: '500' }}>{s}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Coding platforms */}
            <div className="glass" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#e8eaf6', marginBottom: '1.25rem' }}>Coding Platforms</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {platforms.map(pl => (
                  <a
                    key={pl.name}
                    href={pl.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', textDecoration: 'none', transition: 'all 0.22s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${pl.color}40`; e.currentTarget.style.background = `${pl.color}08` }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
                  >
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: '600', color: pl.color }}>{pl.name}</div>
                      <div style={{ fontSize: '0.73rem', color: '#90a4ae' }}>{pl.desc}</div>
                    </div>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#90a4ae" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
