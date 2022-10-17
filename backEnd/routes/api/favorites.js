const express = require('express');
const asyncHandler = require('express-async-handler');
const { Favorite } = require('../../db/models');

const router = express.Router();

// Get user's favorites
router.get('/:userId/favs', asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const favorites = await Favorite.findAll({ 
        where: {
            userId,
        },
    });
    return res.json(favorites);
}))

// Create new favorite
router.post('/', asyncHandler(async (req, res) => {
    const favorite = await Favorite.create(req.body);
    const favorites = await Favorite.findAll({
        where: {
            userId,
        },
    });
    return res.json(favorites);
}))

// unfavorite
router.delete('/:userId/:listingId', asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const listingId = req.params.listingId;
    const favorite = await Favorite.findOne({
        where: {
            userId,
            listingId,
        }
    });
    await favorite.destroy();
    const favorites = await Favorite.findAll();
    return res.json(favorites);
}));

module.exports = router;