import { motion } from 'framer-motion'

const services = [
  'ART DIRECTION',
  'BRANDING',
  'WEBDESIGN',
  'UI/UX DESIGN',
  'GSAP ANIMATIONS',
  'MOTION DESIGN',
  'CONTENT',
]

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
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
}

export default function ServicesFlip() {
  return (
    <section id="studio" className="border-b border-line bg-white py-28 md:py-44">
      <div className="grid-layout grid grid-cols-4 gap-y-14 md:grid-cols-12">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15%' }}
          className="micro-copy col-span-4 md:col-span-2 md:pt-7"
        >
          DESIGN
          <br />
          TECHNOLOGIE
          <br />
          STORYTELLING
        </motion.p>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15%' }}
          className="services-flip col-span-4 md:col-span-8"
        >
          {services.map((service) => (
            <motion.button
              type="button"
              variants={fadeUp}
              className="service-flip-line border-t border-line last:border-b"
              key={service}
              data-cursor
            >
              <span className="service-flip-inner">
                <span className="service-face service-face-front">{service}</span>
                <span className="service-face service-face-back">{service}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15%' }}
          className="micro-copy col-span-4 md:col-span-2 md:pt-7 md:text-right"
        >
          SOLUTIONS CRÉATIVES
          <br />
          SUR MESURE
        </motion.p>
      </div>
    </section>
  )
}
