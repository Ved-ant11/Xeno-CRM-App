const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Campaign name is required"],
    trim: true,
  },
  rules: {
    operator: {
      type: String,
      enum: ["AND", "OR"],
      required: true,
    },
    conditions: [
      {
        field: { type: String, required: true }, // e.g., "totalSpend"
        operator: { type: String, required: true }, // e.g., ">", "<", "=="
        value: { type: mongoose.Schema.Types.Mixed, required: true }, // e.g., 10000
      },
    ],
  },
  status: {
    type: String,
    enum: ["draft", "sent"],
    default: "draft",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Campaign", campaignSchema);
