import { useEffect, useState } from 'react';
import QuizesTable from './QuizesTable';
import { GetQuizes } from 'components/helpers/QuizesRepo';
import Loading from 'components/publicComponents/Loading';

const ManageQuizes = (props) => {
  const [data, setData] = useState();

  useEffect(async () => {
    const objects = await GetQuizes();
    setData(objects);
  }, []);

  const linkClickHandler = (id) => {
    console.log(id);
  };
  const editClickHandler = (id) => {
    console.log(id);
  };
  const duplicateClickHandler = (id) => {
    console.log(id);
  };
  const btns = [linkClickHandler, editClickHandler, duplicateClickHandler];

  return data ? <QuizesTable data={data} btns={btns} /> : <Loading />;
};

export default ManageQuizes;
