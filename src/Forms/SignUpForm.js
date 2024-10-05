const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());

const pool = new Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'your-database',
  password: 'your-password',
  port: 5432,
});

// API route for sign-up
app.post('/api/signup', async (req, res) => {
  const { username, password, bio, urlImage } = req.body;

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user data into the database
    const insertUserQuery = `
      INSERT INTO users (username, password, bio, url_image)
      VALUES ($1, $2, $3, $4) RETURNING id
    `;
    const result = await pool.query(insertUserQuery, [username, hashedPassword, bio, urlImage]);
    const userId = result.rows[0].id;

    res.status(201).json({ message: 'User created successfully', userId });
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
