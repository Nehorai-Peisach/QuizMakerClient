import axios from 'axios';
const config = require('../config/default.json');

const serverUrl = config.server;
const getAllQuestions = serverUrl + '/' + config.api.getAllQuestions;
const addQuestion = serverUrl + '/' + config.api.addQuestion;
const deleteQuestion = serverUrl + '/' + config.api.deleteQuestion;

export const GetQuestions = async () => {
  let result;
  await axios.get(getAllQuestions).then((res) => {
    result = res.data;
  });
  return result;
};

export const AddQuestion = async (question) => {
  let result;
  await axios
    .post(addQuestion, question)
    .then(() => (result = true))
    .catch(() => (result = false));

  return result;
};

export const DeleteQuestion = async (question) => {
  let result;
  await axios
    .post(deleteQuestion, question)
    .then(() => (result = true))
    .catch(() => (result = false));

  return result;
};
