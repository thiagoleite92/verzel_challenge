const router = require('express').Router();

const lectureController = require('../app/controllers/lecture');

router.get('/', lectureController.listLectureById);

module.exports = router;
