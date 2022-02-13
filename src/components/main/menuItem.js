import { CgChevronRight } from "../../../node_modules/react-icons/cg";
import SubMenuItem from './subMenuItem';

const MenuItem = (props) => {
  debugger;
  return (
    <div class='nav-container'>
      <div className='nav-caterogy'>
        <div className='nav-textAndIcon'>
          <SubMenuItem icon={props.icon} text={props.text} link={props.link} />
          {<CgChevronRight className='arrow-icon' />}
        </div>
        <div className='nav-sub'>{props.children}</div>
      </div>
    </div>
  );
};

export default MenuItem;
