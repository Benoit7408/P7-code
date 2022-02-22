const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

const userRoutes = require("./routes/user-routes");
const newsRoutes = require("./routes/news-routes");




app.use("/api/auth", userRoutes);

app.use("/api/news",newsRoutes)

module.exports = app;
