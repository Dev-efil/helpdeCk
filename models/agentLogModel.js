const mongoose = require('mongoose');

const agentLogSchema = new mongoose.Schema({
    ticketId: {type: String, required: true},
    agentId: {type: String, required: true},
    action: {type: String, required: true},
    details: {type: String, required: true}
});

module.exports = mongoose.model('AgentLog', agentLogSchema);