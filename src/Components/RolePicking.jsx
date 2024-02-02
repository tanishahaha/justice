// RolePicking.jsx

import React from 'react';
import { justicelogo } from '../../public/imgs/imageIndex';
import Image from 'next/image';
import styles from './component.module.css';
import Link from 'next/link';

const RolePicking = () => {
    return (
        <div className="text-center">
            <div className="flex items-center justify-start mb-8 pl-24 pt-8">
                {/* Move the logo to the left */}
                <Image src={justicelogo} alt="JusticeChain logo with scales of justice" width={140} height={140}></Image>
            </div>
            <h1 className="text-4xl font-semibold mb-2">Welcome to JusticeChain</h1>
            <p className="text-xl mb-10">Justice, Redefined: Blockchain Empowered</p>
            <h2 className="text-2xl font-semibold mb-4">Choose your Role</h2>
            <div className="flex justify-center gap-4 mb-20">
                <Link href="/signin?role=judge" className={`${styles.blueButton} text-white font-semibold py-2 px-4 rounded`}>Judge</Link>
                <Link href="/signin?role=clerk" className={`${styles.blueButton} text-white font-semibold py-2 px-4 rounded`}>Office Clerk</Link>
                <Link href="/signin?role=lawyer" className={`${styles.blueButton} text-white font-semibold py-2 px-4 rounded`}>Lawyer</Link>
                <Link href="/citizen" className={`${styles.blueButton} text-white font-semibold py-2 px-4 rounded`}>Citizen</Link>
               
            </div>
            {/* <img src="https://placehold.co/200x200" alt="Scales of justice on a blue stand" className="mx-auto" /> */}
        </div>
    );
};

export default RolePicking;
