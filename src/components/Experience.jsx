import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const achievements = [
  { icon: '🏆', title: 'DSA Problem Solver', desc: 'Active on LeetCode & Coding Ninja — strong in Arrays, Strings, Recursion, Linked Lists, Stacks, Queues, Trees, Graphs, and Dynamic Programming.' },
  { icon: '🚀', title: '4+ Full Stack Projects', desc: 'End-to-end ownership from system design to AWS cloud deployment across diverse domains.' },
  { icon: '🐳', title: 'Docker & Cloud', desc: 'Docker containerization, JWT-secured REST APIs, and microservices architecture across multiple production-style projects.' },
  { icon: '🤖', title: 'AI Upskilling', desc: 'Actively learning Agentic AI, Generative AI integrations, RAG, and intelligent automation systems.' },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" style={{ padding: '8rem 2rem', position: 'relative', background: 'rgba(0,18,38,0.35)' }}>
      <div className="grid-bg" />
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label">&lt;experience /&gt;</p>
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <div className="divider" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            style={{ position: 'relative', paddingLeft: '2.5rem' }}
          >
            {/* Line */}
            <div style={{ position: 'absolute', left: 0, top: '14px', bottom: 0, width: '2px', background: 'linear-gradient(180deg,#00d4ff,rgba(0,212,255,0.08))' }} />
            {/* Dot */}
            <div style={{ position: 'absolute', left: '-5px', top: '10px', width: '12px', height: '12px', borderRadius: '50%', background: '#00d4ff', border: '2px solid #050816', boxShadow: '0 0 12px #00d4ff' }} />

            <div className="glass" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#e8eaf6', marginBottom: '4px' }}>Full Stack Developer Intern</h3>
                  <div style={{ color: '#00d4ff', fontWeight: '600', fontSize: '0.875rem', marginBottom: '2px' }}>Academic / Self-Initiated Projects</div>
                  <div style={{ color: '#90a4ae', fontSize: '0.78rem' }}>📍 Pune, India</div>
                </div>
                <span style={{
                  background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)',
                  borderRadius: '8px', padding: '4px 12px', fontSize: '0.75rem',
                  color: '#00d4ff', fontFamily: "'JetBrains Mono',monospace", fontWeight: '600', flexShrink: 0,
                }}>2023 – 2024</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.5rem' }}>
                {[
                  'Developed a cloud-native, reward-based crowdfunding platform using Java, Spring Boot, Node.js, and React.js.',
                  'Implemented JWT & OAuth 2.0 authentication; integrated MySQL for scalable data management.',
                  'Created Docker containers for microservices; deployed complete stack on AWS (EC2, S3, IAM).',
                  'Practiced role-based access control, API security design, and real-time monitoring.',
                ].map(h => (
                  <div key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00d4ff', marginTop: '8px', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.84rem', color: '#90a4ae', lineHeight: '1.7' }}>{h}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {['Java', 'Spring Boot', 'Node.js', 'React.js', 'JWT', 'OAuth 2.0', 'MySQL', 'Docker', 'AWS'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <motion.h3
              initial={{ opacity: 0, x: 28 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              style={{ fontSize: '1.15rem', fontWeight: '700', color: '#e8eaf6', marginBottom: '0.5rem' }}
            >
              Achievements & Highlights
            </motion.h3>
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: 28 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.25 + i * 0.08 }}
                className="glass"
                style={{ padding: '1.25rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                  background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem',
                }}>{a.icon}</div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#e8eaf6', marginBottom: '4px' }}>{a.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#78909c', lineHeight: '1.6' }}>{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
