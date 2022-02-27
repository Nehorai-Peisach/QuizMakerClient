import axios from 'axios';

export const GetReportByQuiz = async (param) => {
  let result;
  await axios.get('http://localhost:4000/api/reports/getReportByQuiz',param).then((res) => {
    result = res.data;
  });
  return result;
};

export const GetAllStudent = async (param) => {
  let result;
  await axios.get('http://localhost:4000/api/students/getAllStudents',param).then((res) => {
    result = res.data;
  });
  return result;
};

export const GetReportByStudent = async (param) => {
  let result;
  await axios.get('http://localhost:4000/api/reports/getReportByStudent',param).then((res) => {
    result = res.data;
  });
  return result;
};