import React from 'react'

export default function Footer({ locale = 'ru' }) {
  const isEnglish = locale === 'en'

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-main">
        <a className="brand footer-brand" href="/#top" aria-label="WebFirya — на главную">
          <span className="brand-mark" aria-hidden="true">W</span>
          <span className="brand-name">WEBFIRYA<span>LEARNING LAB</span></span>
        </a>
        <p>{isEnglish ? 'Curious minds make the web.' : 'Любопытные умы создают веб.'}</p>
        <a className="footer-top" href="/#top">{isEnglish ? 'Back to top ↑' : 'Наверх ↑'}</a>
      </div>
      <div className="container footer-support">
        <div>
          <p className="eyebrow">{isEnglish ? 'SUPPORT WEBFIRYA' : 'ПОДДЕРЖКА WEBFIRYA'}</p>
          <p>{isEnglish ? 'Questions or ideas? Message us on Telegram.' : 'Есть вопросы или идеи? Напишите нам в Telegram.'}</p>
        </div>
        <a className="footer-telegram-button" href="https://t.me/WebFirya" target="_blank" rel="noreferrer">
          <span className="footer-telegram-icon" aria-hidden="true">↗</span>
          {isEnglish ? 'Message WebFirya on Telegram' : 'Написать WebFirya в Telegram'}
        </a>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 WEBFIRYA · {isEnglish ? 'A LEARNING PROJECT' : 'УЧЕБНЫЙ ПРОЕКТ'}</span>
        <span>{isEnglish ? 'MADE FOR THE CURIOUS' : 'СОЗДАНО ДЛЯ ЛЮБОПЫТНЫХ'}</span>
      </div>
    </footer>
  )
}
