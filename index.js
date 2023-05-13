const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("bubu form node");
});

// Data
const coffee = require("./data/coffee.json");

app.get("/coffees", (req, res) => {
  res.send(coffee);
});

app.listen(port, () => {
  console.log(`listening from ${port}`);
});
