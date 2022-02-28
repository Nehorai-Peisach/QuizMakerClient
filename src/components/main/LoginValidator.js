import Alerter from 'components/helpers/Alerter';

const loginValidator = (username, password) => {
  let isAll = false;

  username && username.length > 2
    ? password && password.length > 5
      ? (isAll = true)
      : Alerter('You have entered an invalid password! (more than 5 letters)')
    : Alerter('You have entered an invalid username! (more than 2 letters)');

  return isAll;
};

export default loginValidator;
