import React, { useEffect, useRef } from 'react'

export default function SiteEffects() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const particles = []
    let frame = 0
    let width = 0
    let height = 0

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      const count = Math.min(42, Math.max(16, Math.round(width / 34)))
      particles.length = 0
      for (let index = 0; index < count; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.7 + 0.4,
          speed: Math.random() * 0.22 + 0.06,
          alpha: Math.random() * 0.5 + 0.16,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height)
      for (const particle of particles) {
        const shimmer = 0.66 + Math.sin(time * 0.0007 + particle.phase) * 0.34
        particle.y -= particle.speed
        if (particle.y < -4) {
          particle.y = height + 4
          particle.x = Math.random() * width
        }
        context.beginPath()
        context.fillStyle = `rgba(154, 137, 255, ${particle.alpha * shimmer})`
        context.shadowColor = 'rgba(107, 229, 255, 0.48)'
        context.shadowBlur = particle.radius * 5
        context.arc(particle.x, particle.y, particle.radius * shimmer, 0, Math.PI * 2)
        context.fill()
      }
      context.shadowBlur = 0
      if (!reducedMotion && !document.hidden) frame = requestAnimationFrame(draw)
    }

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame)
        frame = 0
      } else if (!reducedMotion && !frame) {
        frame = requestAnimationFrame(draw)
      }
    }

    resize()
    if (!reducedMotion) frame = requestAnimationFrame(draw)
    window.addEventListener('resize', resize, { passive: true })
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return <canvas className="ambient-canvas" ref={canvasRef} aria-hidden="true" />
}
