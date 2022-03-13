import Loading from 'components/publicComponents/Loading';
import React, { useEffect, useState } from 'react';
import CreateBody from '../../publicComponents/CreateBody';
import FirstStudentReportTable from './FirstStudentReport/FirstStudentReportTable';
import SecondStudentReportTable from './SecondStudentReport/SecondStudentReportTable';
import ThirdStudentReportTable from '../ThirdReport/ThirdReportTable';
const { GetAllStudent } = require('../../helpers/ReportRepo');
const { GetReportByStudent } = require('../../helpers/ReportRepo');

const Main = () => {
  const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

  const [pageState, setPageState] = useState(0);
  const [students, setStudents] = useState();
  const [studentQuizes, setStudentQuizes] = useState();
  const [currentStudent, setCurrentStudent] = useState('');
  const [secondPadeHeade, setSecondPadeHeade] = useState('');
  const [thirdPadeHeade, setThirdPadeHeade] = useState('');
  useEffect(async () => {
    const data = await GetAllStudent();
    setStudents(data);
  }, []);

  useEffect(async () => {
    if (currentStudent && studentQuizes) {
      setSecondPadeHeade(
        `${currentStudent.first_name} ${currentStudent.last_name}: Avrege Grade: ${Math.ceil(average(studentQuizes.map((x) => x.score)))}`
      );
    }
  }, [currentStudent]);
  const onGenerateReport = async (input) => {
    let tmp = await GetReportByStudent(input);
    setStudentQuizes(tmp);
  };

  const [selectedQuiz, setSelectedQuiz] = useState();
  const onSelectedQuiz = (complitedQuiz) => {
    setThirdPadeHeade(`${currentStudent.first_name} ${currentStudent.last_name}: ${complitedQuiz.quiz.name}`);
    setSelectedQuiz(complitedQuiz);
    setPageState(2);
  };

  const firstStudentReportInputs = [students, onGenerateReport, setCurrentStudent, setPageState];
  const secondStudentReportInputs = [studentQuizes, onSelectedQuiz];
  const thirdStudentReportInputs = [selectedQuiz];
  const pageStages = [
    {
      header: 'Student Report',
      page: <FirstStudentReportTable inputs={firstStudentReportInputs} />,
    },
    {
      header: secondPadeHeade,
      page: <SecondStudentReportTable inputs={secondStudentReportInputs} />,
    },
    {
      header: thirdPadeHeade,
      page: <ThirdStudentReportTable inputs={thirdStudentReportInputs} />,
    },
  ];

  return (
    <div className="create">{students ? <CreateBody header={pageStages[pageState].header} page={pageStages[pageState].page} /> : <Loading />}</div>
  );
};

export default Main;
