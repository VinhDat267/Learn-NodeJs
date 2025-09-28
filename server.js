// server.js
require("dotenv").config();
const express = require("express");

// Import routers
const dashboardRoutes = require("./src/modules/dashboard/dashboard.route");
const userRoutes = require("./src/modules/user/user.route");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server BFF đang chạy tại http://localhost:${PORT}`);
});
