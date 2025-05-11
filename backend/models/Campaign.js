const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rules: { type: mongoose.Schema.Types.Mixed },
  audienceSize: Number,
  status: {
    type: String,
    enum: ["draft", "scheduled", "sent"],
    default: "draft",
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Campaign", CampaignSchema);
