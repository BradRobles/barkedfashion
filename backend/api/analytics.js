// backend/api/analytics.js
const express = require('express');
const router  = express.Router();
const { sql } = require('@vercel/postgres');

// POST /api/analytics
router.post('/', async (req, res) => {
  const metrics = req.body;

  try {
    // Insertamos la telemetría en la base de datos
    await sql`
      INSERT INTO analytics (session_id, timestamp, duration_seconds, pages_count, search_queries_count)
      VALUES (${metrics.sessionId}, ${metrics.timestamp}, ${metrics.durationSeconds}, ${metrics.pagesCount}, ${metrics.searchQueriesCount})
    `;

    res.status(204).end(); // Respuesta limpia sin contenido
  } catch (error) {
    console.error("Error guardando telemetría:", error);
    res.status(500).json({ error: 'Error al conectar con la base de datos' });
  }
});

module.exports = router;