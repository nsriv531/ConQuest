const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',         // default superuser unless you created a different one
  host: 'localhost',        // or the remote IP/host of your PostgreSQL server
  database: 'your_database_name',
  password: 'your_password', // the password you set during PostgreSQL installation
  port: 5432,               // default PostgreSQL port
});

module.exports = pool;
