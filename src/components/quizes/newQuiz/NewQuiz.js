import React, { useState } from 'react';
import QuizValidator from './innerComponents/QuizValidator';
import { AddQuiz } from 'components/helpers/QuizesRepo';
import CreateQuizBody from './innerComponents/CreateQuizBody';
import CreateQuizFotter from './innerComponents/CreateQuizFotter';
import GeneralDetails from './innerComponents/GeneralDetails';
import MessagesDetails from './innerComponents/MessagesDetails';
import QustionsChoosing from './innerComponents/QustionsChoosing';

const NewQuiz = (props) => {
  const [language, setLanguagee] = useState();
  const [type, setType] = useState();
  const [name, setName] = useState();
  const [passGrade, setPassGrade] = useState();
  const [isShowResult, setIsShowResult] = useState(false);
  const [header, setHeader] = useState();
  const [questionsId, setQuestionsId] = useState([]);
  const [successMsg, setSuccessMsg] = useState();
  const [failMsg, setFailMsg] = useState();
  const [currentPageStage, setCurrentPageStage] = useState(0);
  
  const handleSubmit = () => {
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
    AddQuiz(quiz);
  };

  const onLanguageChange = (event) => {
    setLanguagee(event);
  };
  const onTypeChange = (event) => {
    setType(event);
  };
  const onNameChange = (event) => {
    setName(event);
  };
  const onGradeChange = (event) => {
    setPassGrade(event);
  };
  const onShowCorrectAnswerChange = (event) => {
    setIsShowResult(event);
  };
  const onHeaderChange = (event) => {
    setHeader(event);
  };
  const onMessageSuccessChange = (event) => {
    setSuccessMsg(event);
  };
  const onMessageFailChange = (event) => {
    setFailMsg(event);
  };
  const onQuestionSelect = (isSelected, obj) => {
    setQuestionsId((preState) => {
      isSelected ? preState.push(obj._id) : preState.filter((a) => a != obj._id);

      return preState;
    });
  };

  const generalDetailsInputs = [onLanguageChange, onTypeChange, onNameChange, onGradeChange, onShowCorrectAnswerChange];
  const messagesDetailsInputs = [onHeaderChange, onMessageFailChange, onMessageSuccessChange];
  const pageStages = [
    { header: "General Quiz's Details", page: <GeneralDetails inputs={generalDetailsInputs} /> },
    { header: "Quiz's Messages", page: <MessagesDetails inputs={messagesDetailsInputs} /> },
    { header: "Quiz's Questions", page: <QustionsChoosing onQuestionSelect={onQuestionSelect} /> },
  ];

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
      <CreateQuizBody header={pageStages[currentPageStage].header} page={pageStages[currentPageStage].page} />
      <CreateQuizFotter onNext={nextPageStage} onPrevios={previosPageStage} />
    </div>
  );
};

export default NewQuiz;
