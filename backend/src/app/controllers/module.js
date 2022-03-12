const moduleService = require('../services/module');

const serverError = {
  status: 500,
  message: 'Something went wrong'
};

const listModules = async (req, res) => {
  try {
    const modules = await moduleService.listModules();
    return res.status(200).json(modules);
  } catch (e) {
    return res.status(serverError.status).json(serverError.message);
  }
};

const newModule = async (req, res) => {
  try {
    const { name } = req.body;

    const response = await moduleService.newModule(name);

    if (response.message) {
      return res.status(response.status).json(response.message);
    }

    return res.status(response.status).json(response.module);

  } catch(e) {
    return res.status(serverError.status).json(serverError.message);
  }
};

module.exports = {
  listModules,
  newModule,
};