const express = require("express");
require("dotenv").config();
const { connect } = require("./config/database");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());

// ✅ CRITICAL FIX: CORS with PATCH method enabled
app.use(
  cors({
    origin: "http://localhost:5175",  // Your frontend port
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const userConnectionsRouter = require("./routes/userConnections");
const requestsRouter = require("./routes/requests");
const userRouter = require("./routes/user");

// ✅ CRITICAL FIX: Added /api prefix to all routes
app.use("/api", authRouter);
app.use("/api", profileRouter);
app.use("/api", userConnectionsRouter);
app.use("/api", requestsRouter);
app.use("/api", userRouter);

connect()
  .then(() => {
    app.listen(3000, () => {
      console.log("✅ Server running on port 3000");
      console.log("✅ CORS enabled for http://localhost:5175");
    });
  })
  .catch((err) => {
    console.log("❌ Error:", err);
  });