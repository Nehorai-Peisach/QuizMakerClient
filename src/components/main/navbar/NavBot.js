const NavBot = (props) => {
  return (
    <a href={props.link} className="nav__link nav__bot" onClick={props.onClick}>
      <props.icon className="nav__icon" />
      <span className="nav__name">{props.name}</span>
    </a>
  );
};

export default NavBot;
