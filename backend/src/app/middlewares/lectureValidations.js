const lectureModel = require('../models/lecture');

const validateLecture = (lecture) => {
  const LECTURE_LENGTH = 12;

  return lecture.length >= LECTURE_LENGTH ? true : false;
};

const validateDateFormat = (startDate) => {
  const validDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/gm;

  return validDate.teste(startDate) ? true : false;
};

const lectureValidation = (req, res, next) => {
  const loginFields = ['lecture', 'startDate'];

  const { body } = req;

  for (let field of loginFields) {
    if (!body[field]) {
      return res.status(400).json({ message: `${field}is Required` });
    }
  }

  if (!validateLecture) {
    return res.status(400).json({ 
      message: 'Lecture name must have at least 12 characters'
    });
  }

  if (!validateDateFormat) {
    return res.status(400).json({ 
      message: 'Start date must have format YYYY-MM-DD'
    });
  }

  next();
};



const verifyLectureById = async (req, res, next) => {
  const { id } = req.params;
  const intID = parseInt(id, 10);
  
  const module = await lectureModel.listModuleById(intID);

  return module
    ? next()
    : res.status(404).json({message: 'Lecture not found'});
};

module.exports = {
  lectureValidation,
  verifyLectureById
};