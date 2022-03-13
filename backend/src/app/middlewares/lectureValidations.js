const lectureModel = require('../models/module');

const lectureValidation = (req, res, next) => {
  const loginFields = ['lecture', 'startDate'];

  const { body } = req;

  for (let field of loginFields) {
    if (!body[field]) {
      return res.status(400).json({ message: `${field}is Required` });
    }
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