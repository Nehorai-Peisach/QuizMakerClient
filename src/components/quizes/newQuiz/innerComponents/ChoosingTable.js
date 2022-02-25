import { useEffect, useState, useMemo } from 'react';
import { useTable, usePagination, useSortBy, useGlobalFilter, useRowSelect } from 'react-table';
import Pagination from 'components/publicComponents/table/Pagination';
import Columns from './ChoosingColumns';
import Searchbar from 'components/publicComponents/table/Searchbar';

const QuizesTable = (props) => {
  const data = useMemo(() => props.data, []);
  const columns = useMemo(() => Columns, []);

  let {
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
              let trClass;
              props.questionsId.forEach((q) => {
                if (q === row.original._id) trClass = 'table__body__selected';
              });
              return (
                <tr className={trClass} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    switch (index) {
                      case 0:
                        return (
                          <td
                            {...cell.getCellProps()}
                            onClick={() => {
                              !trClass ? props.addQuestionId(row.original._id) : props.removeQuestionId(row.original._id);
                            }}
                          >
                            {cell.render('Cell')}
                          </td>
                        );
                      case 1:
                        return (
                          <td className="td__minimum" {...cell.getCellProps()}>
                            <button onClick={() => props.showClickHandler(row.original)}>show</button>
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
