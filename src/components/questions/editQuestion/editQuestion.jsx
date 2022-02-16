import React, { useState } from 'react';
import FirstSection from './innerComponents/firstSection';
import AnswerSection from './innerComponents/answerSection';
import TagsSection from './innerComponents/tagsSection';
import "../../../styles/editQuestion/editQuestion.css";
import axios from 'axios';
const uuid=require('uuid')

const EditQuestion = (props) => {
  const [firstType, setFirstType] = useState('');
  const [newQuestion, setNewQuestion] = useState({});
  const [firstText, setFirstText] = useState('');
  const [firstTextBelow, setFirstTextBelow] = useState('');
  const [answersList, setAnswersList] = useState([]);
  const [tagsList, setTagsList] = useState([]);

  const onTypeChange = (event) => {
    setFirstType(event);
  };
  const onFirstTextChange = (event) => {
    setFirstText(event);
  };
  const onFirstTextBelowChange = (event) => {
    setFirstTextBelow(event);
  };
  const onAnswersListChange = (listOfAnswer) => {
    setAnswersList([...listOfAnswer]);
  };
  const onTagsChange = (listOfTags) => {
    let tmp = listOfTags.split(',');
    setTagsList([...tmp]);
  };
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5,
      }}
    />
  );
  const SaveHandler = () => {
    debugger
    let newQuestion = {
      Id: uuid.v4(),
      CompanyId:"Sela",
      Type: firstType,
      Text: firstText,
      LowerText: firstTextBelow,
      Answers: answersList,
      Tags: tagsList,
    };
    setNewQuestion(newQuestion);
    axios.post(
      'http://localhost:4000/api/Questions/addQuestion',newQuestion);
  };
  return (
    <div className="editQuestion_container">
      <FirstSection
        onTypeChange={onTypeChange}
        onFirstTextChange={onFirstTextChange}
        onFirstTextBelowChange={onFirstTextBelowChange}
      />
      {ColoredLine('gray')}
      <AnswerSection onAnswersListChange={onAnswersListChange} />
      {ColoredLine('gray')}
      <TagsSection onTagsChange={onTagsChange} />
      <button onClick={SaveHandler}>Save </button>
    </div>
  );
};

export default EditQuestion;