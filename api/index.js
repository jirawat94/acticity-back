const dotenv = require('dotenv')
dotenv.config()





const express = require('express');
const activityRouter = require('./src/api/activities/activities.route');
const userRouter = require('./src/api/users/users.route');
const sum = require('./src/api/aggregates/aggregates.route')
const authMiddleware = require('./src/middleware/authentication')
const cors = require('cors')
const PORT = 8080;

const app = express();


app.use(cors())
app.use(express.json());

app.use('/api/v1/activities', authMiddleware, activityRouter);
app.use('/api/v1/users', authMiddleware, userRouter);
app.use('/api/v1/aggregates',
    authMiddleware,
    sum);


const config = require('./config');
const { default: mongoose } = require('mongoose');
require('./src/libs/firebase')

module.exports = app;