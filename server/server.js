require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const donationRoutes = require('./routes/donationRoutes'); // Import donation routes

const app = express();
const PORT = process.env.PORT || 5000; // Use port from .env or default to 5000

// Middleware
app.use(cors()); // Enable CORS for all routes (important for frontend-backend communication)
app.use(express.json()); // Parse JSON request bodies

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/donations', donationRoutes); // Use the donation routes for /api/donations path

// Basic route for testing server status
app.get('/', (req, res) => {
  res.send('Donation App Backend is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
