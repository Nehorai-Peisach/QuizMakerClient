import React, { useState } from 'react';
import AnswerSection from './innerComponents/answerSection';
import QuestionValidator from './innerComponents/QuestionValidator';
import { AddQuestion } from 'components/helpers/QuestionsRepo';
import Alerter from 'components/helpers/Alerter';
import CreateBody from 'components/publicComponents/CreateBody';
import NextFowordFotter from 'components/publicComponents/NextFowordFotter';
import FirstSection from './innerComponents/FirstSection';

const NewQuestion = (props) => {
  const [type, setType] = useState();
  const [text, setText] = useState();
  const [lowerText, setLowerText] = useState();
  const [answers, setAnswers] = useState([]);
  const [tags, setTags] = useState([]);

  const onType = (type) => setType(type);
  const onText = (text) => setText(text);
  const onLowerText = (text) => setLowerText(text);
  const onAnswers = (answers) => setAnswers(answers);
  const onTags = (tags) => {
    let tmp = tags.split(',');
    setTags([...tmp]);
  };

  const onSubmitHandler = () => {
    if (!QuestionValidator(type, text, answers)) return;

    const question = {
      type: type,
      text: text,
      answers: answers,
    };
    if (!AddQuestion(question)) Alerter('somthing went worng... cant all question');
  };

  const firstInputs = [type, onType, text, onText, lowerText, onLowerText, tags, onTags];
  const answerInputs = [answers, onAnswers];
  const pageStages = [
    { header: "General Question's Details", page: <FirstSection inputs={firstInputs} /> },
    { header: "Question's Answers", page: <AnswerSection inputs={answerInputs} /> },
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
    <div className="create_question">
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

export default NewQuestion;
