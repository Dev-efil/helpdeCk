const express = require('express');
const router = express.Router();
const { addTicket, getAllTickets, getTicket, updateTicket, deleteTicket } = require('../../../controllers/ticketController')

router.post('/tickets', addTicket);
router.get('/tickets', getAllTickets);
router.get('/tickets/:id', getTicket);
router.put('/tickets/:id', updateTicket);
router.delete('/tickets/:id', deleteTicket);

module.exports = router;