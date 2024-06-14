const { ObjectId } = require("mongodb");

const bookingModel = (db) => {
  const collection = db.collection("bookings");

  const findBookingsByEventId = async (eventId) => {
    try {
      const booking = await collection.findOne({ _id: new ObjectId(eventId) });
      return booking;
    } catch (error) {
      console.error("Error in findBookingsByEventId:", error);
      throw error; // Rethrow the error to handle it in the controller
    }
  };

  const findBookingsByEmail = async (email) => {
    return await collection.find({ email }).toArray();
  };

  const createBooking = async (booking) => {
    try {
      return await collection.insertOne(booking);
    } catch (error) {
      console.error("Error in createBooking:", error);
      throw error; // Rethrow the error to handle it in the controller
    }
  };

  return {
    findBookingsByEventId,
    findBookingsByEmail,
    createBooking,
  };
};

module.exports = bookingModel;
