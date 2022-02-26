import Alerter from 'components/helpers/Alerter';

const loginValidator = (firstName, lastName, email) => {
  let isAll = false;
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  firstName && firstName.length > 2
    ? lastName && lastName.length > 2
      ? email && email.match(mailFormat)
        ? (isAll = true)
        : Alerter('You have entered an invalid email address!')
      : Alerter('You have entered an invalid firstname! (more than 2 letters)')
    : Alerter('You have entered an invalid lastname! (more than 2 letters)');

  return isAll;
};

export default loginValidator;
