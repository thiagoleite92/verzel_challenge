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
      return { message: ' You do not have permission to do this.' };
    } 
    return 'admin';
  } catch(e) {
    return { message: 'Token not valid'};
  }
};


const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({message: 'token not found'});
  }

  const token = isAdmin(authorization);

  if (token.message) {
    return res.status(401).json({message: token.message});
  }

  next();
};

module.exports = {
  createToken,
  tokenValidation
};