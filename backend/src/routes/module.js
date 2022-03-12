const router = require('express').Router();

const moduleController = require('../app/controllers/module');
const { tokenValidation, nameValidation } = require('../app/middlewares/moduleValidations');

router.get('/', moduleController.listModules);

router.use(tokenValidation);

router.delete('/delete/:id', moduleController.deleteModule);

router.use(nameValidation);

router.post('/new', moduleController.newModule);
router.put('/edit/:id', moduleController.editModule);

module.exports = router;
