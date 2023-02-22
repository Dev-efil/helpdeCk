const express = require('express');
const router = express.Router();
const { addTicket, getAllTickets, getTicket, updateTicket, deleteTicket } = require('../../../controllers/ticketController')
const verifyToken = require('../../../middlewares/verifyToken')

router.post('/tickets', verifyToken, addTicket);
router.get('/tickets', getAllTickets);
router.get('/tickets/:id', getTicket);
router.put('/tickets/:id', verifyToken, updateTicket);
router.delete('/tickets/:id', verifyToken, deleteTicket);

module.exports = router;