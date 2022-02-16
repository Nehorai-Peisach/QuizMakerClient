import React from 'react';
import makeData from 'components/helpers/MakeData';
import Table from './Table';

const ManageQustions = (props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: '',
        columns: [
          {
            Header: 'Id',
            accessor: 'id',
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
          },
          {
            Header: 'Type',
            accessor: 'type',
          },
          {
            Header: '',
            accessor: 'btns',
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(100000), []);

  return (
    <div className="table">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default ManageQustions;
