const express = require('express');
const router  = express.Router();
const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

// POST /api/analytics
router.post('/', async (req, res) => {
  const metrics = req.body;

  try {
    await sql`
      INSERT INTO analytics (session_id, timestamp, duration_seconds, pages_count, search_queries_count)
      VALUES (
        ${metrics.sessionId},
        ${metrics.timestamp},
        ${metrics.durationSeconds},
        ${metrics.pagesCount},
        ${metrics.searchQueriesCount}
      )
    `;
    res.status(204).end();
  } catch (error) {
    console.error("Error guardando telemetría:", error);
    res.status(500).json({ error: 'Error al conectar con la base de datos' });
  }
});

module.exports = router;
