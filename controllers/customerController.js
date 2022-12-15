const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const connection = require('../config/dbConfig');
const Customer = require("../models/customerModel");

// @desc    Register customer
// @route   GET /api/v1/register
// @access  public
const register = async (req, res) => {
    const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const hash = await bcrypt.hash(req.body.password, 10);
    const newCustomer = new Customer({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        accountStatus: req.body.accountStatus,
        password: hash,
    });
    try {
        const userRegister = await newCustomer.save();
        return res.status(200).json(userRegister);
    } catch (error) {
        return res.status(400).send({ Error: error });
    }
}

// @desc    Login customer
// @route   GET /api/v1/login
// @access  public
const auth = async (req, res) => {
    try {
        const getIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const ipArray = getIp.split(",")
        ipArray[0]
        const findUser = await Customer.findOne({ username: req.body.email });
        if (!findUser) {
            return res.status(400).json({ Error: "Authentication Error", Message: "Invalid Credentials" });
        } else {
            const decryptHash = await bcrypt.compare(req.body.password, findUser.password);
            if (!decryptHash) {
                return res.status(400).json({ Error: "Authentication Error", Message: "Invalid Credentials" });
            } else {
                let token = jwt.sign({ email: req.body.email }, process.env.TOKEN, { expiresIn: '1h' });
                const { password, ...others } = findUser._doc;
                return res.status(200).json({ message: "Authentication Successful", ...others, token });
            }
        }
    } catch (error) {
        res.status(500).send({ Error: error });
    }
}

module.exports = {
    register,
    auth
}