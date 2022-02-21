import { useMemo } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import Pagination from '../../publicComponents/table/Pagination';
import Columns from './QuizesColumns';

const QuizesTable = (props) => {
  const data = useMemo(() => props.data, []);
  const columns = useMemo(() => Columns, []);
  const [linkClickHandler, showClickHandler, editClickHandler, duplicateClickHandler, deleteClickHandler] = props.btns;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="tablePage">
      <div className="page_header">Manage Quizes</div>
      <div className="table__body">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>{column.isSorted ? (column.isSortedDesc ? '▼' : '▲') : ''}</span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    const id = row.cells[0].value;

                    switch (index) {
                      case 0:
                        return <td {...cell.getCellProps()}>{i + 1}</td>;
                      case 1:
                        return (
                          <td {...cell.getCellProps()}>
                            <button onClick={() => linkClickHandler(id)}>Copy</button>
                          </td>
                        );
                      case 5:
                        return (
                          <td {...cell.getCellProps()}>
                            <button onClick={() => editClickHandler(id)}>edit</button>
                            <button onClick={() => duplicateClickHandler(id)}>duplicate</button>
                          </td>
                        );
                      default:
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="table__fotter">
        <Pagination
          previousPage={previousPage}
          nextPage={nextPage}
          pageIndex={pageIndex}
          gotoPage={gotoPage}
          pageOptions={pageOptions}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </div>
    </div>
  );
};

export default QuizesTable;
