import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

function SelectQuiz(props) {
  const [startDate, setStartDate, endDate, setEndDate, onGenerateReport, quizes, AnyDate, setAnyDate] = props.inputs;
  const [quizId, setQuizId] = useState();

  const onGeneratePressed = () => {
    if (!quizId) return;
    if (AnyDate || (startDate && endDate && startDate <= endDate)) {
      let tmp = {
        params: {
          quiz_id: quizId,
          fromDate: startDate,
          toDate: endDate,
          anyDate: AnyDate,
        },
      };
      onGenerateReport(tmp);
    }
  };

  return (
    <div className="select_quiz center">
      <div className="select_quiz__wrapper">
        <label>
          Select Quiz:
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
        </label>
        <span>Date Range: </span>
        {!AnyDate && (
          <div>
            <label>
              From:
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </label>
            <label>
              To:
              <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
            </label>
          </div>
        )}
        <label>
          <input type="checkbox" checked={AnyDate} onChange={(e) => setAnyDate(e.target.checked)} />
          <span>Any date in the past</span>
        </label>
        <button className="btn" onClick={onGeneratePressed}>
          Generate Report
        </button>
      </div>
    </div>
  );
}

export default SelectQuiz;
