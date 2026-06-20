# 🛍️ BarkedShop

> A style fashion e-commerce platform built as a team project.

---

## 🌐 Live Platform

| Layer    | URL |
|----------|-----|
| Frontend | `frontend/index.html` (open in browser or deploy to Netlify/GitHub Pages) |
| API      | `http://localhost:3000` |

---

## 📁 Repository Structure

```
barkedshop/
├── frontend/               # Static website (HTML, CSS, JS)
│   ├── index.html          # Home page (hero, products, FAQ, newsletter)
│   ├── css/
│   │   └── style.css       # All styles — responsive, mobile-first
│   ├── js/
│   │   ├── products.js     # Product catalog data
│   │   └── main.js         # Cart, search, FAQ accordion, newsletter
│   └── pages/
│       ├── women.html      # Women's category page
│       ├── men.html        # Men's category page
│       ├── new.html        # New arrivals page
│       ├── sale.html       # Sale page
│       ├── cart.html       # Shopping cart (localStorage)
│       └── account.html    # Login / Register page
│
├── backend/                # Node.js + Express REST API skeleton
│   ├── app.js              # Entry point — registers all routes
│   └── api/
│       ├── products.js     # GET /api/products, GET /api/products/:id
│       ├── users.js        # POST /api/users/register, POST /api/users/login
│       ├── orders.js       # GET /api/orders, POST /api/orders
│       ├── cart.js         # GET /api/cart, POST /api/cart/add
│       └── reviews.js      # GET /api/reviews/:productId, POST /api/reviews
│   └── scripts/
│       └── generate_data.py  # Python script to generate sample data
│
├── database/
│   └── schema.sql          # Full DB schema (MySQL/PostgreSQL)
│
├── data/
│   ├── json/
│   │   ├── products.json   # 12 sample products
│   │   ├── users.json      # 5 sample users
│   │   └── orders.json     # 4 sample orders
│   └── csv/
│       ├── products.csv    # Products in CSV format
│       └── orders.csv      # Orders in CSV format
│
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI/CD pipeline
├── package.json
├── .gitignore
└── README.md
```

---

## 🚀 How to Run Locally

### Frontend (no setup needed)
```bash
# Just open in your browser:
open frontend/index.html
```

### Backend API
```bash
# 1. Install dependencies
npm install

# 2. Start the server
npm start
# or in dev mode with auto-reload:
npm run dev

# 3. Test it
curl http://localhost:3000/api/products
```

### Generate Sample Data
```bash
python3 backend/scripts/generate_data.py
```

---

## 🗄️ Database

The schema is in `database/schema.sql`. Tables:

| Table | Description |
|-------|-------------|
| `users` | Customers and admins |
| `categories` | Women, Men, New In, Sale |
| `products` | All clothing items |
| `product_sizes` | Size variants per product |
| `orders` | Customer orders |
| `order_items` | Line items per order |
| `cart_items` | Active cart (server-side) |
| `reviews` | Product ratings and comments |
| `wishlist` | Saved items per user |
| `newsletter_subscribers` | Email subscriptions |

---

## 🌐 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/products` | All products (supports `?category=women&q=dress`) |
| GET | `/api/products/:id` | Single product |
| POST | `/api/users/register` | Register new user |
| POST | `/api/users/login` | Login, returns token |
| GET | `/api/orders` | User's order history |
| POST | `/api/orders` | Place a new order |
| GET | `/api/cart` | View cart |
| POST | `/api/cart/add` | Add item to cart |
| GET | `/api/reviews/:productId` | Get reviews for a product |
| POST | `/api/reviews` | Submit a review |

---

## ✅ Platform Features

- 🛒 Shopping cart (with localStorage persistence)
- 🔍 Real-time product search
- 👗 Category pages: Women, Men, New In, Sale
- ❓ FAQ accordion
- 💌 Newsletter subscription
- 📱 Fully responsive / mobile-friendly
- 🔄 GitHub Actions CI/CD pipeline

---

## 👥 Team Members & Commits

Each team member owns a specific area. Commit your work under your section.

| # | Member | Responsibility | Branch / Files |
|---|--------|---------------|----------------|
| 1 | **[Member 1]** | Project Lead & Home Page | `frontend/index.html`, `frontend/css/style.css` |
| 2 | **[Member 2]** | Product Pages & Cart | `frontend/pages/`, `frontend/js/products.js` |
| 3 | **[Member 3]** | Backend API & Routes | `backend/api/`, `backend/app.js` |
| 4 | **[Member 4]** | Database Schema & Data | `database/schema.sql`, `data/` |
| 5 | **[Member 5]** | Data Generation Scripts | `backend/scripts/generate_data.py` |
| 6 | **[Member 6]** | CI/CD & DevOps | `.github/workflows/ci.yml`, `package.json`, `README.md` |

### Commit Guidelines

```bash
git checkout -b feature/your-name-task
# ... make changes ...
git add .
git commit -m "feat(member-X): description of what you did"
git push origin feature/your-name-task
# Then open a Pull Request to main
```

**Commit message format:** `feat(scope): short description`
Examples:
- `feat(products): add sale page with dynamic discounts`
- `feat(db): add reviews and wishlist tables to schema`
- `fix(cart): fix item removal bug`
- `docs(readme): update team member table`

---

## 📊 Data Files

Sample data is available in three formats:

- **JSON** — `data/json/` — used directly by the API skeleton
- **CSV** — `data/csv/` — for spreadsheet analysis / Excel
- **SQL** — `database/schema.sql` — for database import

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JS |
| Backend | Node.js, Express |
| Database | MySQL / PostgreSQL |
| Data | JSON, CSV |
| CI/CD | GitHub Actions |
| Fonts | Google Fonts (Inter + Playfair Display) |

---

*BarkedShop — Fashion for Everyone 🛍️*
