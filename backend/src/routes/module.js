const router = require('express').Router();

const moduleController = require('../app/controllers/module');
const { tokenValidation } = require('../app/middlewares/token');
const { moduleValidation } = require('../app/middlewares/moduleValidations');

router.get('/', moduleController.listModules);
router.get('/:id', moduleController.listModuleById);

router.use(tokenValidation);

router.delete('/delete/:id', moduleController.deleteModule);

router.use(moduleValidation);

router.post('/new', moduleController.newModule);
router.put('/edit/:id', moduleController.editModule);

module.exports = router;
