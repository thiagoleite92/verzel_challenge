const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const listModules = async () => {
  console.log('oi');

  const modules = await prisma.module.findMany();

  console.log(modules);

  return modules;
};

module.exports = {
  listModules
};