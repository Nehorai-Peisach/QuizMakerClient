import { useMemo } from 'react';
import { GetQuizes } from 'components/helpers/QuizesRepo';
import QuizesTable from './QuizesTable';
import { Columns } from './Columns';

const ManageQuizes = (props) => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => GetQuizes(), []);

  return <QuizesTable columns={columns} data={data} />;
};

export default ManageQuizes;
