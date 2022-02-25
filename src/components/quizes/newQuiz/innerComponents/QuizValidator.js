import Alerter from 'components/helpers/Alerter';

const QuizValidator = (language, type, name, passGrade, header, successMsg, failMsg, questionsId) => {
  let isAll = false;
  language
    ? type
      ? name && name.length > 0
        ? passGrade && passGrade > 0
          ? header && header.length > 0
            ? questionsId && questionsId.length > 1
              ? successMsg && successMsg.length > 0
                ? failMsg && failMsg.length > 0
                  ? (isAll = true)
                  : Alerter('failMsg is missing')
                : Alerter('successMsg is missing')
              : Alerter('Need more then 1 question')
            : Alerter('heade is missing')
          : Alerter('Passing Grade need to be more then 0')
        : Alerter('name is missing')
      : Alerter('type is missing')
    : Alerter('languege is missing');

  return isAll;
};

export default QuizValidator;
