import React, { useState } from "react";
import  {Editor} from "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const TextBlock = (props) => {

const onEditorStateChange=(event)=>{
  props.onMessageChange(event.getCurrentContent().getPlainText());
}

  return (
    <div className="textBlock_main">
      <div className="textBlock_title">
        <p>{props.title}</p>
      </div>
      <div className="textBlock_editor">
        <Editor
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
  );
};

export default TextBlock;
