import axios from 'axios';
const config = require('../config/default.json');

const serverUrl = config.server;
const getAllStudents = serverUrl + '/' + config.api.getAllStudents;
const addStudent = serverUrl + '/' + config.api.addStudent;

export const GetStudents = async () => {
  let result;
  await axios.get(getAllStudents).then((res) => {
    result = res.data;
  });

  return result;
};

export const AddStudent = async (student) => {
  let result;
  await axios
    .post(addStudent, student)
    .then((res) => (result = res))
    .catch((err) => console.log(err));

  return result;
};
