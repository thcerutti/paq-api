const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "PAQ API",
      description: "API de dados da ong Prototipando a Quebrada",
    },
    servers: [
      {
        url: "http://localhost:3001/api-docs",
      },
      {
        url: "https://paq-api.vercel.app/api-docs",
      },
    ],
    basePath: "/",
    schemes: ["http"],
  },
  apis: ["./api/index.js", "./api/educando.js"], // Path to the API docs
};

const specs = swaggerJsdoc(options);
module.exports = specs;
