// src/modules/dashboard/dashboard.route.js
const express = require("express");
const dashboardController = require("./dashboard.controller");

// express.Router() là một mini-app giúp gom nhóm các route
const router = express.Router();

// Định nghĩa route GET cho đường dẫn '/' của module này
router.get("/", dashboardController.getDashboardHandler);

module.exports = router;
