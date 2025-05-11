const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Customer name is required"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email format" ]
  },
  totalSpend: {
    type: Number,
    default: 0,
    min: 0
  },
  totalVisits: {
    type: Number,
    default: 0,
    min: 0
  },
  lastActive: {
    type: Date,
    default: Date.now()
  },
  tags: {
    type: [String],
    default: []
  }
});

module.exports = mongoose.model("Customer", customerSchema);