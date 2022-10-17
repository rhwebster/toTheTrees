const express = require('express');
const asyncHandler = require('express-async-handler');
const { GuestReview, Listing, User } = require('../../db/models');

const router = express.Router();

// get listing reviews
router.get('/listing/:listingId', asyncHandler(async (req, res) => {
    const spotId = req.params.placeId;
    const reviews = await Review.findAll({
        where: {
            spotId,
        },
        include: User,
    });
    return res.json(reviews);
}));

// delete review
router.delete('/review/:reviewId', asyncHandler(async (req, res) => {
    const reviewId = req.params.reviewId;
    const review = await Review.findByPk(reviewId);
    await review.destroy();
    return res.json(reviewId);
}));

// edit review
router.put('review/:reviewId', asyncHandler(async (req, res) => {
    const reviewId = req.params.reviewId;
    const review = await Review.findOne({
        where: {
            id: reviewId,
        },
        include: User,
    });
    await review.update(req.body);
    return res.json(review);
}));

// create review
router.post('/', asyncHandler(async (req, res) => {
    const review = await Review.create(req.body);
    const createdReview = await Review.findByPk(review.id, {
        include: User,
    });
    return res.json(createdReview);
}));

// Get all reviews from a user
router.get('/user/:userId', asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const reviews = await Review.findAll({
        where: {
            userId,
        },
        include: User,
    });
    return res.json({ reviews });
}));

// Get average review rating
router.get('/rating/:listingId', asyncHandler(async (req, res) => {
    const listingId = req.params.listingId;
    let oneStar = 0, twoStar = 0, threeStar = 0, fourStar = 0, fiveStar = 0, avg = 0;
    const reviews = await Review.findAll({
        where: {
            listingId,
        },
    });
    reviews.forEach(review => {
        switch (review.rating) {
            case "1":
                oneStar++;
                break;
            case "2":
                twoStar++;
                break;
            case "3":
                threeStar++;
                break;
            case "4":
                fourStar++;
                break;
            case "5":
                fiveStar++;
                break;
            default:
                return;
        }
    });
    avgRating = ((oneStar + (2 * twoStar) + (3 * threeStar) 
                + (4 * fourStar) + (5 * fiveStar)) / reviews.length);
    return res.json({ avgRating: avgRating.toFixed(1), length : reviews.length, listingId });
}));

module.exports = router;