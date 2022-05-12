const express = require("express");
const app = express();



const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
//routes

const userRoutes = require("./routes/user-routes");
const newsRoutes = require("./routes/news-routes");
const likesRoutes = require("./routes/likes-routes");
const commentsRoutes = require("./routes/comments-routes");
const allInfoRoutes = require("./routes/allInfo-routes")


app.use("/images/news",express.static(path.join(__dirname,"images/news")))

app.use("/api", allInfoRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/news",commentsRoutes);
app.use("/api/news",likesRoutes);
app.use("/api/news",newsRoutes);






module.exports = app;
