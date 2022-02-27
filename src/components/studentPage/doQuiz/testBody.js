import { useEffect, useState } from 'react';
import MultiAnswer from './multiAnswer';
import SingleAnswer from './singleAnswer';
const TestBody = (props) => {
  const [type, setType] = useState('single');
  useEffect(() => {
    setType(props.question.type);
  }, [props.question]);

  const onAnswer = (answers) => {
    props.onAnswer({ question_id: props.question._id, answers: answers });
  };
  return (
    <div className="bd">
      <h4 className="bd-question">{props.question.text}</h4>
      {type === 'single' ? (
        <SingleAnswer answers={props.question.answers} studentAnswers={props.answers} onAnswerSelect={onAnswer} />
      ) : (
        <MultiAnswer answers={props.question.answers} studentAnswers={props.answers} onAnswerSelect={onAnswer} questionId={props.question._id} />
      )}
    </div>
  );
};

export default TestBody;
