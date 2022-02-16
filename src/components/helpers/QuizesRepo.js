import axios from 'axios';

export const GetQuizes = async () => {
  await axios.get('http://localhost:4000/api/quizes/getQuizes').then((res) => {
    return res;
  });
};
