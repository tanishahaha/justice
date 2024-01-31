// pages/index.js
import Calendar from 'react-calendar';
import React from 'react';
import 'react-calendar/dist/Calendar.css';
import { FaPlus } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import styles from '../Components/component.module.css';


const Event = ({ title, time, description, link }) => (
    <div className=" mt-2 p-2 rounded-lg">
        <div className='flex space-x-1'>
            <div className="w-3 h-3 bg-blue-600 rounded-full my-1.5"></div>
            <div className="font-bold text-white ">{title}</div> </div>
        <div className="text-xs mt-1">
            <div className='flex gap-2'> <FaClock className="text-white my-0.5"></FaClock> {time && <div className="text-gray-300 ">{time}</div>}</div>
            {description && <div className="text-gray-300">{description}</div>}
            {link && <div className="text-blue-300">{link}</div>}
        </div>
    </div>
);

const MyCalendar = () => {
    const currentDate = new Date();
    // const [selectedDate, setSelectedDate] = useState(null);

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };
    return (
        <div className='flex  flex-col bg-black w-1/4 h-screen'>
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
                    className={`${styles.custom_calendar2} "bg-black mx-5 " text-white`}
                //     onChange={handleDateChange}
                //     value={selectedDate}
                // 
                />

            </div>
            <div className="flex-1 overflow-y-auto">
                {/* <div className="px-4 py-2 my-3">
                    {selectedDate && (
                        <>
                            <div className="text-xs text-white ">{`TODAY ${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`}</div>
                            <div className="text-yellow-400 text-xs">55°/40° ☀️</div>
                            <Event title="All-Hands Company Meeting" time="8:30 - 9:00 AM" description="Monthly catch-up" link="https://zoom.us/j/1983475281" />

                        </>)}
                </div> */}

                <div className="px-4 py-2 my-3">

                    <div className="text-xs text-white ">{`TODAY ${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`}</div>
                    <div className="text-yellow-400 text-xs">55°/40° ☀️</div>
                    <Event title="All-Hands Company Meeting" time="8:30 - 9:00 AM" description="Monthly catch-up" link="https://zoom.us/j/1983475281" />

                </div>

                <div className="px-4 py-2">

                    <div className="text-xs text-white ">{`TODAY ${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`}</div>
                    <div className="text-yellow-400 text-xs">55°/40° ☀️</div>
                    <Event title="All-Hands Company Meeting" time="8:30 - 9:00 AM" description="Monthly catch-up" link="https://zoom.us/j/1983475281" />


                </div>
                <div className="px-4 py-2">

                    <div className="text-xs text-white ">{`TODAY ${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`}</div>
                    <div className="text-yellow-400 text-xs">55°/40° ☀️</div>
                    <Event title="All-Hands Company Meeting" time="8:30 - 9:00 AM" description="Monthly catch-up" link="https://zoom.us/j/1983475281" />


                </div>

            </div>

        </div>
    );

}

export default MyCalendar;
