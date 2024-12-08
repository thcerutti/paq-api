const express = require("express");
const router = express.Router();

router.get("/todos", (_, res) => {
  res.send([
    { id: 1, nome: "João", unidade: "SC401", trilha: "Programação" },
    { id: 2, nome: "Maria", unidade: "SC401", trilha: "Programação" },
    { id: 3, nome: "Pedro", unidade: "Pedra Branca", trilha: "Design" },
  ]);
});

router.get("/:id", (req, res) => {
  res.send({
    id: req.params.id,
    nome: "João",
    unidade: "SC401",
    trilha: "Programação",
  });
});

router.post("/conquista", (_, res) => {
  res.status(201).send({ message: "Conquista cadastrada com sucesso" });
});

module.exports = router;
