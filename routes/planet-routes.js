const express = require('express');

const router = express.Router();

router.route('/:id?').get((req, res) => {
    res.locals.strippedURL = req.url.slice(-1);
    res.render('planet');
});

router.route('/').get((req, res) => {
    res.redirect('/planets');
});

module.exports = router;
