"use client"
import CaseDetailNavbar from "./CaseDetailNavbar";
import JudgeCasePreliminaryLine from './JudgesPrelimLine';
import DocumentManagement from './DocumentManagement'

import React from 'react'

function JudgePreliminaryHearingWorkFlow() {
  return (
    <div className="bg-gray-200 h-screen">
        <CaseDetailNavbar/>
        <JudgeCasePreliminaryLine/>
        <DocumentManagement/>
    </div>
  )
}

export default JudgePreliminaryHearingWorkFlow