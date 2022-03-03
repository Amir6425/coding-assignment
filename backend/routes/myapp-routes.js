const express = require("express");
const router = express.Router();
const myAppController = require("../controllers/myapp-controller")

router.get("/numbers/:numbers", myAppController.sumAndCheck)
router.get("/number/:number", myAppController.checkPrime)
// router.get("*", myAppController.notFound)

module.exports = router;