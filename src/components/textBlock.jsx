import React from "react";
import  {Editor} from "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../styles/sass/textBlock/textBlock.scss";
const TextBlock = (props) => {
  return (
    <div className="textBlock_main">
      <div className="textBlock_title">
        <p>{props.title}</p>
      </div>
      <div className="textBlock_editor">
        <Editor
          //   editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          //   onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    </div>
  );
};

export default TextBlock;
