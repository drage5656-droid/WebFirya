import React, { useEffect, useRef, useState } from 'react'

const skeleton = `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Первая страница</title>
  </head>
  <body>
    <h1>Моя первая страница</h1>
  </body>
</html>`

const githubPagesWorkflow = [
  'name: Deploy to GitHub Pages',
  'on:',
  '  push:',
  '    branches: [main]',
  '  workflow_dispatch:',
  'permissions:',
  '  contents: read',
  '  pages: write',
  '  id-token: write',
  'concurrency:',
  '  group: pages',
  '  cancel-in-progress: true',
  'jobs:',
  '  build:',
  '    runs-on: ubuntu-latest',
  '    steps:',
  '      - uses: actions/checkout@v4',
  '      - uses: actions/setup-node@v4',
  '        with:',
  '          node-version: 20',
  '          cache: npm',
  '      - run: npm ci',
  '      - run: npm run build',
  '      - run: cp dist/index.html dist/404.html',
  '      - uses: actions/upload-pages-artifact@v3',
  '        with:',
  '          path: dist',
  '  deploy:',
  '    needs: build',
  '    environment:',
  '      name: github-pages',
  '      url: ${{ steps.deployment.outputs.page_url }}',
  '    runs-on: ubuntu-latest',
  '    steps:',
  '      - id: deployment',
  '        uses: actions/deploy-pages@v4',
]

