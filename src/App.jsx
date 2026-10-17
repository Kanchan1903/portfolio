import { useEffect, useRef } from 'react'
import './App.css'

/* ── Animated constellation background ── */
function StarCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    const stars = []
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 130; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.006 + 0.003,
        dir: Math.random() > 0.5 ? 1 : -1,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw constellation lines between nearby stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x
          const dy = stars[i].y - stars[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(stars[i].x, stars[i].y)
            ctx.lineTo(stars[j].x, stars[j].y)
            ctx.strokeStyle = `rgba(103, 232, 249, ${0.22 * (1 - dist / 130)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // Draw stars
      stars.forEach(s => {
        s.alpha += s.speed * s.dir
        if (s.alpha >= 0.95 || s.alpha <= 0.15) s.dir *= -1
        s.x += s.vx
        s.y += s.vy
        if (s.x < 0) s.x = canvas.width
        if (s.x > canvas.width) s.x = 0
        if (s.y < 0) s.y = canvas.height
        if (s.y > canvas.height) s.y = 0

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(165, 215, 255, ${s.alpha})`
        ctx.shadowBlur = 8
        ctx.shadowColor = 'rgba(103, 232, 249, 0.6)'
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])
  return <canvas ref={canvasRef} className="star-canvas" />
}

/* ── Scroll-triggered fade-in hook ── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed')
        }
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()

  return (
    <div className="portfolio">
      {/* Fixed Ambient Glowing Background */}
      <div className="ambient-background">
        <div className="ambient-blob blob-cyan"></div>
        <div className="ambient-blob blob-purple"></div>
        <div className="ambient-blob blob-blue"></div>
      </div>

      <StarCanvas />

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <h1 className="hero-name fade-up">
            Hi, I&apos;m <span className="gradient-text">Kanchan Deshmukh.</span>
          </h1>
          <h2 className="hero-subtitle fade-up delay-1">
            Final-Year Computer Engineering Student | Aspiring Data Analyst
          </h2>
          <p className="hero-desc fade-up delay-2">
            I work with Python, SQL, Excel, and Power BI to transform raw data into
            meaningful insights. Through data analytics internships and hands-on projects,
            I&apos;ve explored data visualization, sales forecasting, and customer
            segmentation. I&apos;m eager to solve real-world problems and grow as a data
            professional.
          </p>
          <div className="hero-buttons fade-up delay-3">
            <a href="#projects" className="btn btn-purple">View Projects <span>→</span></a>
            <a href="/Kanchan_Deshmukh_Resume.pdf" download className="btn btn-cyan">
              <span className="eye">◎</span> View Resume
            </a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
          <div className="connect fade-up delay-4">
            <span className="connect-label">CONNECT:</span>
            <a href="https://github.com/Kanchan1903" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a10.98 10.98 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.27 5.66.42.36.79 1.07.79 2.15v3.19c0 .31.21.66.8.55C20.21 21.42 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
            <a href="https://linkedin.com/in/kanchan-deshmukh-746a79329" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="about-badge reveal">ABOUT ME</div>
        <h2 className="about-title reveal">
          Passionate About <span className="gradient-text">Data Analytics</span>
        </h2>
        <div className="about-divider reveal"></div>

        <div className="about-grid">


          <div className="bio-card reveal">
            <h3 className="bio-heading">Professional Introduction</h3>
            <p className="bio-text">
              &quot;I am a final-year Computer Engineering student passionate about data analytics
              and problem solving. I work with Python, SQL, Excel, and Power BI to extract
              meaningful insights from data. Through internships and hands-on projects, I&apos;ve
              explored data visualization, sales forecasting, and customer segmentation —
              and I&apos;m eager to grow as a data professional.&quot;
            </p>
            <div className="bio-checks">
              <div className="bio-check">
                <span className="check-icon">✓</span> Final-Year Computer Engineering (2023–2027)
              </div>
              <div className="bio-check">
                <span className="check-icon">✓</span> Smart India Hackathon Finalist
              </div>
              <div className="bio-check">
                <span className="check-icon">✓</span> 3 Internships Completed (Thiranex, Cognifyz, YuvaIntern)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="skills-section" id="skills">
        <div className="about-badge reveal">SKILLS</div>
        <h2 className="about-title reveal">Tech <span className="gradient-text">Stack</span></h2>
        <div className="about-divider reveal"></div>
        <div className="skills-grid">
          {[
            { name: 'Python', category: 'Data Analysis & ML', icon: '🐍' },
            { name: 'SQL', category: 'Database Querying', icon: '🗄️' },
            { name: 'Power BI', category: 'Business Intelligence', icon: '📊' },
            { name: 'Excel', category: 'Analytics & Reporting', icon: '📈' },
            { name: 'Pandas & NumPy', category: 'Data Manipulation', icon: '🐼' },
            { name: 'C', category: 'Programming Language', icon: '💻' },
            { name: 'Data Visualization', category: 'Matplotlib & Seaborn', icon: '📉' },
            { name: 'MySQL', category: 'Relational Databases', icon: '🐬' },
            { name: 'Git & GitHub', category: 'Version Control', icon: '🐙' },
          ].map((s, i) => (
            <div className="skill-card reveal" style={{ transitionDelay: `${i * 0.05}s` }} key={s.name}>
              <div className="skill-icon-wrap">{s.icon}</div>
              <div className="skill-info">
                <h3 className="skill-name">{s.name}</h3>
                <span className="skill-category">{s.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="projects-section" id="projects">
        <div className="about-badge reveal">PROJECTS</div>
        <h2 className="about-title reveal">Featured <span className="gradient-text">Projects</span></h2>
        <div className="about-divider reveal"></div>
        <div className="projects-grid">
          {[
            {
              title: 'Smart Classroom Attendance System',
              desc: 'Full-stack MERN application for automated classroom attendance tracking, student management, and real-time attendance analytics with an intuitive teacher & admin dashboard.',
              tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
              icon: '📋',
              github: 'https://github.com/Kanchan1903/attendance-system-mern',
              demo: 'https://attendance-system-mern.vercel.app',
            },
            {
              title: 'Predictive Analytics — Sales Forecasting',
              desc: 'Compared 3 regression models (baseline, lag-feature, seasonal) on ~9,994 Superstore records, improving R² from 0.49 to 0.634. Engineered features and forecasted 6 months of sales.',
              tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
              icon: '📈',
              github: 'https://github.com/Kanchan1903/Predictive-Analytics-Sales-Forecasting',
            },
            {
              title: 'Customer Segmentation using RFM & K-Means',
              desc: 'Cleaned 541,909 UCI Online Retail transactions into 3,741 customer profiles; computed RFM metrics and applied K-Means clustering. Built an interactive Power BI dashboard for retention.',
              tech: ['Python', 'Pandas', 'Scikit-learn', 'Power BI'],
              icon: '👥',
              github: 'https://github.com/Kanchan1903/Customer-Segmentation-RFM-KMeans',
            },
            {
              title: 'Sales & Revenue Analysis — Power BI Dashboard',
              desc: 'Analyzed ~$118.73M in revenue across products, countries, and segments with interactive slicers. Wrote custom DAX measures for YoY growth and profit margins with executive reporting.',
              tech: ['Power BI', 'Power Query', 'DAX', 'Excel'],
              icon: '📊',
              github: 'https://github.com/Kanchan1903/Sales-Revenue-Analysis-PowerBI',
            },
            {
              title: 'Python Data Analytics — Titanic ML & EDA',
              desc: 'Completed a 5-week intensive data analytics project with deep EDA, hypothesis testing, and statistical analysis. Developed a Logistic Regression model achieving 80.45% accuracy and 0.8511 ROC-AUC.',
              tech: ['Python', 'Pandas', 'Seaborn', 'SciPy', 'Scikit-learn'],
              icon: '🚢',
              github: 'https://github.com/Kanchan1903/Python-Data-Analytics-Internship',
            },
          ].map((p, i) => (
            <div className="project-card reveal" style={{ transitionDelay: `${i * 0.1}s` }} key={p.title}>
              <div className="project-top">
                <span className="project-icon">{p.icon}</span>
                <div className="project-links">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="github-link" aria-label="Live Demo" title="Live Demo">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noreferrer" className="github-link" aria-label="GitHub" title="GitHub Repository">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a10.98 10.98 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.27 5.66.42.36.79 1.07.79 2.15v3.19c0 .31.21.66.8.55C20.21 21.42 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
                  </a>
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="tech-tags">
                {p.tech.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="achievements-section" id="achievements">
        <div className="about-badge reveal">RECOGNITION</div>
        <h2 className="about-title reveal">My <span className="gradient-text">Achievements</span></h2>
        <div className="about-divider reveal"></div>
        <div className="achievements-grid">
          {[
            {
              badge: 'NATIONAL FINALIST',
              title: 'Smart India Hackathon 2024',
              desc: 'Selected as a National Finalist for developing a fire department emergency response web and mobile platform; led domain research and UI/UX architecture.',
              icon: '🏆',
              highlight: 'National Level Hackathon',
            },
            {
              badge: 'TEAM LEADER (TEAM OF 6)',
              title: 'Smart India Hackathon 2025',
              desc: 'Led Team RAYA 2.0 on "ASTRA", a Technology Intelligence & Forecasting Platform designed for a DRDO problem statement; spearheaded prototype design and proposals.',
              icon: '🚀',
              highlight: 'DRDO Problem Statement',
            },
            {
              badge: 'ELITE CERTIFICATION',
              title: 'The Joy of Computing using Python',
              desc: 'Earned Elite Certification from NPTEL, IIT Madras for high-scoring performance in advanced Python computational algorithms and programming (2026).',
              icon: '📜',
              highlight: 'NPTEL · IIT Madras',
            },
            {
              badge: 'VERIFIED CREDENTIAL',
              title: 'Programming in Python — Meta',
              desc: 'Completed comprehensive Python programming specialization certified by Meta (Coursera), covering data structures, OOP, testing, and algorithmic problem-solving.',
              icon: '🏅',
              highlight: 'Meta · Coursera',
            },
          ].map((a, i) => (
            <div className="achievement-card reveal" style={{ transitionDelay: `${i * 0.12}s` }} key={a.title}>
              <div className="achievement-top">
                <span className="achievement-icon">{a.icon}</span>
                <span className="achievement-badge">{a.badge}</span>
              </div>
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-desc">{a.desc}</p>
              <div className="achievement-footer">
                <span className="achievement-highlight">✦ {a.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <div className="about-badge reveal">CONTACT</div>
        <h2 className="about-title reveal">Get In <span className="gradient-text">Touch</span></h2>
        <div className="about-divider reveal"></div>
        <div className="contact-links">
          <a href="mailto:kanchan.dd2005@gmail.com" className="contact-card reveal" style={{ transitionDelay: '0s' }}>📧 kanchan.dd2005@gmail.com</a>
          <a href="https://github.com/Kanchan1903" target="_blank" rel="noreferrer" className="contact-card reveal" style={{ transitionDelay: '0.1s' }}>🐙 GitHub</a>
          <a href="https://linkedin.com/in/kanchan-deshmukh-746a79329" target="_blank" rel="noreferrer" className="contact-card reveal" style={{ transitionDelay: '0.2s' }}>💼 LinkedIn</a>
        </div>
      </section>

      <footer className="footer reveal">
        <p>© 2026 Kanchan Deshmukh</p>
      </footer>
    </div>
  )
}
