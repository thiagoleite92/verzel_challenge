const express = require('express');
const cors = require('cors');

const userRoutes = require('../routes/user');
const moduleRoutes = require('../routes/module');
const lectureRoutes = require('../routes/lecture');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.send('oi');
});

app.use('/user', userRoutes);
app.use('/module', moduleRoutes);
app.use('/lecture', lectureRoutes);

module.exports = app;
