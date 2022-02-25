import Alerter from 'components/helpers/Alerter';

const QuestionValidator = (text, answers) => {
  let isAll = false;

  text ? (answers && answers.length > 1 ? (isAll = true) : Alerter('need more then one question')) : Alerter('text is missing');

  return isAll;
};

export default QuestionValidator;
