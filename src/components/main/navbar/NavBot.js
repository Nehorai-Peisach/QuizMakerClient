const NavBot = (props) => {
  return (
    <a href={props.link} className="nav__link nav__bot">
      <props.icon className="nav__icon" />
      <span className="nav__name nav__botname">{props.name}</span>
    </a>
  );
};

export default NavBot;
