const express = require('express');
const router = express.Router();
const sessionRouter = require('./session.js');
const userRouter = require('./users.js');

router.use('/session', sessionRouter);

router.use('/users', userRouter);

module.exports = router;