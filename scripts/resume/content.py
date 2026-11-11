"""Resume text for the PDF versions (EN and RU).

Edit the text here, then run `bun run resume` to rebuild public/resume-*.pdf.
Links are written out as visible text on purpose: ATS parsers and AI screeners
read the text layer and drop hidden hyperlink targets.
"""

EN = {
    'lang': 'en',
    'file': 'resume-en.pdf',
    'name': 'Dmitry Shamal',
    'role': 'Senior Frontend Developer · React, TypeScript, Telegram Mini Apps',
    'contacts': [
        'Saint Petersburg, Russia (UTC+3)',
        'Remote, office or relocation',
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
        'Frontend developer with 7+ years of commercial experience in React and TypeScript. Built Telegram '
        'Mini Apps with up to 200–300k weekly active users, including an NFT sticker marketplace that handled 10,000+ purchases '
        'per second at collection launches. Take products from architecture to release, work in small teams '
        'with cross-review, and go beyond the frontend when needed: BFF on NestJS and Go, Python bots, '
        'Docker and CI/CD. Use AI tools (Claude Code, OpenAI Codex) daily for code analysis, debugging and '
        'feature work. Open to frontend, Telegram/Web3 and AI-assisted fullstack roles.'
    ),
    'skills': [
        ('Frontend', 'JavaScript, TypeScript, React, Next.js, Vite, HTML5, CSS3, SCSS, CSS Modules, Tailwind CSS'),
        ('State and data', 'Zustand, Redux Toolkit, TanStack Query, REST API, WebSocket'),
        ('Architecture and UI', 'component architecture, micro-frontends, shared npm packages, UI Kit, Storybook, '
         'SSR, SEO, mobile-first'),
        ('Web3 and Telegram', 'Telegram Mini Apps, Telegram Bot API, TON, TonConnect, NFT, smart contract integration'),
        ('Backend', 'NestJS, BFF, Python (aiogram), PostgreSQL (basic), SQLite, Go (reading and understanding code)'),
        ('Infrastructure', 'Git, GitHub, GitLab, CI/CD (GitHub Actions), Docker, Sentry, Vercel, DigitalOcean'),
        ('AI tools', 'Claude Code, OpenAI Codex (code analysis, finding bottlenecks, bug fixes, features); '
         'Pen.dev (interface design)'),
    ],
    'key_projects': 'Key projects:',
    'jobs': [
        {
            'company': 'Open Builders',
            'role': 'Senior Frontend Developer',
            'dates': 'May 2024 – Present',
            'summary': (
                'Telegram Mini Apps in the TON ecosystem with up to 200–300k weekly active users (Telegram WAU). Frontend lead in teams '
                'of 2–3 frontend developers or sole frontend developer, depending on the product.'
            ),
            'bullets': [
                'Built the frontend of several applications from scratch: architecture, interfaces and state '
                'management; shipped under tight deadlines for scheduled public launches.',
                'Moved load-heavy logic to the client when backend capacity was limited: in Earn, real-time '
                'per-second reward calculation based on leaderboard position and wallet token balance.',
                'Integrated TON wallets and smart contracts, including direct on-chain interactions without a '
                'backend API.',
                'Reviewed merge requests within the frontend team; reworked applications as business models changed.',
                'Worked with the Not Games BFF and its migration from NestJS to Go. Used CI pipelines and Sentry '
                'error monitoring in day-to-day delivery.',
                'Initiated a React/TypeScript UI Kit with theming and Storybook, published as an npm package and '
                'adopted in Collab Tool. github.com/OpenBuilders/ui-kit-public',
            ],
            'projects': [
                ('Sticker Pack', 'NFT sticker marketplace in Telegram, up to 200–300k weekly active users. 40+ collections from major '
                 'partners and 100+ from users, about 50 of them minted as NFTs on TON. Built timed collection '
                 'launches, sales mechanics, purchases, transfers, minting and burning; launches peaked at 10,000+ '
                 'purchases per second, with 5,000–10,000 stickers selling out in 10–30 seconds. t.me/sticker_bot'),
                ('Not Games', 'Telegram gaming platform from the creators of Notcoin, up to 200–300k weekly active users: shared player '
                 'profile, achievements, cross-game inventory and an internal marketplace. Developed achievements, '
                 'items, marketplace and profile customization. t.me/notgames_bot'),
                ('Earn', 'token distribution campaigns, ~100k users. Built the entire frontend, including real-time '
                 'reward calculation on the client. t.me/earn'),
                ('Void Game', 'multiplayer game on Not Games (React, WebSocket). Took over the frontend as the sole '
                 'developer and launched a new season: skins, new rewards and new game modes. t.me/VoidNotHereBot'),
                ('Access Tool', 'open-source service controlling access to private Telegram groups and channels '
                 'through digital assets. Built the entire frontend. github.com/OpenBuilders/access-tool'),
                ('Community', 'task and campaign platform connecting projects and users in Telegram and TON. Added '
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
            'summary': 'Large real estate platform for finding, comparing and buying homes (pik.ru); frontend team '
                       'of 5–6. React, Next.js, TypeScript, Redux.',
            'bullets': [
                'Contributed to the pik.ru redesign; developed the interactive property map across all residential '
                'complexes with search, filters and layers for infrastructure and nearby places.',
                'Extracted the mortgage calculator and the property map into shared npm packages and '
                'micro-frontends reused across several repositories.',
                'Updated the mortgage calculator to support new subsidized interest rates and purchase terms.',
                'Configured server-side rendering (SSR) and contributed to SEO improvements; pik.ru reached and held '
                'the top 3 for target search queries for the first time.',
            ],
        },
        {
            'company': 'GELSTER',
            'role': 'Web Developer',
            'dates': 'Jul 2019 – May 2021',
            'bullets': [
                'Sole developer: built the corporate website for product selection and purchase enquiries and '
                'redesigned the existing site.',
                'Built a commercial proposal tool that let sales managers prepare proposals during the call with a '
                'client instead of afterwards.',
            ],
        },
    ],
    'personal': [
        ('ShareAny', 'Telegram bot that turns links to Reels, Shorts and posts into native video or photos in any '
         'chat (inline mode). Python, aiogram, yt-dlp; SQLite cache of Telegram file_id for instant resends, '
         'per-user rate limiting, Docker, auto-deploy via GitHub Actions with a healthcheck. Built with Claude '
         'Code. t.me/shareany_bot'),
        ('Vecherly', 'AI recommendations for films, series and videos across platforms: search by title, ask the AI '
         'assistant or get a random pick. React, TypeScript, Go, PWA. vecherly.online'),
    ],
    'education': [
        ('Saint Petersburg State University of Aerospace Instrumentation (SUAI)', '2015 – 2019',
         'Institute of Information Systems and Information Security; Infocommunication Technologies and '
         'Communication Systems.'),
    ],
    'languages': 'Russian – native · English – B1, working proficiency: written communication, calls, '
                 'technical documentation',
}

RU = {
    'lang': 'ru',
    'file': 'resume-ru.pdf',
    'name': 'Дмитрий Шамаль',
    'role': 'Senior Frontend Developer · React, TypeScript, Telegram Mini Apps',
    'contacts': [
        'Санкт-Петербург (МСК)',
        'Удалёнка, офис или релокация',
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
        'Frontend-разработчик с 7+ годами коммерческого опыта на React и TypeScript. Разрабатывал Telegram '
        'Mini Apps с аудиторией до 200–300 тыс. активных пользователей в неделю, в том числе NFT-маркетплейс стикеров с пиками '
        '10 000+ покупок в секунду на запусках коллекций. Веду продукт от архитектуры до релиза, работаю '
        'в небольших командах с перекрёстным ревью и при необходимости выхожу за пределы frontend: BFF на '
        'NestJS и Go, боты на Python, Docker и CI/CD. Каждый день использую AI-инструменты (Claude Code, '
        'OpenAI Codex) для анализа кода, отладки и разработки фич. Рассматриваю frontend, Telegram/Web3 '
        'и fullstack-позиции с использованием AI.'
    ),
    'skills': [
        ('Frontend', 'JavaScript, TypeScript, React, Next.js, Vite, HTML5, CSS3, SCSS, CSS Modules, Tailwind CSS'),
        ('Состояние и данные', 'Zustand, Redux Toolkit, TanStack Query, REST API, WebSocket'),
        ('Архитектура и UI', 'компонентная архитектура, микрофронтенды, общие npm-пакеты, UI Kit, Storybook, '
         'SSR, SEO, mobile-first'),
        ('Web3 и Telegram', 'Telegram Mini Apps, Telegram Bot API, TON, TonConnect, NFT, интеграция смарт-контрактов'),
        ('Backend', 'NestJS, BFF, Python (aiogram), PostgreSQL (базовый уровень), SQLite, Go (чтение и разбор кода)'),
        ('Инфраструктура', 'Git, GitHub, GitLab, CI/CD (GitHub Actions), Docker, Sentry, Vercel, DigitalOcean'),
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
                'Telegram Mini Apps в экосистеме TON с аудиторией до 200–300 тыс. активных пользователей в неделю (WAU по статистике Telegram). В зависимости '
                'от проекта — лид frontend-команды из 2–3 разработчиков или единственный frontend-разработчик.'
            ),
            'bullets': [
                'Разрабатывал frontend нескольких приложений с нуля: архитектура, интерфейсы, управление состоянием; '
                'выпускал продукты в сжатые сроки к анонсированным публичным запускам.',
                'Переносил нагруженную логику на клиент, когда мощностей backend не хватало: в Earn — расчёт '
                'награды каждую секунду в зависимости от места в рейтинге и баланса токенов в кошельке.',
                'Интегрировал TON-кошельки и смарт-контракты, в том числе прямое взаимодействие с блокчейном '
                'без backend API.',
                'Ревьюил merge requests во frontend-команде; перерабатывал приложения при смене бизнес-модели.',
                'Работал с BFF Not Games и его переводом с NestJS на Go. В ежедневной работе — CI-пайплайны '
                'и мониторинг ошибок в Sentry.',
                'Инициировал React/TypeScript UI Kit с темизацией и Storybook, опубликовал npm-пакет, внедрил '
                'в Collab Tool. github.com/OpenBuilders/ui-kit-public',
            ],
            'projects': [
                ('Sticker Pack', 'NFT-маркетплейс стикеров в Telegram, до 200–300 тыс. WAU. 40+ коллекций от '
                 'крупных партнёров и 100+ от пользователей, около 50 выпущены как NFT в TON. Разрабатывал запуски '
                 'коллекций по расписанию, механики продаж, покупку, передачу, минтинг и сжигание; на запусках — '
                 'пики 10 000+ покупок в секунду, 5–10 тыс. стикеров раскупались за 10–30 секунд. t.me/sticker_bot'),
                ('Not Games', 'игровая платформа в Telegram от создателей Notcoin, до 200–300 тыс. WAU: единый '
                 'профиль игрока, достижения, общий инвентарь для нескольких игр, внутренний маркетплейс. '
                 'Разрабатывал достижения, предметы, маркетплейс и кастомизацию профиля. t.me/notgames_bot'),
                ('Earn', 'кампании распределения токенов, ~100 тыс. пользователей. Frontend разработал полностью, '
                 'включая расчёт наград в реальном времени на клиенте. t.me/earn'),
                ('Void Game', 'многопользовательская игра на платформе Not Games (React, WebSocket). Принял frontend '
                 'как единственный разработчик и запустил новый сезон: скины, новые награды и игровые режимы. '
                 't.me/VoidNotHereBot'),
                ('Access Tool', 'открытый сервис правил доступа в приватные группы и каналы Telegram по цифровым '
                 'активам. Frontend разработал полностью самостоятельно. github.com/OpenBuilders/access-tool'),
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
            'summary': 'Крупная платформа для поиска, выбора и покупки недвижимости (pik.ru); frontend-команда '
                       'из 5–6 человек. React, Next.js, TypeScript, Redux.',
            'bullets': [
                'Участвовал в редизайне pik.ru; развивал интерактивную карту объектов по всем ЖК с поиском, '
                'фильтрами и слоями инфраструктуры и мест поблизости.',
                'Вынес ипотечный калькулятор и карту в общие npm-пакеты и микрофронтенды, которые '
                'переиспользуются в нескольких репозиториях.',
                'Обновил калькулятор ипотеки под новые льготные ставки и условия покупки.',
                'Настраивал серверный рендеринг (SSR) и участвовал в SEO-оптимизации; pik.ru впервые вышел '
                'и закрепился в топ-3 по целевым поисковым запросам.',
            ],
        },
        {
            'company': 'GELSTER',
            'role': 'Web Developer',
            'dates': 'июль 2019 – май 2021',
            'bullets': [
                'Единственный разработчик: разработал сайт для выбора товаров и заявок на покупку, выполнил '
                'редизайн существующего сайта.',
                'Создал инструмент для коммерческих предложений: менеджеры стали готовить КП прямо во время '
                'разговора с клиентом, а не после.',
            ],
        },
    ],
    'personal': [
        ('ShareAny', 'Telegram-бот: ссылка на рилс, шортс или пост превращается в видео или фото прямо в чате '
         '(inline-режим). Python, aiogram, yt-dlp; кэш file_id в SQLite для мгновенной повторной отправки, '
         'rate limiting, Docker, автодеплой через GitHub Actions с healthcheck. Разработан с Claude Code. '
         't.me/shareany_bot'),
        ('Vecherly', 'AI-подбор фильмов, сериалов и видео с разных площадок: поиск по названию, AI-ассистент '
         'или случайный выбор. React, TypeScript, Go, PWA. vecherly.online'),
    ],
    'education': [
        ('ГУАП (Санкт-Петербургский государственный университет аэрокосмического приборостроения)', '2015 – 2019',
         'Институт информационных систем и защиты информации; инфокоммуникационные технологии и системы связи.'),
    ],
    'languages': 'Русский – родной · Английский – B1, рабочий уровень: переписка, созвоны, '
                 'техническая документация',
}

RESUMES = [EN, RU]
