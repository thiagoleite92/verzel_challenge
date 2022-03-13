const router = require('express').Router();

const lectureController = require('../app/controllers/lecture');

router.get('/module/:id', lectureController.listLectures);

router.put('/edit/:id', lectureController.editLecture);
router.delete('/delete/:id', lectureController.deleteLecture);

module.exports = router;
