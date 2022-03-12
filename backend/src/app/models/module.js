const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const listModules = async () => {
  const modules = await prisma.module.findMany();
  return modules;
};

const newModule = async (name) => {
  try {
    const module = await prisma.module.create({
      data: {
        name
      }
    });

    return module;
  } catch(e) {
    return { message: 'There is a module with this name.' };
  }
};

const editModule = async (id, name) => {
  try {
    const edited = await prisma.module.update({
      where: { id },
      data: { name }
    });
    return edited;
  } catch(e) {
    return { message: 'There is a module with this name.' };
  }
};

module.exports = {
  listModules,
  newModule,
  editModule
};