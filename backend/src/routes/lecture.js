const router = require('express').Router();

const lectureController = require('../app/controllers/lecture');

router.get('/module/:id', lectureController.listLectures);

router.put('/:id', lectureController.editLecture);

module.exports = router;
