// pages/login.js

import React from 'react';
import { FaLock } from 'react-icons/fa';

const SignIn = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="w-full max-w-xs m-auto">
                <div className="bg-teal-500 rounded-t-lg p-8 mb-6 shadow-lg relative">
                    <div className="flex justify-center mb-6 icon-container">
                        <div className="icon-background">
                        <FaLock />
                            {/* <i className="fas fa-lock text-white text-5xl"></i> */}
                        </div>
                    </div>
                    <h2 className="text-2xl text-center text-white font-semibold mb-6">Welcome Back</h2>
                    <p className="text-white text-center mb-6">Enter your email and password to sign in</p>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Your password"/>
                        <div className="flex items-center">
                            <input id="remember-me" type="checkbox" className="form-checkbox h-5 w-5 text-teal-600"/>
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                            SIGN IN
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <a href="#" className="inline-block align-baseline font-bold text-sm text-white hover:text-teal-200">
                            Don't have an account? Sign up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
