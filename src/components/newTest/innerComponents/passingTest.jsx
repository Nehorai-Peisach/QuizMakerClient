import React, { useState } from "react";
import TextBlock from "components/textBlock";

const PassingTest = (props) => {

  const subjectHendler = (event) => {
    props.passingSubjectHandler(event.target.value);
  };
  const onMessageChange = (event) => {
    if (event) {
      props.passingBodyHandler(event);
    }
  };

  return (
    <div>
      <h4 className="passingTest_mainTitle">Passing the Test</h4>
      <div className="passingTest_main">
          <p className="passingTest_inputTitle">Message Subject: </p>
          <input className="passingTest_input" type="text" />

        <div className="passingTest_body">
          <TextBlock title="Message Body: " onMessageChange={onMessageChange}/>
        </div>
      </div>
    </div>
  );
};

export default PassingTest;
