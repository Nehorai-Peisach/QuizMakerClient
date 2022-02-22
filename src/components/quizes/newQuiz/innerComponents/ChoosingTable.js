import { useEffect, useState, useMemo } from 'react';
import { useTable, usePagination, useSortBy, useGlobalFilter, useRowSelect } from 'react-table';
import Pagination from 'components/publicComponents/table/Pagination';
import Columns from './ChoosingColumns';
import Searchbar from 'components/publicComponents/table/Searchbar';
import Checkbox from 'components/publicComponents/table/Checkbox';

const QuizesTable = (props) => {
  const data = useMemo(() => props.data, []);
  const columns = useMemo(() => Columns, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    selectedFlatRows,
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
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => <Checkbox {...getToggleAllRowsSelectedProps()} />,
            Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
          },
          ...columns,
        ];
      });
    }
  );

  const { globalFilter } = state;
  useEffect(() => {
    if (!selectedFlatRows) return;

    const tmp = [];
    selectedFlatRows.forEach((row) => tmp.push(row.original._id));
    props.onQuestionsId(tmp);
  }, [selectedFlatRows]);

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
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    switch (index) {
                      case 0:
                        return (
                          <td className="td__minimum" {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        );
                      case 2:
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
