import { format } from 'date-fns';

const Columns = [
  {
    Header: 'Id',
    accessor: '_id',
  },
  {
    Header: 'Link',
    accessor: 'link',
  },
  {
    Header: 'Quiz Name',
    accessor: 'name',
  },
  {
    Header: 'Last Update',
    accessor: 'date',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd//MM//yy - HH:mm');
    },
  },
  {
    Header: 'Type',
    accessor: 'type',
  },
  {
    Header: '',
    accessor: 'btns',
  },
];

export default Columns;
