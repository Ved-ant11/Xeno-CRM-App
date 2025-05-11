const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth");
const { getLogs } = require("../controllers/logController");

router.get("/", authenticate, getLogs);

module.exports = router;
