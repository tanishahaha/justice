// pages/JudgesCaseWorkflowPreliminary.jsx

import React from 'react';
import styles from "./component.module.css"



const JudgesCaseWorkflowPreliminary = () => {
  return (
    <>
    <div className='bg-gray-200'>
    <div className='bg-gray-200'>
      <div className={styles['centered-container']}>
     <div className={styles['progress-tracker']}>
        
      <div className={styles.line}></div>
      <div className={styles.step}></div>
      <div className={styles.line}></div>
      <div className={styles.step}></div>
      <div className={styles.line}></div>
      <div className={styles.step}></div>
      <div className={styles.line}></div>
      <div className={styles.step}></div>
      <div className={styles.line}></div>
      <div className={styles.step}></div>
      <div className={styles.line}></div>
      <div className={styles.label}>
        <span className=''>Preliminary Hearing</span>
        <span className='-ml-2'>Initial of Trial</span>
        <span className='-ml-3'>Investigation</span>
        <span className='-ml-4'>Analysis and Examination</span>
        <span className=''>Judgement</span>
      </div>
    </div>
    </div>


    </div>
    </div>
    </>
  );
};

export default JudgesCaseWorkflowPreliminary;
