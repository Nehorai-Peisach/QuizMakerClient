import axios from 'axios';
const config = require('../config/default.json');

const serverUrl = config.server;
const getUserByDetails = serverUrl + '/' + config.api.getUserByDetails;

export const GetUsers = async (param) => {
  let result;
  await axios
    .get(getUserByDetails, param)
    .then((res) => {
      result = res.data;
    })
    .catch((result = null));

  return result;
};
