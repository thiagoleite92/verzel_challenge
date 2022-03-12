const express = require('express');
const cors = require('cors');

const userRoutes = require('../../routes/user');
const moduleRoutes = require('../../routes/module');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.send('oi');
});

app.use('/user', userRoutes);
app.use('/module', moduleRoutes);

module.exports = app;
