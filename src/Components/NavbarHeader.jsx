// NavbarHeader.jsx
"use client"
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from '../Components/component.module.css';
import Link from 'next/link';
import ConnectWalletModal from './ConnectWalletModal';


const NavbarHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isConnectWalletModalOpen, setConnectWalletModalOpen] = useState(false);


  const handleConnectWalletClick = () => {
    setConnectWalletModalOpen(true);
  };


  const handleCloseModal = () => {
    setConnectWalletModalOpen(false);
  };


  return (
    <header className="fixed w-full z-10 top-0 right-0 flex justify-end gap-4 items-center p-6 bg-white">
      <button
        onClick={()=>handleConnectWalletClick()}
        className={`text-sm bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300 ${styles.walletBbtn}`}
      >
        Connect Wallet
      </button>


      <div className="relative ">
        <FaSearch className="absolute left-4 top-0 mt-3 mr-4 text-gray-400 " />
        <input
          type="search"
          placeholder="Type"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 border-black border-2 py-2 rounded-full focus:border-transparent"
        />
      </div>


      {isConnectWalletModalOpen && (
        <ConnectWalletModal onClose={()=>handleCloseModal()} />
      )}
    </header>
  );
};


export default NavbarHeader;
