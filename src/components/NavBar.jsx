import { navLinks } from '../constants/data';
import { RegisterButton } from './Buttons';
import { logo } from '../assets/';
import { FaBars } from 'react-icons/fa';
import Sidebar from './SideBar';
import { useState } from 'react';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="relative w-full font-Rubik bg-Background py-6">
      <div className="container flex justify-between items-center ">
        <img src={logo} alt="logo" />
        <ul
          className={`hidden list-none lg:flex justify-end items-center `}
        >
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`relative text-white font-normal ${
                index === navLinks.length - 1
                  ? 'mr-0'
                  : 'mr-10'
              } leading-[28px]`}
            >
              <a href={`#${nav.id}`} className="nav-link">
                {nav.title}
              </a>
            </li>
          ))}

          <li className="relative text-white font-medium ml-12 border-r-[1px] border-BorderColor pr-6">
            <a href="#"> Login</a>
          </li>
          <li className="text-white ml-6">
            <RegisterButton />
          </li>
        </ul>
        <FaBars
          color="white"
          fontSize="1.5rem"
          className="block lg:hidden"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {/* side Bar */}
      <Sidebar toggle={toggle} setToggle={setToggle} />
    </nav>
  );
};

export default NavBar;
