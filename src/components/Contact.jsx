import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { supabase } from '../supabaseClient'
import profile from "../assets/profile.jpeg";

const contactItems = [
  { icon: '✉', label: 'Email', value: 'sahildhoke564@email.com', href: 'mailto:sahildhoke564@email.com' },
  { icon: '📞', label: 'Phone', value: '+91 6232779285', href: 'tel:+916232779285' },
  { icon: '📍', label: 'Location', value: 'Pune, India', href: null },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/Sahil-3456', color: '#e8eaf6', d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
  { label: 'LinkedIn', href: 'linkedin.com/in/sahil-dhoke-b3761129a', color: '#0A66C2', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/sahildhoke2003/', color: '#FFA116', d: 'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z' },
]

function Input({ label, name, type = 'text', value, onChange, placeholder, as }) {
  const shared = {
    name, value, onChange, required: true, placeholder,
    style: {
      width: '100%', padding: '11px 15px',
      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(0,212,255,0.14)',
      borderRadius: '10px', color: '#e8eaf6', fontSize: '0.9rem', outline: 'none',
      transition: 'border-color 0.2s', resize: 'vertical', fontFamily: "'Space Grotesk',sans-serif",
      boxSizing: 'border-box',
    },
    onFocus: e => { e.target.style.borderColor = 'rgba(0,212,255,0.5)' },
    onBlur: e => { e.target.style.borderColor = 'rgba(0,212,255,0.14)' },
  }
  return (
    <div>
      <label style={{ display: 'block', fontSize: '0.72rem', color: '#90a4ae', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</label>
      {as === 'textarea'
        ? <textarea {...shared} rows={5} />
        : <input type={type} {...shared} />}
    </div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const [sent, setSent] = useState(false)
const [loading, setLoading] = useState(false)

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const onSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)

  const { error } = await supabase
    .from('messages')
    .insert([
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message
      }
    ])

  setLoading(false)

  if (error) {
    console.error(error)
    alert(error.message)
    return
  }

  setSent(true)

  setForm({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  setTimeout(() => {
    setSent(false)
  }, 3000)
}

  return (
    <section id="contact" style={{ padding: '8rem 2rem 6rem', position: 'relative', background: 'rgba(0,18,38,0.4)' }}>
      <div className="grid-bg" />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 40% at 50% 100%,rgba(0,212,255,0.05) 0%,transparent 70%)' }} />

      <div ref={ref} style={{ maxWidth: '980px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label">&lt;contact /&gt;</p>
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <div className="divider" style={{ marginBottom: '1.25rem' }} />
          <p style={{ color: '#90a4ae', maxWidth: '480px', margin: '0 auto', lineHeight: '1.7' }}>
            Actively seeking full-time opportunities. Whether you have a project, role, or just want to say hi — I'd love to hear from you!
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.55fr', gap: '3rem' }}>
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#e8eaf6', marginBottom: '0.5rem' }}>Get in Touch</h3>
              <p style={{ fontSize: '0.875rem', color: '#78909c', lineHeight: '1.7' }}>
                Feel free to reach out for collaboration, job opportunities, or just a friendly chat about tech!
              </p>
            </div>

            {contactItems.map(c => (
              <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '11px', background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#90a4ae', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{c.label}</div>
                  {c.href
                    ? <a href={c.href} style={{ fontSize: '0.9rem', color: '#e8eaf6', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00d4ff'} onMouseLeave={e => e.currentTarget.style.color = '#e8eaf6'}>{c.value}</a>
                    : <div style={{ fontSize: '0.9rem', color: '#e8eaf6', fontWeight: '500' }}>{c.value}</div>}
                </div>
              </div>
            ))}

            <div>
              <p style={{ fontSize: '0.7rem', color: '#90a4ae', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.875rem' }}>Find me on</p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#90a4ae', transition: 'all 0.25s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${s.color}55`; e.currentTarget.style.background = `${s.color}12`; e.currentTarget.style.color = s.color; e.currentTarget.style.transform = 'translateY(-3px)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#90a4ae'; e.currentTarget.style.transform = 'none' }}
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <div className="glow-dot" />
                <span style={{ fontSize: '0.875rem', fontWeight: '700', color: '#00d4ff' }}>Open to Opportunities</span>
              </div>
              <p style={{ fontSize: '0.78rem', color: '#90a4ae', lineHeight: '1.6' }}>
                Available for full-time roles, internships & freelance in Full Stack or AI development.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="glass" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#e8eaf6', marginBottom: '1.5rem' }}>Send a Message</h3>
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <Input label="Name" name="name" value={form.name} onChange={onChange} placeholder="Your name" />
                  <Input label="Email" name="email" type="email" value={form.email} onChange={onChange} placeholder="your@email.com" />
                </div>
                <Input label="Subject" name="subject" value={form.subject} onChange={onChange} placeholder="What's this about?" />
                <Input label="Message" name="message" value={form.message} onChange={onChange} placeholder="Tell me about the opportunity..." as="textarea" />
                <motion.button
                  type="submit"
                  className="btn-primary"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ alignSelf: 'flex-start' }}
                >
                  {loading ? (
  <>Sending...</>
) : sent ? (
  <>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
    Sent!
  </>
) : (
  <>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
    Send Message
  </>
)}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '0.75rem' }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg,#00d4ff,#0077b6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.75rem', color: '#050816', fontFamily: "'JetBrains Mono',monospace" }}><img
                  src={profile}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%' }}
                  /></div>
            <span style={{ fontWeight: '700', color: '#e8eaf6', fontSize: '0.95rem' }}>Sahil Dhoke</span>
          </div>
          <p style={{ fontSize: '0.78rem', color: '#546e7a' }}>Full Stack Developer · Pune, India </p>
        </motion.div>
      </div>
    </section>
  )
}
