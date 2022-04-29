const express = require("express");
const router = express.Router();

// Controllers

const newsCtrl = require("../controllers/news-ctrl");
const auth = require("../middleware/auth");

//route suivi de middleware et de controler

router.get("/all", newsCtrl.getAllNews);
router.get("/user/:quadri", newsCtrl.getAllNewsThisUser);
router.put("/user/message/:id", newsCtrl.updateOneNews);
router.post("/post", newsCtrl.postNews);
router.delete("/user/message/:id", newsCtrl.deleteNews);




module.exports = router;
