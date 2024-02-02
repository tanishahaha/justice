// pages/index.js
"use client"
import { useState } from 'react';
import { FaHome, FaBriefcase, FaCalendarAlt, FaUser, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import Dashboard from './Dashboard';
import styles from '../Components/component.module.css';
import { useSearchParams } from 'next/navigation';
import { Sidebar,NavbarHeader, ClerkCasesOverview, ProfileCard, JudgeCaseDetailPage } from './componentIndex';
import JudgeCasesOverview from './JudgeCasesOverview';
import { useRouter } from 'next/navigation';




const MainPage = () => {

  const [selectedContent, setSelectedContent] = useState('dashboard');

  const handleNavigation = (content) => {
    setSelectedContent(content);
  };

  
  const handleCaseClick = (index) => {
    // Additional logic if needed
    setSelectedContent('judgeCaseDetail');
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar onNavigation={handleNavigation} />
      <NavbarHeader />
      <MainContent selectedContent={selectedContent} handleCaseClick={handleCaseClick}  />
    </div>
  );
};

const MainContent = ({ selectedContent, handleCaseClick }) => {
  const router = useRouter();
  const searchparams = useSearchParams();
  const role = searchparams.get('role');

  switch (selectedContent) {
    case 'dashboard':
      return <Dashboard />;
    case 'caseOverview':
      if(role=="judge"){
        return <JudgeCasesOverview onCaseClick={handleCaseClick}/>;
      }else if(role=="clerk"){
        return <ClerkCasesOverview/>;
      }
    case 'profile':
      return <ProfileCard/>; 
    case 'schedule':
      router.push('/mycalendar'); 
    case 'judgeCaseDetail':
      return <JudgeCaseDetailPage/>;
    default:
      return null;
  }
};
export default MainPage;
