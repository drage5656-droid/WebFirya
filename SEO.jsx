import React, { useEffect } from 'react'

const descriptions = {
  ru: {
    title: 'WebFirya — твоя творческая веб-лаборатория',
    description: 'Большая интерактивная веб-лаборатория: изучай HTML, CSS и JavaScript на простых уроках и примерах.',
  },
  en: {
    title: 'WebFirya — your creative web lab',
    description: 'An interactive web lab to explore HTML, CSS, and JavaScript through simple lessons and examples.',
  },
}

export default function SEO({ locale = 'ru' }) {
  useEffect(() => {
    const page = descriptions[locale]
    document.title = page.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', page.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', page.description)
  }, [locale])

  return null
}
