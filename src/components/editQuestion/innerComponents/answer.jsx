import React from "react";
import "../../../styles/editQuestion/innerStyles/answer.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const answer = (props) => {
  return (
    <div className="answer_main">
      <button className="answer_btn_delete">X</button>
      <Editor
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        //   onEditorStateChange={this.onEditorStateChange}
      />
      <div>
        <input type="radio" value="" onChange="" />
        Incorrect
      </div>
    </div>
  );
};

export default answer;
