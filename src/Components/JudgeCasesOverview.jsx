// pages/index.js

import React from 'react';

const Case = ({ index }) => (
  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
    <div className="h-40 bg-gray-300 mb-6 rounded-md"></div>
    <h2 className="text-lg font-semibold">Case No.</h2>
    <p>Case Type</p>
  </div>
);

const JudgeCasesOverview = () => (
  <div className="min-h-screen bg-gray-200 p-10 w-full">
    <h1 className="text-4xl font-semibold mb-10">Cases</h1>
    <div className="grid grid-cols-3 gap-10">
      {Array.from({ length: 6 }, (_, index) => (
        <Case key={index} index={index} />
      ))}
    </div>
  </div>
);

export default JudgeCasesOverview;
