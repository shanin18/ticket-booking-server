const express = require("express");
const bookingController = require("../controllers/bookingController");
const authMiddleware = require("../middleware/authMiddleware");

const bookingRoutes = (db) => {
  const router = express.Router();
  const { getBookings, getMyBookings, createBooking } = bookingController(db);

  router.get("/:eventId", getBookings);
  router.get("/email/:email", getMyBookings);
  router.post("/", authMiddleware, createBooking);

  return router;
};

module.exports = bookingRoutes;
