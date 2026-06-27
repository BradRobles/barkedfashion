
// ===========================
// BarkedShop API — app.js
// Stack: Node.js + Express (Vercel Serverless)
// ===========================
const express = require('express');
const cors    = require('cors');
const path    = require('path');
const app     = express();
 
app.use(cors());
app.use(express.json());
 
// Rutas con path absoluto para que Vercel las resuelva correctamente
app.use('/api/products',  require(path.join(__dirname, 'api/products')));
app.use('/api/users',     require(path.join(__dirname, 'api/users')));
app.use('/api/orders',    require(path.join(__dirname, 'api/orders')));
app.use('/api/cart',      require(path.join(__dirname, 'api/cart')));
app.use('/api/reviews',   require(path.join(__dirname, 'api/reviews')));
app.use('/api/analytics', require(path.join(__dirname, 'api/analytics')));
 
// Health check
app.get('/', (req, res) => res.json({ status: 'BarkedShop API running 🛍️' }));
 
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`BarkedShop API on port ${PORT}`));
}
 
module.exports = app;