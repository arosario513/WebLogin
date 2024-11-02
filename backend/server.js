const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const { genSaltSync, hashSync, compareSync } = require("bcryptjs");
const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.send("This is the API");
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, out) => {
    if (err) {
      return res.status(500).json({ message: "Error" });
    }
    return res.status(200).json(out);
  });
});

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const checkUser = "SELECT * FROM users WHERE username = ?";
    const [data] = await db.promise().execute(checkUser, [username]);
    if (data.length > 0) {
      return res.status(400).json({ message: "Username already taken" });
    }
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(password, salt);

    const addUser = "INSERT INTO users (username, password) VALUES (?, ?)";
    await db.promise().execute(addUser, [username, hashedPassword]);

    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Error", error: err });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const getHash = "SELECT password FROM users WHERE username = ?";
    const [data] = await db.promise().execute(getHash, [username]);
    if (data.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }
    const hashedPassword = data[0].password;
    if (compareSync(password, hashedPassword)) {
      return res.status(201).json({ message: "Logged in" });
    }
    return res.status(400).json({ message: "Wrong password" });
  } catch (err) {
    return res.status(500).json({ message: "Error", error: err });
  }
});

app.get("/*", (req, res) => res.status(404).send("Page not found"));

app.listen(port, () => console.log("Listening at http://localhost:9000"));
