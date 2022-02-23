const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "groupomania",
});

connection.connect();

const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
//const createError = require("http-errors");

exports.signup = function (req, res) {
  if (
    req.body.first_name &&
    req.body.last_name &&
    req.body.email &&
    req.body.password &&
    req.body.vpassword
    //faire fonction regex passwordet check identique = 1
  ) {
    bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
        connection.query(
          `insert into signup (signup_first_name,signup_last_name,signup_email,signup_password,signup_vpassword,signup_quadri) Values ("${req.body.first_name}","${req.body.last_name}","${req.body.email}","${hash}","${req.body.vpassword}",concat (substr("${req.body.first_name}",1,2), substr("${req.body.last_name}",1,2)))`,
          function (err, result, fields) {
            if (err) throw err;
            connection.query(
              `select signup_quadri from signup where signup_last_name = '${req.body.last_name}'`,
              function (err, result, fields) {
                if (err) throw err;
                console.log(result);
                return res.status(201).json({
                  message:
                    "Utilisateur crée, veuillez conservé l'information suivante : ",
                  quadri: result,
                });
              }
            );
          }
        );
      })
      .catch(function (err) {
        res.status(500).json({ error });
      });
  }
};
exports.login = function (req, res) {
  if (req.body.quadri && req.body.password) {
    connection.query(
      `select signup_quadri from signup where signup_quadri = '${req.body.quadri}'`,
      function (err, result, fields) {
        if (err) throw err;
        else if (req.body.quadri === result[0].signup_quadri) {
          connection.query(
            `select signup_password from signup where signup_quadri = '${req.body.quadri}'`,
            function (err, result, fields) {
              if (err) throw err;

              bcrypt
                .compare(req.body.password, result[0].signup_password)
                .then((CheckPassOk) => {
                  console.log(result[0].signup_password);
                  console.log(req.body.password)
                  console.log(CheckPassOk)
                  if (CheckPassOk) {
                    return res.status(200).json("ok" );
                  }
                })
                .catch(function (err) {
                  res.status(500).json({ error });
                });
            }
          );
        }
      }
    );
  }
};
