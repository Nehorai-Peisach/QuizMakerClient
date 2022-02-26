import axios from 'axios';

export const GetStudents = async () => {
  let result;
  await axios.get('http://localhost:4000/api/students/getAllStudents').then((res) => {
    result = res.data;
  });

  return result;
};

export const AddStudent = async (student) => {
  let result;
  await axios
    .post('http://localhost:4000/api/students/addStudent', student)
    .then((res) => (result = res))
    .catch((err) => console.log(err));

  return result;
};
