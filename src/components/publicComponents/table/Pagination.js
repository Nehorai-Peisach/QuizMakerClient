import { useEffect, useState } from 'react';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import TableBtn from './TableBtn';

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(props.pageIndex + 1);

  useEffect(() => {
    setCurrentPage((pre) => {
      props.pageIndex > 0 ? (pre = props.pageIndex) : (pre = 1);
      return pre;
    });
  }, [props.pageIndex]);

  return (
    <div className="pagination">
      <TableBtn onClick={props.previousPage} icon={VscChevronLeft} side="left" />
      <div className="pagination__pages">
        <select
          className="pagination__pages__select"
          value={props.pageSize}
          onChange={(e) => {
            props.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <span className="pagination__pages__currentpage">
          {
            <input
              className="pagination__pages__input"
              type="number"
              defaultValue={props.pageIndex}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) : 1;
                props.gotoPage(page);
              }}
              value={currentPage}
            />
          }{' '}
          of {props.pageOptions.length}
        </span>
      </div>
      <TableBtn onClick={props.nextPage} icon={VscChevronRight} side="right" />
    </div>
  );
};

export default Pagination;
