const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const connection = require('../config/dbConfig');
const Customer = require("../models/customerModel");
const { updateIp } = require('../utils/updateIpUtils')
const { getIp } = require('../utils/getIpUtils')

// @desc    Register customer
// @route   GET /api/v1/register
// @access  public
const register = async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 10);
    const newCustomer = new Customer({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        accountStatus: req.body.accountStatus,
        password: hash,
        ip: getIp(req)
    });
    console.log("newCustomer",newCustomer)
    try {
        const userRegister = await newCustomer.save();
        return res.status(201).json(userRegister);
    } catch (error) {
        return res.status(400).send({ Error: "Something went wrong, Please try again" });
    }
}

// @desc    Login customer
// @route   GET /api/v1/login
// @access  public
const auth = async (req, res) => {
    try {
        const findUser = await Customer.findOne({ email: req.body.email });
        if (!findUser) {
            return res.status(400).json({ error: "Invalid Credentials" });
        } else {
            const decryptHash = await bcrypt.compare(req.body.password, findUser.password);
            if (!decryptHash) {
                return res.status(400).json({ error: "Invalid Credentials" });
            } else {
                updateIp(req);
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