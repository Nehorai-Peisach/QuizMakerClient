import Searchbar from 'components/publicComponents/table/Searchbar';
import Columns from './reportColumns';
import { useMemo } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import Pagination from '../../publicComponents/table/Pagination';
import ReportQuizSummary from './reportQuizSummary';

const Report = (props) => {
  const [startDate, endDate, quizesList, any] = props.inputs;
  const data = useMemo(() => quizesList, []);
  const columns = useMemo(() => Columns, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
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

  const inputs = [data[0].quiz, data, startDate, endDate, any];

  return (
    <div>
      <ReportQuizSummary data={inputs} />
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
                    const obj = row.original;

                    switch (index) {
                      case 0:
                        return (
                          <td className="td__minimum" {...cell.getCellProps()}>
                            {i + 1}
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

export default Report;
