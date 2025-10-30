# 📈 Signalist

**Signalist** is an AI-powered stock signal and analytics platform built with **Next.js 16**, **TypeScript**, and **modern web technologies**.  
It enables users to track stocks, analyze signals, and manage personalized watchlists with real-time updates and secure authentication.

## 🚀 Features

- 🤖 **AI Stock Signals** – Get intelligent insights and trend predictions
- 💹 **Stock Analytics Dashboard** – Visualize stock data dynamically
- ⭐ **Watchlist Management** – Add, view, and track your favorite stocks
- 🔐 **Authentication System** – Secure sign-in/sign-up pages for users
- 🌐 **Real-Time Updates** – Stay synced with the latest stock trends
- 🧭 **Next.js App Router** – Organized structure using layouts and routes
- 💾 **Database Integration** – Structured stock and user data handling
- 💻 **Responsive Design** – Optimized for all screen sizes and devices

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS + Shadcn UI
- **Database:** Mongoose ORM (MongoDB or similar)
- **Auth:** Better-Auth (based on environment setup)
- **Linting & Formatting:** ESLint + Prettier
- **Build Tool:** Turbopack / Next.js Dev Server

## 📂 Project Structure

```bash
Signalist-main/
 ┣ app/                          # Next.js App Router directory
 ┃ ┣ (auth)/                     # Authentication-related pages
 ┃ ┃ ┣ sign-in/                  # Sign-in page
 ┃ ┃ ┗ sign-up/                  # Sign-up page
 ┃ ┣ (root)/                     # Main authenticated routes
 ┃ ┃ ┣ stocks/                   # Stock listing & analytics
 ┃ ┃ ┃ ┗ [symbol]/               # Dynamic route for stock details
 ┃ ┃ ┣ watchlist/                # User watchlist page
 ┃ ┃ ┗ page.tsx                  # Main dashboard / home
 ┃ ┣ api/                        # API routes (e.g., Inngest webhooks)
 ┃ ┣ layout.tsx                  # Root layout configuration
 ┃ ┣ globals.css                 # Global styles
 ┣ components/                   # Reusable UI components
 ┣ database/                     # Database schema & Prisma configuration
 ┣ hooks/                        # Custom React hooks
 ┣ lib/                          # Utility functions & services
 ┣ middleware/                   # Middleware for auth & routing
 ┣ public/                       # Static assets (icons, images, etc.)
 ┣ types/                        # TypeScript type definitions
 ┣ .gitignore
 ┣ components.json               # Shadcn UI registry
 ┣ eslint.config.mjs             # ESLint configuration
 ┣ next.config.ts                # Next.js configuration
 ┣ package.json
 ┣ postcss.config.mjs
 ┣ tsconfig.json
 ┗ README.md
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/Affan-Codes/Signalist.git
cd Signalist-main

```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Create .env file in the root directory

#### Add the following variables:

```
MONGODB_URI=your_database_url

NODE_ENV=development

NEXT_PUBLIC_BASE_URL=http://localhost:3000

BETTER_AUTH_SECRET=your_auth_secret

BETTER_AUTH_URL=http://localhost:3000

GEMINI_API_KEY=your_api_key

NODEMAILER_EMAIL=your_email

NODEMAILER_PASSWORD=your_app_password

NEXT_PUBLIC_FINNHUB_API_KEY=your_api_key
```


###  4️⃣ Start the development server

```
npm run dev
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

- Fork the project
- Create a feature branch (git checkout -b feature-name)
- Commit your changes (git commit -m "Added new feature")
- Push the branch (git push origin feature-name)
- Open a Pull Request

# 👨‍💻 Author

Made by **_Affan Khan_**
