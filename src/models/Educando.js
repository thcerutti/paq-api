const client = require("../config/dbClient");
const { ObjectId } = require("mongodb");

const Educando = {
  buscarPorId: async (id) => {
    try {
      await client.connect();
      const educando = await client
        .db(process.env.MONGO_DB_DATABASE)
        .collection("educando")
        .findOne({ _id: ObjectId.createFromHexString(id) });

      return {
        id: educando._id,
        nome: educando.nome,
      };
    } finally {
      await client.close();
    }
  },
  listarTodos: async () => {
    try {
      await client.connect();
      const educandos = await client
        .db(process.env.MONGO_DB_DATABASE)
        .collection("educando")
        .find({})
        .toArray();

      return educandos.map((educando) => ({
        id: educando._id,
        nome: educando.nome,
      }));
    } finally {
      await client.close();
    }
  },
};

module.exports = Educando;
