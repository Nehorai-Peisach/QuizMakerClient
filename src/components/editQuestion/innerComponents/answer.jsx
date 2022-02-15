import React, { useEffect, useState } from "react";
import "../../../styles/editQuestion/innerStyles/answer.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TextBlock from "components/textBlock";

const Answer = (props) => {
  const [radioState, setRadioState] = useState(false);

  const onAnswerTextChange = (event) => {
   props.onTextChange(event,props.myIndex)
  };
  const onBtnPressed = (event) => {
    props.onIsCorrectChange(!radioState,props.myIndex);
    setRadioState((prevState) => {
      return !prevState;
    });
  };
  const removeAnswer = () => {
    // props.RemoveAnswer(props.myIndex-1);
  };
  return (
    <div className="answer_main">
      <button className="answer_btn_delete" onClick={removeAnswer} >
        X
      </button>
      <TextBlock title={props.title} onMessageChange={onAnswerTextChange} />
      <div>
        <input type="radio" onClick={onBtnPressed} value={radioState} />
        {radioState ? "Correct" : "Incorrect"}
      </div>
    </div>
  );
};

export default Answer;
