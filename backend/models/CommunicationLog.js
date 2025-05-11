const mongoose = require("mongoose");

const CommunicationLogSchema = new mongoose.Schema({
  campaign: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign" },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  status: { type: String, enum: ["sent", "failed"], default: "sent" },
  message: String,
  sentAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CommunicationLog", CommunicationLogSchema);
