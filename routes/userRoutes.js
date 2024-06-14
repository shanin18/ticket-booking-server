const express = require("express");
const userController = require("../controllers/userController");

const userRoutes = (db) => {
  const router = express.Router();
  const { registerUser, loginUser } = userController(db);

  router.post("/register", registerUser);
  router.post("/login", loginUser);

  return router;
};

module.exports = userRoutes;
