const express = require('express');
const asyncHandler = require('express-async-handler');
const { Image } = require('../../db/models');

const router = express.Router();

// Get all images for a specific listing

router.get('/:listingId', asyncHandler(async (req, res) => {
    const listingId = req.params.listingId;
    const images = await Image.findAll({
        where: {
            listingId,
        },
    });
    return res.json({ images });
}));

module.exports = router;