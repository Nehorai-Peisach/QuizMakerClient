import axios from 'axios';

export const GetQuizes = async () => {
  let result;
  await axios.get('http://localhost:4000/api/quizes/getQuizes').then((res) => {
    result = res.data;
  });

  return result;
};
export const GetQuiz = async (topicId) => {
  let result;
  await axios
    .get('http://localhost:4000/api/quizes/getQuiz', {
      params: {
        topicId: `${topicId}`,
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
    .post('http://localhost:4000/api/quizes/addQuiz', quiz)
    .then(() => (result = true))
    .catch(() => (result = false));

  return result;
};
