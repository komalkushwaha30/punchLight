const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto'); // Node.js built-in module for cryptographic functions
const Donor = require('../models/Donor'); // Import the Donor model

const router = express.Router();

// Initialize Razorpay with your Test Key ID and Secret
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/**
 * @route POST /api/donations/create-order
 * @description Create a Razorpay order and save initial donor details
 * @access Public
 */
router.post('/create-order', async (req, res) => {
  const { name, email, amount } = req.body; // amount should be in paisa from frontend

  if (!name || !email || !amount || amount <= 0) {
    return res.status(400).json({ message: 'Name, email, and a valid amount are required.' });
  }

  try {
    // 1. Save initial donor details as 'pending'
    const newDonor = new Donor({
      name,
      email,
      amount: amount / 100, // Store amount in Rupees in DB
      status: 'pending',
    });
    await newDonor.save();

    // 2. Create Razorpay order
    const options = {
      amount: amount, // amount in paisa
      currency: 'INR',
      receipt: `receipt_order_${newDonor._id}`, // Unique receipt ID
      payment_capture: 1, // Auto capture payment
    };

    const order = await razorpay.orders.create(options);

    // 3. Update donor record with Razorpay order_id
    newDonor.orderId = order.id;
    await newDonor.save();

    // Send back the order ID and Key ID for frontend to open Razorpay checkout
    res.status(200).json({
      orderId: order.id,
      currency: order.currency,
      amount: order.amount,
      keyId: process.env.RAZORPAY_KEY_ID, // Send keyId to frontend
      donorId: newDonor._id, // Send donor's MongoDB ID
    });
  } catch (error) {
    console.error('Error creating Razorpay order or saving donor:', error);
    res.status(500).json({ message: 'Failed to create order. Please try again.' });
  }
});

/**
 * @route POST /api/donations/verify-payment
 * @description Verify Razorpay payment signature
 * @access Public
 */
router.post('/verify-payment', async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, donorId } = req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !donorId) {
    return res.status(400).json({ message: 'Missing payment details for verification.' });
  }

  try {
    // Find the donor record by the MongoDB ID
    const donor = await Donor.findById(donorId);

    if (!donor) {
      return res.status(404).json({ success: false, message: 'Donor record not found.' });
    }

    // Generate expected signature
    const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = shasum.digest('hex');

    // Compare generated signature with the one received from Razorpay
    if (digest === razorpay_signature) {
      // Payment is successful and verified
      donor.paymentId = razorpay_payment_id;
      donor.signature = razorpay_signature;
      donor.status = 'successful';
      await donor.save();
      res.status(200).json({ success: true, message: 'Payment verified successfully.' });
    } else {
      // Payment verification failed
      donor.paymentId = razorpay_payment_id; // Still store the payment ID even if verification fails
      donor.signature = razorpay_signature;
      donor.status = 'failed';
      await donor.save();
      res.status(400).json({ success: false, message: 'Payment verification failed: Invalid signature.' });
    }
  } catch (error) {
    console.error('Error during payment verification:', error);
    res.status(500).json({ success: false, message: 'Internal server error during verification.' });
  }
});

/**
 * @route GET /api/donations
 * @description Get all successful donors
 * @access Public
 */
router.get('/', async (req, res) => {
  try {
    // Fetch only successful donations, sorted by creation date (newest first)
    const donors = await Donor.find({ status: 'successful' }).sort({ createdAt: -1 });
    res.status(200).json(donors);
  } catch (error) {
    console.error('Error fetching donors:', error);
    res.status(500).json({ message: 'Failed to fetch donor list.' });
  }
});

module.exports = router;
