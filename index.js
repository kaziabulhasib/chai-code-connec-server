import express from "express";

// const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("app is running");
});

app.get("/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "A joke", content: "This is a joke" },
    { id: 2, title: "Another joke", content: "This is another joke" },
    { id: 3, title: "Funny joke", content: "This is a funny joke" },
    { id: 4, title: "Random joke", content: "This is a random joke" },
    { id: 5, title: "Silly joke", content: "This is a silly joke" },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
