const moduleValidation = (req, res, next) => {
  return req.body.module 
    ? next()
    : res.status(400).json({message: 'Module is required.'});
};

module.exports = {
  moduleValidation
};