const moduleModel = require('../models/module');

const moduleValidation = (req, res, next) => {
  return req.body.module 
    ? next()
    : res.status(400).json({message: 'Module is required.'});
};

const verifyModuleById = async (req, res, next) => {
  const { id } = req.params;
  const intID = parseInt(id, 10);
  
  const module = await moduleModel.listModuleById(intID);

  return module
    ? next()
    : res.status(404).json({message: 'Module not found'});
};

module.exports = {
  moduleValidation,
  verifyModuleById
};