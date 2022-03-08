import axios from 'axios';
const config = require('../config/default.json');

const serverUrl = config.server;
const getReportByQuiz = serverUrl + '/' + config.api.getReportByQuiz;
const getAllStudents = serverUrl + '/' + config.api.getAllStudents;
const getReportByStudent = serverUrl + '/' + config.api.getReportByStudent;

export const GetReportByQuiz = async (param) => {
  let result;
  await axios.get(getReportByQuiz, param).then((res) => {
    result = res.data;
  });
  return result;
};

export const GetAllStudent = async (param) => {
  let result;
  await axios.get(getAllStudents, param).then((res) => {
    result = res.data;
  });
  return result;
};

export const GetReportByStudent = async (param) => {
  let result;
  await axios.get(getReportByStudent, param).then((res) => {
    result = res.data;
  });
  return result;
};
