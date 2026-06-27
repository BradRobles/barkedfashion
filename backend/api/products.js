const express = require('express');
const router  = express.Router();
const { neon } = require('@neondatabase/serverless');

// Conexión a Neon usando la variable de entorno
const sql = neon(process.env.DATABASE_URL);

// GET /api/products
router.get('/', async (req, res) => {
    const { category, q, limit = 30 } = req.query;

    try {
        let rows;

        if (category) {
            rows = await sql`
                SELECT p.* FROM products p
                JOIN categories c ON p.category_id = c.id
                WHERE c.slug = ${category}
                AND p.is_active = TRUE
                LIMIT ${parseInt(limit)}
            `;
        } else if (q) {
            rows = await sql`
                SELECT * FROM products
                WHERE name ILIKE ${'%' + q + '%'}
                AND is_active = TRUE
                LIMIT ${parseInt(limit)}
            `;
        } else {
            rows = await sql`
                SELECT * FROM products
                WHERE is_active = TRUE
                LIMIT ${parseInt(limit)}
            `;
        }

        res.json({ total: rows.length, data: rows });
    } catch (error) {
        console.error("Error en BD products:", error);
        res.status(500).json({ error: 'Error al conectar con la base de datos' });
    }
});

module.exports = router;
