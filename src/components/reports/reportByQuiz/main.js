import Loading from 'components/publicComponents/Loading';
import React, { useEffect, useState } from 'react';
import CreateBody from '../../publicComponents/CreateBody';
import SelectQuiz from './selectQuiz';
import Report from './report';
import Alerter from 'components/helpers/Alerter';
import ThirdStudentReportTable from '../ThirdReport/ThirdReportTable';

const { GetQuizes } = require('../../helpers/QuizesRepo');
const { GetReportByQuiz } = require('../../helpers/ReportRepo');

const MainReportByQuiz = () => {
  const [quizes, setQuizes] = useState([]);
  const [quizesList, setQuizesList] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [any, setAny] = useState(true);
  const [selectedQuiz, setSelectedQuiz] = useState();
  const [thirdPadeHeade, setThirdPadeHeade] = useState('');

  useEffect(async () => {
    const data = await GetQuizes();
    setQuizes(data);
  }, []);

  const onGenerateReport = async (input) => {
    let tmp = await GetReportByQuiz(input);

    if (tmp.length > 0) {
      setQuizesList(tmp);
      setPageIndex(1);
    } else Alerter("Can't fing Quizes");
  };

  const onSelecQuiz = (quiz) => {
    console.log(quiz);
    setSelectedQuiz(quiz);
    setThirdPadeHeade(`${quiz.student.first_name}: ${quiz.quiz.name}`);
    setPageIndex(2);
  };

  const selectQuizInputs = [startDate, setStartDate, endDate, setEndDate, onGenerateReport, quizes, any, setAny];
  const reportInputs = [startDate, endDate, quizesList, any, onSelecQuiz];
  const thirdStudentReportInputs = [selectedQuiz];

  const pageStages = [
    { header: 'Quiz Report', page: <SelectQuiz inputs={selectQuizInputs} /> },
    { header: 'Quiz Report', page: <Report inputs={reportInputs} /> },
    {
      header: thirdPadeHeade,
      page: <ThirdStudentReportTable inputs={thirdStudentReportInputs} />,
    },
  ];
  return (
    <div className="create">
      {quizes.length ? <CreateBody header={pageStages[pageIndex].header} page={pageStages[pageIndex].page} /> : <Loading />}
    </div>
  );
};

export default MainReportByQuiz;
