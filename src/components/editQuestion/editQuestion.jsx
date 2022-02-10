import React from "react";
import FirstSection from "./innerComponents/firstSection";
import AnswerSection from "./innerComponents/answerSection";
import TagsSection from "./innerComponents/tagsSection";

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
    <div>
      <FirstSection />
      {ColoredLine("gray")}
      <AnswerSection />
      {ColoredLine("gray")}
      <TagsSection />
    </div>
  );
};

export default editQuestion;
