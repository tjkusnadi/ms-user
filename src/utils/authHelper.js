const jwt = require('jsonwebtoken');
const config = require('../../config');

const authHelper = async (payload) => {
  token = jwt.sign({
    data: payload
  }, config.secretKey, { expiresIn: config.expiresIn });
  return token;
}

module.exports = authHelper;