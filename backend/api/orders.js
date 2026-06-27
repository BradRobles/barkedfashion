const express = require('express');
const router  = express.Router();
const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

router.get('/', async (req, res) => {
  const userId = 1;
  try {
    const rows = await sql`SELECT * FROM orders WHERE user_id = ${userId}`;
    res.json({ message: 'Orders retrieved', data: rows });
  } catch (error) {
    console.error("Error al obtener órdenes:", error);
    res.status(500).json({ error: 'Error en la base de datos' });
  }
});

router.post('/', async (req, res) => {
  const { items, shipping_addr, user_id } = req.body;
  if (!items || !items.length) return res.status(400).json({ error: 'No items in order' });

  try {
    const result = await sql`
      INSERT INTO orders (user_id, status)
      VALUES (${user_id}, 'pending')
      RETURNING id
    `;
    res.status(201).json({ message: 'Order created', orderId: result[0].id });
  } catch (error) {
    console.error("Error al crear la orden:", error);
    res.status(500).json({ error: 'Error en la base de datos' });
  }
});

module.exports = router;
