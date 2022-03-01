import { useEffect, useState } from 'react';
import MultiAnswer from './multiAnswer';
import SingleAnswer from './singleAnswer';
const TestBody = (props) => {

  const onAnswer = (answers) => {
    props.onAnswer({ question_id: props.question._id, answers: answers });
  };
  return (
    <div className="bd">
      <h4 className="bd-question">{props.question.text}</h4>
      <h4 className="bd-question">{props.question.lower_text}</h4>
      {props.question.type === 'single' ? (
        <SingleAnswer answers={props.question.answers} studentAnswers={props.studentAnswers} onAnswerSelect={onAnswer} />
      ) : (
        <MultiAnswer answers={props.question.answers} studentAnswers={props.studentAnswers} onAnswerSelect={onAnswer} questionId={props.question._id} />
      )}
    </div>
  );
};

export default TestBody;
