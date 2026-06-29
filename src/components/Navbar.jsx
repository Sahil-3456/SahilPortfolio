import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import profile from "../assets/profile.jpeg";

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '68px', padding: '0 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(5,8,22,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(22px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : 'none',
        transition: 'background 0.3s, backdrop-filter 0.3s, border-bottom 0.3s',
      }}
    >
      <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '34px', height: '34px', borderRadius: '50%',
          background: 'linear-gradient(135deg,#00d4ff,#0077b6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: '800', fontSize: '0.85rem', color: '#050816',
          fontFamily: "'JetBrains Mono',monospace",
        }}><img
                  src={profile}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%' }}
                  /></div>  
        <span style={{ fontWeight: '700', fontSize: '1.05rem', color: '#e8eaf6', letterSpacing: '-0.02em' }}>
          Sahil Dhoke
        </span>
      </a>

      <div className="hide-sm" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
        ))}
        <a href="#contact" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.8rem' }}>
          Hire Me
        </a>
      </div>

      <button
        onClick={() => setOpen(v => !v)}
        className="show-sm"
        aria-label="Toggle menu"
        style={{
          display: 'none', flexDirection: 'column', gap: '5px',
          background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
        }}
      >
        <span style={{ width: '24px', height: '2px', background: open ? '#00d4ff' : '#e8eaf6', display: 'block', transition: 'all 0.3s', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }} />
        <span style={{ width: '24px', height: '2px', background: '#e8eaf6', display: 'block', opacity: open ? 0 : 1, transition: 'opacity 0.3s' }} />
        <span style={{ width: '24px', height: '2px', background: open ? '#00d4ff' : '#e8eaf6', display: 'block', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            style={{
              position: 'absolute', top: '68px', left: 0, right: 0,
              background: 'rgba(5,8,22,0.97)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0,212,255,0.12)',
              padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem',
            }}
          >
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)} style={{ fontSize: '1rem' }}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
