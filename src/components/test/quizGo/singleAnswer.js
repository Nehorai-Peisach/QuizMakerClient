import { useState } from "react";

const SingleAnswer = (props) => {


  const onAnswerSelect = (answer) => {
    props.onAnswerSelect(answer);
  };

  return (
    <div className="ans">
      {props.answers.map((answer, index) => (
        <label className="ans-container" key={"answer " + index}>
          <input type="radio" name="ans" className="ans-input" onClick={()=>{onAnswerSelect(answer)}}></input>
          <span className="ans-checkmark radio"></span>
          {answer.text}
        </label>
      ))}
    </div>
  );
};

export default SingleAnswer;
