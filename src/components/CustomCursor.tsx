import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const interactiveSelector = 'a, button, .project-card, .portfolio-item, [data-cursor]'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const [label, setLabel] = useState('')
  const [visible, setVisible] = useState(false)

  const dotX = useMotionValue(0)
  const dotY = useMotionValue(0)
  const ringX = useMotionValue(0)
  const ringY = useMotionValue(0)
  const smoothX = useSpring(ringX, { stiffness: 260, damping: 28, mass: 0.35 })
  const smoothY = useSpring(ringY, { stiffness: 260, damping: 28, mass: 0.35 })

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updateEnabled = () => setEnabled(finePointer.matches)

    updateEnabled()
    finePointer.addEventListener('change', updateEnabled)
    return () => finePointer.removeEventListener('change', updateEnabled)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    const handleMove = (event: MouseEvent) => {
      dotX.set(event.clientX)
      dotY.set(event.clientY)
      ringX.set(event.clientX)
      ringY.set(event.clientY)
      setVisible(true)
    }

    const handleOver = (event: PointerEvent) => {
      const target = event.target as Element | null
      const interactive = target?.closest(interactiveSelector) as HTMLElement | null

      setActive(Boolean(interactive))
      setLabel(interactive?.dataset.cursorLabel || '')
    }

    const handleOut = () => {
      setActive(false)
      setLabel('')
    }

    const handleLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('pointerover', handleOver)
    window.addEventListener('pointerout', handleOut)
    document.documentElement.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('pointerover', handleOver)
      window.removeEventListener('pointerout', handleOut)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
    }
  }, [dotX, dotY, enabled, ringX, ringY])

  if (!enabled) return null

  return (
    <div className={`custom-cursor ${visible ? 'is-visible' : ''}`}>
      <motion.div className="cursor-dot-wrap" style={{ x: dotX, y: dotY }}>
        <span className="cursor-dot" />
      </motion.div>
      <motion.div className="cursor-ring-wrap" style={{ x: smoothX, y: smoothY }}>
        <motion.span
          animate={{
            width: active ? 64 : 36,
            height: active ? 64 : 36,
            opacity: active ? 0.34 : 0.78,
          }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="cursor-ring"
        >
          {label && <span>{label}</span>}
        </motion.span>
      </motion.div>
    </div>
  )
}
