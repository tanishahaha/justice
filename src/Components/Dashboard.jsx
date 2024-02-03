// pages/index.js
"use client"
import { FaFileAlt, FaCalendar } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '../Components/component.module.css';
import { progress } from '../../public/imgs/imageIndex';
import Image from 'next/image';




const Dashboard = () => {
  return (
    <div className="p-6 mt-20 w-full">
      <div className="grid grid-cols-3 gap-6">
        <div className={`flex text-center justify-center items-center col-span-2 bg-teal-400 p-6 rounded-lg shadow-lg ${styles.boxBg}`}>
          <div className="grid grid-cols-3 gap-6 ">
            <div className="text-center">
              <p className="text-6xl text-black">00</p>
              <p className="text-black">Total Cases</p>
            </div>
            <div className="text-center">
              <p className="text-6xl text-black">00</p>
              <p className="text-black">Monthly Case Average</p>
            </div>
            <div className="text-center">
              <p className="text-6xl text-black">00</p>
              <p className="text-black">Weekly Case Average</p>
            </div>
          </div>
        </div>
        <div className={`bg-teal-400 p-6 rounded-lg shadow-lg ${styles.boxBg  }`}>
          <h3 className="text-black mb-4 font-bold">Case Status</h3>
          <div className="flex justify-between items-center mb-4">
            <div className="text-black">
              <p>50% Active Cases</p>
              <p>20% New Cases</p>
              <p>30% Closed Cases</p>
            </div>
            <Image src={progress} alt="JusticeChain logo with scales of justice" width={140} height={140}></Image>
            <div>
              {/* Placeholder for pie chart */}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className={`col-span-2 bg-teal-400 p-2 rounded-lg shadow-lg ${styles.boxBg}`} >
       
            <div className='flex justify-center'>
              {/* Placeholder for calendar */}
              <Calendar className={`${styles.custom_calendar} ${styles.react_calendar}`} />
            </div>
         
        </div>
        <div className={`col-span-1 bg-teal-400 p-6 rounded-lg shadow-lg ${styles.boxBg}`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-black font-bold">Case Documents</h3>
            <a href="#" className="text-white">View All</a>
          </div>
          <ul>
            <li className="flex items-center justify-between text-black mb-2">
              <FaFileAlt />
              <span>Case Number</span>
            </li>
            <li className="flex items-center justify-between text-black mb-2">
              <FaFileAlt />
              <span>Case Number</span>
            </li>
            <li className="flex items-center justify-between text-black mb-2">
              <FaFileAlt />
              <span>Case Number</span>
            </li>
            <li className="flex items-center justify-between text-black mb-2">
              <FaFileAlt />
              <span>Case Number</span>
            </li>
            {/* Repeat for each case document */}
          </ul>
        </div>
      </div>
    </div>
  );
};






export default Dashboard;
