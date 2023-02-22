const express = require('express');
const server = express();
const cors = require('cors');
const connection = require('./config/dbConfig');
require('dotenv').config();
connection();

const ticketApi = require('./routes/api-v1/ticket/ticket');
const registerApi = require('./routes/api-v1/auth/register');
const authApi = require('./routes/api-v1/auth/login');

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

server.use('/api/v1', ticketApi);
server.use('/api/v1', registerApi);
server.use('/api/v1', authApi);

const PORT = process.env.PORT || 3500;

server.listen(PORT, ()=> { console.log(`Server started on port : ${PORT}`)});