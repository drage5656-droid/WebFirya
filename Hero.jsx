import React from 'react'

const words = ['<structure />', '{ style }', 'function()']

export default function Hero({ locale = 'ru' }) {
  const isEnglish = locale === 'en'

  return (
    <section className="hero-section" id="about" aria-labelledby="hero-title">
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-status"><span />{isEnglish ? 'YOUR CREATIVE DEV SPACE' : 'ТВОЯ ТВОРЧЕСКАЯ DEV-СТУДИЯ'}</div>
          <h1 id="hero-title">
            {isEnglish ? <>Build your<br />own <em>web universe.</em></> : <>Собери свою<br /><em>веб-вселенную.</em></>}
          </h1>
          <p className="hero-lead">
            {isEnglish
              ? 'Learn the three languages behind every great website. Explore ideas, change the code, and watch your work come alive.'
              : 'Познакомься с тремя языками, на которых говорит каждый сайт. Разбирай идеи, меняй код и смотри, как оживают твои проекты.'}
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#languages">
              {isEnglish ? 'Enter the lab' : 'Войти в лабораторию'} <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#roadmap">{isEnglish ? 'See learning path' : 'Посмотреть маршрут'} <span aria-hidden="true">↓</span></a>
            <a className="button hero-beginner-link" href="/start">
              {isEnglish ? 'For beginners' : 'Для начинающих'} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true"><span>H</span><span>C</span><span>JS</span></div>
            <p><strong>{isEnglish ? 'Three tools.' : 'Три инструмента.'}</strong><br />{isEnglish ? 'A million things to make.' : 'Миллион вещей, которые можно создать.'}</p>
          </div>
        </div>

        <div className="hero-visual" aria-label={isEnglish ? 'An interactive web technology illustration' : 'Иллюстрация веб-технологий'}>
          <div className="hero-visual-glow" />
          <div className="hero-code-card">
            <div className="code-window-bar">
              <span className="window-lights"><i /><i /><i /></span>
              <span>your-first-website.html</span>
              <span className="code-live"><i /> LIVE</span>
            </div>
            <div className="code-window-body">
              <div className="code-gutter">01<br />02<br />03<br />04<br />05<br />06<br />07<br />08</div>
              <pre aria-label="Пример кода"><code>
                <span className="code-purple">&lt;main</span> <span className="code-cyan">class</span>=<span className="code-green">"dream"</span><span className="code-purple">&gt;</span>{'\n'}
                {'  '}<span className="code-purple">&lt;h1&gt;</span>{isEnglish ? 'Hello, future.' : 'Привет, будущее.'}<span className="code-purple">&lt;/h1&gt;</span>{'\n'}
                {'  '}<span className="code-purple">&lt;p&gt;</span>{isEnglish ? 'Made by me.' : 'Создано мной.'}<span className="code-purple">&lt;/p&gt;</span>{'\n'}
                {'  '}<span className="code-orange">.dream</span> {'{'}{'\n'}
                {'    '}<span className="code-cyan">color</span>: <span className="code-green">#a89cff</span>;{'\n'}
                {'    '}<span className="code-cyan">magic</span>: <span className="code-green">100%</span>;{'\n'}
                {'  '} {'}'}{'\n'}
                <span className="code-purple">&lt;/main&gt;</span>
              </code></pre>
            </div>
            <div className="code-window-foot">
              <span><i /> {isEnglish ? 'Everything starts with an idea' : 'Всё начинается с идеи'}</span>
              <span>↗</span>
            </div>
          </div>
          <div className="floating-token token-html"><img src="/images/html-icon.svg" alt="" />HTML</div>
          <div className="floating-token token-css"><img src="/images/css-icon.svg" alt="" />CSS</div>
          <div className="floating-token token-js"><img src="/images/js-icon.svg" alt="" />JS</div>
          <div className="hero-coordinate">{isEnglish ? 'CREATIVE MODE / ON' : 'РЕЖИМ СОЗДАНИЯ / ВКЛ'}</div>
        </div>
      </div>

      <div className="hero-bottom container">
        <span>{isEnglish ? 'A FRIENDLY PLACE TO START BUILDING' : 'ПРОСТОЕ МЕСТО, ЧТОБЫ НАЧАТЬ СОЗДАВАТЬ'}</span>
        <div className="hero-word-track" aria-hidden="true">
          {words.map((word) => <span key={word}>{word}</span>)}
        </div>
      </div>
    </section>
  )
}
