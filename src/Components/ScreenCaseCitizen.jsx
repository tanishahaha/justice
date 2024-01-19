import React from 'react';
import { justicelogo } from '../../public/imgs/imageIndex';
import Image from 'next/image';
import { IoSearch } from 'react-icons/io5';
import styles from './component.module.css';

const ScreenCaseCitizen = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <Image src={justicelogo} alt="JusticeChain logo with scales of justice" className='fixed top-6 left-60 m-4' width={180} height={180}></Image>

            <div className="text-center"> {/* Add margin-top for spacing */}
                
                <div className='flex flex-col space-y-2 mb-24'>
                    <h1 className="text-4xl font-semibold mb-2">JusticeChain</h1>
                    <p className="text-xl mb-10">Justice, Redefined: Blockchain Empowered</p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4"> {/* Add space-y-4 for vertical spacing */}
                    <div className="relative">
                        {/* <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i> */}
                        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Case Number" className="pl-10 pr-8 py-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none" />
                    </div>
                    <button className={`${styles.blueButton} text-white font-semibold py-2 px-4 rounded`}>Judge</button>
                </div>
            </div>
        </div>
    );
};

export default ScreenCaseCitizen;
