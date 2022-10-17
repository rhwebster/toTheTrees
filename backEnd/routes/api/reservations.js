const express = require('express');
const asyncHandler = require('express-async-handler');
const { Reservation } = require('../../db/models');

const router = express.Router();

// Get user's bookings
router.get('/user/:userId', asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const reservations = await Reservation.findAll({
        where: {
            userId,
        },
    });
    return res.json(reservations);
}));

// Create a new res
router.post('/', asyncHandler(async (req, res) => {
    const resy = await Reservation.create(req.body);
    return res.json(resy);
}));

router.delete('/:reservationId', asyncHandler(async (req, res) => {
    const resyId = req.params.reservationId;
    const resy = await Reservation.findByPk(resyId);
    await resy.destroy();
    return res.json(resyId);
}));

module.exports = router;