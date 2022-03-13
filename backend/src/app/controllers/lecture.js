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

module.exports = {
  listLectures
};