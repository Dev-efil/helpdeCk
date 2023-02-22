const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    ticketId: { type: String, required: true },
    customerId: { type: String, required: true },
    rating: { type: String, required: true },
    comment: { type: String, required: true },
    accountStatus: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Feedback', feedbackSchema);