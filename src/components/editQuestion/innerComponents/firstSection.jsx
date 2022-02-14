import React from "react";
import "../../../styles/editQuestion/innerStyles/firstSection.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TextBlock from "components/textBlock";

const firstSection = (props) => {

  const onTypeChange=(event)=>{
    props.onTypeChange(event.target.value)
  }
  const onFirstTextChange=(event)=>{
    props.onFirstTextChange(event.target.value)
  }
  const onFirstTextBelowChange=(event)=>{
    props.onFirstTextBelowChange(event.target.value)
  }
  return (
    <div className="firstSection_main">
      <p className="firstSection_p_field">Question text: </p>
      <p className="firstSection_field">Development</p>
      <p className="firstSection_p_type">Question type: </p>
      <div className="firstSection_type">
        <div>
          <select onChange={onTypeChange}>
            <option value="Orange">Orange</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
          </select>
        </div>
      </div>
      <div className="firstSection_text">
      <TextBlock title="Question text: " onMessageChange={onFirstTextChange}/>
      </div>
      <div className="firstSection_textBelow">
      <TextBlock title="Text below question: " onMessageChange={onFirstTextBelowChange}/>
      </div>
    </div>
  );
};

export default firstSection;
