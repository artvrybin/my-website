## SCV — сайт‑визитка на SSG (Vike + Vite + React)

Коротко: это простой статический сайт. Нажимаешь «собрать» — получаешь готовые HTML‑страницы. Быстро, просто, без сервера.

### Что нужно
- Node.js 18+
- pnpm 8+
- Windows 10 (удобно запускать через Git Bash)

### Как запустить
```bash
pnpm i      # установка зависимостей
pnpm dev    # запуск проекта
```
Открой в браузере: `http://localhost:5173`

### Полезные команды
- `pnpm dev` — режим разработки (автообновление при сохранении)
- `pnpm build` — сборка проекта (HTML попадут в `dist/client/`)
- `pnpm preview` — посмотреть собранную версию локально
- `pnpm lint` — проверка кода (ESLint)
- `pnpm format` — автоформатирование (Prettier)

### Как добавить страницу
1) Создай файл `pages/about/+Page.tsx`
2) Напиши компонент (пример ниже)
3) Открой `/about` в браузере

Пример простейшей страницы:
```tsx
export default function Page() {
  return <main style={{ padding: 24 }}>About page</main>
}
```

### Где лежат настройки
- `renderer/+config.ts` — общий конфиг Vike (здесь включён пререндер `prerender: true`)

### Удобные алиасы импортов
- `@` → `/src`
- `@assets` → `/src/assets`
- `@pages` → `/pages`
- `@renderer` → `/renderer`

Пример:
```ts
import Logo from '@assets/react.svg'
import HomePage from '@pages/index/+Page'
```

### Пара заметок
- Здесь нет `index.html` и `src/main.tsx` — за это отвечает Vike.
- После сборки готовые файлы лежат в `dist/client/`.
