const express = require('express');
const router = express.Router();
const { sql } = require('@vercel/postgres');

// GET /api/products
router.get('/', async (req, res) => {
    const { category, q } = req.query;

    try {
        let query = sql`SELECT * FROM products`; // Consulta base

        // Si necesitas agregar filtros dinámicos (categoría o búsqueda)
        if (category) {
            query = sql`SELECT * FROM products WHERE category_id = (SELECT id FROM categories WHERE slug = ${category})`;
        } else if (q) {
            query = sql`SELECT * FROM products WHERE name ILIKE ${'%' + q + '%'}`;
        }

        const { rows } = await query;
        
        res.json({
            total: rows.length,
            data: rows
        });
    } catch (error) {
        console.error("Error en BD:", error);
        res.status(500).json({ error: 'Error al conectar con la base de datos' });
    }
});

module.exports = router;