const Referral = require("../models/Referral");
const User = require("../models/User");

exports.getReferrals = async(req, res) => {
    try {
        const referrals = await Referral.find({ referrerId: req.user.id }).populate("referredUserId");
        res.json(referrals);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.getReferralStats = async(req, res) => {
    try {
        const count = await Referral.countDocuments({ referrerId: req.user.id });
        res.json({ totalReferrals: count });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};