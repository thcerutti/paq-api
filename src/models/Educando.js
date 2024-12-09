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
  criar: async ({ nome, unidade, trilha, inicio }) => {
    try {
      await client.connect();
      const res = await client
        .db(process.env.MONGO_DB_DATABASE)
        .collection("educando")
        .insertOne({
          nome,
          unidade,
          trilha,
          inicio: new Date(inicio),
        });
      return res.insertedId;
    } finally {
      await client.close();
    }
  },
  atualizar: async ({ id, nome, unidade, trilha, inicio }) => {
    const dataToUpdate = {};
    nome && (dataToUpdate.nome = nome);
    unidade && (dataToUpdate.unidade = unidade);
    trilha && (dataToUpdate.trilha = trilha);
    inicio && (dataToUpdate.inicio = new Date(inicio));
    try {
      await client.connect();
      const res = await client
        .db(process.env.MONGO_DB_DATABASE)
        .collection("educando")
        .updateOne(
          { _id: ObjectId.createFromHexString(id) },
          {
            $set: dataToUpdate,
          }
        );
      return res.modifiedCount > 0;
    } finally {
      await client.close();
    }
  },
  deletar: async (id) => {
    try {
      await client.connect();
      const res = await client
        .db(process.env.MONGO_DB_DATABASE)
        .collection("educando")
        .deleteOne({ _id: ObjectId.createFromHexString(id) });
      return res.deletedCount > 0;
    } finally {
      await client.close();
    }
  },
};

module.exports = Educando;
