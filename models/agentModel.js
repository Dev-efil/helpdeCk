const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    team: { type: String, required: true },
    role: { type: String, required: true },
    password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Agent', agentSchema);