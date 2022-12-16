const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true , unique: true},
    subject: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    assignedTo: { type: String, required: true },
    priority: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    resolution: { type: String, required: true },
    timeSpent: { type: String, required: true },
    feedback: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Ticket', ticketSchema);

// {
//     "ticket_id": "ABC123",
//     "customer_name": "Jane Doe",
//     "customer_email": "jane.doe@example.com",
//     "subject": "Unable to log in to account",
//     "description": "I am unable to log in to my account. When I enter my username and password, I receive an error message saying that the login information is incorrect. I have checked and double-checked my username and password, and I am confident that I am entering them correctly.",
//     "status": "closed",
//     "assigned_to": "John Smith",
//     "date_created": "2022-12-15T12:34:56",
//     "date_updated": "2022-12-16T10:12:01",
//     "priority": "high",
//     "category": "account",
//     "subcategory": "password reset",
//     "resolution": "We were able to reset your password and update your account records. Please try logging in again using the new password provided.",
//     "time_spent": "1h 30m",
//     "feedback": "5/5"
// }