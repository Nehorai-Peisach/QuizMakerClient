import { useMemo } from 'react';
import makeData from 'components/helpers/MakeData';
import QuizesTable from './QuizesTable';
import { Columns } from './Columns';

const ManageQuizes = (props) => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => makeData(100000), []);

  return <QuizesTable columns={columns} data={data} />;
};

export default ManageQuizes;
