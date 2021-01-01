const express = require("express");
const asyncHandler = require ('express-async-handler');
const { restoreUser } = require('../../utils/auth');
const db = require('../../../models');
const { Op } = require('sequelize');

const router = express.Router();

const { Listing } = require('../../../models');

router.get("/", async (req, res) => {
    try {
        const listings = await Listing.findAll();
        res.json({listings: listings});
    } catch (e) {
        next(e);
    }
})

module.exports = router;