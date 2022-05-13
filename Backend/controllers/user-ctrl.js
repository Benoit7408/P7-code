const mysql = require("mysql");
const connectionDB = require("../config/db");
const User = require("../model/user-model");
const util = require("util");

//const nodemailer = require("nodemailer");

connectionDB.getConnection(function (err) {
  if (err) throw err;
  console.log("connection a la base");
});

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const query = util.promisify(connectionDB.query).bind(connectionDB);
//const createError = require("http-errors");

exports.signup = async function (req, res) {
  const hash = await bcrypt.hash(req.body.password, 10);
  const quadri = await query(
    `select concat (substr(?,1,2), substr(?,1,2)) as quadri`,
    [req.body.first_name, req.body.last_name]
  );
  
  
    
  const user = new User({
    quadri: quadri[0].quadri,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: hash,
    bio: "",
    avatar: "",
    isAdmin: "",
    isActive: true,
  });

  User.create(user, (err, data) => {
    
    if (err) {
      return res.status(400).json({ message: "utilisateur non crée" });
    }
    res.send("utilisateur crée");
  });
};

exports.login = function (req, res) {
  User.findOneByQuadri(req.body.quadri, (err, data) => {
    if (err) {
      return res.status(400).json({ message: "utilisateur non trouvé" });
    } else if (data.length == []) {
      return res.status(404).json({ message: "Aucun compte" });
    }
    console.log (data[0].users_password)
    
  bcrypt
    .compare(req.body.password, data[0].users_password)
    .then((CheckPassOk) => {
     
      if (!CheckPassOk) {
        return res
          .status(401)
          .json({ message: "Votre  mot de passe est incorrecte" });
      }

      res.status(200).json({ message: "utilisateur ok",
        token: jwt.sign({ userId: req.body.quadri }, process.env.secretkey),
      });
    })
    .catch(function (error) {
      res.status(500).json({ error });
    });
  });
};

