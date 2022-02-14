const NavBrand = (props) => {
  return (
    <div className='nav__brand'>
      <ion-icon name={props.icon} class='nav__toggle' onClick={props.navHandler} />
      <a href={props.link} className='nav__logo'>
        {props.name}
      </a>
    </div>
  );
};

export default NavBrand;
