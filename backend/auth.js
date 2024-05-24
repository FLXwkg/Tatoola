const jwt = require('jsonwebtoken');


const secretKey = 'f7d182d7cdb680f08b35e3571056e25f838af9dc90aed27ccbc193804cc576212cd29474c760d5edc75602e64a12e7f0528490063cecaf2e1cdf3e5c0b4b3059';

// Function to generate a token
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
};

// Function to verify a token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(403).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1]; // Extract the token from the "Bearer <token>" format
  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to authenticate token' });
    }
    req.userId = decoded.id; // Save the decoded id to request object for use in other routes
    next();
  });
};

module.exports = {
  generateToken,
  verifyToken
};
