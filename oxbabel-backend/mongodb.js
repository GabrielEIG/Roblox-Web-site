const mongoose = require('mongoose');
const dotenv = require('dotenv');


// Carga las variables de entorno de .env en process.env
dotenv.config();

//Aqui nesecitas colocar el link de tu base de datos mongodb y luego anadir los datos segun los models o schemas
const dbURI = process.env.URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000})
  .then(() => console.log("Conexion exitosa a la base de datos"))
  .catch((err) => console.log(err));

const mongodb = mongoose.connection

module.exports = mongodb;