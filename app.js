const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/produtsRoutes");
const loggingMiddelwares = require("./middelwares/loggingsMiddelwares");

require("dotenv").config();

// Connexion à la base de données MongoDB Cloud Atlas
mongoose.connect(process.env.MONGO_URI, {dbName: "db_catalogue"})
    .then(result => app.listen(3322, () => console.log("Server is running")))
    .catch(err => console.log(err));

// Middlewares requis
app.use(express.urlencoded({extended:true}));
app.use(loggingMiddelwares.loggingParams);
