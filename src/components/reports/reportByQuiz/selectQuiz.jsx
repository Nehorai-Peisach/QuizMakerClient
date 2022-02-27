import DropdownComponent from "components/publicComponents/DropdownComponent";
import SwitchComponent from "components/publicComponents/SwitchComponent";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

function SelectQuiz(props) {
  const [onGenerateReport, quizes] = props.inputs;
  const [quizId, setQuizId] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [AnyDate, setAnyDate] = useState(false);

  const onGeneratePressed = () => {
    let tmp = {
      params: {
        quiz_id: quizId,
        fromDate: startDate,
        toDate: endDate,
        anyDate: AnyDate,
      },
    };
    onGenerateReport(tmp);
  };
  const onBackPressed = () => {};

  return (
    <div className="reportQuizWrapper">
      <label className="reportQuiz__selectQuizLabel">Select Quiz: </label>
      <div className="reportQuiz__selectQuiz__select">
        <select onChange={(input) => setQuizId(input.target.value)}>
          <option value="" disabled selected>
            Select one
          </option>
          {quizes.map((item) => (
            <option value={item._id} key={item._id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <label className="reportQuiz__selectDateLabel">Date Range: </label>
      <div className="selectQuiz__fromDate">
        <label>From: </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="selectQuiz__ToDate">
        <label>To: </label>
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>
      <h3>Or</h3>
      <div className="selectQuiz__switch">
        <input
          className="component__switch__switch__input"
          type="checkbox"
          checked={AnyDate}
          onChange={(e) => setAnyDate(e.target.checked)}
        />
        Any date in the past
      </div>
      <div className="reportQuiz_back_btn">
        <button className="btn" onClick={onBackPressed}>
          {" "}
          Back{" "}
        </button>
      </div>
      <div className="reportQuiz_Generate_btn">
        <button className="btn" onClick={onGeneratePressed}>
          {" "}
          Generate Report
        </button>
      </div>
    </div>
  );
}

export default SelectQuiz;
