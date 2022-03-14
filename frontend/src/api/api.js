const axios = require('axios');

const baseURL = 'http://localhost:3001';

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const postLogin = async ({ email, password }) => {
  const { data } = await axios.post(
    `${baseURL}/user/login`,
    { email, password },
    { headers },
  );

  return data;
};

module.exports = {
  postLogin,
};