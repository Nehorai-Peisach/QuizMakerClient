import Alerter from 'components/helpers/Alerter';

const QuestionValidator = (type, text, answers) => {
  let isAll = false;

  type
    ? text
      ? answers && answers.length > 1
        ? (isAll = true)
        : Alerter('need more then one question')
      : Alerter('text is missing')
    : Alerter('type is missing');

  return isAll;
};

export default QuestionValidator;
