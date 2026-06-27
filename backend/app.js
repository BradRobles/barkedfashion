// ===========================
// BarkedShop API — app.js
// Stack: Node.js + Express (Vercel Serverless)
// ===========================
const express = require('express');
const cors    = require('cors');
const app     = express();

app.use(cors());
app.use(express.json());

// --- ROUTES ---
app.use('/api/products',  require('./api/products'));
app.use('/api/users',     require('./api/users'));
app.use('/api/orders',    require('./api/orders'));
app.use('/api/cart',      require('./api/cart'));
app.use('/api/reviews',   require('./api/reviews'));
app.use('/api/analytics', require('./api/analytics'));

// Health check
app.get('/', (req, res) => res.json({ status: 'BarkedShop API running 🛍️' }));

// Para desarrollo local
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`BarkedShop API on port ${PORT}`));
}

// IMPORTANTE: Vercel necesita el export default del handler
module.exports = app;
