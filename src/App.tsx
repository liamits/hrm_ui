import { useState } from 'react';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Staff from './pages/Staff';
import Departments from './pages/Departments';
import Attendance from './pages/Attendance';
import Niko from './pages/Niko';
import LeaveTypes from './pages/LeaveTypes';
import Okrs from './pages/Okrs';
import Salary from './pages/Salary';
import Shifts from './pages/Shifts';
import Evaluation from './pages/Evaluation';
import Assets from './pages/Assets';
import Chat from './pages/Chat';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import LeaveManagement from './pages/LeaveManagement';
import Holidays from './pages/Holidays';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'employees':
        return <Staff />;
      case 'departments':
        return <Departments />;
      case 'attendance':
        return <Attendance />;
      case 'leave':
        return <LeaveManagement />;
      case 'holidays':
        return <Holidays />;
      case 'niko':
        return <Niko />;
      case 'contracts':
        return <LeaveTypes />; // Placeholder
      case 'okrs':
        return <Okrs />;
      case 'salary':
        return <Salary />;
      case 'personal':
        return <Profile />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <MainLayout currentPath={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </MainLayout>
  );
}

export default App;
