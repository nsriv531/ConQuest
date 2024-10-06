const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "", // Add your database password here
  database: "postgres",
});

module.exports = pool;
