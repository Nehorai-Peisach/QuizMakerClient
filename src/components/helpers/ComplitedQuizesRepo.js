import axios from 'axios';

export const SubmitQuiz = async (complitedQuiz) => {
  let result;
  await axios
    .post('http://localhost:4000/api/completedQuizes/addCompletedQuiz', complitedQuiz)
    .then((res) => (result = res))
    .catch((err) => (result = err));

  return result;
};
