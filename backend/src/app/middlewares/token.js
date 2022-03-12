const jwt = require('jsonwebtoken');
require('dotenv').config()

const secret = process.env.SECRET || 'secret'


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