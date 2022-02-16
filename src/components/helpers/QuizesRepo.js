import axios from 'axios';

export const GetQuizes = async () => {
  await axios.get('http://localhost:4000/api/quizes/addNewTest').then((res) => {
    return res;
  });
};
