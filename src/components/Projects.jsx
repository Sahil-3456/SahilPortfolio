import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    title: 'AI-Powered ATS Resume Analyzer',
    year: '2023',
    category: 'AI / Full Stack',
    icon: '🧠',
    color: '#00d4ff',
    desc: 'Intelligent resume screening tool that evaluates resumes against job descriptions using AI-powered keyword analysis, generating ATS compatibility scores with actionable feedback.',
    points: [
      'Resume parsing & keyword extraction pipeline via OpenAI API',
      'Skill-gap identification & personalized learning recommendations',
      'Full-stack dashboard with role-based access control & real-time monitoring',
      'Deployed on AWS with JWT-secured endpoints & Agile version control',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'OpenAI API', 'AWS', 'JWT'],
  },
  {
    title: 'Agentic AI Career Assistant',
    year: '2024',
    category: 'Agentic AI',
    icon: '🤖',
    color: '#00b4d8',
    desc: 'Generative AI-based career assistant for answering interview questions, generating optimized resumes, recommending learning paths, and automating career guidance workflows.',
    points: [
      'AI chatbot with contextual memory & intelligent prompt-based automation',
      'Dynamic mock interview simulations & roadmap generation',
      'Real-time OpenAI API integration with Spring Boot backend',
      'Secure React.js frontend with MySQL persistence',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'OpenAI API', 'REST APIs'],
  },
  {
    title: 'Real-Time Coding Contest Platform',
    year: '2025',
    category: 'Full Stack',
    icon: '⚡',
    color: '#0096c7',
    desc: 'Scalable coding contest platform (inspired by LeetCode / Coding Ninja) with real-time contest management, dynamic leaderboards, and automated problem evaluation.',
    points: [
      'Real-time leaderboard updates & automated problem evaluation',
      'Secure JWT authentication & admin dashboard for contest management',
      'Responsive UI supporting concurrent users at scale',
      'Containerized with Docker for consistent multi-environment deployment',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Docker', 'REST APIs', 'JWT'],
  },
  {
    title: 'E-Commerce Microservices App',
    year: '2025',
    category: 'Microservices',
    icon: '🛒',
    color: '#0077b6',
    desc: 'Scalable e-commerce platform using microservices with independent modules for users, products, payments, and order management with AWS cloud deployment.',
    points: [
      'Independent microservices for users, products, orders & payments',
      'Secure API gateway with JWT, Dockerized deployment & AWS support',
      'Horizontal scaling & fault isolation across independent services',
      'Architected from system design to full cloud deployment',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Docker', 'AWS', 'Microservices'],
  },
]

function Card({ project: p, index, inView }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.58, delay: index * 0.13 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        background: hov ? 'rgba(255,255,255,0.055)' : 'rgba(255,255,255,0.028)',
        border: `1px solid ${hov ? p.color + '55' : 'rgba(255,255,255,0.075)'}`,
        borderRadius: '18px',
        padding: window.innerWidth <= 768 ? "1.2rem" : "2rem",
        transition: 'all 0.32s ease',
        transform: hov ? 'translateY(-6px)' : 'none',
        boxShadow: hov ? `0 24px 52px ${p.color}12` : 'none',
        backdropFilter: 'blur(10px)',
        display: 'flex', flexDirection: 'column', gap: '1.1rem',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: '2rem', right: '2rem',
        height: '2px', background: `linear-gradient(90deg,transparent,${p.color},transparent)`,
        borderRadius: '0 0 2px 2px', opacity: hov ? 1 : 0, transition: 'opacity 0.3s',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '42px', height: '42px', borderRadius: '11px', flexShrink: 0,
            background: `${p.color}18`, border: `1px solid ${p.color}40`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem',
          }}>{p.icon}</div>
          <div>
            <div style={{ fontSize: '0.68rem', color: p.color, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600' }}>{p.category}</div>
            <h3
  style={{
    fontSize: window.innerWidth <= 768 ? "0.95rem" : "1.05rem", fontWeight: '700', color: '#e8eaf6', letterSpacing: '-0.02em', lineHeight: 1.3 }}>{p.title}</h3>
          </div>
        </div>
        <span style={{
          fontSize: '0.72rem', color: '#90a4ae', fontFamily: "'JetBrains Mono',monospace",
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          padding: '3px 9px', borderRadius: '6px', flexShrink: 0,
        }}>{p.year}</span>
      </div>

      <p
  style={{
    fontSize: window.innerWidth <= 768 ? "0.8rem" : "0.875rem", color: '#78909c', lineHeight: '1.7' }}>{p.desc}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
        {p.points.map(pt => (
          <div key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2.5" style={{ marginTop: '4px', flexShrink: 0 }}>
              <polyline points="9 18 15 12 9 6"/>
            </svg>
            <span
  style={{
    fontSize: window.innerWidth <= 768 ? "0.75rem" : "0.8rem", color: '#90a4ae', lineHeight: 1.55 }}>{pt}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: 'auto' }}>
        {p.tech.map(t => (
          <span key={t} style={{
            padding: '3px 10px', borderRadius: '100px', fontSize: '0.7rem',
            fontFamily: "'JetBrains Mono',monospace", fontWeight: '500',
            color: p.color, background: `${p.color}10`, border: `1px solid ${p.color}2e`,
          }}>{t}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" style={{ padding: '8rem 2rem', position: 'relative' }}>
      <div className="grid-bg" />
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label">&lt;projects /&gt;</p>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="divider" style={{ marginBottom: '1.25rem' }} />
          <p style={{ color: '#90a4ae', maxWidth: '540px', margin: '0 auto', lineHeight: '1.7' }}>
            4+ production-style projects demonstrating end-to-end ownership from system design to cloud deployment.
          </p>
        </motion.div>

        <div
        className="projects-grid"
  style={{
    display: "grid",
    gridTemplateColumns:
      window.innerWidth <= 768
        ? "1fr"
        : "repeat(auto-fit, minmax(460px, 1fr))",
    gap: window.innerWidth <= 768 ? "1rem" : "1.4rem",
  }}
>
          {projects.map((p, i) => <Card key={p.title} project={p} index={i} inView={inView} />)}
        </div>
      </div>
    </section>
  )
}
