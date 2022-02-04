const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

const userRoutes = require("./routes/user-route");

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "groupomania",
});

module.exports = connection;

app.use("/api/auth", userRoutes);

module.exports = app;
