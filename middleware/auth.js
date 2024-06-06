const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const jwt_secret = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, jwt_secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    req.username = decoded.username;
    next();
  });
};

module.exports = verifyToken;
