import React, { useState } from 'react'
import popularHtmlTags from './popularHtmlTags.js'
import popularCssProperties from './popularCssProperties.js'
import popularJavaScriptFeatures from './popularJavaScriptFeatures.js'

const content = {
  html: {
    ru: {
      eyebrow: 'ОСНОВА КАЖДОЙ СТРАНИЦЫ',
      title: 'HTML задаёт структуру.',
      intro: 'С помощью HTML браузер понимает, где заголовок, текст, изображение, ссылка или форма. Начни с понятной структуры — так сайт будет удобен и людям, и поисковикам.',
      points: [
        ['Разметь смысл', 'Используй заголовки, абзацы, списки и другие элементы по их назначению.'],
        ['Добавь содержимое', 'Вставь текст, изображения, ссылки, видео и формы.'],
        ['Соедини части', 'Подключи CSS и JavaScript, чтобы оформить и оживить страницу.'],
      ],
      exampleTitle: 'Мини-пример HTML',
      example: '<main>\n  <h1>Моя первая страница</h1>\n  <p>Здесь начинается моя история.</p>\n  <a href="/about">Узнать больше</a>\n</main>',
      note: 'HTML — это язык разметки, а не язык программирования.',
    },
    en: {
      eyebrow: 'THE FOUNDATION OF EVERY PAGE',
      title: 'HTML gives a page structure.',
      intro: 'HTML tells the browser where to find a heading, text, image, link, or form. Start with meaningful structure to make a site easier for people and search engines.',
      points: [
        ['Describe meaning', 'Use headings, paragraphs, lists, and other elements for their intended purpose.'],
        ['Add content', 'Place text, images, links, video, and forms.'],
        ['Connect the pieces', 'Add CSS and JavaScript to style and bring the page to life.'],
      ],
      exampleTitle: 'A small HTML example',
      example: '<main>\n  <h1>My first page</h1>\n  <p>This is where my story begins.</p>\n  <a href="/about">Learn more</a>\n</main>',
      note: 'HTML is a markup language, not a programming language.',
    },
  },
  css: {
    ru: {
      eyebrow: 'ВНЕШНИЙ ВИД ТВОЕГО САЙТА',
      title: 'CSS добавляет стиль.',
      intro: 'CSS отвечает за то, как выглядит страница: цвета, шрифты, расстояния, расположение блоков и адаптацию к экрану телефона или компьютера.',
      points: [
        ['Выбери элементы', 'Селекторы помогают найти нужный тег, класс или отдельный элемент.'],
        ['Настрой внешний вид', 'Меняй цвет, размер, отступы, границы и расположение.'],
        ['Подстрой под экран', 'Медиазапросы помогают сделать удобный вид на телефонах и планшетах.'],
      ],
      exampleTitle: 'Немного CSS',
      example: '.card {\n  padding: 24px;\n  border-radius: 18px;\n  background: #f1efff;\n  color: #382d75;\n}',
      note: 'CSS можно подключить отдельным файлом или написать внутри тега <style>.',
    },
    en: {
      eyebrow: 'THE LOOK AND FEEL OF YOUR SITE',
      title: 'CSS adds the style.',
      intro: 'CSS controls how a page looks: colors, fonts, spacing, layout, and how it adapts to a phone or desktop screen.',
      points: [
        ['Select elements', 'Selectors target a tag, class, or individual element.'],
        ['Set the appearance', 'Adjust color, size, spacing, borders, and layout.'],
        ['Fit every screen', 'Media queries help make pages comfortable on phones and tablets.'],
      ],
      exampleTitle: 'A little CSS',
      example: '.card {\n  padding: 24px;\n  border-radius: 18px;\n  background: #f1efff;\n  color: #382d75;\n}',
      note: 'CSS can live in its own file or inside a <style> element.',
    },
  },
  js: {
    ru: {
      eyebrow: 'ИНТЕРАКТИВНОСТЬ И ЛОГИКА',
      title: 'JavaScript оживляет страницу.',
      intro: 'JavaScript помогает странице реагировать на действия пользователя: раскрывать меню, проверять форму, обновлять данные и создавать небольшие приложения.',
      points: [
        ['Храни данные', 'Переменные помогают сохранить текст, числа и другие значения.'],
        ['Описывай действия', 'Функции объединяют шаги, которые можно запускать по необходимости.'],
        ['Реагируй на события', 'Обрабатывай клики, ввод текста и другие действия пользователя.'],
      ],
      exampleTitle: 'Событие на JavaScript',
      example: 'const button = document.querySelector("button");\nbutton.addEventListener("click", () => {\n  document.querySelector("#message").textContent = "Готово!";\n});',
      note: 'JavaScript может работать и в браузере, и на сервере.',
    },
    en: {
      eyebrow: 'INTERACTIVITY AND LOGIC',
      title: 'JavaScript brings a page to life.',
      intro: 'JavaScript lets a page react to people: open menus, validate forms, update data, and power small applications.',
      points: [
        ['Store information', 'Variables keep text, numbers, and other values.'],
        ['Describe actions', 'Functions group steps that you can run when needed.'],
        ['Respond to events', 'Handle clicks, text input, and other user actions.'],
      ],
      exampleTitle: 'A JavaScript event',
      example: 'const button = document.querySelector("button");\nbutton.addEventListener("click", () => {\n  document.querySelector("#message").textContent = "Done!";\n});',
      note: 'JavaScript runs in browsers and on servers.',
    },
  },
}

