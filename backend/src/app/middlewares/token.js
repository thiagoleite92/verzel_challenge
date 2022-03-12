const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const createToken = (data) => {
  const token = jwt.sign({ ...data }, secret, jwtConfig);
  return token;
};

module.exports = {
  createToken
}