
"use client"
import React, { Suspense } from 'react';
import {FaLock} from 'react-icons/fa';
import { justicelogo } from '../../public/imgs/imageIndex';
import Image from 'next/image';
import styles from './component.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function Login() {
  const searchparams = useSearchParams();
  const role = searchparams.get('role');

  return (
    <div>
      <div className="flex items-center justify-start pl-24 pt-4">
                {/* Move the logo to the left */}
                <Image src={justicelogo} alt="JusticeChain logo with scales of justice" width={120} height={120}></Image>
            </div>
<div className={`p-4 ${styles.flexContainer}`}>
      
      <div className={`w-full max-w-md m-auto ${styles.loginContainer}`}>
        <div className={`rounded-t-lg p-8 mb-6 shadow-lg relative ${styles.loginBox}`}>
          <div className={`flex justify-center ${styles.iconContainer}`}>
            <div className={`icon-background ${styles.iconBackground}`}>
              <FaLock className={`text-white text-3xl ${styles.lockIcon}`}/>
              {/* <i className={`fas fa-lock text-white text-5xl ${styles.lockIcon}`}></i> */}
            </div>
          </div>
          <h2 className={`text-2xl text-center text-black font-semibold mb-6 ${styles.welcomeText}`}>Welcome Back</h2>
          <p className={`text-white text-center mb-6 ${styles.signInText}`}>Enter your email and password to sign in</p>
          <div className={`mb-4 ${styles.inputContainer}`}>
            <label className={`block text-black text-sm font-bold mb-2 ${styles.label}`} htmlFor="email">
              Email
            </label>
            <input className={`shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${styles.input}`} id="email" type="email" placeholder="Your email"/>
          </div>
          <div className={`mb-6 ${styles.inputContainer}`}>
            <label className={`block text-black text-sm font-bold mb-2 ${styles.label}`} htmlFor="password">
              Password
            </label>
            <input className={`shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${styles.input}`} id="password" type="password" placeholder="Your password"/>
            <div className={`flex items-center mt-4 ${styles.checkboxContainer}`}>
              <input id="remember-me" type="checkbox" className={`form-checkbox rounded h-5 w-5 text-teal-600 ${styles.checkbox}`}/>
              <label htmlFor="remember-me" className={`ml-2 block text-sm text-black ${styles.checkboxLabel}`}>
                Remember me
              </label>
            </div>
          </div>
          <div className={`flex items-center justify-between`}>
            <Link href={`/mainpage?role=${role}`} className={` text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex align-center justify-center  ${styles.blueButton}`}>SIGN IN</Link>
            {/* <button className={` text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full  ${styles.blueButton}`} type="button" >
              SIGN IN
            </button> */}
          </div>
          <div className="text-center text-sm text-white mt-4">
          Don't have an account? <Link href={`/signup?role=${role}`} className="text-black hover:text-teal-500">Sign Up</Link>
        </div>
        </div>
      </div>
    </div>
    </div>
    
  );
  // ... rest of your component code
}

export default function SignIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
}


