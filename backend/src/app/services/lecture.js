const lectureModel = require('../models/lecture');

const listLectures = async (id) => {
  const lectures = await lectureModel.listLectures(id);

  if (lectures.message) {
    return { status: 404, message: lectures.message };
  }

  return { status: 200, lectures };
};

module.exports = {
  listLectures
};