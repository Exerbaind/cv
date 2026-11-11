"""Resume text for the PDF versions (EN and RU).

Edit the text here, then run `bun run resume` to rebuild public/resume-*.pdf.
Links are written out as visible text on purpose: ATS parsers and AI screeners
read the text layer and drop hidden hyperlink targets.
"""

EN = {
    'lang': 'en',
    'file': 'resume-en.pdf',
    'name': 'Dmitry Shamal',
    'role': 'Senior Frontend Developer',
    'contacts': [
        'Saint Petersburg, Russia',
        'digr98@gmail.com',
        'Telegram: @no_sugar_daddy',
        'dsham.me',
    ],
    'sections': {
        'profile': 'Profile',
        'skills': 'Technical skills',
        'experience': 'Professional experience',
        'personal': 'Personal projects',
        'education': 'Education and languages',
    },
    'profile': (
        'Frontend developer with 7+ years of commercial experience. I specialize in React, '
        'TypeScript and complex interface architecture. I build web applications and Telegram '
        'Mini Apps, from marketplaces and trading products to gaming platforms. I build products '
        'from scratch, evolve existing systems and review code. I use AI tools (Claude Code, '
        'OpenAI Codex) for code analysis, finding bottlenecks and fixing bugs.'
    ),
    'skills': [
        ('Frontend', 'JavaScript, TypeScript, React, Next.js, Vite, HTML5, CSS3, SCSS, CSS Modules, Tailwind CSS'),
        ('State and data', 'Zustand, Redux Toolkit, TanStack Query, REST API, WebSocket'),
        ('Architecture and UI', 'component architecture, UI Kit, Storybook, SSR, SEO, mobile-first, render optimization'),
        ('Web3 and Telegram', 'Telegram Mini Apps, Telegram Bot API, TON, TonConnect, NFT, smart contract integration'),
        ('Backend', 'NestJS, Python (aiogram), PostgreSQL (basic), SQLite, Go (reading and understanding code)'),
        ('Infrastructure', 'Git, GitHub, GitHub Actions (CI/CD), Docker, Vercel, DigitalOcean'),
        ('AI tools', 'Claude Code, OpenAI Codex (code analysis, finding bottlenecks, bug fixes, features); Pen.dev (interface design)'),
    ],
    'key_projects': 'Key projects:',
    'jobs': [
        {
            'company': 'Open Builders',
            'role': 'Senior Frontend Developer',
            'dates': 'May 2024 – Present',
            'summary': (
                'Telegram Mini Apps in the TON ecosystem for a large audience. Depending on the project, '
                'frontend technical lead or sole frontend developer, responsible for architecture, '
                'implementation and product development.'
            ),
            'bullets': [
                'Initiated and built a React/TypeScript UI Kit: reusable components, theming, Storybook and npm '
                'distribution; introduced it into Collab Tool. github.com/OpenBuilders/ui-kit-public',
                'Built the frontend of several applications from scratch: architecture, interfaces and state '
                'management. In high-traffic products, moved part of the logic to the client to reduce server load.',
                'Reviewed code and colleagues’ technical decisions; worked in a team on large products under tight deadlines.',
                'Reworked applications as business models changed; integrated TON wallets and smart contracts, '
                'including direct on-chain interactions without a backend API.',
                'Built the Telegram Tools ecosystem landing page.',
            ],
            'projects': [
                ('Sticker Pack', 'a marketplace for limited-edition digital sticker packs in Telegram, issued as NFTs '
                 'on TON. Developed and reworked collection launches, sales mechanics, purchases, transfers and '
                 'minting, including direct TON interactions without a backend API. t.me/sticker_bot'),
                ('Not Games', 'a Telegram gaming platform from the creators of Notcoin: shared player profile, '
                 'achievements, cross-game inventory and an internal marketplace. Developed achievements, items, '
                 'marketplace features and profile customization in a team. t.me/notgames_bot'),
                ('Void Game', 'a multiplayer game on Not Games (React, WebSocket). Took over the frontend as the sole '
                 'developer, refined game mechanics, optimized rendering and launched a new season. t.me/VoidNotHereBot'),
                ('Access Tool', 'an open-source service controlling access to private Telegram groups and channels '
                 'through digital assets. Built the entire frontend. github.com/OpenBuilders/access-tool'),
                ('Earn', 'an application for token distribution campaigns. Built the entire frontend. t.me/earn'),
                ('Community', 'a task and campaign platform connecting projects and users in Telegram and TON. Added '
                 'new task types, paid tasks, navigation and filtering, and redesigned the interface.'),
            ],
        },
        {
            'company': 'ORCA.codes',
            'role': 'Middle Frontend Developer (part-time)',
            'dates': 'Nov 2023 – Mar 2024',
            'bullets': [
                'Built the interfaces and product functionality of a dental equipment marketplace from scratch.',
            ],
        },
        {
            'company': 'PIK Digital',
            'role': 'Middle Frontend Developer',
            'dates': 'May 2021 – May 2024',
            'summary': 'Large real estate platform for finding, comparing and buying homes (pik.ru). '
                       'React, Next.js, TypeScript, Redux.',
            'bullets': [
                'Contributed to the pik.ru redesign; built an interactive property map with search and filters.',
                'Updated the online mortgage calculator to support new subsidized interest rates and purchase terms.',
                'Configured server-side rendering (SSR) and contributed to SEO improvements; the website reached '
                'the top 3 for target search queries.',
            ],
        },
        {
            'company': 'GELSTER',
            'role': 'Web Developer',
            'dates': 'Jul 2019 – May 2021',
            'bullets': [
                'Sole developer on the team: built the corporate website for product selection and purchase '
                'enquiries, redesigned the existing site and built a tool for sales managers to prepare '
                'commercial proposals.',
            ],
        },
    ],
    'personal': [
        ('ShareAny', 'Telegram bot that turns links to Reels, Shorts and posts into native video or photos in any '
         'chat (inline mode). Python, aiogram, yt-dlp; SQLite cache of Telegram file_id for instant resends, '
         'per-user rate limiting, Docker, auto-deploy via GitHub Actions with a healthcheck. t.me/shareany_bot'),
        ('Vecherly', 'AI recommendations for films, series and videos across platforms: search by title, ask the AI '
         'assistant or get a random pick. React, TypeScript, Go, PWA. vecherly.online'),
    ],
    'education': [
        ('Saint Petersburg State University of Aerospace Instrumentation (SUAI)', '2015 – 2019',
         'Institute of Information Systems and Information Security; Infocommunication Technologies and '
         'Communication Systems.'),
    ],
    'languages': 'Russian – native · English – B1, technical documentation',
}

