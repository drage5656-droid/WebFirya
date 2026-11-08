import React, { useEffect, useState } from 'react'

const items = [
  { src: '/images/web-workspace.jpg', alt: { ru: 'Рабочее место веб-разработчика', en: 'Web developer workspace' }, category: { ru: 'РАБОЧЕЕ МЕСТО', en: 'WORKSPACE' } },
  { src: '/images/code-screen.jpg', alt: { ru: 'Программный код на экране', en: 'Source code on a screen' }, category: { ru: 'КОД', en: 'CODE' } },
  { src: '/images/creative-team.jpg', alt: { ru: 'Команда за работой над цифровым проектом', en: 'A team working on a digital project' }, category: { ru: 'СОЗДАНИЕ', en: 'COLLABORATION' } },
]

export default function Gallery({ locale = 'ru' }) {
  const isEnglish = locale === 'en'
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [selected])

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <button
            className={`gallery-item gallery-item-${index + 1}`}
            key={item.src}
            type="button"
            onClick={() => setSelected(item)}
            aria-label={`${isEnglish ? 'Open image' : 'Открыть изображение'}: ${item.alt[locale]}`}
          >
            <img src={item.src} alt={item.alt[locale]} loading="lazy" />
            <span className="gallery-item-info">
              <span><small>{item.category[locale]}</small><b>{item.alt[locale]}</b></span>
              <i aria-hidden="true">↗</i>
            </span>
            <span className="gallery-item-number" aria-hidden="true">0{index + 1}</span>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="lightbox"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null)
          }}
        >
          <div className="lightbox-panel" role="dialog" aria-modal="true" aria-label={selected.alt[locale]}>
            <button type="button" className="lightbox-close" onClick={() => setSelected(null)} aria-label={isEnglish ? 'Close image' : 'Закрыть изображение'}>×</button>
            <img src={selected.src} alt={selected.alt[locale]} />
            <p>{selected.category[locale]} / {selected.alt[locale]}</p>
          </div>
        </div>
      )}
    </>
  )
}
