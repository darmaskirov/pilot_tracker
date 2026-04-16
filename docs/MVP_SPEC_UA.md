# Специфікація MVP

## Статус документа

MVP зараз не будується. Документ існує для того, щоб у разі позитивної валідації команда не почала імпровізувати і роздувати scope.

## Ціль MVP

Ціль MVP:

- дати маленькій founder-led B2B-команді одне спільне місце для трекінгу ранніх design partners і paid pilots
- зробити promises, success criteria, next steps і review dates видимими
- дати простий спосіб побачити pilot risk до renewal / review moment

MVP не має на меті замінити CRM або customer success platform.

## Основний use case

Після чергового дзвінка з pilot account засновник або operator заходить у продукт, оновлює домовленості, ризики й наступні кроки, а перед review call швидко бачить:

- що було обіцяно
- які критерії успіху зафіксовані
- які blocker-и відкриті
- що має статись до next milestone
- наскільки акаунт ризиковий

## Core entities

Мінімальні сутності:

- `Account`
- `Contact`
- `Pilot`
- `Promise`
- `Success Criterion`
- `Next Step`
- `Blocker`
- `Review Date`
- `Risk Status`
- `Update Log`

## Сторінки / сутності

### 1. Accounts list

Список активних design partners / pilots з коротким статусом:

- stage
- next review date
- risk status
- open blockers

### 2. Account detail

Головний робочий екран акаунта:

- summary
- promises
- success criteria
- next steps
- blockers
- review / renewal dates
- recent updates

### 3. Update entry

Простий спосіб зафіксувати зміни після call або email-thread:

- що змінилось
- які нові домовленості
- хто відповідальний
- коли наступний checkpoint

### 4. Risk review

Спрощений список усіх акаунтів із risk-позначками і причинами ризику.

## Що входить у v1

- ручне створення акаунта
- збереження базового контексту pilot / design partner
- promises tracker
- success criteria tracker
- next steps з owner і due date
- blockers
- review / renewal dates
- простий risk status: `green / yellow / red`
- журнал оновлень

## Що не входить у v1

- AI summary generation як обов'язкова частина
- email sync
- CRM integrations
- support inbox
- team permissions
- advanced analytics
- automated reminders across multiple channels
- customer health scoring з десятками факторів

## Acceptance criteria

Функціональні:

- можна завести новий акаунт за кілька хвилин
- можна окремо фіксувати promises, success criteria, blockers і next steps
- можна бачити наступну review / renewal date
- risk status можна оновити вручну з коротким поясненням
- оновлення по акаунту читаються як хронологія

Продуктові:

- засновник бачить повну картину акаунта без пошуку по різних інструментах
- перед review call видно, що саме треба довести або закрити
- продукт не виглядає як надбудова над CRM

## Технічні примітки

- веб-додаток із простим authenticated workspace
- server-rendered або hybrid Next.js app достатній
- звичайна relational БД достатня
- складна інфраструктура не потрібна
- акцент на ясній domain model, а не на складних інтеграціях

## Мінімальний стек

- Next.js
- TypeScript
- Tailwind CSS
- Postgres або інша проста managed relational БД
- базова auth-механіка без overengineering
