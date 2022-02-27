import Searchbar from "components/publicComponents/table/Searchbar";
import Columns from "components/questions/manageQuestions/QuestionsColumns";
import React, { useEffect } from "react";
import { useMemo } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import Pagination from "../../publicComponents/table/Pagination";

const Report = (props) => {
  const [data] = props.inputs;
  const columns = useMemo(() => Columns, []);
console.log(data);
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
    <div className="tablePage">
      <div className="page_header">Manage Quizes</div>
      <Searchbar filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="table__body">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? "▼" : "▲") : ""}
                    </span>
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
                        return <td {...cell.getCellProps()}>{i + 1}</td>;
                      case 1:
                        return (
                          <td {...cell.getCellProps()}>
                            <button>
                              {/* <button onClick={() => linkClickHandler(obj._id)}> */}
                              Copy
                            </button>
                          </td>
                        );
                      case 5:
                        return (
                          <td {...cell.getCellProps()}>
                            <button>
                              {/* <button onClick={() => deleteClickHandler(obj)}> */}
                              delete
                            </button>
                          </td>
                        );
                      default:
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
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