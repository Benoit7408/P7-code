const express = require('express');
const router = express.Router();

const likeCtrl= require("../controllers/likes-ctrl");

const auth = require("../middleware/auth");


router.post("/:id/like",likeCtrl.like);

module.exports = router;