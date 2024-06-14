const userModel = (db) => {
  const collection = db.collection("users");

  const findUserByEmail = async (email) => {
    return await collection.findOne({ email });
  };

  const createUser = async (user) => {
    return await collection.insertOne(user);
  };

  return {
    findUserByEmail,
    createUser,
  };
};

module.exports = userModel;
