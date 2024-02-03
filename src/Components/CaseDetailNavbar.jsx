// CaseDetailNavbar.jsx
"use client"
import React from 'react';
import styles from './component.module.css';

const CaseDetailNavbar = () => {
  return (
  
        <div className='bg-gray-200 px-3'>
            <h1 className="text-4xl font-normal  mb-6 pt-9 ml-56 text-gray-700">Case No.</h1>
            <div className=" flex flex-col items-center justify-center  ">

                <div className='flex'>
                    <div className=" md:flex mb-6">

                        <div className="md:w-full px-3">
                            {/* <button className="mb-4 bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">   Back      </button> */}

                            <div className="relative">
                                <label className="block text-sm font-bold mb-2" htmlFor="case_type">
                                    Case Type
                                </label>
                                <input className={`${styles.judgeCaseDetailPage_input} text-white font-semibold py-2 px-4 rounded`} placeholder='Case Type' />


                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                        </div>


                        <div className="md:w-full px-3">

                            <div className="relative">
                                <label className="block text-sm font-bold mb-2" htmlFor="filling_date">
                                    Filling No.
                                </label>
                                <input className={`${styles.judgeCaseDetailPage_input} text-white font-semibold py-2 px-4 rounded`} placeholder='0000000000' />


                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                        </div>


                        <div className="md:w-full px-3">

                            <div className="relative">
                                <label className="block text-sm font-bold mb-2" htmlFor="filling_date">
                                    Filling Date
                                </label>
                                <input className={`${styles.judgeCaseDetailPage_input} text-white font-semibold py-2 px-4 rounded`} type="date" />

                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                        </div>


                        <div className="md:w-full px-3">

                            <div className="relative">
                                <label className="block text-sm font-bold mb-2" htmlFor="court_allotted">
                                    Court Allotted
                                </label>
                                <input className={`${styles.judgeCaseDetailPage_input} text-white font-semibold py-2 px-4 rounded`} placeholder='Court Name' />

                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-full px-3">

                            <div className="relative">
                                <label className="block text-sm font-bold mb-2" htmlFor="allocation_date">
                                    Allocation Date
                                </label>
                                <input className={`${styles.judgeCaseDetailPage_input} text-white font-semibold py-2 px-4 rounded`} type="date" />
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>

            </div>
        </div>
  );
}

export default CaseDetailNavbar;
