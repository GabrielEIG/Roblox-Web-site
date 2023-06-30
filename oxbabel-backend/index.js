const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); 
const router = require('./routes/route');
const mongodb = require('./mongodb.js');
const dotenv = require('dotenv');

// Carga las variables de entorno de .env en process.env
dotenv.config();

//APP server
const app = express()

//Server port
const port = process.env.PORT

//Confing
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

//Routes
app.use('/api/',router)

//Call server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
