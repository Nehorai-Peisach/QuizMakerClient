import { format } from 'date-fns';

const Columns = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Question',
    accessor: 'text',
  },
  {
    Header: 'Last Update',
    accessor: 'updatedAt',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd//MM//yy - HH:mm');
    },
  },
  {
    Header: 'Question Type',
    accessor: 'type',
  },
  {
    Header: '',
    accessor: 'btns',
  },
];

export default Columns;
