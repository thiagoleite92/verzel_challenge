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

    if (response.message) {
      return res.status(response.status).json(response.message);
    }

    return res.status(response.status).json(response.lectures);

  } catch (e) {
    return res.status(serverError.status).json(serverError.message);
  }
};

const editLecture = async (req, res) => {
  try {
    const { lecture, startDate } = req.body;
    const { id } =  req.params;

    const intID = parseInt(id, 10);
    
    const response = await lectureService.editLecture(intID, {lecture, startDate});

    if (response.message) {
      return res.status(response.status).json({message: response.message});
    }
    
    return res.status(202).json(response.editedLecture);
  } catch(e) {
    return res.status(serverError.status).json(serverError.message);
  }
};

module.exports = {
  listLectures,
  editLecture
};