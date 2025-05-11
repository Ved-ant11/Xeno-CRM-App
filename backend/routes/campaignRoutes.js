const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth");
const {
  createCampaign,
  getCampaigns,
} = require("../controllers/campaignController");

router.post("/", authenticate, createCampaign);
router.get("/", authenticate, getCampaigns);

module.exports = router;
