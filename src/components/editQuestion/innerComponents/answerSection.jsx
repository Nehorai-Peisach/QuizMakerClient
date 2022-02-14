import React, { useEffect, useState } from "react";
import Answer from "./answer";
import "../../../styles/editQuestion/innerStyles/answerSection.css";

const AnswerSection = (props) => {
  const [answersState, setAnswersState] = useState([]);

  useEffect(() => {
    let tmpArr = [];
    for (let i = 0; i < 3; i++) {
      let tmpAnswer = <Answer myIndex={i} title={`option ${i + 1}`} key={i+1} RemoveAnswer={RemoveAnswer}/>;
      tmpArr.push(tmpAnswer);
    }
    setAnswersState(tmpArr);
  }, []);
  const AddAnswer = () => {
    let length=answersState.length+1;
    let tmpanswer=
    (<Answer myIndex={length} title={`option ${length}`} key={length-1} RemoveAnswer={RemoveAnswer}/>);
    setAnswersState((prevState)=>{
      return [...prevState,tmpanswer]
    });
  };
  const RemoveAnswer = (index) => {
    let tmpArr=answersState;
    tmpArr.splice(index);
    setAnswersState(()=>{
      return [...tmpArr]
    });
  };
  return (
    <div>
      {answersState}
      <button onClick={AddAnswer}>Add option</button>
    </div>
  );
};

export default AnswerSection;
