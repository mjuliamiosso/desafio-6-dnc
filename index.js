const express = require('express');
const app = express();
app.use(express.json());

const path = require('path');

const cors = require('cors')
app.use(cors());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const logger = require('morgan');
app.use(logger('dev'));

const routes = require('./src/routes')

require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;
