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

module.exports = {
  listModules,
  newModule,
  editModule
};