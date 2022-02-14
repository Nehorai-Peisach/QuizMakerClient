import React, { useState } from "react";
import TextBlock from "components/textBlock";

const FaillingTest = (props) => {

  const subjectHendler = (event) => {
    props.faillingSubjectHandler(event.target.value);
  };
  const onMessageChange = (event) => {
    if (event) {
      props.faillingBodyHandler(event);
    }
  };

  return (
    <div>
      <h4 className="passingTest_mainTitle">Failing the Test</h4>
      <div className="passingTest_main">
        <p className="passingTest_inputTitle">Message Subject: </p>
        <input
          className="passingTest_input"
          type="text"
          onChange={subjectHendler}
        />

        <div className="passingTest_body">
          <TextBlock title="Message Body: " onMessageChange={onMessageChange} />
        </div>
      </div>
    </div>
  );
};

export default FaillingTest;
