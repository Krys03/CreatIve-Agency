import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import ServicesFlip from './components/ServicesFlip'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
}

const projectImages = [
  'https://images.unsplash.com/photo-1635405050330-b0824eb1bf26?auto=format&fit=crop&w=1100&q=85',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85',
  'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1100&q=85',
  'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1100&q=85',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1100&q=85',
]

const featuredProjects = [
  ['BRANDING', 'NOVA IDENTITY', '01'],
  ['DIGITAL', 'ATLAS WEBSITE', '02'],
  ['CAMPAIGN', 'SIGNAL LAUNCH', '03'],
  ['MOTION', 'ORBIT FILM', '04'],
  ['EXPERIENCE', 'URBAN ACTIVATION', '05'],
]

const portfolioItems = [
  {
    type: 'image',
    title: 'NOVA SYSTEM',
    label: 'CAMPAGNE',
    className: 'md:row-span-2',
    src: 'https://images.unsplash.com/photo-1635405050330-b0824eb1bf26?auto=format&fit=crop&w=1000&q=85',
  },
  {
    type: 'image',
    title: 'ATLAS WEB',
    label: 'DIGITAL',
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85',
  },
  {
    type: 'blue',
    title: 'VOLT',
    label: 'BRANDING',
  },
  {
    type: 'image',
    title: 'SIGNAL DROP',
    label: 'IDENTITÉ',
    className: 'md:row-span-2',
    src: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1000&q=85',
  },
  {
    type: 'typography',
    title: 'RUSH',
    label: 'CAMPAIGN',
  },
  {
    type: 'matter',
    title: 'MOVE IDEAS FORWARD',
    label: 'MOTION DESIGN',
  },
  {
    type: 'image',
    title: 'URBAN ACTIVATION',
    label: 'EXPÉRIENCE',
    className: 'md:col-span-2',
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85',
  },
]

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-white/95 backdrop-blur-md">
      <div className="grid-layout flex h-20 items-center justify-between text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
        <a href="#top" className="header-logo font-display tracking-normal">
          <span>VOLTAGE</span>
          <span>STUDIO</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {[
            ['ACCUEIL', '#top'],
            ['À PROPOS', '#approche'],
            ['SERVICES', '#studio'],
            ['RÉALISATIONS', '#portfolio'],
            ['JOURNAL', '#portfolio'],
            ['CONTACT', '#contact'],
          ].map(([item, href]) => (
            <a className={`nav-link ${item === 'À PROPOS' ? 'is-active' : ''}`} href={href} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-electric" />
          <span>FRIBOURG — GLOBAL</span>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="grid-bg relative flex min-h-[96svh] items-center overflow-hidden border-b border-line pt-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid-layout relative z-10 grid w-full grid-cols-4 gap-x-4 py-24 md:grid-cols-12"
      >
        <motion.div variants={fadeUp} className="micro-copy col-span-2 self-center md:col-span-2">
          CRÉATIVITÉ.
          <br />
          BRAND STRATEGY.
          <br />
          DIGITAL.
        </motion.div>
        <div className="col-span-4 md:col-span-8">
          <motion.h1
            variants={fadeUp}
            className="hero-title font-display uppercase leading-[0.98] tracking-normal text-ink md:leading-[0.96]"
          >
            ON CRÉE
            <br />
            <span className="whitespace-nowrap">
              DES <span className="text-electric">MARQUES</span>
            </span>
            <br />
            <span className="whitespace-nowrap">EN MOUVEMENT</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-10 max-w-2xl text-[12px] font-semibold uppercase leading-7 tracking-[0.15em] text-ink md:ml-2 md:mt-12 md:text-sm"
          >
            STUDIO CRÉATIF POUR MARQUES AMBITIEUSES.
            <br />
            BRANDING. <span className="text-electric">DIGITAL.</span> MOTION. EXPERIENCE.
          </motion.p>
        </div>
        <motion.div variants={fadeUp} className="micro-copy col-span-2 mt-10 text-right md:col-span-2 md:mt-0 md:self-center">
          EST.
          <br />
          2010
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-1/2 h-14 w-px bg-line" />
    </section>
  )
}

function ShowreelReveal() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0.15, 0.75], [0.35, 1])
  const borderRadius = useTransform(scrollYProgress, [0.15, 0.75], ['24px', '8px'])
  const opacity = useTransform(scrollYProgress, [0.15, 0.35], [0.4, 1])
  const clipPath = useTransform(scrollYProgress, [0.15, 0.75], ['inset(20% 30% 20% 30%)', 'inset(0% 0% 0% 0%)'])

  return (
    <section ref={sectionRef} className="showreel-reveal grid-bg relative h-[165vh] border-b border-line">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden pt-16">
        <div className="grid-layout absolute inset-x-0 top-24 z-10 grid grid-cols-4 items-start md:grid-cols-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10%' }}
            className="micro-copy col-span-2"
          >
            SHOWREEL
            <br />
            01:53
          </motion.div>
          <motion.a
            href="#projets"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10%' }}
            className="micro-copy col-span-2 justify-self-end text-electric md:col-span-10"
          >
            VOIR LE SHOWREEL →
          </motion.a>
        </div>
        <motion.div
          className="showreel-video mx-auto"
          style={{ scale, borderRadius, opacity, clipPath }}
          data-cursor
          data-cursor-label="PLAY"
        >
          <div className="showreel-video-grid" />
          <div className="showreel-video-noise" />
          <div className="showreel-video-type">
            <span>VOLTAGE</span>
            <span>SHOWREEL</span>
            <span>2026</span>
          </div>
          <motion.button
            aria-label="Lire le showreel"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="play-button showreel-play"
            data-cursor
            data-cursor-label="PLAY"
          >
            <span />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function AboutShapes({ motionValues }) {
  return (
    <div className="about-shapes" aria-hidden="true">
      <motion.div className="about-shape shape-left-sphere" style={{ y: motionValues.leftSphereY, scale: motionValues.leftSphereScale }} />
      <motion.div
        className="about-shape shape-left-capsule"
        style={{ y: motionValues.leftCapsuleY, x: motionValues.leftCapsuleX, rotate: motionValues.leftCapsuleRotate }}
      />
      <motion.div className="about-shape shape-bottom-oval" style={{ y: motionValues.bottomOvalY, scale: motionValues.bottomOvalScale }} />
      <motion.div
        className="about-shape shape-right-blob"
        style={{ y: motionValues.rightBlobY, x: motionValues.rightBlobX, rotate: motionValues.rightBlobRotate }}
      >
        <span className="shape-triangle" />
      </motion.div>
      <motion.div className="about-shape shape-right-sphere" style={{ y: motionValues.rightSphereY, x: motionValues.rightSphereX }}>
        <span className="shape-cross" />
      </motion.div>
      <span className="about-curve curve-left" />
      <span className="about-curve curve-right" />
      <span className="blue-dot blue-dot-left" />
      <span className="blue-pill" />
      <span className="blue-hex" />
    </div>
  )
}

function About() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const motionValues = {
    leftSphereY: useTransform(scrollYProgress, [0, 1], ['-6%', '10%']),
    leftSphereScale: useTransform(scrollYProgress, [0, 1], [1.03, 0.98]),
    leftCapsuleY: useTransform(scrollYProgress, [0, 1], ['10%', '-12%']),
    leftCapsuleX: useTransform(scrollYProgress, [0, 1], ['-4%', '5%']),
    leftCapsuleRotate: useTransform(scrollYProgress, [0, 1], [-38, -28]),
    bottomOvalY: useTransform(scrollYProgress, [0, 1], ['8%', '-10%']),
    bottomOvalScale: useTransform(scrollYProgress, [0, 1], [0.96, 1.04]),
    rightBlobY: useTransform(scrollYProgress, [0, 1], ['-9%', '10%']),
    rightBlobX: useTransform(scrollYProgress, [0, 1], ['5%', '-4%']),
    rightBlobRotate: useTransform(scrollYProgress, [0, 1], [4, 13]),
    rightSphereY: useTransform(scrollYProgress, [0, 1], ['9%', '-12%']),
    rightSphereX: useTransform(scrollYProgress, [0, 1], ['-3%', '4%']),
  }

  return (
    <section id="approche" ref={sectionRef} className="about-section grid-bg border-b border-line">
      <AboutShapes motionValues={motionValues} />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-15%' }}
        className="grid-layout about-grid"
      >
        <div className="about-copy text-center">
          <motion.p variants={fadeUp} className="micro-copy mb-10 text-electric">
            À PROPOS
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="about-title mx-auto font-display uppercase text-ink"
          >
            ON DONNE FORME
            <br />
            AUX MARQUES
            <br />
            AMBITIEUSES.
          </motion.h2>
          <motion.span variants={fadeUp} className="about-blue-line" />
          <motion.p variants={fadeUp} className="about-text mx-auto mt-8">
            Stratégie, identité, digital et motion.
            <br />
            Des systèmes créatifs pensés pour durer.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

function FeaturedProjects() {
  const trackRef = useRef(null)

  return (
    <section id="projets" className="horizontal-section overflow-hidden border-b border-line bg-white py-20 md:py-28">
      <div className="grid-layout mb-14 grid grid-cols-4 items-end gap-y-6 md:grid-cols-12">
        <h2 className="col-span-4 max-w-3xl font-display text-[clamp(3.4rem,8vw,9rem)] uppercase leading-[0.94] text-ink md:col-span-7">
          NOS PROJETS MARQUANTS
        </h2>
        <a className="micro-copy col-span-2 text-electric md:col-span-3 md:justify-self-end" href="#portfolio">
          VOIR ALL →
        </a>
        <span className="micro-copy col-span-2 justify-self-end md:col-span-2">→</span>
      </div>
      <div
        ref={trackRef}
        className="project-track flex gap-4 overflow-x-auto px-[max(1.25rem,calc((100vw-1500px)/2+1.25rem))] pb-4 md:gap-6"
      >
        {featuredProjects.map(([label, title, number], index) => (
          <article className="project-card group" key={title} data-cursor data-cursor-label="VIEW">
            <div className="project-media">
              <img src={projectImages[index]} alt="" loading="lazy" />
            </div>
            <div className="flex items-start justify-between gap-8 border-t border-line pt-5">
              <div>
                <p className="micro-copy text-electric/70 transition-colors group-hover:text-electric">{label}</p>
                <h3 className="mt-4 max-w-[18rem] font-display text-5xl uppercase leading-[1.02] text-ink md:text-6xl">{title}</h3>
              </div>
              <span className="micro-copy text-ink">{number}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function PortfolioTile({ item, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], index % 2 === 0 ? ['-3%', '4%'] : ['4%', '-3%'])

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      className={`portfolio-item group ${item.className || ''}`}
      style={{ y }}
      data-cursor
      data-cursor-label="VIEW"
    >
      <div className="portfolio-frame">
        {item.type === 'image' && <img src={item.src} alt="" loading="lazy" />}
        {item.type === 'blue' && <div className="brand-block blue-block">VOLT</div>}
        {item.type === 'typography' && <div className="brand-block rush-block">RUSH</div>}
        {item.type === 'matter' && <div className="brand-block intent-block">MOVE IDEAS FORWARD</div>}
        <span className="view-chip">VIEW</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <p className="micro-copy text-ink/55">{item.label}</p>
        <p className="micro-copy text-electric opacity-0 transition-opacity group-hover:opacity-100">{item.title}</p>
      </div>
    </motion.article>
  )
}

function PortfolioGrid() {
  return (
    <section id="portfolio" className="border-b border-line bg-white py-24 md:py-36">
      <div className="grid-layout">
        <div className="mb-14 flex flex-col justify-between gap-8 border-b border-line pb-8 md:flex-row md:items-end">
          <h2 className="font-display text-[clamp(3.4rem,8vw,9rem)] uppercase leading-[0.94] text-ink">NOTRE PORTFOLIO</h2>
          <a href="#contact" className="micro-copy text-electric">
            VOIR TOUS LES PROJETS →
          </a>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          className="grid auto-rows-[19rem] grid-cols-1 gap-4 md:grid-cols-4 md:gap-5"
        >
          {portfolioItems.map((item, index) => (
            <PortfolioTile item={item} index={index} key={`${item.title}-${index}`} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="border-b border-line bg-white py-32 text-center md:py-48">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-15%' }}
        className="grid-layout"
      >
        <motion.p variants={fadeUp} className="micro-copy mb-10 text-electric">
          LET’S TALK
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mx-auto max-w-6xl font-display text-[clamp(4rem,11vw,12rem)] uppercase leading-[0.92] text-ink"
        >
          PARLONS DE VOTRE PROCHAIN MOUVEMENT.
        </motion.h2>
        <motion.span variants={fadeUp} className="mx-auto mt-16 block h-24 w-px bg-line" />
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white py-9">
      <div className="grid-layout flex flex-col gap-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink md:flex-row md:items-center md:justify-between">
        <a href="mailto:hello@voltage.studio">HELLO@VOLTAGE.STUDIO</a>
        <div className="flex gap-8">
          <a href="#top">INSTAGRAM</a>
          <a href="#top">LINKEDIN</a>
          <a href="#top">VIMEO</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <CustomCursor />
      <main>
        <Hero />
        <ShowreelReveal />
        <About />
        <FeaturedProjects />
        <ServicesFlip />
        <PortfolioGrid />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
