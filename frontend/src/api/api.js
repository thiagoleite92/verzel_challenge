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

const getModules = async () => {
  const { data } = await axios.get(
    `${baseURL}/module`,
    { headers },
  );

  return data;
};

const getModule = async (id) => {
  const { data } = await axios.get(
    `${baseURL}/module/${id}`,
    { headers },
  );

  return data;
};

const getLecture = async (id) => {
  const { data } = await axios.get(
    `${baseURL}/lecture/${id}`,
    { headers },
  );

  return data;
};

const deleteModule = async (id) => {
  const { token } = JSON.parse(localStorage.user);
  await axios.delete(
    `${baseURL}/module/delete/${id}`,
    { headers: { Authorization: token } },
  );
};

module.exports = {
  postLogin,
  getModules,
  getModule,
  getLecture,
  deleteModule,
};
