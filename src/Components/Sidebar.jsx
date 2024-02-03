"use client"
import { justicelogo } from '../../public/imgs/imageIndex';
import Image from 'next/image';
import { useState } from 'react';
import { FaHome, FaBriefcase, FaCalendarAlt, FaUser, FaSignOutAlt} from 'react-icons/fa';
import Link from 'next/link';

const NavItem = ({ label, icon, link, activeLink, onNavigation }) => {
  const handleClick = () => {
    onNavigation(link);
  };

  return (
    <li className="mb-4">
      <a onClick={()=>handleClick()} className={`cursor-pointer flex items-center text-gray-700 p-2 rounded-lg ${activeLink === link ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
        {icon}
        {label}
      </a>
    </li>
  );
};

const Sidebar = ({ onNavigation }) => {
  const [activeLink, setActiveLink] = useState('dashboard');

  const handleNavigation = (content) => {
    onNavigation(content);
    setActiveLink(content);
  };

  return (
    <aside className="w-[22%] z-20 bg-white p-6 ">
      <div className="mb-8">
        <Image src={justicelogo} alt="JusticeChain logo with scales of justice" width={140} height={140}></Image>
      </div>
      <nav>
        <ul>
          <NavItem label="Dashboard" icon={<FaHome className="mr-3" />} link="dashboard" activeLink={activeLink} onNavigation={handleNavigation} />
          <NavItem label="Case Overview" icon={<FaBriefcase className="mr-3" />} link="caseOverview" activeLink={activeLink} onNavigation={handleNavigation} />
          <NavItem label="Schedule" icon={<FaCalendarAlt className="mr-3" />} link="schedule" activeLink={activeLink} onNavigation={handleNavigation} />
        </ul>
      </nav>
      <div className="mt-8">
        <p className="text-gray-500 mb-2">ACCOUNT PAGES</p>
        <ul>
          <NavItem label="Profile" icon={<FaUser className="mr-3" />} link="profile" activeLink={activeLink} onNavigation={handleNavigation} />
          <li className="mb-4">
            <a className={`flex items-center text-gray-700 p-2 rounded-lg ${activeLink === "signOut" ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
              {<FaSignOutAlt className="mr-3" />}
              <Link href="/rolepicking">Sign Out</Link>
            </a>
          </li>
        
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;