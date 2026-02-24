const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const pool = mysql.createPool({
	host: process.env.DB_HOST || 'localhost',
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASS || 'Asd.123*',
	database: process.env.DB_NAME || 'Oficina',
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});

app.post('/query', async (req, res) => {
	const { sql } = req.body;
	if (typeof sql !== 'string' || sql.trim() === '') return res.status(400).json({ error: 'Se requiere una consulta SQL en el cuerpo como { sql: "..." }' });
	try {
		const [rows, fields] = await pool.query(sql);
		res.json({ rows, fields });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));