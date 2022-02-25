import React, { useEffect, useState } from 'react';
import QuizValidator from './innerComponents/QuizValidator';
import { AddQuiz } from 'components/helpers/QuizesRepo';
import CreateBody from '../../publicComponents/CreateBody';
import GeneralDetails from './innerComponents/GeneralDetails';
import MessagesDetails from './innerComponents/MessagesDetails';
import QustionsChoosing from './innerComponents/QustionsChoosing';
import Alerter from 'components/helpers/Alerter';
import NextFowordFotter from '../../publicComponents/NextFowordFotter';
import ManageQuizes from '../manageQuizes/ManageQuizes';
import FinalPage from './innerComponents/FinalPage';
import Home from 'components/home/Home';

const NewQuiz = (props) => {
  const id = props.id;
  const [language, setLanguage] = useState(props.language);
  const [type, setType] = useState(props.type);
  const [name, setName] = useState(props.name);
  const [passGrade, setPassGrade] = useState(props.passGrade);
  const [isShowResult, setIsShowResult] = useState(props.isShowResult || false);
  const [header, setHeader] = useState(props.header);
  const [successMsg, setSuccessMsg] = useState(props.successMsg);
  const [failMsg, setFailMsg] = useState(props.failMsg);
  const [questionsId, setQuestionsId] = useState(props.questionsId || []);

  const onLanguage = (input) => setLanguage(input);
  const onType = (input) => setType(input);
  const onName = (input) => setName(input);
  const onPassGrade = (input) => setPassGrade(input);
  const onIsShowResult = (input) => setIsShowResult(input);

  const onHeader = (input) => setHeader(input);
  const addQuestionId = (id) => setQuestionsId((pre) => [...pre, id]);
  const removeQuestionId = (id) => setQuestionsId((pre) => pre.filter((x) => x != id));
  const onSuccessMsg = (input) => setSuccessMsg(input);
  const onFailMsg = (input) => setFailMsg(input);

  const onSubmitClick = async () => {
    if (!QuizValidator(language, type, name, passGrade, header, successMsg, failMsg, questionsId)) return;
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
    if (id != undefined) quiz._id = id;
    (await AddQuiz(quiz))
      ? props.changeComponent(<ManageQuizes changeComponent={props.changeComponent} />)
      : Alerter('somthing went worng... cant all quiz');
  };

  const generalDetailsInputs = [language, onLanguage, type, onType, name, onName, passGrade, onPassGrade, isShowResult, onIsShowResult];
  const messagesDetailsInputs = [header, onHeader, failMsg, onFailMsg, successMsg, onSuccessMsg];
  const qustionsChoosingInputs = [questionsId, addQuestionId, removeQuestionId];
  const finalPageInputs = [language, type, name, passGrade, header, successMsg, failMsg, questionsId, isShowResult];
  const pageStages = [
    { header: "General Quiz's Details", page: <GeneralDetails inputs={generalDetailsInputs} /> },
    { header: "Quiz's Messages", page: <MessagesDetails inputs={messagesDetailsInputs} /> },
    { header: "Quiz's Questions", page: <QustionsChoosing inputs={qustionsChoosingInputs} /> },
    { header: "Quiz's Summary", page: <FinalPage inputs={finalPageInputs} /> },
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
        onSubmit={onSubmitClick}
        stagesNum={pageStages.length}
        currentStage={currentPageStage}
      />
    </div>
  );
};

export default NewQuiz;
