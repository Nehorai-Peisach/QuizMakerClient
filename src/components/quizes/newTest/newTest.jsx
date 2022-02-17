import React, { useState } from 'react';
import GeneralTestDetails from './innerComponents/generalTestDetails';
import PassingTest from './innerComponents/passingTest';
import FaillingTest from './innerComponents/faillingTest';
import QustionsChoosing from './innerComponents/QustionsChoosing';
import axios from 'axios';
import mongoose from 'mongoose';

const uuid = require('uuid');

const NewTest = (props) => {
  const [tmpNewTest, setTmpNewTest] = useState({});
  const [messageBodyFailling, setMessageBodyFailling] = useState('');
  const [messageSubjectFailling, setMessageSubjectFailling] = useState('');
  const [messageBodyPassing, setMessageBodyPassing] = useState('');
  const [messageSubjectPassing, setMessageSubjectPassing] = useState('');
  const [languegeGeneral, setLanguegeGeneral] = useState('');
  const [typeGeneral, setTypeGeneral] = useState('');
  const [nameGeneral, setNameGeneral] = useState('');
  const [gradeGeneral, setGradeGeneral] = useState('');
  const [showCorrectGeneral, setShowCorrectGeneral] = useState(false);
  const [headerGeneral, setHeaderGeneral] = useState('');
  const [messageSuccessGeneral, setMessageSuccessGeneral] = useState('');
  const [messageFailGeneral, setMessageFailGeneral] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleSubmit = () => {
    const quiz = {
      // Id: uuid.v4(),
      Topic: {
        Id: new mongoose.Types.ObjectId(),
        Name: 'Development',
        Company: { Id: new mongoose.Types.ObjectId(), Name: 'Sela' },
      },
      Language: languegeGeneral,
      Type: typeGeneral,
      Name: nameGeneral,
      PassingGrade: gradeGeneral,
      ShowAnswersAfter: showCorrectGeneral,
      Header: headerGeneral,
      Questions: questions,
      MsgOnSuccess: { Title: 'You Pass', Text: messageSuccessGeneral },
      MsgOnFailure: { Title: 'You Fail', Text: messageFailGeneral },
      // messageSubjectPassing: messageSubjectPassing,
      // messageBodyPassing: messageBodyPassing,
      // messageSubjectFailing: messageSubjectFailling,
      // messageBodyFailing: messageBodyFailling,
      ChangedDate: Date.now(),
    };
    setTmpNewTest(quiz);
    axios.post('http://localhost:4000/api/quizes/addQuiz', quiz);
  };

  const faillingBodyHandler = (message) => {
    setMessageBodyFailling(message);
  };
  const faillingSubjectHandler = (message) => {
    setMessageSubjectFailling(message);
  };
  const passingBodyHandler = (message) => {
    setMessageBodyPassing(message);
  };
  const passingSubjectHandler = (message) => {
    setMessageSubjectPassing(message);
  };
  const onHeaderChange = (event) => {
    setHeaderGeneral(event);
  };
  const onMessageSuccessChange = (event) => {
    setMessageSuccessGeneral(event);
  };
  const onMessageFailChange = (event) => {
    setMessageFailGeneral(event);
  };
  const onLanguegeChange = (event) => {
    setLanguegeGeneral(event);
  };
  const onTypeChange = (event) => {
    setTypeGeneral(event);
  };
  const onNameChange = (event) => {
    setNameGeneral(event);
  };
  const onGradeChange = (event) => {
    setGradeGeneral(event);
  };
  const onShowCorrectAnswerChange = (event) => {
    setShowCorrectGeneral(event);
  };
  const onQuestionSelect = (isSelected, obj) => {
    setQuestions((preState) => {
      isSelected ? preState.push(obj) : preState.filter((a) => a != obj);

      return preState;
    });
  };

  return (
    <div className="newTest_container">
      <GeneralTestDetails
        onHeaderChange={onHeaderChange}
        onMessageSuccessChange={onMessageSuccessChange}
        onMessageFailChange={onMessageFailChange}
        onLanguegeChange={onLanguegeChange}
        onTypeChange={onTypeChange}
        onNameChange={onNameChange}
        onGradeChange={onGradeChange}
        onShowCorrectAnswerChange={onShowCorrectAnswerChange}
      />
      <PassingTest passingBodyHandler={passingBodyHandler} passingSubjectHandler={passingSubjectHandler} />
      <FaillingTest faillingBodyHandler={faillingBodyHandler} faillingSubjectHandler={faillingSubjectHandler} />
      <QustionsChoosing onQuestionSelect={onQuestionSelect} />

      <div className="newTest_btn">
        <button onClick={handleSubmit}>Create New Test</button>
      </div>
    </div>
  );
};

export default NewTest;
