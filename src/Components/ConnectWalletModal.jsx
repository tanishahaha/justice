
"use client"
import React from 'react';
import { IoMdClose } from 'react-icons/io';


const ConnectWalletModal = ({ onClose }) => {
  return (
    <div className="z-50 w-full fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg flex flex-col items-center">
        <div className="flex justify-end w-full">
          {/* <button className="text-gray-600 hover:text-gray-800">
            <IoMdClose size={20} />
          </button> */}
          <button onClick={()=>onClose()}><IoMdClose size={20} /></button>
        </div>
        <div className='mb-24 space-y-4'>
          <h1 className="text-2xl font-semibold text-center mb-14">CONNECT WALLET</h1>
          <h2 className="text-lg text-center font-semibold mb-2">What is a wallet?</h2>
          <h3 className="text-xl text-center font-semibold mb-2">A Home for your Digital Assets</h3>
          <p className="text-center text-gray-600">
            Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.
          </p>
        </div>
      </div>
    </div>
  );
};


export default ConnectWalletModal;
