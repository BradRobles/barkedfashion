// backend/api/reviews.js
const express = require('express');
const router  = express.Router();
const { neon } = require('@neondatabase/serverless');

// Conexión a Neon usando la variable de entorno
const sql = neon(process.env.DATABASE_URL);

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