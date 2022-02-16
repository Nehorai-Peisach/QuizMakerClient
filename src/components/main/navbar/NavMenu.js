import { VscChevronDown } from 'react-icons/vsc';
import { useEffect, useState } from 'react';

const NavMenu = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [linkClass, setLinkClass] = useState('nav__link collapse');
  const [arrow, setArrow] = useState('collapse__link');
  const [menuLink, setMenuLink] = useState('collapse__menu');

  const navigate = (name) => {
    props.navigate(name);
  };

  const clickHandler = () => {
    setIsActive((preState) => {
      preState = !preState;

      if (preState) {
        props.navHandler(true);
        setLinkClass('nav__link');
        setArrow('collapse__link rotate');
        setMenuLink('collapse__menu showCollapse');
      } else {
        setLinkClass('nav__link collapse');
        setArrow('collapse__link');
        setMenuLink('collapse__menu');
      }

      return preState;
    });
  };

  return (
    <div className={linkClass} onClick={clickHandler}>
      <props.icon className="nav__icon" />
      <span className="nav__name">{props.name}</span>

      <VscChevronDown className={arrow} />

      <div className={menuLink}>
        {props.items.map((item) => (
          <a href={item.link} className="collapse__sublink" onClick={() => navigate(item.name)}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
