
const paymentModel = (db) => {
  const collection = db.collection("payments");

  const createPayment = async (payment) => {
    return await collection.insertOne(payment);
  };

  return {
    createPayment,
  };
};

module.exports = paymentModel;