const resources = {
  ru: {
    intro: 'Начни писать код, проверь свою страницу и узнай, как поделиться ею в интернете.',
    categoryLabels: { online: 'БРАУЗЕР', desktop: 'РЕДАКТОР', hosting: 'ХОСТИНГ' },
    resources: [
      { group: 'online', name: 'CodePen', url: 'https://codepen.io/', rating: 4.7, description: 'Быстро собирай и показывай небольшие HTML-, CSS- и JS-примеры.' },
      { group: 'online', name: 'JSFiddle', url: 'https://jsfiddle.net/', rating: 4.4, description: 'Проверяй фрагменты HTML, CSS и JavaScript в отдельных панелях.' },
      { group: 'online', name: 'StackBlitz', url: 'https://stackblitz.com/', rating: 4.8, description: 'Запускай полноценные веб-проекты прямо в браузере.' },
      { group: 'online', name: 'CodeSandbox', url: 'https://codesandbox.io/', rating: 4.7, description: 'Создавай прототипы и приложения с готовым окружением.' },
      { group: 'online', name: 'Replit', url: 'https://replit.com/', rating: 4.5, description: 'Пиши код онлайн и делись проектом по ссылке.' },
      { group: 'desktop', name: 'Visual Studio Code', url: 'https://code.visualstudio.com/Download', rating: 4.9, description: 'Популярный редактор кода с расширениями для веб-разработки.', extra: 'Live Server, Prettier' },
      { group: 'desktop', name: 'Sublime Text', url: 'https://www.sublimetext.com/download', rating: 4.5, description: 'Быстрый редактор для файлов и небольших проектов.' },
      { group: 'desktop', name: 'WebStorm', url: 'https://www.jetbrains.com/webstorm/download/', rating: 4.7, description: 'IDE для JavaScript, TypeScript и веб-приложений.' },
      { group: 'hosting', name: 'GitHub Pages', url: 'https://pages.github.com/', description: 'Публикуй статические сайты из репозитория GitHub.' },
      { group: 'hosting', name: 'Netlify', url: 'https://www.netlify.com/', description: 'Разворачивай сайт из репозитория или загруженных файлов.' },
      { group: 'hosting', name: 'Vercel', url: 'https://vercel.com/', description: 'Публикуй сайты и приложения с автоматическими обновлениями.' },
    ],
    stepsTitle: 'Как начать: пять шагов',
    steps: [
      'Выбери онлайн-редактор или установи редактор кода на компьютер.',
      'Создай файлы index.html, style.css и script.js.',
      'Добавь в HTML структуру документа: DOCTYPE, язык, кодировку и viewport.',
      'Открой сайт в браузере и проверь ошибки через инструменты разработчика.',
      'Когда будешь готов поделиться сайтом, опубликуй его на хостинге и отправь публичную ссылку.',
    ],
    documentTitle: 'Шаблон первой страницы',
    documentText: 'Скопируй основу HTML-документа и замени заголовок и содержимое на свои.',
    copy: 'Скопировать HTML',
    copied: 'Скопировано!',
    copyError: 'Не удалось скопировать автоматически. Выдели код и скопируй его вручную.',
    demoTitle: 'Попробовать демо',
    showDemo: 'Показать мини-страницу',
    hideDemo: 'Скрыть мини-страницу',
    demoHeading: 'Привет, веб!',
    demoText: 'Это твоя первая тестовая страница.',
    sharingTitle: 'Как поделиться сайтом',
    sharingText: 'Ссылка на файл с компьютера открывается только у тебя. Опубликуй сайт в интернете на GitHub Pages, Netlify или Vercel, а затем отправь друзьям публичный URL.',
    sharingDetails: 'Показать подробную инструкцию',
    hideSharingDetails: 'Скрыть инструкцию',
    publishGuides: [
      {
        title: 'GitHub Pages — публикация статического сайта',
        steps: [
          'Создай репозиторий на GitHub и загрузи туда файлы сайта. Для обычного HTML-сайта index.html должен находиться в корне.',
          'Для Vite-сайта укажи в vite.config.js базовый путь к репозиторию: base: \'/имя-репозитория/\'. Для пользовательского репозитория username.github.io обычно используется base: \'/\'.',
          'В репозитории открой Settings → Pages и установи Source: GitHub Actions. Папку dist нельзя выбрать как папку ветки напрямую — её нужно передать в Actions как артефакт.',
          'Для Vite-проекта создай файл .github/workflows/deploy.yml со следующим workflow. Он собирает проект, создаёт fallback 404.html для вложенных маршрутов и публикует dist; если основная ветка называется master, замени main на master.',
          'Сохрани файл и отправь изменения в главную ветку. Открой вкладку Actions, дождись зелёного статуса и перейди по адресу из Settings → Pages.',
          'Если у сайта есть маршруты React Router (например, /start), настрой basename={import.meta.env.BASE_URL} и добавь fallback-файл 404.html: GitHub Pages иначе может показать 404 при прямом открытии или обновлении вложенного адреса.',
        ],
        workflow: githubPagesWorkflow,
        url: 'https://docs.github.com/pages',
        link: 'Официальная инструкция GitHub Pages',
      },
      {
        title: 'Netlify — подключение Git или загрузка файлов',
        steps: [
          'Создай аккаунт на Netlify и выбери Add new site.',
          'Для GitHub выбери импорт репозитория; для готового статического сайта можно загрузить папку сборки через ручной деплой.',
          'Для Vite укажи команду сборки npm run build и папку публикации dist. Для обычного HTML-сайта укажи папку, где лежит index.html.',
          'Для приложения с React Router создай public/_redirects, чтобы прямые ссылки и обновление вложенных страниц перенаправлялись на index.html.',
          'Запусти деплой и открой выданный публичный адрес сайта.',
        ],
        fallback: ['/* /index.html 200'],
        url: 'https://docs.netlify.com/',
        link: 'Официальная документация Netlify',
      },
      {
        title: 'Vercel — деплой из GitHub',
        steps: [
          'Создай аккаунт на Vercel и подключи GitHub.',
          'Импортируй репозиторий с сайтом и проверь настройки проекта.',
          'Для Vite используй команду сборки npm run build и папку dist.',
          'Для приложения с React Router добавь в корень vercel.json с правилом rewrites, направляющим маршруты на /, чтобы прямые ссылки и обновление вложенных страниц работали.',
          'Нажми Deploy; после сборки Vercel покажет публичную ссылку и будет обновлять сайт после новых изменений.',
        ],
        fallback: [
          '{',
          '  "rewrites": [',
          '    { "source": "/(.*)", "destination": "/" }',
          '  ]',
          '}',
        ],
        url: 'https://vercel.com/docs',
        link: 'Официальная документация Vercel',
      },
    ],
    reviewReminder: 'Не забудьте оставить отзыв о нашем сайте — нам важно ваше мнение!',
    back: 'На главную',
    ratingLabel: 'Оценка редактора',
    officialDownload: 'Официальный сайт и загрузка',
    officialSite: 'Официальный сайт',
    downloadNote: 'Скачивай программы только с официальных сайтов.',
    ratingNote: 'Оценки — ориентир редакции WebFirya по удобству для начинающих, а не пользовательский рейтинг.',
  },
  en: {
    intro: 'Start writing code, test your page, and learn how to share it online.',
    categoryLabels: { online: 'IN BROWSER', desktop: 'EDITOR', hosting: 'HOSTING' },
    resources: [
      { group: 'online', name: 'CodePen', url: 'https://codepen.io/', rating: 4.7, description: 'Quickly build and share small HTML, CSS, and JS examples.' },
      { group: 'online', name: 'JSFiddle', url: 'https://jsfiddle.net/', rating: 4.4, description: 'Test HTML, CSS, and JavaScript snippets in separate panels.' },
      { group: 'online', name: 'StackBlitz', url: 'https://stackblitz.com/', rating: 4.8, description: 'Run full web projects directly in your browser.' },
      { group: 'online', name: 'CodeSandbox', url: 'https://codesandbox.io/', rating: 4.7, description: 'Create prototypes and apps with a ready-to-use environment.' },
      { group: 'online', name: 'Replit', url: 'https://replit.com/', rating: 4.5, description: 'Write code online and share your project with a link.' },
      { group: 'desktop', name: 'Visual Studio Code', url: 'https://code.visualstudio.com/Download', rating: 4.9, description: 'A popular code editor with extensions for web development.', extra: 'Live Server, Prettier' },
      { group: 'desktop', name: 'Sublime Text', url: 'https://www.sublimetext.com/download', rating: 4.5, description: 'A fast editor for files and small projects.' },
      { group: 'desktop', name: 'WebStorm', url: 'https://www.jetbrains.com/webstorm/download/', rating: 4.7, description: 'An IDE for JavaScript, TypeScript, and web apps.' },
      { group: 'hosting', name: 'GitHub Pages', url: 'https://pages.github.com/', description: 'Publish static websites from a GitHub repository.' },
      { group: 'hosting', name: 'Netlify', url: 'https://www.netlify.com/', description: 'Deploy a site from a repository or uploaded files.' },
      { group: 'hosting', name: 'Vercel', url: 'https://vercel.com/', description: 'Publish websites and apps with automatic updates.' },
    ],
    stepsTitle: 'How to start: five steps',
    steps: [
      'Choose an online editor or install a code editor on your computer.',
      'Create index.html, style.css, and script.js files.',
      'Add the document structure to HTML: DOCTYPE, language, character encoding, and viewport.',
      'Open the site in a browser and check for errors in developer tools.',
      'When you are ready to share, publish the site with a hosting provider and send its public URL.',
    ],
    documentTitle: 'A starter page template',
    documentText: 'Copy the HTML document skeleton and replace its title and content with your own.',
    copy: 'Copy HTML',
    copied: 'Copied!',
    copyError: 'Could not copy automatically. Select and copy the code manually.',
    demoTitle: 'Try a demo',
    showDemo: 'Show mini page',
    hideDemo: 'Hide mini page',
    demoHeading: 'Hello, web!',
    demoText: 'This is your first test page.',
    sharingTitle: 'How to share your site',
    sharingText: 'A file path on your computer only works for you. Publish the site with GitHub Pages, Netlify, or Vercel, then share its public URL.',
    sharingDetails: 'Show detailed publishing steps',
    hideSharingDetails: 'Hide publishing steps',
    publishGuides: [
      {
        title: 'GitHub Pages — publish a static website',
        steps: [
          'Create a GitHub repository and upload your site files. For a plain HTML site, keep index.html in the repository root.',
          'For Vite, set the repository base path in vite.config.js: base: \'/repository-name/\'. A username.github.io repository usually uses base: \'/\'.',
          'Open Settings → Pages and set Source to GitHub Actions. The dist folder cannot be selected as a branch folder directly; Actions must upload it as an artifact.',
          'For a Vite project, create .github/workflows/deploy.yml with the workflow below. It builds the project, creates a 404.html fallback for nested routes, and publishes dist; replace main with master if that is your default branch.',
          'Save the file and push changes to the default branch. Check the Actions tab, wait for a successful run, and open the URL shown in Settings → Pages.',
          'For React Router routes such as /start, set basename={import.meta.env.BASE_URL} and add a 404.html fallback: otherwise GitHub Pages may return 404 when a nested URL is opened or refreshed directly.',
        ],
        workflow: githubPagesWorkflow,
        url: 'https://docs.github.com/pages',
        link: 'Official GitHub Pages guide',
      },
      {
        title: 'Netlify — connect Git or upload files',
        steps: [
          'Create a Netlify account and choose Add new site.',
          'Import a GitHub repository, or manually deploy a ready-to-publish static site folder.',
          'For Vite, set the build command to npm run build and the publish directory to dist. For plain HTML, select the folder containing index.html.',
          'For a React Router app, create public/_redirects so direct links and refreshed nested routes resolve to index.html.',
          'Deploy and open the public URL provided for your site.',
        ],
        fallback: ['/* /index.html 200'],
        url: 'https://docs.netlify.com/',
        link: 'Official Netlify documentation',
      },
      {
        title: 'Vercel — deploy from GitHub',
        steps: [
          'Create a Vercel account and connect GitHub.',
          'Import your site repository and check the project settings.',
          'For Vite, use npm run build as the build command and dist as the output directory.',
          'For a React Router app, add a vercel.json file at the project root with a rewrite that routes requests to / so nested links also work on refresh.',
          'Choose Deploy; Vercel will provide a public link and update the site after new changes.',
        ],
        fallback: [
          '{',
          '  "rewrites": [',
          '    { "source": "/(.*)", "destination": "/" }',
          '  ]',
          '}',
        ],
        url: 'https://vercel.com/docs',
        link: 'Official Vercel documentation',
      },
    ],
    reviewReminder: 'Please leave a review of our site — your feedback matters to us!',
    back: 'Back to home',
    ratingLabel: 'Editor rating',
    officialDownload: 'Official site & download',
    officialSite: 'Official website',
    downloadNote: 'Only download software from official websites.',
    ratingNote: 'Ratings are WebFirya editorial estimates of beginner-friendliness, not user reviews.',
  },
}

