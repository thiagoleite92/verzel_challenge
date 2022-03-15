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

const createModule = async ({ module }) => {
  const { token } = JSON.parse(localStorage.user);
  await axios.post(
    `${baseURL}/module/new`,
    { module },
    { headers: { Authorization: token } },
  );
};

const editModule = async ({ module }, id) => {
  const { token } = JSON.parse(localStorage.user);
  await axios.put(
    `${baseURL}/module/edit/${id}`,
    { module },
    { headers: { Authorization: token } },
  );
};

const createLecture = async ({ lecture, startDate, moduleId }) => {
  const { token } = JSON.parse(localStorage.user);
  await axios.post(
    `${baseURL}/lecture/new/`,
    { lecture, startDate, moduleId },
    { headers: { Authorization: token } },
  );
};

const editLecture = async ({ lecture, startDate, moduleId }, lectureId) => {
  const { token } = JSON.parse(localStorage.user);
  await axios.put(
    `${baseURL}/lecture/edit/${lectureId}`,
    { lecture, startDate, moduleId },
    { headers: { Authorization: token } },
  );
};

const deleteLecture = async (id) => {
  const { token } = JSON.parse(localStorage.user);
  await axios.delete(
    `${baseURL}/lecture/delete/${id}`,
    { headers: { Authorization: token } },
  );
};

module.exports = {
  postLogin,
  getModules,
  getModule,
  getLecture,
  deleteModule,
  createModule,
  editModule,
  createLecture,
  editLecture,
  deleteLecture,
};
