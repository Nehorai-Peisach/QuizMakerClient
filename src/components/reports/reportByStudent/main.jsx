import Loading from "components/publicComponents/Loading";
import React, { useEffect, useState } from "react";
import CreateBody from "../../publicComponents/CreateBody";
import SelectStundent from "./selectStudent";
const { GetAllStudent } = require("../../helpers/ReportRepo");
const { GetReportByStudent } = require("../../helpers/ReportRepo");

const Main = () => {
  const [students, setStudents] = useState([]);
  const [StudentsList, setStudentsList] = useState([]);

  useEffect(async () => {
    const data = await GetAllStudent();
    setStudents(data);
  }, []);

  const onGenerateReport = async (input) => {
    let tmp = await GetReportByStudent(input);
    setStudentsList(tmp);
  };
  const selectStudentInputs = [onGenerateReport, students];

  const pageStages = [
    {
      header: "Student Report",
      page: <SelectStundent inputs={selectStudentInputs} />,
    },
  ];

  const bla = async () => {
    let tmp = {
      params: {
        id: "621a98a7cefbc12a11d4c4f2",
      },
    };
    let data= await GetReportByStudent(tmp);
    debugger
  };
  return (
    <div>
      {students.length ? (
        <CreateBody header={pageStages[0].header} page={pageStages[0].page} />
      ) : (
        <Loading />
      )}

      <button onClick={bla}>bla</button>
    </div>
  );
};

export default Main;
