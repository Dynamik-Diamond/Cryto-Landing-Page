import { navLinks } from '../constants/data';
import { RegisterButton } from './Buttons';

import { FaTimes } from 'react-icons/fa';

const sidebar = ({ toggle, setToggle }) => {
  return (
    <aside
      className={`${toggle ? 'sidebar show' : 'sidebar'}`}
    >
      <FaTimes
        color="white"
        fontSize="2rem"
        className="absolute right-5 top-5 "
        onClick={() => setToggle(prev => !prev)}
      />
      <ul className="sidebar-list text-center ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-white font-normal text-[1.6rem] mb-6 leading-[28px] relative`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <div className="text-white">
          <a
            href="#"
            className=" text-[1.6rem] font-medium border-r-[1px] border-BorderColor pr-4 mr-4 "
          >
            {' '}
            Login
          </a>

          <RegisterButton />
        </div>
      </ul>
    </aside>
  );
};

export default sidebar;
