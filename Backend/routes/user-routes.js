const express = require("express");
const router = express.Router();


// Controllers

const userCtrl = require("../controllers/user-ctrl");
const password = require("../middleware/password");
const email = require("../middleware/email");
const input = require ("../middleware/regex-input");
//const info = require("../middleware/node-mailer");

//route suivi de middleware et de controler

router.post("/signup", email ,password,userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
