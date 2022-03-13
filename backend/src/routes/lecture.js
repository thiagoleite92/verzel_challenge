const router = require('express').Router();

const { tokenValidation } = require('../app/middlewares/token');
const lectureController = require('../app/controllers/lecture');

router.get('/:id', lectureController.listLectures);

router.use(tokenValidation);

router.delete('/delete/:id', lectureController.deleteLecture);

router.post('/new',lectureController.newLecture);
router.put('/edit/:id', lectureController.editLecture);

module.exports = router;
