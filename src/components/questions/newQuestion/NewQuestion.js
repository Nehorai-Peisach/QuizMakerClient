import React, { useState } from 'react';
import AnswerSection from './innerComponents/answerSection';
import QuestionValidator from './innerComponents/QuestionValidator';
import { AddQuestion } from 'components/helpers/QuestionsRepo';
import Alerter from 'components/helpers/Alerter';
import CreateBody from 'components/publicComponents/CreateBody';
import NextFowordFotter from 'components/publicComponents/NextFowordFotter';
import FirstSection from './innerComponents/FirstSection';
import Home from 'components/home/Home';
import QuestionSummary from './innerComponents/QuestionSummary';

const NewQuestion = (props) => {
  const id = props.id;
  const [type, setType] = useState(props.type || 'single');
  const [text, setText] = useState(props.text || '');
  const [lowerText, setLowerText] = useState(props.lowerText || '');
  const [answers, setAnswers] = useState(props.answers || []);
  const [tags, setTags] = useState(props.tags || '');
  const onType = (type) => setType(type);
  const onText = (text) => setText(text);
  const onLowerText = (text) => setLowerText(text);
  const addAnswer = (answers) => setAnswers((pre) => [...pre, answers]);

  const deleteAnswer = (id) => {
    setAnswers((pre) => pre.filter((x) => x.id !== id));
  };
  const onTags = (tags) => setTags(tags);

  const onSubmitHandler = () => {
    if (!QuestionValidator(text, answers)) return;
    let tmp = tags.trim().toLowerCase().split(',');
    const question = {
      type: type,
      text: text,
      lower_text: lowerText,
      answers: answers,
      tags: tmp,
    };
    if (id != undefined) question._id = id;
    !AddQuestion(question)
      ? Alerter('somthing went worng... cant all question')
      : props.changeComponent(<Home changeComponent={props.changeComponent} />);
  };

  const firstInputs = [type, onType, text, onText, lowerText, onLowerText, tags, onTags];
  const answerInputs = [answers, addAnswer, deleteAnswer, type];
  const summaryInputs = [type, text, lowerText, answers, tags];
  const pageStages = [
    { header: "General Question's Details", page: <FirstSection inputs={firstInputs} /> },
    { header: "Question's Answers", page: <AnswerSection inputs={answerInputs} /> },
    { header: "Question's Summary", page: <QuestionSummary inputs={summaryInputs} /> },
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
    <div className="create">
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
