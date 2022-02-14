import React, { useState } from "react";
import FirstSection from "./innerComponents/firstSection";
import AnswerSection from "./innerComponents/answerSection";
import TagsSection from "./innerComponents/tagsSection";
import "../../styles/editQuestion/editQuestion.css";

const EditQuestion = (props) => {
const[firstType,setFirstType]=useState("");
const[firstText,setFirstText]=useState("");
const[firstTextBelow,setFirstTextBelow]=useState("");

  const onTypeChange=(event)=>{
    setFirstType(event)
  }
  const onFirstTextChange=(event)=>{
    setFirstText(event)
  }
  const onFirstTextBelowChange=(event)=>{
    setFirstTextBelow(event)
  }


  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);  
  return (
    <div className="editQuestion_container">
      <FirstSection onTypeChange={onTypeChange} onFirstTextChange={onFirstTextChange} onFirstTextBelowChange={onFirstTextBelowChange}/>
      {ColoredLine("gray")}
      <AnswerSection />
      {ColoredLine("gray")}
      <TagsSection />
    </div>
  );
};

export default EditQuestion;
