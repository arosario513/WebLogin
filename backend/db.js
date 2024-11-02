process.loadEnvFile("../.env");

const { createConnection } = require("mysql2");

const conn = createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: "userdb",
});

conn.connect((err) => {
  if (err) {
    console.error("Could not connect to database", err.stack);
  }
  console.log("Connected to database as ", conn.threadId);
});

module.exports = conn;
