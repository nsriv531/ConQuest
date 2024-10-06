const express = require('express');
const { Pool } = require('pg'); // PostgreSQL client for Node.js
const bcrypt = require('bcrypt'); // For password hashing
const app = express();

app.use(express.json()); // To parse JSON

// PostgreSQL connection pool
const pool = new Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'your-database',
  password: 'your-password',
  port: 5432,
});

// API route for user sign-up
app.post('/api/signup', async (req, res) => {
  const { username, password, bio, urlImage } = req.body; // Only the fields we need

  try {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the PostgreSQL database
    const insertUserQuery = `
      INSERT INTO users (username, password, bio, url_image)
      VALUES ($1, $2, $3, $4) RETURNING id
    `;
    
    // Execute the query with the actual data
    const result = await pool.query(insertUserQuery, [username, hashedPassword, bio, urlImage]);

    // Retrieve the new user's ID
    const userId = result.rows[0].id;

    // Respond with success message
    res.status(201).json({ message: 'User created successfully', userId });
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server running on port 3001');
});
