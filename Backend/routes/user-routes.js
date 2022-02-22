const express = require("express");
const router = express.Router();

// Controllers

const userCtrl = require("../controllers/user-ctrl");

//route suivi de middleware et de controler

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
