const TableBtn = (props) => {
  return (
    <div className={'pagination__btn ' + props.side} onClick={props.onClick}>
      <props.icon className="pagination__icon" />
    </div>
  );
};

export default TableBtn;
