
const mongoose = require('mongoose');

const CommunicationLogSchema = new mongoose.Schema(
  {
    campaign: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Campaign',
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true,
    },
    channel: {
      type: String,
      enum: ['email', 'sms', 'push'],
      required: true,
    },
    status: {
      type: String,
      enum: ['queued', 'sent', 'failed', 'delivered', 'opened', 'clicked'],
      default: 'queued',
    },
    message: {
      type: String,
      required: true,
    },
    messageId: {
      type: String,
    },
    error: {
      type: String,
    },
    sentAt: {
      type: Date,
    },
    deliveredAt: {
      type: Date,
    },
    openedAt: {
      type: Date,
    },
    clickedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('CommunicationLog', CommunicationLogSchema);
