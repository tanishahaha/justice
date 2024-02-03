// components/DocumentManagement.jsx
"use client"
import React from 'react';
import { FaPlus, FaCalendarAlt, FaFileUpload, FaFileWord, FaFileAudio } from 'react-icons/fa';

const FileItem = ({ name, icon }) => (
  <div className="flex flex-col items-center p-4 m-2 bg-white rounded-lg shadow">
    {icon}
    <span className="text-sm text-gray-600 truncate w-24">{name}</span>
  </div>
);

const DocumentManagement = () => {
  return (
    <div className='mt-24'>
    <div className="bg-white ml-96 mr-96 rounded-2xl p-8 mt-14">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-semibold">Preliminary Hearing</h1>
      </div>
      <div className="flex justify-center gap-12 items-center mb-4">
        <button className="flex items-center space-x-2 text-gray-600">
          <FaPlus />
          <span>Add Notes</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600">
          <FaCalendarAlt />
          <span>Schedule</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600">
          <FaFileUpload />
          <span>Upload Documents</span>
        </button>
      </div>
      <hr />
      <div className="flex flex-wrap items-center justify-center mt-8">
        <FileItem name="Case File.docx" icon={<FaFileWord />} />
        <FileItem name="Case File.docx" icon={<FaFileWord />} />
        <FileItem name="Case File.docx" icon={<FaFileWord />} />
        <FileItem name="Audio File.mp3" icon={<FaFileAudio />} />
      </div>
      <hr className="mt-8" />
      <div className="flex justify-center mt-8">
        <button className="bg-teal-400 text-white px-6 py-2 rounded-full">Next </button>
      </div>
    </div>
    </div>
  );
};

export default DocumentManagement;
