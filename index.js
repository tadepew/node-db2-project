const db = require("./data/dbConfig");

const express = require("express");

const server = express();

server.use(express.json());

server.get("", (req, res) => {
  res.send("<h1>Car Sales Server Running</h1>");
});

server.post("/api/cars", (req, res) => {
  db("cars")
    .insert(req.body)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({ error: "Couldn't POST car" });
    });
});

server.get("/api/cars", (req, res) => {
  db("cars")
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      console.log("error", err);
      res.status(500).json({ message: "Couldn't GET cars" });
    });
});

const port = 5000;

server.listen(port, () => {
  console.log("Server running on port", port);
});
