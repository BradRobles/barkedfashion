const express = require('express');
const router  = express.Router();
const { neon } = require('@neondatabase/serverless');
 
const sql = neon(process.env.DATABASE_URL);
 
// GET /api/orders
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
 
// POST /api/orders
router.post('/', async (req, res) => {
  const { items, shipping_addr } = req.body;
 
  if (!items || !items.length) {
    return res.status(400).json({ error: 'No items in order' });
  }
 
  try {
    // Calcular total consultando precio real de cada producto
    let total = 0;
    const itemsWithPrice = [];
 
    for (const item of items) {
      const rows = await sql`SELECT price FROM products WHERE id = ${item.product_id}`;
      const unitPrice = rows.length > 0 ? Number(rows[0].price) : 0;
      const qty = item.qty || 1;
      total += unitPrice * qty;
      itemsWithPrice.push({ product_id: item.product_id, qty, unitPrice });
    }
 
    // Insertar la orden con el total calculado
    const result = await sql`
      INSERT INTO orders (total, status, shipping_addr)
      VALUES (${total}, 'pending', ${shipping_addr || ''})
      RETURNING id
    `;
 
    const newOrderId = result[0].id;
 
    // Insertar cada item en order_items
    for (const item of itemsWithPrice) {
      await sql`
        INSERT INTO order_items (order_id, product_id, quantity, unit_price)
        VALUES (${newOrderId}, ${item.product_id}, ${item.qty}, ${item.unitPrice})
      `;
    }
 
    res.status(201).json({ message: 'Order created', orderId: newOrderId });
  } catch (error) {
    console.error("Error al crear la orden:", error);
    res.status(500).json({ error: 'Error en la base de datos' });
  }
});
 
module.exports = router;