import InputComponent from 'components/publicComponents/InputComponent';
import React, { useEffect, useRef, useState } from 'react';
import Answer from './answer';

const AnswerSection = (props) => {
  const [answers, addAnswer, deleteAnswer, type] = props.inputs;
  const [value, setValue] = useState('');
  const [state, setState] = useState(false);
  const [textToShow, setTextToShow] = useState();

  useEffect(() => {
    if (type === 'single') setTextToShow('Only one answer can be correct');
    else setTextToShow('One or more answers can be correct');
  }, [type]);

  const addHandler = () => {
    if (value.length < 1) return;

    const tmp = {
      id: Math.random(),
      text: value,
      is_correct: state,
    };
    addAnswer(tmp);
    setValue('');
    setState(false);
  };

  const stateHandler = () => {
    if (type === 'single') {
      let check = true;
      answers.forEach((x) => {
        if (x.is_correct) check = false;
      });
      if (check) setState((pre) => !pre);
    } else {
      setState((pre) => !pre);
    }
  };
  return (
    <div className="create__body__page">
      {answers.map((item) => (
        <Answer item={item} deleteAnswer={deleteAnswer} />
      ))}
      <InputComponent value={value} setValue={setValue} placeholder="Enter answer..." isRequired={false}>
        Answer's text:
      </InputComponent>
      <div className="answers__btns center">
        <input type="checkbox" onClick={stateHandler} checked={state} />
        <span>{(state ? 'Correct' : 'Incorrect') + ' => ' + textToShow}</span>
        <button onClick={addHandler}>Add</button>
      </div>
    </div>
  );
};

export default AnswerSection;
