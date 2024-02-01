"use client"
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from '../Components/component.module.css';

const NavbarHeader = () => {
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
export default NavbarHeader;
