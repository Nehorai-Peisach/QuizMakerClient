const NavLink = (props) => {
  const linkClass = props.isActive ? 'nav__link active' : 'nav__link';

  const navigate = () => {
    props.navigate(props.name);
  };
  return (
    <a href={props.link} className={linkClass} onClick={navigate}>
      <props.icon className="nav__icon" />
      <span className="nav__name">{props.name}</span>
    </a>
  );
};

export default NavLink;
