const express = require('express');
const router = express.Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const listingsRouter = require('./listings');
const reservationRouter = require('./reservations');
const imagesRouter = require('./images');
const favoritesRouter = require('./favorites');
const rentalAppRouter = require('./rentalApps');
const reviewsRouter = require('./reviews');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/listings', listingsRouter);
router.use('/reservations', reservationRouter);
router.use('/reviews', reviewsRouter);
router.use('/images', imagesRouter);
router.use('/favorites', favoritesRouter);
router.use('/rentalApps', rentalAppRouter);
router.use('/search', searchRouter);


module.exports = router;