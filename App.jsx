import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import LangCard from './LangCard.jsx'
import Gallery from './Gallery.jsx'
import Footer from './Footer.jsx'
import langs from './langs.js'
import SEO from './SEO.jsx'
import SiteEffects from './SiteEffects.jsx'
import ScrollProgress from './ScrollProgress.jsx'
import LangDetailWrapper from './LangDetailWrapper.jsx'
import BeginnerApps from './BeginnerApps.jsx'

const copy = {
  ru: {
    languagesEyebrow: 'ТРИ ЯЗЫКА — ОДИН ИНТЕРНЕТ',
    languagesTitle: 'Из чего сделан веб',
    languagesText: 'У каждого сайта есть каркас, стиль и поведение. Выбери технологию, чтобы посмотреть короткие уроки и сразу попробовать код.',
    startLabel: 'ВЫБЕРИ ПЕРВЫЙ ШАГ',
    lesson: 'интерактивные карточки',
    lessons: ['структура', 'стиль', 'движение'],
    ticker: 'Маленькие шаги. Большие идеи. Твой первый сайт начинается здесь.',
    pathLabel: 'БЕЗ СПЕШКИ, ПО ШАГАМ',
    pathTitle: 'Твой маршрут в веб',
    pathText: 'Не нужно знать всё сразу. Собирай навыки по одному и наблюдай, как идеи превращаются в работающие страницы.',
    pathSteps: [
      { number: '01', title: 'Положи основу', text: 'Создай структуру страницы и дай каждому элементу своё место.' },
      { number: '02', title: 'Добавь характер', text: 'Подбери цвет, шрифт и расположение, которые рассказывают твою историю.' },
      { number: '03', title: 'Оживи идею', text: 'Добавь реакции на клики и преврати страницу в интерактивный опыт.' },
    ],
    noteLabel: 'ИДЕЯ > СТРАХ',
    noteTitle: 'Не бойся сломать пример.',
    noteText: 'Меняй текст, цвета и числа. Здесь можно экспериментировать, ошибаться и пробовать ещё раз.',
    galleryTitle: 'Идеи обретают форму',
    galleryText: 'Небольшая подборка образов о структуре, стиле и движении в вебе.',
    faqLabel: 'ПЕРЕД СТАРТОМ',
    faqTitle: 'Частые вопросы',
    faqs: [
      { question: 'Нужно ли уже уметь программировать?', answer: 'Нет. Начинай с нуля: карточки объясняют основы простыми словами и дают примеры, которые можно менять.' },
      { question: 'Код безопасно запускать на этой странице?', answer: 'Примеры работают в отдельном изолированном предпросмотре. Они не получают доступ к файлам компьютера или данным этой страницы.' },
      { question: 'С чего лучше начать?', answer: 'Начни с HTML, чтобы собрать структуру страницы, затем переходи к CSS и JavaScript.' },
      { question: 'Чем отличаются HTML, CSS и JavaScript?', answer: 'HTML задаёт структуру страницы, CSS отвечает за её внешний вид, а JavaScript добавляет интерактивность — например, реакции на нажатия.' },
      { question: 'Нужно ли устанавливать программы, чтобы учиться?', answer: 'Нет. Для первых экспериментов достаточно браузера и примеров на сайте. Позже можно установить редактор кода, например Visual Studio Code.' },
      { question: 'Как попробовать примеры на сайте?', answer: 'Открой страницу языка, выбери интерактивную карточку и измени код. Предпросмотр покажет результат, а кнопку сброса можно использовать, чтобы вернуться к исходному примеру.' },
      { question: 'Что такое популярные теги и свойства?', answer: 'Это справочные списки с часто используемыми HTML-тегами, CSS-свойствами и JavaScript-понятиями. Они помогают быстро найти нужный элемент и понять, для чего он нужен.' },
      { question: 'Будет ли сайт работать на телефоне?', answer: 'Да. Страницы адаптированы для небольших экранов; для удобной работы с кодом и подробного просмотра примеров также подойдёт компьютер.' },
      { question: 'Как сохранить или показать свой сайт другим?', answer: 'Сохрани файлы проекта у себя, а для публикации используй хостинг вроде GitHub Pages, Netlify или Vercel. Инструкции для начинающих собраны на странице «Для начинающих».' },
      { question: 'Нужно ли платить за инструменты и хостинг?', answer: 'Начать можно бесплатно: у многих редакторов и хостингов есть бесплатные возможности. Их условия иногда меняются, поэтому проверь актуальные ограничения на официальном сайте сервиса.' },
      { question: 'Можно ли переключить язык и тему сайта?', answer: 'Да. В шапке сайта есть переключатели языка и светлой или тёмной темы; настройки темы сохраняются в браузере.' },
      { question: 'Что делать, если пример не работает?', answer: 'Сбрось пример к исходному состоянию и проверь, не пропущены ли символы в коде. Если вопрос останется, напиши команде WebFirya через Telegram внизу страницы.' },
    ],
    finalLabel: 'ТВОЯ ИДЕЯ УЖЕ ЖДЁТ',
    finalTitle: 'Давай создадим что-нибудь классное.',
    finalText: 'Первая версия не обязана быть идеальной. Она просто должна появиться.',
    finalButton: 'Начать с HTML',
    footerTagline: 'Играй с кодом. Строй свою версию интернета.',
    footerCopy: 'Учебный проект. Сделан, чтобы начать.',
    top: 'Наверх ↑',
  },
  en: {
    languagesEyebrow: 'THREE LANGUAGES — ONE INTERNET',
    languagesTitle: 'What the web is made of',
    languagesText: 'Every website has structure, style, and behavior. Pick a technology to explore a few short lessons and try the code right away.',
    startLabel: 'PICK YOUR FIRST STEP',
    lesson: 'interactive cards',
    lessons: ['structure', 'style', 'motion'],
    ticker: 'Small steps. Big ideas. Your first website starts right here.',
    pathLabel: 'ONE STEP AT A TIME',
    pathTitle: 'Your path into the web',
    pathText: 'You do not need to know everything at once. Build one skill at a time and watch ideas turn into working pages.',
    pathSteps: [
      { number: '01', title: 'Build the foundation', text: 'Create a page structure and give every element a place.' },
      { number: '02', title: 'Add your style', text: 'Choose colors, type, and layouts that tell your story.' },
      { number: '03', title: 'Bring it to life', text: 'Add reactions to clicks and turn a page into an experience.' },
    ],
    noteLabel: 'IDEAS > FEAR',
    noteTitle: 'Do not be afraid to break things.',
    noteText: 'Change the words, colors, and numbers. Experiment, make mistakes, and try again.',
    galleryTitle: 'Ideas take shape',
    galleryText: 'A small collection of visuals about structure, style, and motion on the web.',
    faqLabel: 'BEFORE YOU START',
    faqTitle: 'Frequently asked questions',
    faqs: [
      { question: 'Do I need coding experience?', answer: 'No. Start from zero: the cards explain the basics in plain language and provide examples you can change.' },
      { question: 'Is it safe to run code on this page?', answer: 'Examples run in an isolated preview. They cannot access your computer files or this page’s data.' },
      { question: 'Where should I begin?', answer: 'Start with HTML to build a page structure, then explore CSS and JavaScript.' },
      { question: 'What is the difference between HTML, CSS, and JavaScript?', answer: 'HTML provides a page’s structure, CSS controls how it looks, and JavaScript adds interactivity such as responses to clicks.' },
      { question: 'Do I need to install software to learn?', answer: 'No. A browser and the examples on this site are enough for your first experiments. Later, you can install a code editor such as Visual Studio Code.' },
      { question: 'How can I try the examples on this site?', answer: 'Open a language page, choose an interactive card, and edit its code. The preview shows the result; use the reset button to restore the original example.' },
      { question: 'What are the popular tags and properties?', answer: 'They are reference lists of commonly used HTML tags, CSS properties, and JavaScript concepts. Use them to find an item and learn what it does.' },
      { question: 'Does the site work on a phone?', answer: 'Yes. The pages adapt to smaller screens. A computer is also convenient for editing code and viewing detailed examples.' },
      { question: 'How can I save or share my website?', answer: 'Save your project files, then publish them with a host such as GitHub Pages, Netlify, or Vercel. The For Beginners page includes publishing guides.' },
      { question: 'Do the tools and hosting cost money?', answer: 'You can get started for free: many editors and hosting providers offer free options. Terms can change, so check each service’s official website for current limits.' },
      { question: 'Can I change the site language and theme?', answer: 'Yes. Use the controls in the header to switch the language and light or dark theme. The theme preference is saved in your browser.' },
      { question: 'What should I do if an example does not work?', answer: 'Reset the example and check for missing characters in the code. If you still need help, contact WebFirya on Telegram using the link at the bottom of the page.' },
    ],
    finalLabel: 'YOUR IDEA IS WAITING',
    finalTitle: 'Let’s make something great.',
    finalText: 'Your first version does not have to be perfect. It just has to exist.',
    finalButton: 'Start with HTML',
    footerTagline: 'Play with code. Build your version of the internet.',
    footerCopy: 'A learning project made for getting started.',
    top: 'Back to top ↑',
  },
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [locale, setLocale] = useState('ru')
  const text = copy[locale]

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  useEffect(() => {
    const targets = document.querySelectorAll('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [locale])

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark')

  return (
    <BrowserRouter>
    <div className="app-root" id="top">
      <SiteEffects />
      <ScrollProgress />
      <SEO locale={locale} />
      <Header theme={theme} onToggleTheme={toggleTheme} locale={locale} onLocaleChange={setLocale} />

      <Routes>
      <Route path="/" element={<main>
        <Hero locale={locale} />

        <section className="ticker" aria-label={text.ticker}>
          <div className="ticker-track" aria-hidden="true">
            {[0, 1, 2, 3].map((item) => <span key={item}>{text.ticker}<b>✳</b></span>)}
          </div>
        </section>

        <section className="languages-section section-pad" id="languages" aria-labelledby="languages-title">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">{text.languagesEyebrow}</p>
                <h2 id="languages-title">{text.languagesTitle}<span className="heading-period">.</span></h2>
                <p className="section-intro">{text.languagesText}</p>
              </div>
              <div className="section-count"><span>03</span><small>{text.startLabel}</small></div>
            </div>

            <div className="cards-grid">
              {langs.map((lang, index) => (
                <div className="reveal" style={{ '--reveal-delay': `${index * 100}ms` }} key={lang.id}>
                  <LangCard lang={lang} locale={locale} />
                </div>
              ))}
            </div>

            <div className="cards-caption">
              <span><i />03 {text.lesson}</span>
              <div>{text.lessons.map((label, index) => <span key={label}>{String(index + 1).padStart(2, '0')} / {label}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="path-section section-pad" id="roadmap" aria-labelledby="path-title">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">{text.pathLabel}</p>
                <h2 id="path-title">{text.pathTitle}<span className="heading-period">.</span></h2>
                <p className="section-intro">{text.pathText}</p>
              </div>
              <div className="path-orbit" aria-hidden="true"><span>01</span><i /><b>✳</b></div>
            </div>

            <div className="path-grid">
              {text.pathSteps.map((step, index) => (
                <article className={`path-card reveal path-card-${index + 1}`} style={{ '--reveal-delay': `${index * 120}ms` }} key={step.number}>
                  <div className="path-card-top"><span>{step.number}</span><span aria-hidden="true">↗</span></div>
                  <div className="path-illustration" aria-hidden="true">
                    {index === 0 && <><div className="mini-browser"><i /><i /><i /><span>&lt; / &gt;</span></div><b>&lt;h1&gt;</b></>}
                    {index === 1 && <><div className="mini-swatch swatch-one" /><div className="mini-swatch swatch-two" /><div className="mini-swatch swatch-three" /><b>Aa</b></>}
                    {index === 2 && <><div className="mini-cursor">↖</div><div className="mini-spark">✳</div><div className="mini-button">{locale === 'en' ? 'CLICK' : 'ЖМИ'}</div></>}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <span className="path-connector" aria-hidden="true" />
                </article>
              ))}
            </div>

            <aside className="idea-note reveal">
              <span className="idea-note-badge">✳</span>
              <div className="idea-note-copy">
                <p className="eyebrow">{text.noteLabel}</p>
                <h3>{text.noteTitle}</h3>
                <p>{text.noteText}</p>
              </div>
              <span className="idea-note-code" aria-hidden="true">{'{ }'}</span>
            </aside>
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery" aria-labelledby="gallery-title">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">{locale === 'en' ? 'A LITTLE CREATIVE INSPIRATION' : 'НЕМНОГО ТВОРЧЕСКОГО ВДОХНОВЕНИЯ'}</p>
                <h2 id="gallery-title">{text.galleryTitle}<span className="heading-period">.</span></h2>
                <p className="section-intro">{text.galleryText}</p>
              </div>
              <span className="gallery-side-label">{locale === 'en' ? 'VISUAL NOTES / 001—003' : 'ВИЗУАЛЬНЫЕ ЗАМЕТКИ / 001—003'}</span>
            </div>
            <Gallery locale={locale} />
          </div>
        </section>

        <section className="faq-section section-pad" aria-labelledby="faq-title">
          <div className="container faq-layout">
            <div className="faq-intro reveal">
              <p className="eyebrow">{text.faqLabel}</p>
              <h2 id="faq-title">{text.faqTitle}<span className="heading-period">.</span></h2>
              <p className="section-intro">{locale === 'en' ? 'Quick answers to get you going.' : 'Короткие ответы, чтобы было проще начать.'}</p>
              <span className="faq-decoration" aria-hidden="true">?</span>
            </div>
            <div className="faq-list reveal reveal-delay-1">
              {text.faqs.map((faq, index) => (
                <details className="faq-item" key={faq.question} open={index === 0}>
                  <summary><span>{String(index + 1).padStart(2, '0')}</span>{faq.question}<b aria-hidden="true">+</b></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="container final-cta reveal">
            <div className="final-cta-glow" aria-hidden="true" />
            <div className="final-cta-content">
              <p className="eyebrow">{text.finalLabel}</p>
              <h2>{text.finalTitle}</h2>
              <p>{text.finalText}</p>
              <a className="button button-light" href="#languages">{text.finalButton} <span aria-hidden="true">↗</span></a>
            </div>
            <div className="final-stamp" aria-hidden="true"><span>MAKE</span><b>✳</b><span>STUFF</span></div>
          </div>
        </section>

      </main>} />
      <Route path="/lang/:id" element={<LangDetailWrapper locale={locale} />} />
      <Route path="/start" element={<BeginnerApps locale={locale} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer locale={locale} />
    </div>
    </BrowserRouter>
  )
}

export default App
