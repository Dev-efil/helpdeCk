const getIp = (req) => {
    const getIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const ipArray = getIp.split(",");
    const currentIp = ipArray[0];
    return currentIp;
}

module.exports = { getIp }