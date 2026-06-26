// backend/api/orders.js
const express = require('express');
const router  = express.Router();
const { sql } = require('@vercel/postgres');

// GET /api/orders (user's orders)
router.get('/', async (req, res) => {
  // Simulando que el usuario logueado tiene el ID 1 (esto vendría del JWT)
  const userId = 1; 

  try {
    const { rows } = await sql`SELECT * FROM orders WHERE user_id = ${userId}`;
    res.json({ message: 'Orders retrieved', data: rows });
  } catch (error) {
    console.error("Error al obtener órdenes:", error);
    res.status(500).json({ error: 'Error en la base de datos' });
  }
});

// POST /api/orders
router.post('/', async (req, res) => {
  const { items, shipping_addr, user_id } = req.body; // Suponemos que envían el user_id
  
  if (!items || !items.length) {
    return res.status(400).json({ error: 'No items in order' });
  }
  
  try {
    // 1. Crear la orden principal y obtener el ID generado (RETURNING id)
    const orderResult = await sql`
      INSERT INTO orders (user_id, status) 
      VALUES (${user_id}, 'pending') 
      RETURNING id
    `;
    
    const newOrderId = orderResult.rows[0].id;

    // 2. Aquí podrías agregar la lógica para insertar cada "item" en una tabla de detalles de orden (order_items)
    
    res.status(201).json({ message: 'Order created', orderId: newOrderId });
  } catch (error) {
    console.error("Error al crear la orden:", error);
    res.status(500).json({ error: 'Error en la base de datos' });
  }
});

module.exports = router;