function ResourceCard({ item, badge, text }) {
  return (
    <article className="beginner-resource-card">
      <div className="beginner-resource-top">
        <h4>{item.name}</h4>
        <span>{badge}</span>
      </div>
      <p>{item.description}</p>
      {item.rating && (
        <div className="beginner-rating" aria-label={`${text.ratingLabel}: ${item.rating} / 5`}>
          <span className="beginner-stars" aria-hidden="true">
            {Array.from({ length: 5 }, (_, index) => {
              const fill = Math.max(0, Math.min(100, (item.rating - index) * 100))
              return <span key={index} style={{ '--star-fill': `${fill}%` }}>★</span>
            })}
          </span>
          <span className="beginner-rating-value">{item.rating.toFixed(1)} / 5</span>
        </div>
      )}
      {item.extra && <small>{item.extra}</small>}
      <a className="beginner-resource-link" href={item.url} target="_blank" rel="noreferrer">
        {item.group === 'desktop' ? text.officialDownload : text.officialSite} <span aria-hidden="true">↗</span>
      </a>
    </article>
  )
}

export default function BeginnerApps({ locale = 'ru' }) {
  const isEnglish = locale === 'en'
  const text = resources[locale]
  const localizedSkeleton = skeleton.replace('lang="ru"', `lang="${locale}"`)
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const [demoVisible, setDemoVisible] = useState(false)
  const [publishGuidesOpen, setPublishGuidesOpen] = useState(false)
  const copyTimer = useRef(null)

  useEffect(() => () => window.clearTimeout(copyTimer.current), [])

  const copySkeleton = async () => {
    setCopyError(false)
    try {
      await navigator.clipboard.writeText(localizedSkeleton)
      setCopied(true)
      window.clearTimeout(copyTimer.current)
      copyTimer.current = window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopyError(true)
    }
  }

  const onlineResources = text.resources.filter((item) => item.group === 'online')
  const desktopResources = text.resources.filter((item) => item.group === 'desktop')
  const hostingResources = text.resources.filter((item) => item.group === 'hosting')

  return (
    <main className="beginner-page">
      <section className="beginner-hero">
        <div className="container">
          <a className="detail-back" href="/#top"><span aria-hidden="true">←</span> {text.back}</a>
          <p className="eyebrow">{isEnglish ? 'YOUR FIRST STEPS IN WEB DEVELOPMENT' : 'ПЕРВЫЕ ШАГИ В ВЕБ-РАЗРАБОТКЕ'}</p>
          <h1>{isEnglish ? 'Start creating for the web.' : 'Начни создавать для веба.'}</h1>
          <p>{text.intro}</p>
          <a className="button button-primary" href="#beginner-tools">
            {isEnglish ? 'Explore tools' : 'Выбрать инструменты'} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <div className="container beginner-content">
        <section className="beginner-section" id="beginner-tools">
          <div className="beginner-section-heading">
            <div>
              <p className="eyebrow">{isEnglish ? 'PICK YOUR WORKSPACE' : 'ВЫБЕРИ СВОЮ СРЕДУ'}</p>
              <h2>{isEnglish ? 'Tools to get started' : 'Инструменты для старта'}<span className="heading-period">.</span></h2>
            </div>
          </div>
          <div className="beginner-resource-groups">
            <section className="beginner-resource-group">
              <h3>{isEnglish ? 'In-browser editors' : 'Онлайн-редакторы'}</h3>
              <div className="beginner-resource-grid">
                {onlineResources.map((item) => <ResourceCard key={item.name} item={item} badge={text.categoryLabels.online} text={text} />)}
              </div>
            </section>
            <section className="beginner-resource-group">
              <h3>{isEnglish ? 'Desktop editors' : 'Редакторы для компьютера'}</h3>
              <div className="beginner-resource-grid">
                {desktopResources.map((item) => <ResourceCard key={item.name} item={item} badge={text.categoryLabels.desktop} text={text} />)}
              </div>
              <p className="beginner-hint">{text.downloadNote}</p>
            </section>
            <section className="beginner-resource-group">
              <h3>{isEnglish ? 'Website hosting' : 'Хостинг для сайтов'}</h3>
              <div className="beginner-resource-grid beginner-resource-grid-hosting">
                {hostingResources.map((item) => <ResourceCard key={item.name} item={item} badge={text.categoryLabels.hosting} text={text} />)}
              </div>
              <p className="beginner-hint">
                {isEnglish
                  ? 'Free plan details can change. Check each provider’s current terms before publishing.'
                  : 'Условия бесплатных тарифов могут меняться — проверь их перед публикацией сайта.'}
              </p>
            </section>
          </div>
          <p className="beginner-hint beginner-rating-note">{text.ratingNote}</p>
        </section>

        <section className="beginner-section beginner-steps-section">
          <div className="beginner-section-heading">
            <div>
              <p className="eyebrow">{isEnglish ? 'ONE THING AT A TIME' : 'ПО ОДНОМУ ШАГУ'}</p>
              <h2>{text.stepsTitle}<span className="heading-period">.</span></h2>
            </div>
          </div>
          <ol className="beginner-steps">
            {text.steps.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>
            ))}
          </ol>
        </section>

        <section className="beginner-section beginner-document">
          <div className="beginner-document-copy">
            <p className="eyebrow">{isEnglish ? 'A READY-TO-USE START' : 'ГОТОВАЯ ОСНОВА'}</p>
            <h2>{text.documentTitle}<span className="heading-period">.</span></h2>
            <p>{text.documentText}</p>
            <button type="button" className="button button-primary" onClick={copySkeleton}>
              {copied ? text.copied : text.copy} <span aria-hidden="true">{copied ? '✓' : '↗'}</span>
            </button>
            {copyError && <p className="beginner-status beginner-status-error" role="alert">{text.copyError}</p>}
            <div className="beginner-demo">
              <h3>{text.demoTitle}</h3>
              <button type="button" className="text-link" aria-expanded={demoVisible} onClick={() => setDemoVisible((visible) => !visible)}>
                {demoVisible ? text.hideDemo : text.showDemo} <span aria-hidden="true">{demoVisible ? '−' : '+'}</span>
              </button>
              {demoVisible && (
                <iframe
                  className="beginner-demo-frame"
                  title={text.demoTitle}
                  sandbox=""
                  srcDoc={`<!doctype html><html lang="${locale}"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><style>body{font:16px system-ui;padding:20px;color:#29263a}h1{color:#6554e8}</style><h1>${text.demoHeading}</h1><p>${text.demoText}</p></html>`}
                />
              )}
            </div>
          </div>
          <div className="beginner-code-window">
            <div className="code-window-bar">
              <span className="window-lights"><i /><i /><i /></span>
              <span>index.html</span>
              <span className="code-live"><i /> HTML</span>
            </div>
            <pre><code>{localizedSkeleton}</code></pre>
          </div>
        </section>

        <aside className="beginner-sharing-note">
          <span aria-hidden="true">↗</span>
          <div>
            <p className="eyebrow">{isEnglish ? 'READY TO SHARE?' : 'ГОТОВ ПОКАЗАТЬ САЙТ?'}</p>
            <h2>{text.sharingTitle}</h2>
            <p>{text.sharingText}</p>
            <button
              type="button"
              className="beginner-guide-toggle"
              aria-expanded={publishGuidesOpen}
              aria-controls="beginner-publish-guides"
              onClick={() => setPublishGuidesOpen((open) => !open)}
            >
              {publishGuidesOpen ? text.hideSharingDetails : text.sharingDetails}
              <span aria-hidden="true">{publishGuidesOpen ? '−' : '+'}</span>
            </button>
            {publishGuidesOpen && (
              <div className="beginner-publish-guides" id="beginner-publish-guides">
                {text.publishGuides.map((guide) => (
                  <section className="beginner-publish-guide" key={guide.url}>
                    <h3>{guide.title}</h3>
                    <ol>
                      {guide.steps.map((step) => <li key={step}>{step}</li>)}
                    </ol>
                    {guide.workflow && (
                      <pre className="beginner-workflow"><code>{guide.workflow.join('\n')}</code></pre>
                    )}
                    {guide.fallback && (
                      <pre className="beginner-workflow"><code>{guide.fallback.join('\n')}</code></pre>
                    )}
                    <a href={guide.url} target="_blank" rel="noreferrer">{guide.link} <span aria-hidden="true">↗</span></a>
                  </section>
                ))}
              </div>
            )}
          </div>
        </aside>

        <p className="beginner-review-reminder">{text.reviewReminder}</p>
      </div>
    </main>
  )
}
