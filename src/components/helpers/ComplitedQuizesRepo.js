import axios from 'axios';
const config = require('../config/default.json');

const serverUrl = config.server;
const addCompletedQuiz = serverUrl + '/' + config.api.addCompletedQuiz;

export const SubmitQuiz = async (complitedQuiz) => {
  let result;
  await axios
    .post(addCompletedQuiz, complitedQuiz)
    .then((res) => (result = res))
    .catch((err) => (result = err));

  return result;
};
