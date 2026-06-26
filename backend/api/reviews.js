// backend/api/reviews.js
const express = require('express');
const router  = express.Router();
const { sql } = require('@vercel/postgres');

// GET /api/reviews/:productId
router.get('/:productId', async (req, res) => {
  const { productId } = req.params;
  
  try {
    // Obtenemos todas las reseñas asociadas a ese producto
    const { rows } = await sql`SELECT * FROM reviews WHERE product_id = ${productId}`;
    res.json({ productId: productId, reviews: rows });
  } catch (error) {
    console.error("Error obteniendo reseñas:", error);
    res.status(500).json({ error: 'Error en la base de datos' });
  }
});

// POST /api/reviews
router.post('/', async (req, res) => {
  // Suponiendo que tu frontend envía también el user_id
  const { product_id, user_id, rating, comment } = req.body;
  
  if (!product_id || !rating) {
    return res.status(400).json({ error: 'product_id and rating required' });
  }
  
  try {
    await sql`
      INSERT INTO reviews (product_id, user_id, rating, comment) 
      VALUES (${product_id}, ${user_id}, ${rating}, ${comment})
    `;
    res.status(201).json({ message: 'Review submitted' });
  } catch (error) {
    console.error("Error publicando reseña:", error);
    res.status(500).json({ error: 'Error en la base de datos' });
  }
});

module.exports = router;