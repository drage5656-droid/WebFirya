const langs = [
  {
    id: 'html',
    name: { ru: 'HTML', en: 'HTML' },
    number: '01',
    category: { ru: 'СТРУКТУРА', en: 'STRUCTURE' },
    subtitle: { ru: 'Собери каркас своей страницы', en: 'Build the frame of your page' },
    summary: {
      ru: 'Язык разметки, который задаёт структуру страницы и смысл её содержимого.',
      en: 'The markup language that defines a page structure and the meaning of its content.'
    },
    icon: '/images/html-icon.svg',
    starter: '<h1>Привет, веб!</h1>\n<p>Это моя первая страница.</p>',
    tips: [
      {
        title: { ru: 'Как подключить CSS', en: 'How to add CSS' },
        text: {
          ru: 'Добавь в <head> тег <link rel="stylesheet" href="style.css">, чтобы подключить отдельный файл стилей.',
          en: 'Add <link rel="stylesheet" href="style.css"> inside <head> to connect a separate stylesheet.'
        }
      },
      {
        title: { ru: 'Основные теги', en: 'Common tags' },
        items: [
          { tag: '<h1>–<h6>', ru: 'Заголовок', en: 'Heading' },
          { tag: '<p>', ru: 'Абзац текста', en: 'Paragraph' },
          { tag: '<a>', ru: 'Ссылка', en: 'Link' },
          { tag: '<img>', ru: 'Изображение', en: 'Image' },
          { tag: '<div>', ru: 'Блок-контейнер', en: 'Block container' },
          { tag: '<span>', ru: 'Строчный фрагмент', en: 'Inline element' },
          { tag: '<button>', ru: 'Кнопка', en: 'Button' },
          { tag: '<ul>', ru: 'Маркированный список', en: 'Unordered list' },
          { tag: '<li>', ru: 'Элемент списка', en: 'List item' },
          { tag: '<form>', ru: 'Форма для ввода', en: 'Input form' },
        ]
      },
      {
        title: { ru: 'Где используют', en: 'Where it is used' },
        text: {
          ru: 'HTML используют на каждой веб-странице: для текста, ссылок, изображений, форм и других элементов.',
          en: 'HTML is used on every web page for text, links, images, forms, and other elements.'
        }
      }
    ]
  },
  {
    id: 'css',
    name: { ru: 'CSS', en: 'CSS' },
    number: '02',
    category: { ru: 'СТИЛЬ', en: 'STYLE' },
    subtitle: { ru: 'Добавь цвет и характер', en: 'Add color and character' },
    summary: {
      ru: 'Язык стилей для оформления, расположения элементов и адаптации страницы под разные экраны.',
      en: 'The styling language for appearance, layout, and adapting pages to different screen sizes.'
    },
    icon: '/images/css-icon.svg',
    starter: 'body {\n  font-family: system-ui;\n  color: #4f46e5;\n  text-align: center;\n}\nh1 {\n  padding: 1rem;\n  border-radius: 1rem;\n  background: #eef2ff;\n}',
    tips: [
      {
        title: { ru: 'Как подключить CSS', en: 'How to add CSS' },
        text: {
          ru: 'В файле HTML добавь в <head>: <link rel="stylesheet" href="style.css">. Путь должен вести к твоему CSS-файлу.',
          en: 'In your HTML file, add <link rel="stylesheet" href="style.css"> inside <head>. The path must point to your CSS file.'
        }
      },
      {
        title: { ru: 'Селекторы и свойства', en: 'Selectors and properties' },
        text: {
          ru: 'Селектор выбирает элементы (например, h1 или .card), а свойства внутри фигурных скобок задают их вид.',
          en: 'A selector chooses elements (such as h1 or .card), and declarations inside braces define their appearance.'
        }
      },
      {
        title: { ru: 'Где используют', en: 'Where it is used' },
        text: {
          ru: 'CSS оформляет интерфейсы сайтов: цвета, шрифты, сетки, отступы, анимации и мобильную версию.',
          en: 'CSS styles websites: colors, fonts, layouts, spacing, animations, and mobile views.'
        }
      }
    ]
  },
  {
    id: 'js',
    name: { ru: 'JavaScript', en: 'JavaScript' },
    number: '03',
    category: { ru: 'ДЕЙСТВИЕ', en: 'INTERACTION' },
    subtitle: { ru: 'Оживи страницу кодом', en: 'Bring the page to life' },
    summary: {
      ru: 'Язык программирования, который добавляет странице поведение и интерактивность.',
      en: 'The programming language that adds behavior and interactivity to a page.'
    },
    icon: '/images/js-icon.svg',
    starter: 'const button = document.querySelector("button");\nbutton.addEventListener("click", () => {\n  document.querySelector("#message").textContent = "Отлично, работает!";\n});',
    tips: [
      {
        title: { ru: 'Как подключить JavaScript', en: 'How to add JavaScript' },
        text: {
          ru: 'Добавь перед </body> тег <script src="script.js"></script>. Атрибут src указывает путь к файлу.',
          en: 'Add <script src="script.js"></script> before </body>. The src attribute points to the file.'
        }
      },
      {
        title: { ru: 'Основы', en: 'The basics' },
        text: {
          ru: 'Переменные хранят значения, функции выполняют действия, а события реагируют на клики и ввод.',
          en: 'Variables store values, functions perform actions, and events respond to clicks and input.'
        }
      },
      {
        title: { ru: 'Где используют', en: 'Where it is used' },
        text: {
          ru: 'JavaScript оживляет сайты и также используется на серверах, в приложениях и инструментах разработчика.',
          en: 'JavaScript powers interactive sites and is also used for servers, apps, and developer tools.'
        }
      }
    ]
  }
]

export default langs
