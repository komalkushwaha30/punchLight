const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // Remove whitespace from both ends of a string
  },
  email: {
    type: String,
    required: true,
    unique: false, // Donors can have the same email for multiple donations
    lowercase: true, // Store emails in lowercase
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] // Email validation
  },
  amount: {
    type: Number,
    required: true,
    min: 0.01 // Minimum donation amount
  },
  paymentId: {
    type: String,
    unique: true, // Each payment ID should be unique
    sparse: true // Allows null values, so it's not strictly unique if null
  },
  orderId: {
    type: String,
    unique: true, // Each order ID should be unique
    sparse: true
  },
  signature: {
    type: String,
    sparse: true
  },
  status: {
    type: String,
    enum: ['pending', 'successful', 'failed'], // Payment status
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically set creation date
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the 'updatedAt' field on every save
donorSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;
