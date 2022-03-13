const router = require('express').Router();

const { tokenValidation } = require('../app/middlewares/token');
const lectureController = require('../app/controllers/lecture');

router.get('/module/:id', lectureController.listLectures);

router.use(tokenValidation);

router.delete('/delete/:id', lectureController.deleteLecture);
router.put('/edit/:id', lectureController.editLecture);

module.exports = router;
