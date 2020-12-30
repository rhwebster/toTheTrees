const csurf = require('csurf');
const express = require('express');
const apiRouter =  require('./api');
const router = express.Router();

router.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    router.get('/', (req, res) => {
        res.cookie('XSRF-Token', req.csrfToken());

        res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });

    router.use(express.static(path.resolve("../frontend/build")));

    router.get()
}

if (process.env.NODE_ENV !== 'production') {
    router.get('/api/csrf/restore', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.status(201).json({});
    })
}

module.exports = router;