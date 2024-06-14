const { ObjectId } = require("mongodb");

const eventModel = (db) => {
  const collection = db.collection("events");

  const findAllEvents = async () => {
    return await collection.find().toArray();
  };

  const findEventById = async (id) => {
    return await collection.findOne({ _id: new ObjectId(id)});
  };

  const createEvent = async (event) => {
    return await collection.insertOne(event);
  };

  return {
    findAllEvents,
    findEventById,
    createEvent,
  };
};

module.exports = eventModel;
