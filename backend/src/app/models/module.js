const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const listModules = async () => {
  const modules = await prisma.module.findMany();
  return modules;
};

const listModuleById =  async (id) => {
  const module = await prisma.module.findUnique({
    where: { id }
  });
  return module;
};

const newModule = async (module) => {
  try {
    const newestModule = await prisma.module.create({
      data: {
        module
      }
    });

    return newestModule;
  } catch(e) {
    return { message: 'There is a module with this name.' };
  }
};

const editModule = async (id, module) => {
  try {
    const edited = await prisma.module.update({
      where: { id },
      data: { module }
    });
    return edited;
  } catch(e) {
    return { message: 'There is a module with this name.' };
  }
};

const deleteModule = async (id) => {
  try {
    const deleted = await prisma.module.delete({
      where: { id }
    });

    return deleted;
  } catch(e) {
    return { message: 'Module not found.' };
  }
};

module.exports = {
  listModules,
  listModuleById,
  newModule,
  editModule,
  deleteModule
};