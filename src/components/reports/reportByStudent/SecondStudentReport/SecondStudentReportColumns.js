import { format } from 'date-fns';

const Columns = [
  {
    Header: 'Id',
    accessor: '_id',
  },
  {
    Header: 'Quiz Name',
    accessor: 'quiz.name',
  },
  {
    Header: 'Grade',
    accessor: 'score',
  },
  {
    Header: 'Last Activity',
    accessor: 'updatedAt',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yy');
    },
  },
];

export default Columns;
