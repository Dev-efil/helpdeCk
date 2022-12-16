const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    accountStatus: { type: String, required: true },
    password: { type: String, required: true },
    ip: [String]
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);