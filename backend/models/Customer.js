
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    totalSpend: {
      type: Number,
      default: 0,
    },
    visitCount: {
      type: Number,
      default: 0,
    },
    lastVisitDate: {
      type: Date,
    },
    customerType: {
      type: String,
      enum: ['standard', 'premium', 'vip'],
      default: 'standard',
    },
    location: {
      type: String,
    },
    inactiveDays: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    metadata: {
      type: Object,
      default: {},
    }
  },
  {
    timestamps: true,
  }
);

// Calculate inactive days based on lastVisitDate
CustomerSchema.pre('save', function(next) {
  if (this.lastVisitDate) {
    const currentDate = new Date();
    const lastVisitDate = new Date(this.lastVisitDate);
    const diffTime = Math.abs(currentDate - lastVisitDate);
    this.inactiveDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
  next();
});

module.exports = mongoose.model('Customer', CustomerSchema);
