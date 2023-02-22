const verifyToken = (req, res, next) => {
    let token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.TOKEN, (error, tokenData) => {
        if (error) {
            return res.status(401).json({ Error: "Unauthorized Access" });
        }
        if (tokenData) {
            decodedToken = tokenData;
            next();
        }
    });
}

module.exports = verifyToken;