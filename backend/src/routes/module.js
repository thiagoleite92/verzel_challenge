const router = require('express').Router();

const moduleController = require('../app/controllers/module');

router.get('/', moduleController.listModules);

module.exports = router;
