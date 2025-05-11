const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: [true, "Customer ID is required"],
  },
  amount: {
    type: Number,
    required: [true, "Order amount is required"],
    min: 0,
  },
  items: [
    {
      product: String,
      price: Number,
      quantity: Number,
    },
  ],
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
