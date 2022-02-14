import React from "react";
import FirstSection from "./innerComponents/firstSection";
import AnswerSection from "./innerComponents/answerSection";
import TagsSection from "./innerComponents/tagsSection";
import "../../styles/editQuestion/editQuestion.css";

const editQuestion = (props) => {

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
      <FirstSection />
      {ColoredLine("gray")}
      <AnswerSection />
      {ColoredLine("gray")}
      <TagsSection />
    </div>
  );
};

export default editQuestion;
