const SwitchComponent = (props) => {
  return (
    <div className="component__switch">
      <span className="component__switch__text">{props.children}</span>
      <label className="switch">
        <input className="component__switch__switch__input" type="checkbox" checked={props.value} onChange={(e) => props.setValue(e.target.checked)} />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default SwitchComponent;
