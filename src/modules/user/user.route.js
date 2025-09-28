const express = require("express");
const userController = require("./user.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const router = express.Router();

router.post("/register", userController.registerHandler);
router.post("/login", userController.loginHandler);
router.get("/", authMiddleware, userController.getUsersHandler);

module.exports = router;
