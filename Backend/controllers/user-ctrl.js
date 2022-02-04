const mysql = require("mysql");

exports.signup = function (req, res) {
  if (
    req.body.first_name &&
    req.body.last_name &&
    req.body.email &&
    req.body.password &&
    req.body.vpassword
  ) {
    connection.query(
      `insert into signup (first_name,last_name,email,password,vpassword) Values ("${req.body.first_name}","${req.body.last_name}","${req.body.email}","${req.body.password}","${req.body.vpassword}")`,
      function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      }
    );
    console.log(req.body.first_name);
    res.status(200).send("requete recu");
  }
};

exports.login = function (req, res) {
  if (req.body.quadri && req.body.password) {
    res.status(200).send("ok");
  }
};
