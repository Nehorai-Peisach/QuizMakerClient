import { format } from 'date-fns';

const Columns = [
  {
    Header: 'Id',
    accessor: '_id',
  },
  {
    Header: 'Student',
    accessor: 'first_name',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Last Active',
    accessor: 'updatedAt',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yy');
    },
  },
];

export default Columns;
