require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const educandosRouter = require("../src/routes/educando");

app.get("/", (_, res) => {
  res.send({ message: "Bem vindo a API do PAQ" });
});

app.use(bodyParser.json());
app.use("/educando", educandosRouter);

const port = 3001;
app.listen(port, () => {
  console.log(`listening port http://localhost:${port}`);
});

module.exports = app;
