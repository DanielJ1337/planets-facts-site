const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fs = require('fs');
const planetRouter = require('./routes/planet-routes');
app.locals.planets = require('./data.json');

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use('/planets', planetRouter);

app.listen(port, (err) => {
    if (err) {
        return console.log('ERROR', err);
    } else {
        console.log(`Example app listening on port ${port}!`);
    }
});
