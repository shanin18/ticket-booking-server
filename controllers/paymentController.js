const paymentController = (db) => {
  const Payment = require("../models/paymentModel")(db);

  const processPayment = async (req, res) => {
    const payment = req.body;
    const newPayment = await Payment.createPayment(payment);
    res.status(201).json(newPayment);
  };

  return {
    processPayment,
  };
};

module.exports = paymentController;
