import axios from 'axios';

export const GetReportByQuiz = async (param) => {
  let result;
  await axios.get('http://localhost:4000/api/reports/getReportByQuiz',param).then((res) => {
    result = res.data;
  });
  return result;
};