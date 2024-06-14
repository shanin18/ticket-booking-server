const eventController = (db) => {
  const Event = require("../models/eventModel")(db);

  const getEvents = async (req, res) => {
    const events = await Event.findAllEvents();
    res.status(200).json(events);
  };

  const getEvent = async (req, res) => {
    const { id } = req.params;
    const event = await Event.findEventById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  };

  const createEvent = async (req, res) => {
    const event = req.body;
    const newEvent = await Event.createEvent(event);
    res.status(201).json(newEvent);
  };

  return {
    getEvents,
    getEvent,
    createEvent,
  };
};

module.exports = eventController;
