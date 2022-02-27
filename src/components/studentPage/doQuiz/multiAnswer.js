import { useEffect, useState } from "react";

const MultiAnswer = (props) => {
  


  const onAnswerSelect = (index) => {
    let tmpList = props.studentAnswers;
    tmpList[index] = !tmpList[index];
    props.onAnswerSelect(tmpList);
  };
  return (
    <div className="ans">
      {props.studentAnswers &&
        props.answers.map((answer, index) => (
          <label className="ans-container" key={'answer ' + index}>
            <input
              type="checkbox"
              name="ans"
              className="ans-input"
              checked={props.studentAnswers[index]}
              onChange={() => {
                onAnswerSelect(index);
              }}
            ></input>
            <span className="ans-checkmark checkbox"></span>
            {answer.text}
          </label>
        ))}
    </div>
  );
};

export default MultiAnswer;
