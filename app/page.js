import Image from "next/image";
import CodingScene from "@/components/CodingScene";
import MouseGlow from "@/components/MouseGlow";
import Reveal from "@/components/Reveal";
import TypewriterTitle from "@/components/TypewriterTitle";

const links = {
  github: "https://github.com/krish-mittal1",
  linkedin: "https://www.linkedin.com/in/krish-mittal/",
  leetcode: "https://leetcode.com/u/krishmittal1/",
  codeforces: "https://codeforces.com/profile/krish_mittal1",
  codearena: "https://codexarena.app/",
  codearenaRepo: "https://github.com/krish-mittal1/CodeArena",
  aether: "https://aether.codexarena.app",
  aetherRepo: "https://github.com/krish-mittal1/Aether",
  deadstream: "https://dead-stream.vercel.app",
  deadstreamRepo: "https://github.com/krish-mittal1/DeadStream"
};

const projects = [
  {
    name: "CodeArena",
    type: "Competitive coding platform",
    year: "2026",
    live: links.codearena,
    repo: links.codearenaRepo,
    image: "/project-codearena.png",
    summary:
      "A real-time competitive coding platform with 1v1 battles, practice problems, live matchmaking, and WebSocket-based match flow.",
    points: [
      "Engineered with Next.js, FastAPI, PostgreSQL, Redis, Docker, and WebSockets",
      "Built an online judge for C++, Python, Java, and JavaScript with verdict tracking",
      "Integrated JWT authentication, email OTP login, user stats, and AI-assisted feedback"
    ]
  },
  {
    name: "Aether",
    type: "Collaborative browser IDE",
    year: "2026",
    live: links.aether,
    repo: links.aetherRepo,
    image: "/project-aether.png",
    summary:
      "A production-deployed collaborative browser IDE for real-time coding with live editor sync, room collaboration, and persistent workspaces.",
    points: [
      "Designed a secure Next.js and FastAPI architecture with Socket.IO, PostgreSQL, Redis, and Docker Compose",
      "Integrated Monaco Editor with tabs, file explorer, syntax highlighting, autosave, and AI coding help",
      "Deployed on a VPS with HTTPS, custom domains, and scalable backend services"
    ]
  },
  {
    name: "DeadStream",
    type: "AI social simulation engine",
    year: "2026",
    live: links.deadstream,
    repo: links.deadstreamRepo,
    image: "/project-deadstream.svg",
    summary:
      "A synthetic social network where autonomous AI agents post, argue, form communities, remember interactions, and evolve opinions in real time.",
    points: [
      "Built with Next.js 15, FastAPI, PostgreSQL with pgvector, Redis, Socket.IO, Docker, and Tailwind CSS",
      "Designed 20+ autonomous agent personas with memory, opinion drift, scheduling, relationships, and realtime activity",
      "Added production-grade architecture with event streams, admin controls, monitoring, CI/CD, migrations, and deployment hardening"
    ]
  }
];

const metrics = [
  { label: "Education", value: "Delhi Technological University" },
  { label: "Program", value: "B.Tech, 2024-2028" }
];

const skills = [
  "C++",
  "Python",
  "JavaScript",
  "C",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "FastAPI",
  "Next.js",
  "React.js",
  "PostgreSQL",
  "Redis",
  "Node.js",
  "Docker",
  "Socket.IO",
  "WebSockets",
  "Git",
  "Vercel",
  "Azure VM",
  "Render",
  "DBMS",
  "CN",
  "OS",
  "OOPs"
];

