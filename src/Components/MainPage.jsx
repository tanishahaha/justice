// pages/index.js
"use client"
import { useState } from 'react';
import { FaHome, FaBriefcase, FaCalendarAlt, FaUser, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import Dashboard from './Dashboard';
import styles from '../Components/component.module.css';
import { useSearchParams } from 'next/navigation';
import { Sidebar,NavbarHeader, ClerkCasesOverview, ProfileCard } from './componentIndex';
import JudgeCasesOverview from './JudgeCasesOverview';



const MainContent = ({ selectedContent }) => {
  const searchparams = useSearchParams();
  const role = searchparams.get('role');

  switch (selectedContent) {
    case 'dashboard':
      return <Dashboard />;
    case 'caseOverview':
      if(role=="judge"){
        return <JudgeCasesOverview/>;
      }else if(role=="clerk"){
        return <ClerkCasesOverview/>;
      }
    case 'profile':
      return <ProfileCard/>;  

    default:
      return null;
  }
};

const MainPage = () => {

  const [selectedContent, setSelectedContent] = useState('dashboard');

  const handleNavigation = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar onNavigation={handleNavigation} />
      <NavbarHeader />
      <MainContent selectedContent={selectedContent} />
    </div>
  );
};

export default MainPage;
