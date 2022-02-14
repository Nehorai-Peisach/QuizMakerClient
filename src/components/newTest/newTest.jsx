import React, { useState } from "react";
import GeneralTestDetails from "./innerComponents/generalTestDetails";
import PassingTest from "./innerComponents/passingTest";
import FaillingTest from "./innerComponents/faillingTest";
import axios from "axios";

const NewTest = (props) => {
  const [tmpNewTest, setTmpNewTest] = useState({});
  const [messageBodyFailling, setMessageBodyFailling] = useState("");
  const [messageSubjectFailling, setMessageSubjectFailling] = useState("");
  const [messageBodyPassing, setMessageBodyPassing] = useState("");
  const [messageSubjectPassing, setMessageSubjectPassing] = useState("");
  const [languegeGeneral, setLanguegeGeneral] = useState("");
  const [typeGeneral, setTypeGeneral] = useState("");
  const [nameGeneral, setNameGeneral] = useState("");
  const [gradeGeneral, setGradeGeneral] = useState("");
  const [showCorrectGeneral, setShowCorrectGeneral] = useState(false);
  const [headerGeneral, setHeaderGeneral] = useState("");
  const [messageSuccessGeneral, setMessageSuccessGeneral] = useState("");
  const [messageFailGeneral, setMessageFailGeneral] = useState("");

  const handleSubmit = () => {
    let tmp = {
      field: "Development",
      languege: languegeGeneral,
      testType: typeGeneral,
      testName: nameGeneral,
      passingGrade: gradeGeneral,
      showCorrectAnswerAfterTest: showCorrectGeneral,
      header: headerGeneral,
      messageOnSuccess: messageSuccessGeneral,
      messageOnFail: messageFailGeneral,
      messageSubjectPassing: messageSubjectPassing,
      messageBodyPassing: messageBodyPassing,
      messageSubjectFailing: messageSubjectFailling,
      messageBodyFailing: messageBodyFailling,
    };
    setTmpNewTest(tmp);
    axios.post('http://localhost:4000/api/quizes/addNewTest',tmp)
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
      <PassingTest
        passingBodyHandler={passingBodyHandler}
        passingSubjectHandler={passingSubjectHandler}
      />
      <FaillingTest
        faillingBodyHandler={faillingBodyHandler}
        faillingSubjectHandler={faillingSubjectHandler}
      />
      <div className="newTest_btn">
        <button onClick={handleSubmit}>Create New Test</button>
      </div>
    </div>
  );
};

export default NewTest;
