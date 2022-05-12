const express = require("express");
const router = express.Router();

const allInfoCtrl = require("../controllers/allInfo-ctrl");
const auth = require("../middleware/auth");


router.get("/news", auth, allInfoCtrl.getAllInfo);


module.exports = router;