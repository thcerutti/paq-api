const express = require("express");
const router = express.Router();
const Educando = require("../models/Educando");

router.get("/todos", async (_, res) => {
  const educandos = await Educando.listarTodos();
  educandos
    ? res.send(educandos)
    : res.status(404).send({ message: "Nenhum educando encontrado" });
});

router.get("/:id", async (req, res) => {
  const educando = await Educando.buscarPorId(req.params.id);
  educando
    ? res.send(educando)
    : res.status(404).send({ message: "Educando não encontrado" });
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
