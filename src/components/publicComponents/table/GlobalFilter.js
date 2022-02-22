const GlobalFilter = (props) => {
  return (
    <span>
      Search: <input type="text" value={props.filter || ''} onChange={(e) => props.setFilter(e.target.value)} />
    </span>
  );
};

export default GlobalFilter;
