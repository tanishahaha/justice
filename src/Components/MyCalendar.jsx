// pages/index.js
import Calendar from 'react-calendar';
import React from 'react';
import 'react-calendar/dist/Calendar.css';
import { FaPlus } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import styles from '../Components/component.module.css';

const Event = ({ title, time, description, link }) => (
    <div className="mt-2 p-2 rounded-lg">
        <div className='flex space-x-1'>
            <div className="w-3 h-3 bg-blue-600 rounded-full my-1.5"></div>
            <div className="font-bold text-white ">{title}</div>
        </div>
        <div className="text-xs mt-1">
            <div className='flex gap-2'>
                <FaClock className="text-white my-0.5"></FaClock>
                {time && <div className="text-gray-300 ">{time}</div>}
            </div>
            {description && <div className="text-gray-300">{description}</div>}
            {link && <div className="text-blue-300">{link}</div>}
        </div>
    </div>
);

const MyCalendar = () => {
    const currentDate = new Date();
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const hours = [...Array(12).keys()].map(i => `${i + 7} AM`)
        .concat([...Array(12).keys()].map(i => `${i === 0 ? 12 : i} PM`));

    return (
        <>
            <div className='flex  '>
                <div className='flex  flex-col bg-black w-1/4 '>
                    <div className="">
                        <div className="px-6 py-4 flex justify-between items-center">
                            <div className="flex space-x-1">
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            </div>
                            <FaPlus className="text-white"></FaPlus>
                        </div>
                        <Calendar
                            className={`${styles.custom_calendar2} bg-black   text-white`}
                        />
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        <div className="px-4 py-2 my-3">
                            <div className="text-xs text-white ">{`TODAY ${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`}</div>
                            <div className="text-yellow-400 text-xs">55°/40° ☀️</div>
                            <Event title="All-Hands Company Meeting" time="8:30 - 9:00 AM" description="Monthly catch-up" link="https://zoom.us/j/1983475281" />
                        </div>

                        <div className="px-4 py-2 my-3">
                            <div className="text-xs text-white ">{`TODAY ${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`}</div>
                            <div className="text-yellow-400 text-xs">55°/40° ☀️</div>
                            <Event title="All-Hands Company Meeting" time="8:30 - 9:00 AM" description="Monthly catch-up" link="https://zoom.us/j/1983475281" />
                        </div>

                        <div className="px-4 py-2 my-3">
                            <div className="text-xs text-white ">{`TODAY ${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`}</div>
                            <div className="text-yellow-400 text-xs">55°/40° ☀️</div>
                            <Event title="All-Hands Company Meeting" time="8:30 - 9:00 AM" description="Monthly catch-up" link="https://zoom.us/j/1983475281" />
                        </div>
                    </div>
                </div>

                <div className="bg-white w-full flex flex-col h-full ">
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center p-4 border-b border-gray-200">
                            <div className="flex items-center">
                                <button className="text-gray-600">
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <button className="ml-2 text-gray-600">
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                                <button className="ml-4 bg-blue-500 text-white px-3 py-1 rounded">Today</button>
                            </div>
                            <div className="flex">
                                <button className="text-gray-600 mx-1">Day</button>
                                <button className="mx-1 bg-blue-500 text-white px-3 py-1 rounded">Week</button>
                                <button className="text-gray-600 mx-1">Month</button>
                                <button className="text-gray-600 mx-1">Year</button>
                            </div>
                            <div className="flex items-center">
                                <input type="text" placeholder="Search" className="border border-gray-300 rounded px-2 py-1 mr-2" />
                                <span className="text-gray-600">EST GMT-5</span>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-1/3 border-r border-gray-200">
                                {hours.map((hour, index) => (
                                    <div key={hour} className={`border-b border-gray-200 h-10 ${index === 0 ? 'mt-10' : ''} flex items-center justify-center text-sm text-gray-600`}>{hour}</div>
                                ))}
                            </div>
                            <div className="w-full flex flex-1 ">
                                <div className="flex divide-x divide-gray-200 w-full">
                                    {days.map(day => (
                                        <div key={day} className="flex-1">
                                            <div className="text-center py-2 text-sm text-gray-600 bg-gray-100">{day}</div>
                                            {hours.map((hour, index) => (
                                                <div key={hour} className={`border-b border-gray-200 h-10 ${index === 0 ? 'bg-white' : 'bg-white hover:bg-blue-100'}`}></div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyCalendar;
