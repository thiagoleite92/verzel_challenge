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

const editLecture = async (id, lecture, startDate) => {
  try {
    const edited = await prisma.lecture.update({
      where: { id },
      data: {
        startDate: new Date(startDate),
        lecture
      }
    });
    
    return edited;
  } catch(e) {
    return { message: 'Lecture not found' };
  }
};

module.exports = {
  listLectures,
  editLecture
};