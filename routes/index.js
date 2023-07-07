const express = require('express');
const router = express.Router();

const indexControllers = require('../controllers');

router.get('/unit/lesson/:slug', indexControllers.Lesson);

module.exports = router;
