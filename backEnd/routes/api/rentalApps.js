const express = require('express');
const asyncHandler = require('express-async-handler');
const { RentalApp, User } = require('../../db/models');
const { setTokenCookie } = require('../../utils/auth');

const router = express.Router();

// Get all of user's bookings
router.get('/:userId', asyncHandler(async(req, res) => {
    const userId = req.params.userId;
    const rentalApps = await RentalApp.findAll({
        where: {
            userId,
        }
    });
    return res.json(rentalApps);
}));

// Create a new rental application
router.post('/', asyncHandler(async(req, res) => {
    const rentalApp = await RentalApp.create(req.body);
    return res.json(rentalApp);
}));

router.put('/:userId', asyncHandler(async(req, res) => {
    const { id } = req.body;
    const userId = req.params.userId;

    const applicant = await User.findByPk(userId);
    await applicant.update({
        accountType: 2,
    });
    await RentalApp.destroy({
        where: {
            id,
        },
    });
    res.json({ applicant });
}));

module.exports = router;