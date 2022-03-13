const lectureModel = require('../models/lecture');
const moduleModel = require('../models/module');

const validateLecture = (lecture) => {
  const LECTURE_LENGTH = 12;

  console.log(lecture.length);

  return lecture.length >= LECTURE_LENGTH;
};

const validateDateFormat = (startDate) => {
  const validDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/gm;

  return validDate.test(startDate);
};

const lectureValidation = (req, res, next) => {
  const loginFields = ['lecture', 'startDate', 'moduleId'];

  const { body } = req;

  for (let field of loginFields) {
    if (!body[field]) {
      return res.status(400).json({ message: `${field}is Required` });
    }
  }

  if (!validateLecture(body.lecture)) {
    return res.status(400).json({ 
      message: 'Lecture name must have at least 12 characters'
    });
  }

  if (!validateDateFormat(body.startDate)) {
    return res.status(400).json({ 
      message: 'Start date must have format YYYY-MM-DD'
    });
  }

  next();
};

const verifyModuleByIdOnLecture = async (req, res, next) => {
  const { moduleId } = req.body;
  console.log(moduleId, 'body')
  const intID = parseInt(moduleId, 10);
  
  const module = await moduleModel.listModuleById(intID);

  return module
    ? next()
    : res.status(404).json({message: 'Module not found'});
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
  verifyLectureById,
  verifyModuleByIdOnLecture
};