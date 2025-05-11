const express = require("express");
const router = express.Router();
const passport = require("passport");
const { googleCallback } = require("../controllers/authController");

// Google OAuth
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleCallback
);

module.exports = router;
