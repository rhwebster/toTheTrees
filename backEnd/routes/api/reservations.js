const express = require('express');
const asyncHandler = require('express-async-handler');
const { Reservation } = require('../../db/models');

const router = express.Router();

router.get('/user/:userId', asyncHandler(async (req, res) => {
    
}))