# Laravel Inertia React ShadCN Template

Template starter modern menggunakan Laravel, Inertia.js, React, TypeScript, Tailwind CSS, dan ShadCN UI untuk membangun aplikasi fullstack yang cepat, scalable, dan developer-friendly.

---

## ✨ Stack

- ⚡ Laravel
- ⚛️ React
- 🔥 Inertia.js
- 🟦 TypeScript
- 🎨 Tailwind CSS
- 🧩 ShadCN UI
- 🛣️ Tanstack React DataTable

---

## 📸 Preview

```bash
/public/screenshoot-project.png
```

---

## 🚀 Features

- Authentication Laravel
- Inertia.js SPA Experience
- Type-safe React Components
- Reusable UI Components
- Dark Mode Ready
- Clean Folder Structure
- ESLint + Prettier
- Responsive Design
- Toast Notification
- Form Validation
- Loading State
- TanStack Table Ready
- Modal & Dialog Ready
- Best Practice Structure

---

## 📂 Folder Structure

```bash
resources/
└── js/
    ├── components/
    ├── layouts/
    ├── pages/
    ├── hooks/
    ├── lib/
    ├── types/
    └── app.tsx
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/mohfikryansyah/fiqriansyah-starter-kit-shadcn-laravel-13.git project-name
```

## 2. Masuk ke Folder Project

```bash
cd project-name
```

## 3. Install Dependency

```bash
composer install
npm install
```

## 4. Copy Environment

```bash
cp .env.example .env
```

## 5. Generate Key

```bash
php artisan key:generate
```

## 6. Setup Database

Edit file `.env`

```env
DB_DATABASE=your_database
DB_USERNAME=root
DB_PASSWORD=
```

## 7. Migration

```bash
php artisan migrate
```

## 8. Run Development Server

```bash
composer run dev
```

Atau jalankan manual:

```bash
php artisan serve
npm run dev
```

---

# 🧩 ShadCN UI

Install component baru:

```bash
npx shadcn@latest add button
```

Contoh install multiple component:

```bash
npx shadcn@latest add button input dialog dropdown-menu
```

---

# 🎨 Styling

Project menggunakan:

- Tailwind CSS
- CSS Variables
- Dark Mode Support
- `cn()` Utility
- Class Variance Authority (CVA)

---

# 🛠️ Best Practices

## Gunakan TypeScript Strict Mode

```json
"strict": true
```

---

## Gunakan Shared Types

```ts
export interface User {
    id: number;
    name: string;
    email: string;
}
```

---

## Gunakan Inertia Form

```tsx
const form = useForm({
    name: "",
    email: "",
});
```

---

# 🔐 Authentication

Authentication menggunakan Laravel default authentication.

---

# 📱 Responsive Design

Gunakan utility Tailwind:

```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

---

# 🌙 Dark Mode

Dark mode menggunakan class strategy:

```js
darkMode: "class"
```

---

# 🧪 Linting

```bash
npm run lint
```

---

# 🏗️ Build Production

```bash
npm run build
```

---

# 📄 Environment Example

```env
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8000
```

---

# 📜 License

MIT License

---

# ❤️ Credits

Built with:

- Laravel
- React