const bookingController = (db) => {
  const Booking = require("../models/bookingModel")(db);

  const getBookings = async (req, res) => {
    const { eventId } = req.params;
    const bookings = await Booking.findBookingsByEventId(eventId);
    res.status(200).json(bookings);
  };

  const getMyBookings = async (req, res) => {
    const { email } = req.params;
    try {
      const myBookings = await Booking.findBookingsByEmail(email);
      res.status(200).json(myBookings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  const createBooking = async (req, res) => {
    const booking = req.body;
    const newBooking = await Booking.createBooking(booking);
    res.status(201).json(newBooking);
  };

  return {
    getBookings,
    getMyBookings,
    createBooking,
  };
};

module.exports = bookingController;
