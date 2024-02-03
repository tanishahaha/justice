"use client"
import React from 'react';
import styles from "./component.module.css"

const InsideJudgeCase = () => {
    return (
        <div className='bg-gray-200 mt-20 p-4 w-full'>
            <h1 className="text-4xl font-normal mb-2 px-3 pt-9  text-gray-700">Case No.</h1>
            <div className=" flex flex-col items-center justify-center  w-full">

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
                    <div className='align-bottom mt-6 flex justify-center gap-1'>
                        <button className={`${styles.blueButton} text-white  font-semibold py-2 px-4  align-baseline max-h-10  rounded-sm`}>Accept</button>
                        <button className={`${styles.blueButton} text-white  font-semibold py-2 px-4  align-baseline max-h-10  rounded-sm`}>Reject</button>
                    </div>
                </div>

            </div>
        </div>


    );
};

const InputField = ({ label }) => {
    return (
        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={label} />
        </div>
    );
};

const TextAreaField = ({ label }) => {
    return (
        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={label}></textarea>
        </div>
    );
};

const Button = ({ label }) => {
    return (
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>{label}</span>
        </button>
    );
};

const JudgeCaseDetailPage = () => {
    return (
        <div className=''>
            <InsideJudgeCase />
            <div className="bg-gray-200  p-4">
                <div className="grid grid-cols-2  gap-4 ">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl ml-32">
                        <h2 className="text-2xl text-gray-700 font-semibold mb-5">Plaintiff Details</h2>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <InputField label="Name" />
                            <InputField label="Nationality" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <InputField label="Father/Mother/Husband" />
                            <InputField label="Occupation" />
                        </div>
                        <div className="mb-4">
                            <TextAreaField label="Address" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <InputField label="Advocate Code" />
                            <InputField label="Advocate Name" />
                        </div>
                        <div className="mb-4">
                            <InputField label="Occupation" />
                        </div>
                        <div className="mb-4">
                            <InputField label="Gender" />
                        </div>
                        <div className="flex space-x-2">
                            <Button label="Case File" />
                            <Button label="Case File" />
                            <Button label="Case File" />
                        </div>


                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mr-32">
                        <h2 className="text-2xl text-gray-700 font-semibold mb-5">Respondent Details</h2>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <InputField label="Name" />
                            <InputField label="Nationality" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <InputField label="Father/Mother/Husband" />
                            <InputField label="Occupation" />
                        </div>
                        <div className="mb-4">
                            <TextAreaField label="Address" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <InputField label="Advocate Code" />
                            <InputField label="Advocate Name" />
                        </div>
                        <div className="mb-4">
                            <InputField label="Occupation" />
                        </div>
                        <div className="mb-4">
                            <InputField label="Gender" />
                        </div>
                        <div className="flex space-x-2">
                            <Button label="Case File" />
                            <Button label="Case File" />
                            <Button label="Case File" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default JudgeCaseDetailPage;
