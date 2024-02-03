import Dashboard from './Dashboard';
import styles from '../Components/component.module.css';
import JudgeCasesOverview from './JudgeCasesOverview';
import { useRouter, useSearchParams } from 'next/navigation';
import { Sidebar, NavbarHeader, ClerkCasesOverview, ProfileCard, JudgeCaseDetailPage } from './componentIndex';


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
      break;
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

export default MainContent;