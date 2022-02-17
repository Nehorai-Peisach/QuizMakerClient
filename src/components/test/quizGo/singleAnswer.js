import { useState } from "react";

const SingleAnswer = (props) => {


const onAnserClick=(event)=>{

  debugger


}

  return (
    <div className="ans">
      {props.answers.map((answer, index) => (
        <label className="ans-container" key={"answer " + index}>
          <input type="radio" name="ans" className="ans-input" onClick={()=>{onAnserClick(answer)}}></input>
          <span className="ans-checkmark radio"></span>
          {answer.text}
        </label>
      ))}
    </div>
  );
};

export default SingleAnswer;
