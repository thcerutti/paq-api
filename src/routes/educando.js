const express = require("express");
const router = express.Router();
const dbClient = require("../config/dbClient");
const { ObjectId } = require("mongodb");

router.get("/todos", (_, res) => {
  res.send([
    { id: 1, nome: "João", unidade: "SC401", trilha: "Programação" },
    { id: 2, nome: "Maria", unidade: "SC401", trilha: "Programação" },
    { id: 3, nome: "Pedro", unidade: "Pedra Branca", trilha: "Design" },
  ]);
});

router.get("/:id", async (req, res) => {
  try {
    await dbClient.connect();
    const educando = await dbClient
      .db(process.env.MONGO_DB_DATABASE)
      .collection("educando")
      .findOne({ _id: new ObjectId(req.params.id) });

    educando
      ? res.send({ nome: educando.nome })
      : res.status(404).send({ message: "Educando não encontrado" });
  } finally {
    await dbClient.close();
  }
});

router.post("/conquista", (_, res) => {
  res.status(201).send({ message: "Conquista cadastrada com sucesso" });
});

router.post("/criar", (_, res) => {
  res.status(201).send({ message: "Educando criado com sucesso" });
});

router.put("/:id", (_, res) => {
  res.send({ message: "Educando atualizado com sucesso" });
});

router.delete("/:id", (_, res) => {
  res.send({ message: "Educando deletado com sucesso" });
});

module.exports = router;
