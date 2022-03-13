import { useMemo } from 'react';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
import Searchbar from 'components/publicComponents/table/Searchbar';
import Pagination from 'components/publicComponents/table/Pagination';
import Columns from './ThirdReportColumns';

const Table = (props) => {
  const [selectedQuiz] = props.inputs;

  const tmpData = [];
  selectedQuiz.student_answers.forEach((answer) => {
    const question = selectedQuiz.quiz.questions.find((x) => x._id === answer.question_id);
    tmpData.push({
      question: question,
      answers: answer.answers,
      currects: question.answers.filter((x) => x.is_correct === true),
    });
  });
  const data = useMemo(() => tmpData, []);
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
      <div className="center"></div>
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
                      case 1:
                      case 2:
                        return (
                          <td className="td__minimum" {...cell.getCellProps()}>
                            {cell.value.map((x) => x.text + ', ')}
                          </td>
                        );
                      case 3:
                        let tmp = true;
                        row.cells[1].value.forEach((x, i) => {
                          if (x.text != row.cells[2].value[i].text) tmp = false;
                        });
                        return (
                          <td className="td__minimum" {...cell.getCellProps()}>
                            {tmp.toString()}
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
