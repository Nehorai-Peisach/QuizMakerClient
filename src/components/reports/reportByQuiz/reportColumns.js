import { format } from 'date-fns';

const Columns = [
  {
    Header: 'Id',
    accessor: '_id',
  },
  {
    Header: 'Student',
    accessor: 'student.first_name',
  },
  {
    Header: 'Submitted',
    accessor: 'date',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yy - HH:mm');
    },
  },
  {
    Header: 'Num of Answers',
    accessor: 'student_answers.length',
  },
  {
    Header: 'Grade',
    accessor: 'score',
  },
];

export default Columns;
