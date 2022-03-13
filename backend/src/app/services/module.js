const moduleModel = require('../models/module');

const listModules = async () => {
  const modules = await moduleModel.listModules();

  return modules;
};

const listModuleById = async (id) => {
  const module = await moduleModel.listModuleById(id);

  if (!module) {
    return { status: 404, message: 'Module not found.' };
  }

  return { status: 200, module };
};

const newModule = async (module) => {
  const newestModule = await moduleModel.newModule(module);

  if (newestModule.message) {
    return { status: 409, message: newestModule.message };
  }

  return { status: 201, module };
};

const editModule = async (id, module) => {
  const edited = await moduleModel.editModule(id, module);

  if (edited.message) {
    return { status: 409, message: edited.message };
  }

  return { status: 202, edited };
};

const deleteModule = async (id) => {
  const deleted = await moduleModel.deleteModule(id);

  if (deleted.message) {
    return { status: 404, message: deleted.message };
  }

  return { status: 202, deleted };
};

module.exports = {
  listModules,
  listModuleById,
  newModule,
  editModule,
  deleteModule,
};