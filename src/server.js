require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const referralRoutes = require("./routes/referralRoutes");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", referralRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));