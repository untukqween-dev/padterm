# PadTerm

**AI-First iPad Developer Terminal**

Lightweight web app untuk iPad yang memungkinkan cloud development langsung dari browser menggunakan GitHub Codespaces sebagai backend runtime.

## 🎯 Vision

> "Cursor-like AI coding experience optimized for iPad"

PadTerm menyediakan terminal interaktif, GitHub workspace manager, dan AI coding assistant—semuanya dioptimalkan untuk iPad, tanpa perlu laptop.

## 📱 Quick Start

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- GitHub OAuth App credentials
- GitHub Personal Access Token (PAT)

### Installation

```bash
# Clone repository
git clone https://github.com/untukqween-dev/padterm.git
cd padterm

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Development URL: `http://localhost:3000`

## 🏗️ Project Structure

```
padterm/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
��   ├── dashboard/            # Dashboard pages
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/               # React components
│   ├── terminal/
│   ├── auth/
│   ├── repo-browser/
│   ├── codespaces/
│   └── ui/
├── services/                 # External service integrations
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions
├── types/                    # TypeScript types
├── utils/                    # Helper functions
├── server/                   # Backend server
│   ├── index.ts
│   ├── routes/
│   ├── services/
│   └── middleware/
├── public/                   # Static assets
└── ROADMAP.md
```

## 🚀 MVP Features (Week 1-5)

- [x] GitHub OAuth Authentication
- [x] Repository Browser
- [x] Codespaces Integration
- [x] Terminal Interface (xterm.js)
- [x] AI Command Panel
- [x] File Explorer

See [ROADMAP.md](./ROADMAP.md) for timeline details.

## 📦 Tech Stack

### Frontend
- Next.js 14+ | TypeScript | Tailwind CSS | xterm.js

### Backend
- Node.js 18+ | Express.js | WebSocket | ssh2 | @octokit/rest

## 🔐 Security

- Encrypted token storage
- Secure WebSocket (WSS)
- OAuth 2.0 best practices
- No plaintext credentials
- CORS configured
- Rate limiting

## 📊 Performance Targets

| Metric | Target |
|--------|--------|
| App load | < 3s |
| Terminal latency | < 150ms |
| Typing smoothness | 60 FPS |
| Memory | < 50MB |

## 🛠️ Development Scripts

```bash
npm run dev              # Run frontend + backend
npm run dev:frontend    # Frontend only
npm run dev:backend     # Backend only
npm run build           # Build production
npm run type-check      # TypeScript check
npm run lint            # ESLint
npm run format          # Prettier
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

## 📄 License

MIT

---

**Status**: MVP Development Phase  
**Last Updated**: 2026-05-30
