import InputComponent from 'components/publicComponents/InputComponent';
import React, { useEffect, useState } from 'react';

const Answer = (props) => {
  return (
    <div className="answers">
      <button onClick={() => props.deleteAnswer(props.item.id)}>X</button>
      <span>{props.item.text}</span>
      {'=>'}
      <span>{props.item.is_correct.toString()}</span>
    </div>
  );
};

export default Answer;