RU = {
    'lang': 'ru',
    'file': 'resume-ru.pdf',
    'name': 'Дмитрий Шамаль',
    'role': 'Senior Frontend Developer',
    'contacts': [
        'Санкт-Петербург',
        'digr98@gmail.com',
        'Telegram: @no_sugar_daddy',
        'dsham.me',
    ],
    'sections': {
        'profile': 'Профиль',
        'skills': 'Технические навыки',
        'experience': 'Опыт работы',
        'personal': 'Собственные проекты',
        'education': 'Образование и языки',
    },
    'profile': (
        'Frontend-разработчик с 7+ годами коммерческого опыта. Специализируюсь на React, TypeScript '
        'и архитектуре сложных интерфейсов. Разрабатываю веб-приложения и Telegram Mini Apps: '
        'от маркетплейсов и обмена до игровых платформ. Создаю продукты с нуля, развиваю существующие '
        'системы, провожу code review. Использую AI-инструменты (Claude Code, OpenAI Codex) для анализа '
        'кода, поиска узких мест и исправления багов.'
    ),
    'skills': [
        ('Frontend', 'JavaScript, TypeScript, React, Next.js, Vite, HTML5, CSS3, SCSS, CSS Modules, Tailwind CSS'),
        ('Состояние и данные', 'Zustand, Redux Toolkit, TanStack Query, REST API, WebSocket'),
        ('Архитектура и UI', 'компонентная архитектура, UI Kit, Storybook, SSR, SEO, mobile-first, оптимизация рендеринга'),
        ('Web3 и Telegram', 'Telegram Mini Apps, Telegram Bot API, TON, TonConnect, NFT, интеграция смарт-контрактов'),
        ('Backend', 'NestJS, Python (aiogram), PostgreSQL (базовый уровень), SQLite, Go (чтение и разбор кода)'),
        ('Инфраструктура', 'Git, GitHub, GitHub Actions (CI/CD), Docker, Vercel, DigitalOcean'),
        ('AI-инструменты', 'Claude Code, OpenAI Codex (анализ кода, поиск узких мест, исправление багов, фичи); '
         'Pen.dev (дизайн интерфейсов)'),
    ],
    'key_projects': 'Ключевые проекты:',
    'jobs': [
        {
            'company': 'Open Builders',
            'role': 'Senior Frontend Developer',
            'dates': 'май 2024 – настоящее время',
            'summary': (
                'Telegram Mini Apps в экосистеме TON для большой аудитории. В зависимости от проекта — '
                'технический лидер frontend-направления или единственный frontend-разработчик: '
                'архитектура, реализация и развитие продукта.'
            ),
            'bullets': [
                'Инициировал и разработал React/TypeScript UI Kit: переиспользуемые компоненты, темизация, '
                'Storybook, публикация npm-пакета; внедрил библиотеку в Collab Tool. github.com/OpenBuilders/ui-kit-public',
                'Самостоятельно разрабатывал frontend нескольких приложений с нуля: архитектура, интерфейсы, '
                'управление состоянием. В нагруженных продуктах переносил часть логики на клиент, чтобы разгрузить серверы.',
                'Проводил code review и оценивал технические решения коллег; участвовал в командной разработке '
                'крупных продуктов в сжатые сроки.',
                'Перерабатывал приложения при смене бизнес-модели; интегрировал TON-кошельки и смарт-контракты, '
                'в том числе прямое взаимодействие с блокчейном без backend API.',
                'Разработал лендинг экосистемы Telegram Tools.',
            ],
            'projects': [
                ('Sticker Pack', 'маркетплейс лимитированных наборов цифровых стикеров в Telegram: наборы выпускаются '
                 'как NFT в сети TON. Развивал и переработал продукт: запуск коллекций, механики продаж, покупка, '
                 'передача, минтинг; прямое взаимодействие с TON без backend API. t.me/sticker_bot'),
                ('Not Games', 'игровая платформа в Telegram от создателей Notcoin: единый профиль игрока, достижения, '
                 'общий инвентарь для нескольких игр, внутренний маркетплейс. В команде разрабатывал достижения, '
                 'предметы, маркетплейс и кастомизацию профиля. t.me/notgames_bot'),
                ('Void Game', 'многопользовательская игра на платформе Not Games (React, WebSocket). Принял frontend '
                 'как единственный разработчик: доработал механики, оптимизировал рендеринг, запустил новый сезон. '
                 't.me/VoidNotHereBot'),
                ('Access Tool', 'открытый сервис правил доступа в приватные группы и каналы Telegram по цифровым '
                 'активам. Frontend разработал полностью самостоятельно. github.com/OpenBuilders/access-tool'),
                ('Earn', 'приложение для кампаний распределения токенов. Frontend разработал полностью '
                 'самостоятельно. t.me/earn'),
                ('Community', 'платформа заданий и кампаний, которая связывает проекты и пользователей в Telegram '
                 'и TON. Добавил новые типы и платные задания, навигацию и фильтрацию, выполнил редизайн.'),
            ],
        },
        {
            'company': 'ORCA.codes',
            'role': 'Middle Frontend Developer (part-time)',
            'dates': 'ноябрь 2023 – март 2024',
            'bullets': [
                'С нуля разработал интерфейсы и продуктовую функциональность маркетплейса стоматологического оборудования.',
            ],
        },
        {
            'company': 'ПИК Digital',
            'role': 'Middle Frontend Developer',
            'dates': 'май 2021 – май 2024',
            'summary': 'Крупная платформа для поиска, выбора и покупки недвижимости (pik.ru). '
                       'React, Next.js, TypeScript, Redux.',
            'bullets': [
                'Участвовал в редизайне pik.ru; разработал интерактивную карту объектов с поиском и фильтрацией.',
                'Обновил онлайн-калькулятор ипотеки под новые льготные ставки и условия покупки.',
                'Настраивал серверный рендеринг (SSR) и участвовал в SEO-оптимизации; сайт вышел в топ-3 '
                'по целевым поисковым запросам.',
            ],
        },
        {
            'company': 'GELSTER',
            'role': 'Web Developer',
            'dates': 'июль 2019 – май 2021',
            'bullets': [
                'Единственный разработчик в команде: разработал сайт для выбора товаров и заявок на покупку, '
                'выполнил редизайн существующего сайта, создал инструмент для подготовки коммерческих предложений.',
            ],
        },
    ],
    'personal': [
        ('ShareAny', 'Telegram-бот: ссылка на рилс, шортс или пост превращается в видео или фото прямо в чате '
         '(inline-режим). Python, aiogram, yt-dlp; кэш file_id в SQLite для мгновенной повторной отправки, '
         'rate limiting, Docker, автодеплой через GitHub Actions с healthcheck. t.me/shareany_bot'),
        ('Vecherly', 'AI-подбор фильмов, сериалов и видео с разных площадок: поиск по названию, AI-ассистент '
         'или случайный выбор. React, TypeScript, Go, PWA. vecherly.online'),
    ],
    'education': [
        ('ГУАП (Санкт-Петербургский государственный университет аэрокосмического приборостроения)', '2015 – 2019',
         'Институт информационных систем и защиты информации; инфокоммуникационные технологии и системы связи.'),
    ],
    'languages': 'Русский – родной · Английский – B1, техническая документация',
}

RESUMES = [EN, RU]
