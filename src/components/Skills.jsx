import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    title: 'Languages', icon: '{ }',
    skills: [{ n: 'Java', p: 92 }, { n: 'JavaScript', p: 88 }, { n: 'TypeScript', p: 80 }, { n: 'SQL', p: 85 }, { n: 'Python', p: 60 }],
  },
  {
    title: 'Backend', icon: '⚙',
    skills: [{ n: 'Spring Boot', p: 90 }, { n: 'REST APIs', p: 92 }, { n: 'JWT / OAuth 2.0', p: 85 }, { n: 'Microservices', p: 82 }, { n: 'Node.js', p: 74 }],
  },
  {
    title: 'Frontend', icon: '◈',
    skills: [{ n: 'React.js', p: 88 }, { n: 'Redux Toolkit', p: 82 }, { n: 'Tailwind CSS', p: 85 }, { n: 'HTML5 / CSS3', p: 90 }, { n: 'Bootstrap', p: 78 }],
  },
  {
    title: 'Cloud & DevOps', icon: '☁',
    skills: [{ n: 'AWS (EC2,S3,IAM)', p: 74 }, { n: 'Docker', p: 80 }, { n: 'GitHub Actions', p: 70 }, { n: 'Git & GitHub', p: 90 }, { n: 'CI/CD Basics', p: 68 }],
  },
  {
    title: 'Databases', icon: '◉',
    skills: [{ n: 'MySQL', p: 88 }, { n: 'PostgreSQL', p: 80 }, { n: 'MongoDB', p: 74 }],
  },
  {
    title: 'AI & ML', icon: '🤖',
    skills: [{ n: 'OpenAI API', p: 85 }, { n: 'Agentic AI', p: 78 }, { n: 'Prompt Engineering', p: 82 }, { n: 'RAG Basics', p: 66 }, { n: 'Vector DB', p: 60 }],
  },
]

const allTags = [
  'Java','Spring Boot','React.js','Node.js','TypeScript','JavaScript',
  'Docker','AWS','MySQL','PostgreSQL','MongoDB','JWT','OAuth 2.0',
  'REST APIs','Microservices','Redux','Tailwind CSS','OpenAI API',
  'Agentic AI','Prompt Engineering','Git','GitHub Actions','CI/CD',
  'DSA','System Design','Multithreading','DBMS','IntelliJ','VS Code','Postman',
]

function Bar({ name, pct, delay, inView }) {
  return (
    <div style={{ marginBottom: '0.8rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span style={{ fontSize: '0.83rem', color: '#b0bec5', fontWeight: '500' }}>{name}</span>
        <span className="mono" style={{ fontSize: '0.72rem', color: '#00d4ff', fontWeight: '600' }}>{pct}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.3, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" style={{ padding: '8rem 2rem', position: 'relative', background: 'rgba(0,18,38,0.35)' }}>
      <div className="grid-bg" />
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label">&lt;skills /&gt;</p>
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          <div className="divider" style={{ marginBottom: '1.25rem' }} />
          <p style={{ color: '#90a4ae', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' }}>
            A comprehensive toolkit built through hands-on projects and continuous learning.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.4rem', marginBottom: '3.5rem' }}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: ci * 0.08 }}
              className="glass"
              style={{ padding: '1.75rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.4rem' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '9px',
                  background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.22)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', fontFamily: "'JetBrains Mono',monospace", color: '#00d4ff', fontWeight: '700',
                }}>{cat.icon}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#e8eaf6' }}>{cat.title}</h3>
              </div>
              {cat.skills.map((s, si) => (
                <Bar key={s.n} name={s.n} pct={s.p} delay={ci * 0.08 + si * 0.07} inView={inView} />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <p style={{ fontSize: '0.75rem', color: '#90a4ae', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.25rem' }}>
            Full Technology Stack
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', justifyContent: 'center' }}>
            {allTags.map((t, i) => (
              <motion.span
                key={t}
                className="tag"
                initial={{ opacity: 0, scale: 0.82 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.28, delay: 0.55 + i * 0.022 }}
                style={{ cursor: 'default' }}
              >{t}</motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
