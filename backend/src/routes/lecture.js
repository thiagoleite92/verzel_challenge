const router = require('express').Router();

const { tokenValidation } = require('../app/middlewares/token');
const { verifyLectureById, lectureValidation } = require('../app/middlewares/lectureValidations');
const lectureController = require('../app/controllers/lecture');

router.get('/:id', verifyLectureById, lectureController.listLectures);

router.use(tokenValidation);

router.delete('/delete/:id', lectureController.deleteLecture);

router.use(lectureValidation);

router.post('/new',lectureController.newLecture);
router.put('/edit/:id', verifyLectureById, lectureController.editLecture);

module.exports = router;
