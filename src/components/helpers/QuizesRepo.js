import axios from 'axios';
const config = require('../config/default.json');

const serverUrl = config.server;
const getAllQuizes = serverUrl + '/' + config.api.getAllQuizes;
const getQuizById = serverUrl + '/' + config.api.getQuizById;
const addQuiz = serverUrl + '/' + config.api.addQuiz;
const deleteQuiz = serverUrl + '/' + config.api.deleteQuiz;

export const GetQuizes = async () => {
  let result;
  await axios.get(getAllQuizes).then((res) => {
    result = res.data;
  });

  return result;
};
export const GetQuiz = async (quizId) => {
  let result;
  await axios
    .get(getQuizById, {
      params: {
        id: quizId,
      },
    })
    .then((res) => {
      result = res.data;
    });

  return result;
};

export const AddQuiz = async (quiz) => {
  let result;
  await axios
    .post(addQuiz, quiz)
    .then(() => (result = true))
    .catch(() => (result = false));

  return result;
};

export const DeleteQuiz = async (quiz) => {
  let result;
  await axios
    .post(deleteQuiz, quiz)
    .then(() => (result = true))
    .catch(() => (result = false));

  return result;
};
