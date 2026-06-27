const express = require('express');
const router  = express.Router();
const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

// POST /api/users/register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'All fields required' });

  try {
    await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${password})
    `;
    res.status(201).json({ message: 'User registered successfully', email });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ error: 'Error al conectar con la base de datos' });
  }
});

// POST /api/users/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  try {
    const rows = await sql`
      SELECT id, name, email FROM users
      WHERE email = ${email} AND password = ${password}
    `;
    if (rows.length === 0) return res.status(401).json({ error: 'Credenciales inválidas' });
    res.json({ message: 'Login successful', user: rows[0], token: 'demo-token-123' });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ error: 'Error al conectar con la base de datos' });
  }
});

module.exports = router;
