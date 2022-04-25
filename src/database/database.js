const mongoose = require('mongoose');
const url = "mongodb://0.0.0.0:27017";

function connectToDatabase() {
  mongoose
    .connect('mongodb://127.0.0.1:27017/paletas-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB CONECTADO!');
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
};

module.exports = connectToDatabase;



