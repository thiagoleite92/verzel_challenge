const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const listModules = async () => {

  const modules = await prisma.module.findMany();

  console.log(modules);

  return modules;
};

const newModule = async (name) => {
  try
  {
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

module.exports = {
  listModules,
  newModule
};