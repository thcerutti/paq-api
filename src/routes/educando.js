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

router.post("/criar", async (req, res) => {
  const id = await Educando.criar({
    nome: req.body.nome,
    unidade: req.body.unidade,
    trilha: req.body.trilha,
    inicio: req.body.inicio,
  });
  res.status(201).send({ message: `Educando ${id} criado com sucesso` });
});

router.put("/:id", (req, res) => {
  const atualizado = Educando.atualizar({
    id: req.params.id,
    nome: req.body.nome,
    unidade: req.body.unidade,
    trilha: req.body.trilha,
    inicio: req.body.inicio,
  });
  atualizado
    ? res.send({ message: "Educando atualizado com sucesso" })
    : res.status(404).send({ message: "Educando não encontrado" });
});

router.delete("/:id", (req, res) => {
  const apagado = Educando.deletar(req.params.id);
  apagado
    ? res.send({ message: "Educando apagado com sucesso" })
    : res.status(404).send({ message: "Educando não encontrado" });
});

module.exports = router;
