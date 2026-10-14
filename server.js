require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();

app.use(express.json());

// Conexão com o Supabase
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/sucesso', (req, res) => {
  res.sendFile(path.join(__dirname, 'sucesso.html'));
});


app.post('/clientes', async (req, res) => {
  const { nome, email } = req.body;

  try {
    const resultado = await pool.query(
      'INSERT INTO "Cliente" (nome, email) VALUES ($1, $2) RETURNING *;',
      [nome, email]
    );
    res.status(201).json(resultado.rows[0]);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
});


app.get('/clientes', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM "Cliente" ORDER BY id ASC;');
    res.json(resultado.rows);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.listen(3000, () => {
  console.log('🚀 Servidor rodando em http://localhost:3000');
});