import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function createPreview(langId, code) {
  if (langId === 'html') {
    return `<!doctype html><meta charset="utf-8"><style>body{font:16px system-ui;padding:20px;color:#202538}</style>${code}`
  }

  if (langId === 'css') {
    const styles = code.replace(/<\/style/gi, '<\\/style')
    return `<!doctype html><meta charset="utf-8"><style>body{font:16px system-ui;padding:20px;color:#202538}${styles}</style><h1>Привет, веб!</h1><p>Поменяй CSS слева и нажми «Запустить».</p>`
  }

  const script = code.replace(/<\/script/gi, '<\\/script')
  return `<!doctype html><meta charset="utf-8"><style>body{font:16px system-ui;padding:20px;color:#202538}button{padding:8px 12px;border:0;border-radius:8px;background:#4f46e5;color:white;cursor:pointer}</style><button id="demo">Нажми меня</button><p id="message">Здесь появится результат.</p><script>${script}<\/script>`
}

export default function LangCard({ lang, locale = 'ru' }) {
  const isEnglish = locale === 'en'
  const [open, setOpen] = useState(false)
  const [code, setCode] = useState(lang.starter)
  const [activeTip, setActiveTip] = useState(null)
  const [preview, setPreview] = useState('')
  const name = lang.name[locale]

  const runCode = () => setPreview(createPreview(lang.id, code))

  return (
    <article className={`lang-card ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="card-header"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={`${lang.id}-details`}
      >
        <img src={lang.icon} alt="" className="lang-icon" />
        <span className="lang-heading">
          <span className="lang-meta"><span>{lang.number}</span>{lang.category[locale]}</span>
          <span className="lang-title">{name}</span>
          <span className="lang-subtitle">{lang.subtitle[locale]}</span>
        </span>
        <span className="chev" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="card-body" id={`${lang.id}-details`}>
          <p className="summary">{lang.summary[locale]}</p>
          <Link className="detail-card-link" to={`/lang/${lang.id}`}>
            {isEnglish ? 'Explore this language' : 'Полный разбор языка'} <span aria-hidden="true">↗</span>
          </Link>
          <div className="buttons-grid" aria-label={isEnglish ? `${name} topics` : `Темы: ${name}`}>
            {lang.tips.map((tip, index) => (
              <button
                type="button"
                className="mini-btn"
                key={tip.title.ru}
                aria-pressed={activeTip === index}
                onClick={() => setActiveTip((current) => current === index ? null : index)}
              >
                {tip.title[locale]}
              </button>
            ))}
          </div>
          {activeTip !== null && (
            lang.tips[activeTip].items ? (
              <ul className="html-tag-list" aria-label={isEnglish ? '10 popular HTML tags' : '10 популярных HTML-тегов'}>
                {lang.tips[activeTip].items.map((item) => (
                  <li className="html-tag-item" key={item.tag}>
                    <code>{item.tag}</code>
                    <span>{item[locale]}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="tip-panel" role="status">{lang.tips[activeTip].text[locale]}</p>
            )
          )}
          <div className="playground">
            <label htmlFor={`${lang.id}-editor`}>{isEnglish ? 'Try editing the example:' : 'Измени пример:'}</label>
            <textarea
              id={`${lang.id}-editor`}
              value={code}
              onChange={(event) => setCode(event.target.value)}
              rows={6}
              spellCheck="false"
              aria-label={isEnglish ? `${name} code editor` : `Редактор кода ${name}`}
            />
            <button type="button" className="run" onClick={runCode}>
              {isEnglish ? 'Run' : 'Запустить'}
            </button>
            {preview && (
              <iframe
                className="preview"
                title={isEnglish ? `${name} code preview` : `Результат кода ${name}`}
                sandbox="allow-scripts"
                srcDoc={preview}
              />
            )}
          </div>
        </div>
      )}
    </article>
  )
}
