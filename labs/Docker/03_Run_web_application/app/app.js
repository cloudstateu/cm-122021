"use strict";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ status: "ok", data: process.env });
});

// /chmurowisko?name=Joe
app.get("/chmurowisko", (req, res) => {
  const name = req.query.name;
  res.send(`Welcome to the workshop, ${name}!`);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});