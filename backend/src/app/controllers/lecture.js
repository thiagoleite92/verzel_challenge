const lectureService = require('../services/lecture');

const serverError = {
  status: 500,
  message: 'Something went wrong'
};

const listLectures = async (req, res) => {
  try {
    const { id } =  req.params;
    const intID = parseInt(id, 10);
    const response = await lectureService.listLectures(intID);

    return response.message 
      ? res.status(response.status).json(response.message)
      : res.status(response.status).json(response.lectures);
      
  } catch (e) {
    return res.status(serverError.status).json(serverError.message);
  }
};

const newLecture = async (req, res) => {
  try {
    const { body } = req;

    const response = await lectureService.newLecture(body);

    return response.message 
      ? res.status(response.status).json(response.message)
      : res.status(response.status).json(response.newestLecture);

  } catch(e) {
    return res.status(serverError.status).json(serverError.message);
  }
};

const editLecture = async (req, res) => {
  try {
    const { lecture, startDate } = req.body;
    const { id } =  req.params;

    const intID = parseInt(id, 10);

    const response = await lectureService.editLecture(intID, {lecture, startDate});

    return response.message 
      ? res.status(response.status).json(response.message)
      : res.status(response.status).json(response.editedLecture);

  } catch(e) {
    return res.status(serverError.status).json(serverError.message);
  }
};

const deleteLecture = async (req, res) => {
  try {
    const { id } =  req.params;
    const intID = parseInt(id, 10);

    const response = await lectureService.deleteLecture(intID);

    return response.message 
      ? res.status(response.status).json(response.message)
      : res.status(response.status).json(response.deleted);

  } catch(e) {
    return res.status(serverError.status).json(serverError.message);
  }
};

module.exports = {
  listLectures,
  newLecture,
  editLecture,
  deleteLecture
};