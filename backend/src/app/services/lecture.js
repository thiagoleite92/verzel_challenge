const lectureModel = require('../models/lecture');

const listLectures = async (id) => {
  const lectures = await lectureModel.listLectures(id);

  if (lectures.message) {
    return { status: 404, message: lectures.message };
  }

  return { status: 200, lectures };
};

const newLecture = async ({lecture, startDate, moduleId}) => {
  const intModuleID = parseInt(moduleId, 10);
  const newestLecture = await lectureModel.newLecture(lecture, startDate, intModuleID);

  if (newestLecture.message) {
    return { status: 409, message: newestLecture.message };
  }

  return { status: 201, newestLecture };
};

const editLecture = async (id, {lecture, startDate}) => {
  const editedLecture = await lectureModel.editLecture(id, lecture, startDate);

  if (editedLecture.message) {
    return { status: 404, message: editedLecture.message };
  }

  return { status: 202, editedLecture };
};

const deleteLecture = async (id) => {
  const deleted = await lectureModel.deleteLecture(id);

  if (deleted.message) {
    return { status: 404, message: deleted.message };
  }

  return { status: 202, deleted };
};

module.exports = {
  listLectures,
  newLecture,
  editLecture,
  deleteLecture
};