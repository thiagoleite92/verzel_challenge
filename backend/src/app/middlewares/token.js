const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET || 'secret';


const jwtConfig = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const createToken = (data) => {
  const token = jwt.sign({ ...data }, secret, jwtConfig);
  return token;
};

const isAdmin = (token) => {
  try {
    const decode = jwt.decode(token, secret, jwtConfig);
    if (decode.role !== 'admin') {
      return { message: ' You do not have permission to create new modules'};
    } 
    return 'admin';
  } catch(e) {
    return { message: 'Token not valid'};
  }
};

module.exports = {
  createToken,
  isAdmin
};