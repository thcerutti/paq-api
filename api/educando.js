const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /educando/todos:
 *   get:
 *     summary: Retorna todos os educandos cadastrados
 *     tags:
 *      - Educandos
 *     responses:
 *       200:
 *         description: Lista de todos os educandos cadastrados
 *       404:
 *         description: Nenhum educando cadastrado
 */
router.get("/todos", (req, res) => {
  res.send([
    { id: 1, nome: "João", unidade: "SC401", trilha: "Programação" },
    { id: 2, nome: "Maria", unidade: "SC401", trilha: "Programação" },
    { id: 3, nome: "Pedro", unidade: "Pedra Branca", trilha: "Design" },
  ]);
});

/**
 * @swagger
 * /educando/{id}:
 *   get:
 *     summary: Busca um educando pelo id
 *     description: Retorna um educando buscando por seu respectivo id
 *     tags:
 *       - Educandos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do educando
 *     responses:
 *       200:
 *         description: Educando foi encontrado e retornado
 *       404:
 *         description: Educando não encontrado
 */
router.get("/:id", (req, res) => {
  res.send({
    id: req.params.id,
    nome: "João",
    unidade: "SC401",
    trilha: "Programação",
  });
});

module.exports = router;
