const express = require("express");
const app = express();

PORT = 3010;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`listeing on port no ${PORT}`);
});