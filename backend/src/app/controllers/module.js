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

const listModuleById = async (req, res) => {
  try {
    const { id } = req.params;
    const intID = parseInt(id, 10);
    const response = await moduleService.listModuleById(intID);

    if (response.message) {
      return res.status(response.status).json(response.message);
    }
    return res.status(response.status).json(response.module);

  } catch(e) {
    return res.status(serverError.status).json(serverError.message);
  }
};

const newModule = async (req, res) => {
  try {
    const { module } = req.body;

    const response = await moduleService.newModule(module);

    if (response.message) {
      return res.status(response.status).json(response.message);
    }

    return res.status(response.status).json(response.module);

  } catch(e) {
    return res.status(serverError.status).json(serverError.message);
  }
};

const editModule = async (req, res) => {
  try {
    const { module } = req.body;
    const { id } = req.params;
    const intID = parseInt(id, 10);
    const response = await moduleService.editModule(intID, module);

    return response.message
      ? res.status(response.status).json(response.message)
      : res.status(response.status).json(response.edited);
  } catch(e) {
    return res.status(serverError.status).json(serverError.message);
  }
};

const deleteModule = async (req, res) => {
  try {
    const { id } = req.params;
    const intID = parseInt(id, 10);

    const response = await moduleService.deleteModule(intID);

    return response.message
      ? res.status(response.status).json(response.message)
      : res.status(response.status).json(response.deleted);

  } catch(e) {
    return res.status(serverError.status).json(serverError.message);
  }
};

module.exports = {
  listModules,
  listModuleById,
  newModule,
  editModule,
  deleteModule,
};