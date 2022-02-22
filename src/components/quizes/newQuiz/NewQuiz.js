import React, { useEffect, useState } from 'react';
import QuizValidator from './innerComponents/QuizValidator';
import { AddQuiz } from 'components/helpers/QuizesRepo';
import CreateBody from '../../publicComponents/CreateBody';
import GeneralDetails from './innerComponents/GeneralDetails';
import MessagesDetails from './innerComponents/MessagesDetails';
import QustionsChoosing from './innerComponents/QustionsChoosing';
import Alerter from 'components/helpers/Alerter';
import NextFowordFotter from '../../publicComponents/NextFowordFotter';

const NewQuiz = (props) => {
  const [language, setLanguage] = useState();
  const [type, setType] = useState();
  const [name, setName] = useState();
  const [passGrade, setPassGrade] = useState();
  const [isShowResult, setIsShowResult] = useState(false);
  const [header, setHeader] = useState();
  const [successMsg, setSuccessMsg] = useState();
  const [failMsg, setFailMsg] = useState();
  const [questionsId, setQuestionsId] = useState([]);

  const onLanguage = (input) => setLanguage(input);
  const onType = (input) => setType(input);
  const onName = (input) => setName(input);
  const onPassGrade = (input) => setPassGrade(input);
  const onIsShowResult = (input) => setIsShowResult(input);

  const onHeader = (input) => setHeader(input);
  const onSuccessMsg = (input) => setSuccessMsg(input);
  const onFailMsg = (input) => setFailMsg(input);

  const onSubmitHandler = () => {
    if (!QuizValidator(language, type, name, passGrade, header, questionsId, successMsg, failMsg)) return;

    const quiz = {
      language: language,
      type: type,
      name: name,
      passing_grade: passGrade,
      is_show_result: isShowResult,
      header: header,
      questions_id: questionsId,
      success_mgs: successMsg,
      fail_msg: failMsg,
      date: Date.now(),
    };

    if (!AddQuiz(quiz)) Alerter('somthing went worng... cant all quiz');
  };

  const onQuestionsId = (questions) => setQuestionsId(questions);

  const generalDetailsInputs = [language, onLanguage, type, onType, name, onName, passGrade, onPassGrade, isShowResult, onIsShowResult];
  const messagesDetailsInputs = [header, onHeader, failMsg, onFailMsg, successMsg, onSuccessMsg];
  const pageStages = [
    { header: "General Quiz's Details", page: <GeneralDetails inputs={generalDetailsInputs} /> },
    { header: "Quiz's Messages", page: <MessagesDetails inputs={messagesDetailsInputs} /> },
    { header: "Quiz's Questions", page: <QustionsChoosing onQuestionsId={onQuestionsId} /> },
  ];

  const [currentPageStage, setCurrentPageStage] = useState(0);

  const nextPageStage = () => {
    if (currentPageStage + 1 < pageStages.length) {
      setCurrentPageStage((prevState) => {
        return prevState + 1;
      });
    }
  };
  const previosPageStage = () => {
    if (currentPageStage > 0) {
      setCurrentPageStage((prevState) => {
        return prevState - 1;
      });
    }
  };

  return (
    <div className="create_quiz">
      <CreateBody header={pageStages[currentPageStage].header} page={pageStages[currentPageStage].page} />
      <NextFowordFotter
        onNext={nextPageStage}
        onPrevios={previosPageStage}
        onSubmit={onSubmitHandler}
        stagesNum={pageStages.length}
        currentStage={currentPageStage}
      />
    </div>
  );
};

export default NewQuiz;
