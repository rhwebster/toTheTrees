const express = require("express");
const { noExtendLeft } = require("sequelize/types/lib/operators");
const router = express.Router();

const { Listing } = require('../../db/models');

router.get("/", async (req, res) => {
    try {
        const listings = await Listing.findAll();
        res.json({listings: listings});
    } catch (e) {
        next(e);
    }
})

module.exports = router;