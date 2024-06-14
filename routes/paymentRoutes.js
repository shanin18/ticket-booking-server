const express = require("express");
const paymentController = require("../controllers/paymentController");

const paymentRoutes = (db) => {
  const router = express.Router();
  const { processPayment } = paymentController(db);

  router.post("/", processPayment);

  return router;
};

module.exports = paymentRoutes;
