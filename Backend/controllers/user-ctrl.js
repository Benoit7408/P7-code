const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "groupomania",
});

connection.connect();

//const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
//const createError = require("http-errors");

exports.signup = function (req, res) {
  if (
    req.body.first_name &&
    req.body.last_name &&
    req.body.email &&
    req.body.password &&
    req.body.vpassword
  ) {
    connection.query(
      `insert into signup (signup_first_name,signup_last_name,signup_email,signup_password,signup_vpassword,signup_quadri) Values ("${req.body.first_name}","${req.body.last_name}","${req.body.email}","${req.body.password}","${req.body.vpassword}",concat (substr("${req.body.first_name}",1,2), substr("${req.body.last_name}",1,2)))`,
      function (err, result, fields) {
        if (err) throw err })
        connection.query(
        `select signup_quadri from signup where signup_first_name = '${req.body.first_name}'`,function(err, result, fields){
          if (err) throw err;
    
        return res.status(201).json({
          quadri: result
        });
      })
    
  }
};
exports.login = function (req, res) {
  if (req.body.quadri && req.body.password) {
    res.status(200).send("ok");
  }
};
