import axios from 'axios';

export const GetUsers = async (param) => {
  let result;
  await axios.get('http://localhost:4000/api/users/getUserByDetails', param).then((res) => {
    result = res.data;
  });

  return result;
};
