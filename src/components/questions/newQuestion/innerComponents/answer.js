import InputComponent from 'components/publicComponents/InputComponent';
import React, { useEffect, useState } from 'react';

const Answer = (props) => {
  const id = Math.random();
  const [state, setState] = useState(false);
  const [value, setValue] = useState();
  const onBtnPressed = () => {
    setState((preState) => !preState);
  };

  useEffect(() => {}, [state, value]);

  return (
    <div>
      <button onClick={() => props.deleteAnswer(id)}>X</button>
      <InputComponent value={value} setValue={setValue} placeholder="Enter question">
        Question's text:
      </InputComponent>
      <input type="radio" onClick={onBtnPressed} value={state} />
      {state ? 'Correct' : 'Incorrect'}
    </div>
  );
};

export default Answer;
