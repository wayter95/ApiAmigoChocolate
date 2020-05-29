const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const cors = require('cors');

const app = express();
app.use(cors())

app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.listen(process.env.PORT)