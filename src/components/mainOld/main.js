import 'styles/main/main.css';
import 'boxicons';
import MenuItem from './menuItem';
import SubMenuItem from './subMenuItem';
import { CgAtlasian, CgFileDocument, CgAddR, CgCarousel, CgSmileMouthOpen } from 'react-icons/cg';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const Main = (props) => {
  return (
    <div>
      <aside>
        <div className='title'>
          <a href='#'>
            <CgAtlasian className='logo' />
            <span>QuizMaker</span>
          </a>
        </div>
        <div className='nav-main-menu'>
          <MenuItem icon={<CgFileDocument />} text='Quizes'>
            <SubMenuItem icon={<CgCarousel />} text='Manage Quizes' link='#' />
            <SubMenuItem icon={<CgAddR />} text='Create New Quiz' link='#' />
          </MenuItem>
          <MenuItem icon={<AiOutlineQuestionCircle />} text='Questions'>
            <SubMenuItem icon={<CgCarousel />} text='Manage Questions' link='#' />
            <SubMenuItem icon={<CgAddR />} text='Create New Question' link='#' />
          </MenuItem>
          <MenuItem icon={<HiOutlineDocumentReport />} text='Reports'>
            <SubMenuItem icon={<CgFileDocument />} text='Report By Quiz' link='#' />
            <SubMenuItem icon={<CgSmileMouthOpen />} text='Report By Student' link='#' />
          </MenuItem>
          <SubMenuItem icon={<RiLogoutBoxLine />} text='Log out' link='#' />
        </div>
      </aside>
      <section>{props.children}</section>
    </div>
  );
};
export default Main;
