// pages/index.js
"use client"
import { useState } from 'react';
import { FaHome, FaBriefcase, FaCalendarAlt, FaUser, FaSignOutAlt, FaSearch } from 'react-icons/fa';

import { Sidebar, NavbarHeader, ClerkCasesOverview, ProfileCard, JudgeCaseDetailPage } from './componentIndex';

import dynamic from 'next/dynamic'; // Import dynamic for client-side loading


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
      <DynamicMainContent selectedContent={selectedContent} handleCaseClick={handleCaseClick} /> {/* Load MainContent dynamically */}
    </div>
  );
};

const DynamicMainContent = dynamic(() => import('./MainContent'), {
  ssr: false, // Render only on the client side
});

export default MainPage;

