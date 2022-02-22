import { useEffect, useState } from 'react';
import QuizesTable from './QuestionsTable';
import { GetQuestions } from 'components/helpers/QuestionsRepo';
import Loading from 'components/publicComponents/Loading';

const ManageQuestions = (props) => {
  const [data, setData] = useState();

  useEffect(async () => {
    const objects = await GetQuestions();
    setData(objects);
  }, []);

  const showClickHandler = (id) => {
    debugger
    console.log(id);
  };
  const editClickHandler = (id) => {
    console.log(id);
  };
  const duplicateClickHandler = (id) => {
    console.log(id);
  };
  const deleteClickHandler = (id) => {
    console.log(id);
  };
  const btns = [showClickHandler, editClickHandler, duplicateClickHandler, deleteClickHandler];

  return data ? <QuizesTable data={data} btns={btns} /> : <Loading />;
};

export default ManageQuestions;
