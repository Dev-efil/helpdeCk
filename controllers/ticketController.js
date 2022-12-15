// @desc    Create a Ticket
// @route   POST /api/v1/tickets
// @access  public
const addTicket = async (req, res) => {
    const apiKey = req.params.key;

    res.send({ msg: 'success' });
}

// @desc    Get All Tickets
// @route   GET /api/v1/tickets
// @access  public
const getAllTickets = async (req, res) => {
    const apiKey = req.params.key;
    const getIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const ipArray = getIp.split(",");
    const ip = ipArray[0];
    res.send({ ip });
}

// @desc    Get a Ticket by ID
// @route   GET /api/v1/tickets/:id
// @access  public
const getTicket = async (req, res) => {
    // ❗️ TODO : get id from headers
    // const header = req.headers.id;
    const ticketId = req.params.id;

    res.send({ id: '123', msg: ticketId });
}

// @desc    Update a Ticket by ID
// @route   PUT /api/v1/tickets/:id
// @access  private
const updateTicket = async (req, res) => {
    // ❗️ TODO : get id from headers
    // const header = req.headers.id;
    const ticketId = req.params.id;

    res.send({ id: '123', msg: ticketId });
}

// @desc    Delete a Ticket by ID
// @route   DELETE /api/v1/tickets/:id
// @access  private
const deleteTicket = async (req, res) => {
    // ❗️ TODO : get id from headers
    // const header = req.headers.id;
    const ticketId = req.params.id;

    res.send({ id: '123', msg: ticketId });
}

module.exports = {
    addTicket,
    getAllTickets,
    getTicket,
    updateTicket,
    deleteTicket
}