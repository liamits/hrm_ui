import React, { useState } from 'react';
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

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'nhan-su':
        return <Staff />;
      case 'corporate_fare':
        return <Departments />;
      case 'schedule':
        return <Attendance />;
      case 'mood':
        return <Niko />;
      case 'event_busy':
        return <LeaveTypes />;
      case 'target':
        return <Okrs />;
      case 'payments':
        return <Salary />;
      case 'task_alt':
        return <Shifts />;
      case 'security_update_good':
        return <Evaluation />;
      case 'inventory_2':
        return <Assets />;
      case 'chat':
        return <Chat />;
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
