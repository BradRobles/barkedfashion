const express = require('express');
const router  = express.Router();
const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

router.get('/', async (req, res) => {
  const userId = 1;
  try {
    const rows = await sql`SELECT * FROM cart_items WHERE user_id = ${userId}`;
    res.json({ message: 'Cart retrieved', items: rows });
  } catch (error) {
    console.error("Error obteniendo carrito:", error);
    res.status(500).json({ error: 'Error en la base de datos' });
  }
});

router.post('/add', async (req, res) => {
  const { product_id, quantity } = req.body;
  const userId = 1;
  try {
    await sql`
      INSERT INTO cart_items (user_id, product_id, quantity)
      VALUES (${userId}, ${product_id}, ${quantity})
    `;
    res.status(201).json({ message: 'Item added to cart' });
  } catch (error) {
    console.error("Error agregando al carrito:", error);
    res.status(500).json({ error: 'Error en la base de datos' });
  }
});

router.delete('/:itemId', async (req, res) => {
  const { itemId } = req.params;
  const userId = 1;
  try {
    await sql`DELETE FROM cart_items WHERE id = ${itemId} AND user_id = ${userId}`;
    res.json({ message: 'Item removed' });
  } catch (error) {
    console.error("Error eliminando del carrito:", error);
    res.status(500).json({ error: 'Error en la base de datos' });
  }
});

module.exports = router;
