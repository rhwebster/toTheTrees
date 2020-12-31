const express = require('express');
const router = express.Router();
const sessionRouter = require('./session.js');
const userRouter = require('./users.js');
const listingRouter = require('./listings.js');

router.use('/session', sessionRouter);

router.use('/users', userRouter);
router.use('/listings', listingRouter);

module.exports = router;