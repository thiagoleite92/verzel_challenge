const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const listLectures = async (id) => {
  const lectures = await prisma.lecture.findMany({
    where: { moduleId: id },
  });

  if (lectures.length === 0) {
    return { message: 'Lectures not found.' };
  }

  return lectures;
};

module.exports = {
  listLectures
};