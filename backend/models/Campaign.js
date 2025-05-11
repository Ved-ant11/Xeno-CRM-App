
const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    audience: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Audience',
      required: true,
    },
    audienceSize: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    channel: {
      type: String,
      enum: ['email', 'sms', 'push'],
      default: 'email',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['draft', 'scheduled', 'in_progress', 'completed', 'failed'],
      default: 'draft',
    },
    scheduledDate: {
      type: Date,
    },
    sentCount: {
      type: Number,
      default: 0,
    },
    failedCount: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Campaign', CampaignSchema);
