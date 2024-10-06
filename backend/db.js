const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
const port = 3001;
app.use(cors());

async function getData(query) {
  const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "goku67",  // Add your database password here
    database: "postgres",
  });

  try {
    await client.connect();
    const result = await client.query(query);
    return result.rows;
  } catch (err) {
    console.error("Error fetching data:", err.message);
    return [];
  } finally {
    await client.end();
  }
}

app.get('/users', async (req, res) => {
  const query = 'SELECT * FROM users';
  const data = await getData(query);
  res.json(data);  // Send fetched data to frontend
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
