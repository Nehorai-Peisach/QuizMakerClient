import React from "react";
import "../../../styles/sass/newText/passingTest.scss";
import TextBlock from "components/textBlock";

const FaillingTest=(props)=>{

    return (
        <div>
          <h4 className="passingTest_mainTitle">Failing the Test</h4>
          <div className="passingTest_main">
              <p className="passingTest_inputTitle">Message Subject: </p>
              <input className="passingTest_input" type="text" />
    
            <div className="passingTest_body">
              <TextBlock title="Message Body: " />
            </div>
          </div>
        </div>
      );
}

export default FaillingTest;