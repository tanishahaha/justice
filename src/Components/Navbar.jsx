// pages/index.js
"use client"
import { useState } from 'react';
import { FaHome, FaBriefcase, FaCalendarAlt, FaUser, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import Dashboard from './Dashboard';
import styles from '../Components/component.module.css';
import { justicelogo } from '../../public/imgs/imageIndex';
import Image from 'next/image';

const Sidebar = ({ onNavigation }) => {
  return (
    <aside className="w-[20%] bg-white p-6">
      <div className="mb-8">
      <Image src={justicelogo} alt="JusticeChain logo with scales of justice" width={140} height={140}></Image>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#" onClick={() => onNavigation('dashboard')} className="flex items-center text-gray-700 p-2 rounded-lg bg-gray-200">
              <FaHome className="mr-3" />
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="#" onClick={() => onNavigation('caseOverview')} className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-200">
              <FaBriefcase className="mr-3" />
              Case Overview
            </a>
          </li>
          <li className="mb-4">
            <a href="#" onClick={() => onNavigation('schedule')} className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-200">
              <FaCalendarAlt className="mr-3" />
              Schedule
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-8">
        <p className="text-gray-500 mb-2">ACCOUNT PAGES</p>
        <ul>
          <li className="mb-4">
            <a href="#" onClick={() => onNavigation('profile')} className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-200">
              <FaUser className="mr-3" />
              Profile
            </a>
          </li>
          <li>
            <a href="#" onClick={() => onNavigation('signOut')} className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-200">
              <FaSignOutAlt className="mr-3" />
              Sign Out
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};




const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed w-[85%] top-0 right-0 z-10 flex justify-end gap-4 items-center p-6 bg-white">
      <button className={`text-sm bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300 ${styles.walletBbtn}`}>Connect Wallet</button>
      <div className="relative">
        <input
          type="search"
          placeholder="Type"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-2 rounded-full"
        />
        <FaSearch className="absolute right-0 top-0 mt-3 mr-4 text-gray-400" />
      </div>
    </header>
  );
};


const MainContent = ({ selectedContent }) => {
  // You can add more cases for different content types
  switch (selectedContent) {
    case 'dashboard':
      return <Dashboard />;
    // Add more cases for other content types

    default:
      return null;
  }
};

const Navbar = () => {
  const [selectedContent, setSelectedContent] = useState('dashboard');

  const handleNavigation = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="min-h-screen flex">
     <Sidebar onNavigation={handleNavigation} />
      <Header/>
      <MainContent selectedContent={selectedContent} />
    </div>
  );
};

export default Navbar;
