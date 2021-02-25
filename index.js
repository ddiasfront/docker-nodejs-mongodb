const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://mongo:27017/docker-node-mongo',
    {useNewUrlParser: true}
).then(() => console.log('Connected'))
.catch(err => console.log(err));

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(3000, '0.0.0.0')