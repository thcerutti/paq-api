const express = require("express");
const app = express();
const educandosRouter = require("./educando");

app.get("/", (req, res) => {
  res.send("Hello world");
});

/**
 * @swagger
 * /withQuery:
 *   get:
 *     summary: Returns a greeting message
 *     responses:
 *       200:
 *         description: A greeting message
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Hello world
 *
 */
app.get("/withQuery", (req, res) => {
  res.send({
    route: "withQuery",
    query: req.query,
  });
});

/**
 * @swagger
 * /withParams/{id}:
 *   get:
 *     summary: Get with Params
 *     description: Returns a route with params
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             route:
 *               type: string
 *             query:
 *               type: object
 */
app.get("/withParams/:id", (req, res) => {
  res.send({
    route: "withParams",
    query: req.params,
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`listening port ${port}`);
});

app.use("/educando", educandosRouter);

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../swaggerConfig");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
