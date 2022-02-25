import axios from 'axios';

export const GetQuestions = async () => {
  let result;
  await axios.get('http://localhost:4000/api/questions/getAllQuestions').then((res) => {
    result = res.data;
  });
  return result;
};

export const AddQuestion = async (question) => {
  let result;
  await axios
    .post('http://localhost:4000/api/questions/addQuestion', question)
    .then(() => (result = true))
    .catch(() => (result = false));

  return result;
};

export const DeleteQuestion = async (question) => {
  let result;
  await axios
    .post('http://localhost:4000/api/questions/deleteQuestion', question)
    .then(() => (result = true))
    .catch(() => (result = false));

  return result;
};
