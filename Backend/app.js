// Les dépendances
const express = require("express");
const app = express();
const path = require("path");


// Securité et log
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

//Les routes

const userRoutes = require("./routes/user-routes");
const newsRoutes = require("./routes/news-routes");
const likesRoutes = require("./routes/likes-routes");
const commentsRoutes = require("./routes/comments-routes");
const allInfoRoutes = require("./routes/allInfo-routes")

const apiLimiterCreateCount = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20, // Limit each IP to 5 create account requests per `window` (here, per hour)
  message:
    "Too many accounts created from this IP, please try again after an hour",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

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


//-------------Securise les en tete http-------------
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(xss());


//-------------Les différentes routes interne et externe( voir les middleware coorespondant ainsi que les models-------------


app.use("/images/news",express.static(path.join(__dirname,"images/news")))
app.use("/api", allInfoRoutes);
app.use("/api/auth",apiLimiterCreateCount ,userRoutes);
app.use("/api/news",commentsRoutes);
app.use("/api/news",likesRoutes);
app.use("/api/news",newsRoutes);






module.exports = app;
