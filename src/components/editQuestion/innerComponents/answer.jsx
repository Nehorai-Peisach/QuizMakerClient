import React, { useState } from "react";
import "../../../styles/editQuestion/innerStyles/answer.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TextBlock from "components/textBlock";

const Answer = (props) => {
  const [tmpAnswer, setTmpAnswer] = useState({});
  const [radioState, setRadioState] = useState(false);
  const onAnswerTextChange = (event) => {
    setRadioState((prevState) => {
      return !prevState;
    });
  };
  const removeAnswer=()=>{
    props.RemoveAnswer(props.myIndex-1);
  }

  return (
    <div className="answer_main">
      <button className="answer_btn_delete" onClick={removeAnswer}>X</button>
      <TextBlock title={props.title} onMessageChange={onAnswerTextChange} />
      <div>
        <input type="radio" onChange={onAnswerTextChange} value={radioState} />
        {radioState ? "Correct" : "Incorrect"}
      </div>
    </div>
  );
};

export default Answer;
