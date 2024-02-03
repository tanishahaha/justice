// SignUp.jsx
"use client"
import React, { Suspense } from 'react';
import { FaFacebookF, FaApple, FaGoogle } from 'react-icons/fa';
import { justicelogo } from '../../public/imgs/imageIndex';
import Image from 'next/image';
import styles from './component.module.css';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function Register(){
  const searchparams = useSearchParams();
  const role = searchparams.get('role');
  return (
    <div>
      <div className="flex items-center justify-start pl-24 pt-4">
                {/* Move the logo to the left */}
                <Image src={justicelogo} alt="JusticeChain logo with scales of justice" width={120} height={120}></Image>
            </div>
{/* <div className={`p-4 ${styles.flexContainer}`}></div> */}
<div className={`w-full max-w-md m-auto ${styles.loginContainer}`}>
    <div className={`rounded-t-lg p-8 mb-6 shadow-lg relative ${styles.loginBox}`}>
    <h2 className={`text-2xl text-center text-black font-semibold mb-6 ${styles.welcomeText}`}>Register with</h2>
        <div className="flex justify-center gap-4 mb-4">
          <button className="border-white border-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <FaFacebookF />
          </button>
          <button className="border-white border-2 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <FaApple />
          </button>
          <button className="border-white border-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <FaGoogle />
          </button>
        </div>
        <div className="text-center mb-4">or</div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your full name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Your password"
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-teal-600" />
            <span className="ml-2 text-sm text-black">Remember me</span>
          </label>
        </div>
        <div className="flex items-center justify-between">
        <Link href={`/signin?role=${role}`} className={` text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex align-center justify-center  ${styles.blueButton}`}>SIGN UP</Link>
        
        </div>
        <div className="text-center text-sm text-white mt-4">
          Already have an account? <Link href={`/signin?role=${role}`} className="text-black hover:text-teal-500">Sign In</Link>
        </div>
      </div>
    </div>
    </div>
  );
}
export default function SignUp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Register />
    </Suspense>
  );
}
