import { useMemo } from 'react';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
import Searchbar from 'components/publicComponents/table/Searchbar';
import Pagination from 'components/publicComponents/table/Pagination';
import Columns from './FirstStudentReportColumns';

const Table = (props) => {
  const [students, onGenerateReport, setCurrentStudent, setPageState] = props.inputs;

  const clickHandle = async (student) => {
    let tmp = {
      params: {
        id: student._id,
      },
    };
    await onGenerateReport(tmp);
    setCurrentStudent(student);
    setPageState((pre) => pre + 1);
  };

  const data = useMemo(() => students, []);
  const columns = useMemo(() => Columns, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
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
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter } = state;

  return (
    <div>
      <Searchbar filter={globalFilter} setFilter={setGlobalFilter} />
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
                <tr {...row.getRowProps()} onClick={() => clickHandle(row.original)}>
                  {row.cells.map((cell, index) => {
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

export default Table;
