const jwt = require('jsonwebtoken');

module.exports = {
  getJwtToken
}

function getJwtToken(username) {
  const payload = {
    username
  };
  console.log(`getJwtToken payload`, payload)
  const secret = process.env.JWT_SECRET || "secret";

  const options = {
    expiresIn: "10h"
  };

  return jwt.sign(payload, secret, options);
}