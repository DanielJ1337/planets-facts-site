const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fs = require('fs');
app.locals.planets = require('./data.json');

// const navbarCSS = {
//     style: fs.readFileSync('./navbar.css', 'utf-8'),
// };

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.redirect('mercury');
});

app.get('/mercury', (req, res) => {
    res.render('mercury');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
