import React from 'react';
import { FaEdit } from 'react-icons/fa';

const ProfileCard = () => {
    return (
        <div className="flex w-full mt-16 flex-col space-y-9 justify-center items-center h-screen ">
            <h1 className="text-4xl text-center font-semibold mb-2">My Profile</h1>

            
      <div className="bg-gray-200 h-96  p-14 rounded-2xl shadow-lg w-100 relative">
        <div className="absolute top-4 right-4 text-gray-600 cursor-pointer flex items-center">
          <FaEdit className="mr-2" />
          <span>Edit</span>
        </div>
                <div className='flex space-x-3'>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="judgeName">
                            Judge Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="judgeName"
                            type="text"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                            E-mail ID
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="xyz@gmail.com"
                        />
                    </div>
                </div>

                <div className='flex space-x-3'>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="walletAddress">
                            Wallet Address
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="walletAddress"
                            type="text"
                            placeholder="adx000475875"
                        />
                    </div>


                    <div className="mb-4 relative">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="**********"
                        />
                        {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
           <i className="fas fa-eye-slash cursor-pointer"></i> 
          </div> */}
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="userId">
                        User ID
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="userId"
                        type="text"
                        placeholder="EL0023"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