const achievements = [
  "Top 3 in Sustainability Track, Decavation 2026",
  "Top 5 in Hack BVP 7.0 among 500+ teams",
  "Codeforces Specialist with max rating 1461",
  "Completed Deloitte Technology Job Simulation on Forage"
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <MouseGlow />
      <div className="page-backdrop" aria-hidden="true" />
      <div className="page-grid" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark" />
          <span className="brand-word">Krish Mittal</span>
        </a>
        <nav className="site-nav">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero section">
        <div className="hero-layout">
          <div className="hero-copy">
            <Reveal from="left">
              <div className="tilt-text tilt-left">
                <p className="eyebrow">Portfolio</p>
              </div>
            </Reveal>
            <Reveal delay={0.08} from="left">
              <div className="tilt-text tilt-left">
                <TypewriterTitle />
              </div>
            </Reveal>
            <Reveal delay={0.16} from="up">
              <div className="tilt-text tilt-left-soft">
                <p className="hero-text">
                  I am Krish Mittal, a B.Tech student at Delhi Technological University. I build practical
                  full-stack products across real-time systems, collaboration tools, and coding platforms.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.24} from="up">
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View Projects
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.32} from="up">
              <div className="hero-links">
                <a href={links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={links.leetcode} target="_blank" rel="noreferrer">
                  LeetCode
                </a>
                <a href={links.codeforces} target="_blank" rel="noreferrer">
                  Codeforces
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal className="hero-visual" delay={0.28} from="left">
            <CodingScene />
          </Reveal>

          <Reveal className="hero-summary" delay={0.18} from="right">
            <div className="hero-stack">
              <div className="summary-card">
                <div className="summary-top">
                  <span className="summary-label">Current Focus</span>
                  <span className="summary-line" />
                </div>
                <div className="summary-metrics">
                  {metrics.map((metric) => (
                    <article key={metric.label}>
                      <span>{metric.label}</span>
                      <strong>{metric.value}</strong>
                    </article>
                  ))}
                </div>
              </div>

              <div className="terminal-card">
                <div className="terminal-top">
                  <span />
                  <span />
                  <span />
                  <strong>krish.dev</strong>
                </div>
                <div className="terminal-lines">
                  <p>
                    <span>$</span> shipping real-time systems
                  </p>
                  <p>
                    <span>&gt;</span> Next.js + React + Node.js + FastAPI
                  </p>
                  <p>
                    <span>&gt;</span> clean UI, strong backend, production mindset
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="section">
        <Reveal from="up">
          <div className="section-heading tilt-text tilt-left-soft">
            <p className="eyebrow">Selected Projects</p>
            <h2>Work that reflects my current strengths most clearly.</h2>
          </div>
        </Reveal>

        <div className="project-column">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08} from={index % 2 === 0 ? "left" : "right"}>
              <article className={`project-row ${index % 2 === 1 ? "project-row-alt" : ""}`}>
                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <ul className="detail-list">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Project
                    </a>
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      Repository
                    </a>
                  </div>
                </div>
                <div className="project-visual">
                  <div className="visual-frame">
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      fill
                      sizes="(max-width: 980px) 100vw, 45vw"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="about-layout">
          <Reveal from="left">
            <article className="panel tilt-panel-left">
              <p className="eyebrow">About</p>
              <h2>Building through practical systems and product thinking.</h2>
              <p>
                My work is centered around coding platforms, collaborative developer tools, backend systems,
                and clean user experiences. I prefer products that are technically strong and useful in practice.
              </p>
            </article>
          </Reveal>

          <div className="about-side">
            <Reveal delay={0.08} from="down">
              <article className="panel tilt-panel-right">
                <p className="eyebrow">Skills</p>
                <div className="chip-cloud">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.16} from="down">
              <article className="panel tilt-panel-left-soft">
                <p className="eyebrow">Achievements</p>
                <ul className="detail-list compact">
                  {achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <Reveal from="up">
          <div className="section-heading tilt-text tilt-right-soft">
            <p className="eyebrow">Experience</p>
            <h2>Certification and applied learning.</h2>
          </div>
        </Reveal>

        <div className="single-card-layout">
          <Reveal delay={0.1} from="right">
            <article className="panel cert-panel tilt-panel-right">
              <p className="eyebrow">Certification</p>
              <h2>Deloitte Technology Job Simulation</h2>
              <p>
                Completed practical tasks focused on coding and development through Forage.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section">
        <Reveal from="up">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Open to internships, collaborations, and meaningful product work.</h2>
              <p>If you would like to connect, feel free to reach out through email or LinkedIn.</p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:mittalkrish408@gmail.com">
                mittalkrish408@gmail.com
              </a>
              <a className="button button-secondary" href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
