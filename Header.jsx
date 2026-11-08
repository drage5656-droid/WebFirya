import React, { useState } from 'react'

export default function Header({ theme, onToggleTheme, locale, onLocaleChange }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isEnglish = locale === 'en'
  const links = [
    { href: '/#about', label: isEnglish ? 'About' : 'О проекте' },
    { href: '/#languages', label: isEnglish ? 'Languages' : 'Языки' },
    { href: '/start', label: isEnglish ? 'For beginners' : 'Для начинающих' },
    { href: '/#roadmap', label: isEnglish ? 'Roadmap' : 'Маршрут' },
    { href: '/#gallery', label: isEnglish ? 'Gallery' : 'Галерея' },
  ]

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/#top" aria-label="WebFirya — на главную">
          <span className="brand-mark" aria-hidden="true">W</span>
          <span className="brand-name">WEBFIRYA<span>LEARNING LAB</span></span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? (isEnglish ? 'Close menu' : 'Закрыть меню') : (isEnglish ? 'Open menu' : 'Открыть меню')}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label={isEnglish ? 'Main navigation' : 'Основная навигация'}>
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              <span className="nav-index">0{index + 1}</span>{link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="locale-toggle"
            onClick={() => onLocaleChange(isEnglish ? 'ru' : 'en')}
            aria-label={isEnglish ? 'Switch language to Russian' : 'Переключить язык на английский'}
          >
            {isEnglish ? 'EN' : 'RU'}
          </button>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? (isEnglish ? 'Switch to light theme' : 'Включить светлую тему') : (isEnglish ? 'Switch to dark theme' : 'Включить тёмную тему')}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☼' : '◐'}</span>
            <span className="theme-label">{theme === 'dark' ? (isEnglish ? 'Light' : 'Светлая') : (isEnglish ? 'Dark' : 'Тёмная')}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
