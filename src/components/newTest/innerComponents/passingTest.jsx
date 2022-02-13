import React from "react";
import TextBlock from "components/textBlock";

const PassingTest = (props) => {
  return (
    <div>
      <h4 className="passingTest_mainTitle">Passing the Test</h4>
      <div className="passingTest_main">
        <p className="passingTest_inputTitle">Message Subject: </p>
        <input className="passingTest_input" type="text" />
        <div className="passingTest_body">
          <TextBlock title="Message Body: " />
        </div>
      </div>
    </div>
  );
};

export default PassingTest;
