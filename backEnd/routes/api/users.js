const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');


const router = express.Router();

const validateSignup = [
    check('firstName')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a First Name")
        .isLength({ max: 30})
        .withMessage("First Name must not exceed 30 Characters"),
    check('lastName')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a Last Name")
        .isLength({ max: 50})
        .withMessage("Last Name must not exceed 50 Characters"),
    check("email")
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide valid email address")
        .custom((value) => {
            return db.User.findOne({ where: { email: value } }).then((user) => {
                if (user) {
                    return Promise.reject(
                        "The provided Email Address is already in use"
                    );
                }
            });
        }),
    check("username")
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage("Please provide a username with at least 4 characters."),
    check("username").not().isEmail()
        .withMessage("Username cannot be email."),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please enter a password")
        .isLength({ min: 6, max: 20 })
        .withMessage("Password must be at least 6 characters and no more than 20")
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Passwords must match");
            }
            return true;
        }),
    handleValidationErrors,
];

router.post('/', validateSignup, asyncHandler(async (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;
    const user = await User.signup({ firstName, lastName, email, username, password })

    await setTokenCookie(res, user);

    return res.json({
        user,
    });
}));

router.get('/all', asyncHandler(async (req, res) => {
    const allUsers = await User.findAll();
    return res.json(allUsers);
}));

module.exports = router;