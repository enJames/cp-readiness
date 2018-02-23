'use strict';
const express = require('express');
const mainController = require('./controllers/mainController.js');

let app = express();

app.set('view engine', 'ejs');

mainController(app);

app.listen(3000, () => {
    console.log('Now listening on 3000');
});
