import { useEffect, useState } from "react";

const MultiAnswer = (props) => {
  const [answerList, setAnswerList] = useState([]);

  const onAnswerSelect = (answer) => {
    let tmpList = answerList;
    if (tmpList.includes(answer)) {
      tmpList.splice(
        tmpList.findIndex((a) => a.text === answer.text),
        1
      );
    } else {
      tmpList.push(answer);
    }
    setAnswerList(tmpList);
    props.onAnswerSelect(tmpList);
  };
  useEffect(() => {
    setAnswerList(()=>{return []});
    document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
  }, [props.questionId]);
  return (
    <div className="ans">
      {props.answers.map((answer, index) => (
        <label className="ans-container" key={"answer " + index}>
          <input
            type="checkbox"
            name="ans"
            className="ans-input"
            onClick={() => {
              onAnswerSelect(answer);
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
