const SubMenuItem = (props) => {
  return (
    <a href={props.link} className='nav-item'>
      <span className='nav-icon'>{props.icon}</span>
      <span className='nav-text'>{props.text}</span>
    </a>
  );
};

export default SubMenuItem;
