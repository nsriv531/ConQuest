const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors");
const { check, validationResult } = require("express-validator");

const pool = require("./db");

const server = express();
const port = 3001;

server.use(bodyParser.json());
server.use(cors());

server.get("/users", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT user_id, username, email FROM users"
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error retrieving users" });
  }
});

server.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const sql = "SELECT * FROM users WHERE username = $1 OR email = $2";
    const values = [username, email];

    const userCheck = await pool.query(sql, values);
    if (userCheck.rows.length > 0) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const insertSql =
      "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING user_id, username, email";
    const newUserValues = [username, hashPassword, email];
    const newUser = await pool.query(insertSql, newUserValues);

    return res.status(201).json({ message: "User created sucessfully" });
  } catch (err) {
    console.error("Error during sign-up:", err.message);
    res.status(500).json({ error: "Error signing up user" });
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