export default function LangDetail({ lang, locale = 'ru' }) {
  const isEnglish = locale === 'en'
  const copy = content[lang.id][locale]
  const [popularTagsOpen, setPopularTagsOpen] = useState(false)
  const popularCatalog = {
    html: {
      label: isEnglish ? 'All 100 popular HTML tags' : 'Все 100 популярных HTML-тегов',
      description: isEnglish ? '100 OFTEN-USED HTML ELEMENTS' : '100 ЧАСТО ИСПОЛЬЗУЕМЫХ HTML-ЭЛЕМЕНТОВ',
      ariaLabel: isEnglish ? 'Popular HTML elements' : 'Популярные HTML-теги',
      groups: popularHtmlTags.map(({ title, tags }) => ({ title, items: tags })),
    },
    css: {
      label: isEnglish ? 'All 100 popular CSS properties' : 'Все 100 популярных свойств CSS',
      description: isEnglish ? '100 OFTEN-USED CSS PROPERTIES' : '100 ЧАСТО ИСПОЛЬЗУЕМЫХ СВОЙСТВ CSS',
      ariaLabel: isEnglish ? 'Popular CSS properties' : 'Популярные свойства CSS',
      groups: popularCssProperties,
    },
    js: {
      label: isEnglish ? 'All 100 popular JavaScript features' : 'Все 100 популярных возможностей JavaScript',
      description: isEnglish ? '100 OFTEN-USED JAVASCRIPT FEATURES' : '100 ЧАСТО ИСПОЛЬЗУЕМЫХ ВОЗМОЖНОСТЕЙ JAVASCRIPT',
      ariaLabel: isEnglish ? 'Popular JavaScript features' : 'Популярные возможности JavaScript',
      groups: popularJavaScriptFeatures,
    },
  }[lang.id]

  return (
    <main className={`detail-page detail-${lang.id}`}>
      <section className="detail-hero">
        <div className="container">
          <a className="detail-back" href="/#languages">
            <span aria-hidden="true">←</span> {isEnglish ? 'All languages' : 'Все языки'}
          </a>
          <div className="detail-hero-layout">
            <div className="detail-copy">
              <p className="eyebrow">{copy.eyebrow}</p>
              <p className="detail-number">{lang.number} / {lang.category[locale]}</p>
              <h1>{lang.name[locale]} <em>{copy.title.replace(`${lang.name[locale]} `, '')}</em></h1>
              <p className="detail-intro">{copy.intro}</p>
              <a className="button button-primary" href="/#languages">
                {isEnglish ? 'Explore other languages' : 'Посмотреть другие языки'} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="detail-mark" aria-hidden="true">
              <div className="detail-mark-orbit" />
              <img src={lang.icon} alt="" />
              <span>{lang.name[locale]}</span>
              <small>WEB / BASICS</small>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-content section-pad">
        <div className="container">
          <div className="detail-section-heading">
            <div>
              <p className="eyebrow">{isEnglish ? 'THE ESSENTIALS' : 'САМОЕ ВАЖНОЕ'}</p>
              <h2>{lang.subtitle[locale]}<span className="heading-period">.</span></h2>
            </div>
            <span className="detail-section-number">0{lang.number}</span>
          </div>

          <div className="detail-points">
            {copy.points.map(([title, text], index) => (
              <article className="detail-point" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <section className="detail-example">
            <div className="detail-example-copy">
              <p className="eyebrow">{isEnglish ? 'SEE IT IN CODE' : 'ПОСМОТРИ НА КОД'}</p>
              <h2>{copy.exampleTitle}</h2>
              <p>{lang.summary[locale]}</p>
              <div className="detail-note"><span>✳</span>{copy.note}</div>
            </div>
            <div className="detail-code-window">
              <div className="code-window-bar">
                <span className="window-lights"><i /><i /><i /></span>
                <span>{lang.id === 'js' ? 'example.js' : lang.id === 'css' ? 'example.css' : 'index.html'}</span>
                <span className="code-live"><i /> {isEnglish ? 'EXAMPLE' : 'ПРИМЕР'}</span>
              </div>
              <pre><code>{copy.example}</code></pre>
            </div>
          </section>

          {popularCatalog && (
            <section className="detail-popular-tags" aria-label={popularCatalog.ariaLabel}>
              <button
                type="button"
                className="popular-tags-button"
                aria-expanded={popularTagsOpen}
                aria-controls="popular-language-items"
                onClick={() => setPopularTagsOpen((open) => !open)}
              >
                <span>{popularCatalog.label}</span>
                <span className="popular-tags-button-icon" aria-hidden="true">{popularTagsOpen ? '−' : '+'}</span>
              </button>
              {popularTagsOpen && (
                <div className="detail-popular-tags-panel" id="popular-language-items">
                  <p className="eyebrow">{popularCatalog.description}</p>
                  <div className="detail-tag-categories">
                    {popularCatalog.groups.map((group) => (
                      <section className="detail-tag-category" key={group.title.en}>
                        <h3>{group.title[locale]}</h3>
                        <ul className="html-tag-list">
                          {group.items.map(([item, ru, en]) => (
                            <li className="html-tag-item" key={item}>
                              <code>{lang.id === 'html' ? `<${item}>` : item}</code>
                              <span>{isEnglish ? en : ru}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          <div className="detail-next">
            <span>{isEnglish ? 'READY FOR THE NEXT STEP?' : 'ГОТОВ К СЛЕДУЮЩЕМУ ШАГУ?'}</span>
            <a className="text-link" href="/#languages">{isEnglish ? 'Choose another language' : 'Выбрать другой язык'} <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </main>
  )
}
