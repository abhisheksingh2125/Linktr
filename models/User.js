const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    referralCode: { type: String, unique: true },
    referredBy: { type: String, default: null },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);