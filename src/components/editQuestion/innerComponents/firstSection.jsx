import React from "react";
import "./firstSection.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const firstSection = (props) => {
  return (
    <div className="firstSection_main">
      <p className="firstSection_p_field">Question text: </p>
      <p className="firstSection_field">Development</p>
      <p className="firstSection_p_type">Question type: </p>
      <div className="firstSection_type">
        <div>
          <select
            // defaultValue={this.state.selectValue}
            // onChange={this.handleChange}
          >
            <option value="Orange">Orange</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
          </select>
        </div>
      </div>
      <p className="firstSection_p_text">Question text: </p>
      <div className="firstSection_text">
        <Editor
          //   editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          //   onEditorStateChange={this.onEditorStateChange}
        />
      </div>
      <p className="firstSection_p_textBelow">Text below question:</p>
      <div className="firstSection_textBelow">
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

export default firstSection;
