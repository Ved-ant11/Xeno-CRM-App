const mongoose = require("mongoose");

const communicationLogSchema = new mongoose.Schema({
  campaignId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Campaign",
    required: [true, "Campaign ID is required"],
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: [true, "Customer ID is required"],
  },
  status: {
    type: String,
    enum: ["sent", "failed"],
    required: [true, "Status is required"],
  },
  message: String, 
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CommunicationLog", communicationLogSchema);
