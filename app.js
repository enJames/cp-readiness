'use strict';
const express = require('express');

let app = express();

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Now listening on 3000');
});
