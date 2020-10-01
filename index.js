const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  res.send("hello");
};
const profile = (req, res) => {
  res.send("you ar on my profile");
};

app.get("/", handleHome);
app.get("/profile", profile);
app.listen(PORT, handleListening);
