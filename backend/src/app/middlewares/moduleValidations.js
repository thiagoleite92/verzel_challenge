const { isAdmin } = require('../middlewares/token');

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

const moduleValidation = (req, res, next) => {
  return req.body.module 
    ? next()
    : res.status(400).json({message: 'Module is required.'});
};

module.exports = {
  tokenValidation,
  moduleValidation
};