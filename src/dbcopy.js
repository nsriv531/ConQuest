const { Client } = require("pg");

async function getData(query) {
  const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "",
    database: "postgres",
  });

  // client.query(`SELECT * FROM Users`, (err, res) => {
  //   if (!err) {
  //     console.log(res.rows);
  //   } else {
  //     console.log(err.message);
  //   }
  //   client.end;
  // });
  try {
    await client.connect();
    const result = await client.query(query);

    return result.rows;
  } catch (err) {
    console.error("error", err.message);
  } finally {
    await client.end();
  }
}

export { getData };
