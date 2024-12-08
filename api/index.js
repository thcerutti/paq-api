const express = require("express");
const app = express();
const educandosRouter = require("./educando");

app.get("/", (_, res) => {
  res.send({ message: "Bem vindo a API do PAQ" });
});

app.use("/educando", educandosRouter);

const port = 3001;
app.listen(port, () => {
  console.log(`listening port ${port}`);
});

module.exports = app;
