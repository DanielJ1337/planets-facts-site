const express = require('express');

const router = express.Router();

router.route('/mercury-0').get((req, res) => {
    //res.locals.url = req.url;
    res.locals.strippedURL = req.url.slice(-1);
    res.render('planet');
});

router.route('/venus-1').get((req, res) => {
    res.locals.strippedURL = req.url.slice(-1);
    res.render('planet');
});

router.route('/earth-2').get((req, res) => {
    res.locals.strippedURL = req.url.slice(-1);
    res.render('planet');
});

router.route('/mars-3').get((req, res) => {
    res.locals.strippedURL = req.url.slice(-1);
    res.render('planet');
});

router.route('/jupiter-4').get((req, res) => {
    res.locals.strippedURL = req.url.slice(-1);
    res.render('planet');
});

router.route('/saturn-5').get((req, res) => {
    res.locals.strippedURL = req.url.slice(-1);
    res.render('planet');
});

router.route('/uranus-6').get((req, res) => {
    res.locals.strippedURL = req.url.slice(-1);
    res.render('planet');
});
router.route('/neptune-7').get((req, res) => {
    res.locals.strippedURL = req.url.slice(-1);
    res.render('planet');
});

router.route('/').get((req, res) => {
    res.redirect('/planets');
});

module.exports = router;
