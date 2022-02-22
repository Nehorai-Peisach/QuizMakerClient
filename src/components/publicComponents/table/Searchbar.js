const Searchbar = (props) => {
  return (
    <span className="searchbar">
      Search: <input className="searchbar__input" type="text" value={props.filter || ''} onChange={(e) => props.setFilter(e.target.value)} />
    </span>
  );
};

export default Searchbar;
