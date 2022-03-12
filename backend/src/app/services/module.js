const moduleModel = require('../models/module');

const listModules = async () => {
  console.log('oi');

  const modules = await moduleModel.listModules();

  return modules;
};

module.exports = {
  listModules
};