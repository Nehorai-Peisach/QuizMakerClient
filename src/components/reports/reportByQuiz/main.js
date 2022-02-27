import Loading from "components/publicComponents/Loading";
import React, { useEffect, useState } from "react";
import CreateBody from "../../publicComponents/CreateBody";
import SelectQuiz from "./selectQuiz";
import Report from "./report";
const { GetQuizes } = require("../../helpers/QuizesRepo");
const {GetReportByQuiz} =require("../../helpers/ReportRepo");

const MainReportByQuiz = () => {
  const [quizes, setQuizes] = useState([]);
  const [quizesList, setQuizesList] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  
  useEffect(async () => {
    const data = await GetQuizes();
    setQuizes(data);
  }, []);

  const onGenerateReport =async (input) =>{
  let tmp =await GetReportByQuiz(input);
  setQuizesList(tmp);
  debugger
  setPageIndex(1);
  }
  const selectQuizInputs = [onGenerateReport, quizes];
  const reportInputs = [quizesList];


  const pageStages = [
    { header: "Test Report", page: <SelectQuiz inputs={selectQuizInputs} /> },
    { header: "Test Report", page: <Report inputs={reportInputs} /> },
  ];
  return (
    <div>
      {quizes.length ? (
        <CreateBody header={pageStages[pageIndex].header} page={pageStages[pageIndex].page} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MainReportByQuiz;
