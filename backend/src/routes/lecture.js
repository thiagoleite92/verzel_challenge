const router = require('express').Router();

const lectureController = require('../app/controllers/lecture');

router.get('/module/:id', lectureController.listLectures);

module.exports = router;
