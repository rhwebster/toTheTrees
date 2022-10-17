const express = require("express");
const asyncHandler = require ('express-async-handler');
const { restoreUser } = require('../../utils/auth');
const { Listing, User, GuestReview, Reservation, Favorite } = require('../../db/models');
const { Op } = require('sequelize');
const listing = require("../../db/models/listing");

const router = express.Router();

// all listings
router.get('/listings', asyncHandler(async (req, res) => {
    try {
        const listings = await Listing.findAll({
            include: [User],
        });
        return res.json({ listings });
    } catch (e) {
        next(e);
    }
}));

// one listing
router.get('/listings/:listingId', asyncHandler(async (req, res) => {
    const listingId = req.params.listingId;
    const spot = await Listing.findByPk(Number(listingId));
    return res.json({ spot });
}))

// all listings posted by a specific user
router.get('/user/:userId', asyncHandler(async (req, res) => {
    const user = req.params.userId;
    const userSpots = await Listing.findAll({
        where: {
            userId: user,
        },
        include: User,
    });
    return res.json({ userSpots });
}));

// create new listing
router.post('/', asyncHandler(async(req, res) => {
    const newListing = await Listing.create(req.body);
    return res.json(newListing);
}));

// edit listing
router.put('/:listingId', asyncHandler(async (req, res) => {
    const listingId = req.params.listingId;
    const editedSpot = await Listing.findByPk(listingId, {
        include: User,
    });
    await editedSpot.update(req.body);
    return res.json(editedSpot);
}))

// deleting listing
router.delete('/:listingId', asyncHandler(async (req, res) => {
    const listingId = req.params.listingId;
    const listingReviews = await GuestReview.findAll({
        where: {
            listingId,
        },
    });
    listingReviews.forEach(async (review) => {
        await review.destroy();
    })
    const listings = await Listing.findAll({
        where: {
            listingId,
        },
    });
    listings.forEach(async (listing) => {
        await listing.destroy();
    })
    const favorites = await Favorite.findAll({
        where: {
            listingId,
        },
    });
    favorites.forEach(async (favorite) => {
        await favorite.destroy();
    });
    const spot = await Listing.findByPk(listingId);
    await spot.destroy();
    return res.json(spot);
}));

module.exports = router;