import React from "react";
import TextBlock from "components/textBlock";
const GeneralTestDetails = (props) => {
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
          // defaultValue={this.state.selectValue}
          // onChange={this.handleChange}
          >
            <option value="English">English</option>
            <option value="Hebrew">Hebrew</option>
          </select>
        </div>
        <div className="general_p_type">
          <p>Test type: </p>
        </div>
        <div className="general_type">
          <select
          // defaultValue={this.state.selectValue}
          // onChange={this.handleChange}
          >
            <option value="English">English</option>
            <option value="Hebrew">Hebrew</option>
          </select>
        </div>
        <div className="general_p_name">
          <p>Test name: </p>
        </div>
        <div className="general_name">
          <input type="text" placeholder="Enter name" />
        </div>
        <div className="general_p_grade">
          <p>Passing Grade: </p>
        </div>
        <div className="general_grade">
          <input type="number" placeholder="Enter grade" />
        </div>
        <div className="general_p_showGradeAfter">
          <p>Show correct answer after submmision</p>
        </div>
        <div className="general_showGradeAfter">
          <input type="radio" />
        </div>
        <div className="general_header">
          <TextBlock title="Header: " />
        </div>
        <div className="general_msg_success">
          <TextBlock title="Message to show on Success: " />
        </div>
        <div className="general_msg_fail">
          <TextBlock title="Message to show on Failure: " />
        </div>
      </div>
    </div>
  );
};

export default GeneralTestDetails;
