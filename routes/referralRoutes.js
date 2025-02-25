const express = require("express");
const { getReferrals, getReferralStats } = require("../controllers/referralController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/referrals", authMiddleware, getReferrals);
router.get("/referral-stats", authMiddleware, getReferralStats);

module.exports = router;