# QuickHire Frontend

Next.js frontend for the QuickHire job board application.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Library:** Ant Design
- **Data Fetching:** TanStack Query (React Query)
- **HTTP:** Fetch API
- **State:** React useState / useSearchParams

---

## Getting Started

### Prerequisites

- Node.js v18+
- Backend server running on `http://localhost:5000`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/tamjidahmed0/qtec.git
cd quickhire/frontend

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.local.example .env.local
# Edit .env.local with your values

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

| Variable                | Description            | Required |
|-------------------------|------------------------|----------|
| `NEXT_PUBLIC_API_URL`   | Backend API base URL   | ✅ Yes   |

---

## Pages

| Route              | Description                        |
|--------------------|------------------------------------|
| `/`                | Home — Hero, Featured Jobs, Latest Jobs |
| `/jobs`            | All job listings with search/filter |
| `/jobs/:id`        | Job detail page                    |                |
| `dashboard/login`           | Admin login                        |
| `/dashboard/admin`       | Admin dashboard — post/delete jobs |

---

## Features

### Public
- Browse all job listings
- Search by keyword
- Filter by location
- View full job details
- Submit application (name, email, cover note)

### Admin
- Login to dashboard
- Post new job with company logo upload
- Delete existing jobs
- View all job listings


## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

