import Alerter from 'components/helpers/Alerter';

const QuizValidator = (languege, type, name, passGrade, header, questionsId, successMsg, failMsg) => {
  const isAll = false;

  languege
    ? Alerter('languege is missing')
    : type
    ? Alerter('type is missing')
    : name.length && name.length > 0
    ? Alerter('name is missing')
    : passGrade && passGrade > 0
    ? Alerter('Passing Grade need to be more then 0')
    : header && header.length > 0
    ? Alerter('heade is missing')
    : questionsId && questionsId.length > 1
    ? Alerter('Need more then 1 question')
    : successMsg && successMsg.length > 0
    ? Alerter('successMsg is missing')
    : failMsg && failMsg.length > 0
    ? Alerter('failMsg is missing')
    : (isAll = true);

  return isAll;
};

export default QuizValidator;
