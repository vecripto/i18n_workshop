'use strict';
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const i18n = require('i18n');

const config = require('./config.js');
const routes = require('./routes.js');

const app = express();
const port = process.env.PORT || 8087;


app.set('view engine', 'jade');
app.use(express.static('assets'));

config(app, cookieParser, session, i18n);
routes(app, i18n);

app.listen(port);

console.log('Server started on: ' + port);