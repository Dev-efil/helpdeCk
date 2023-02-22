const { getIp } = require('../utils/getIpUtils')

const updateIp = async (req) => {
    getIp(req);
    // Filtered IP array
    const { ip } = Customer.findOne({ email: req.body.email });
    const currentArray = ip.push(currentIp);
    let filteredIpArray = [...new Set(currentArray)];

    const updateIp = await Customer.findOneAndUpdate({ email: req.body.email }, { ip: filteredIpArray });
}


module.exports = { updateIp }