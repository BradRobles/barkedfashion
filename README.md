# <img src="https://slackmojis.com/emojis/93340-hawaiian-shirt/download" width="40"/> BarkedShop

> A Shein-style fashion e-commerce platform built as a team project.

---

## 🌐 Live Platform

| Layer    | URL |
|----------|-----|
| Frontend | `frontend/index.html` (open in browser or deploy to Netlify/GitHub Pages) |
| API      | `http://localhost:3000` |

---

## 👥 Team Members

| Role | Member |
|------|--------|
| 🏆 Product Owner | Diego |
| ✅ Quality Assurance | Karen |
| 🔄 Scrum Master | Diego |
| ⚙️ DevOps | Diego, Elisabet |
| 🎨 Front-end Developer | Ramiro, Karen, Elisabet |
| 🔧 Back-end Developer | Brad, Alejandra |

---

## 📋 Responsibilities

| Member | Files / Area |
|--------|-------------|
| **Ramiro** | `frontend/` — UI components & pages |
| **Elisabet** | `frontend/` — styles & responsive design |
| **Diego** | `README.md` — documentation & project management |
| **Alejandra** | `database/` — schema & data models |
| **Brad** | `backend/` — API routes & server logic |
| **Karen** | `data/`, `package.json` — sample data & project config |

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
open frontend/index.html
```

### Backend API
```bash
# 1. Install dependencies
npm install

# 2. Start the server
npm start

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

## 💾 Commit Guidelines

```bash
git checkout -b feature/your-name-task
git add .
git commit -m "feat(name): description of what you did"
git push origin feature/your-name-task
```

**Examples:**
- `feat(ramiro): add women category page`
- `feat(brad): add orders API endpoint`
- `fix(elisabet): fix mobile navbar`
- `docs(diego): update README`
- `feat(karen): add sample data files`
- `feat(alejandra): add database schema`

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

