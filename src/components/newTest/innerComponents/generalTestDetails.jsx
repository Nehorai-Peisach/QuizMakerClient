import React, { useState } from "react";
import TextBlock from "components/textBlock";

const GeneralTestDetails = (props) => {
 
  
  const onHeaderChange = (event) => {
    props.onHeaderChange(event);
  };
  const onMessageSuccessChange = (event) => {
    props.onMessageSuccessChange(event);
  };
  const onMessageFailChange = (event) => {
    props.onMessageFailChange(event);
  };
  const onLanguegeChange = (event) => {
    props.onLanguegeChange(event.target.value);
  };
  const onTypeChange = (event) => {
    props.onTypeChange(event.target.value);
  };
  const onNameChange = (event) => {
    props.onNameChange(event.target.value);
  };
  const onGradeChange = (event) => {
    props.onGradeChange(event.target.value);
  };
  const onShowCorrectAnswerChange = (event) => {
    props.onShowCorrectAnswerChange(event.target.value);
  };
 
  return (
    <div>
      <h4 className="general_mainTitle">General Test Details</h4>
      <div className="general_main">
        <div className="general_p_field">
          <p>Field of study</p>
        </div>
        <div className="general_field">
          <p>Development</p>
        </div>
        <div className="general_p_lung">
          <p>Languege</p>
        </div>
        <div className="general_lung">
          <select
           onChange={onLanguegeChange}
          >
            <option value="English">English</option>
            <option value="Hebrew">Hebrew</option>
          </select>
        </div>
        <div className="general_p_type">
          <p>Test type: </p>
        </div>
        <div className="general_type">
          <select onChange={onTypeChange} >
            <option value="English">English</option>
            <option value="Hebrew">Hebrew</option>
          </select>
        </div>
        <div className="general_p_name">
          <p>Test name: </p>
        </div>
        <div className="general_name">
          <input type="text" placeholder="Enter name" onChange={onNameChange}/>
        </div>
        <div className="general_p_grade">
          <p>Passing Grade: </p>
        </div>
        <div className="general_grade">
          <input type="number" placeholder="Enter grade" onChange={onGradeChange}/>
        </div>
        <div className="general_p_showGradeAfter">
          <p>Show correct answer after submmision</p>
        </div>
        <div className="general_showGradeAfter">
          <input type="radio" name="myGroupName" onChange={onShowCorrectAnswerChange} value={true}/>Yes
          <input type="radio" name="myGroupName" onChange={onShowCorrectAnswerChange} value={false} />No
        </div>
        <div className="general_header">
          <TextBlock title="Header: " onMessageChange={onHeaderChange} />
        </div>
        <div className="general_msg_success">
          <TextBlock
            title="Message to show on Success: "
            onMessageChange={onMessageSuccessChange}
          />
        </div>
        <div className="general_msg_fail">
          <TextBlock
            title="Message to show on Failure: "
            onMessageChange={onMessageFailChange}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralTestDetails;
