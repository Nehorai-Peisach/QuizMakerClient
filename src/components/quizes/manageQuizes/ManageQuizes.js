import { useEffect, useMemo, useState } from 'react';
import QuizesTable from './QuizesTable';
import { Columns } from './Columns';
import { GetQuizes } from 'components/helpers/QuizesRepo';
import Loading from 'components/publicComponents/Loading';

const ManageQuizes = (props) => {
  const [data, setData] = useState();

  useEffect(async () => {
    const tmp = await GetQuizes();
    setData(tmp);
  }, []);

  return data ? <QuizesTable data={data} /> : <Loading />;
};

export default ManageQuizes;
