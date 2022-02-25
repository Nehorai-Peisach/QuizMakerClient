import React, { useEffect, useRef, useState } from 'react';
import Answer from './answer';

const AnswerSection = (props) => {
  const [answers, setAnswers] = useState([]);

  const deleteAnswer = (id) => setAnswers((pre) => pre.filter((x) => x.id !== id));
  const AddAnswer = () => {
    setAnswers((pre) => [...pre, <Answer deleteAnswer={deleteAnswer} />]);
  };

  return (
    <div>
      {answers}
      <button onClick={AddAnswer}>Add option</button>
    </div>
  );
};

export default AnswerSection;
