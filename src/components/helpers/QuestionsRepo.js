import axios from 'axios';

export const GetQuestions = async () => {
  let result;
  await axios.get('http://localhost:4000/api/Questions/getQuestions').then((res) => {
    result = res.data;
  });
  return result;
};