const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const listLectures = async (id) => {
  const lectures = await prisma.lecture.findUnique({
    where: { id },
  });

  // if (lectures.length === 0) {
  //   return { message: 'Lectures not found.' };
  // }

  return lectures;
};

const newLecture = async (lecture, startDate, moduleId) => {
  try {
    const newestLecture = await prisma.lecture.create({
      data: {
        lecture,
        startDate: new Date(startDate),
        moduleId
      }
    });

    return newestLecture;
  } catch(e) {
    return { message: 'Already There is a lecture with this name.' };
  }
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
    return { message: 'Already there is a lecture with this name.' };
  }
};

const deleteLecture = async (id) => {
  try {
    const deleted = await prisma.lecture.delete({
      where: { id}
    });

    return deleted;
  } catch(e) {
    return { message: 'Lecture not found.' };
  }
};

module.exports = {
  listLectures,
  editLecture,
  deleteLecture,
  newLecture
};