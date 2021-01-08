const express = require('express');
const app = express();

const routes = require('./routes/index')

let bodyparse = require('body-parser');


app.use(bodyparse.urlencoded({ extended: false }));
app.use(bodyparse.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', routes)



module.exports = app;