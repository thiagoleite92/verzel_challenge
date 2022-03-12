const moduleModel = require('../models/module');

const listModules = async () => {
  const modules = await moduleModel.listModules();

  return modules;
};

const newModule = async (name) => {
  const module = await moduleModel.newModule(name);

  if (module.message) {
    return { status: 409, message: module.message };
  }

  return { status: 201, module };
};

const editModule = async (id, name) => {
  const edited = await moduleModel.editModule(id, name);

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
  newModule,
  editModule,
  deleteModule,
};