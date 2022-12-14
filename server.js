const express = require('express');
const server = express();
const cors = require('cors');
require('dotenv').config();

const ticketApi = require('./routes/api-v1/ticket/ticket');

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

server.use('/api/v1', ticketApi);

const PORT = process.env.PORT || 3500;

server.listen(PORT, ()=> { console.log(`Server started on port : ${PORT}`)});