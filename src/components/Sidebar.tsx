import React from 'react';

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPath, onNavigate }) => {
  const menuItems = [
    { id: 'dashboard', icon: 'grid_view', label: 'Bảng điều khiển', color: 'text-purple-500' },
    { id: 'attendance', icon: 'calendar_today', label: 'Chấm công', color: 'text-orange-500' },
    { id: 'leave', icon: 'event_note', label: 'Nghỉ phép', color: 'text-pink-500' },
    { id: 'holidays', icon: 'celebration', label: 'Nghi lễ', color: 'text-orange-500' },
    { id: 'niko', icon: 'sentiment_satisfied', label: 'Lịch Niko', color: 'text-purple-500' },
    { id: 'okrs', icon: 'track_changes', label: 'OKRs', color: 'text-blue-500' },
    { id: 'employees', icon: 'person', label: 'Nhân sự', color: 'text-teal-500' },
    { id: 'departments', icon: 'domain', label: 'Phòng ban', color: 'text-blue-500' },
    { id: 'contracts', icon: 'description', label: 'Hợp đồng', color: 'text-orange-400' },
    { id: 'salary', icon: 'payments', label: 'Lương thưởng', color: 'text-green-500' },
    { id: 'personal', icon: 'account_circle', label: 'Cá nhân', color: 'text-red-400' },
    { id: 'settings', icon: 'settings', label: 'Cài đặt', color: 'text-gray-500' },
  ];

  return (
    <aside className="w-64 bg-white h-screen flex flex-col z-20 overflow-y-auto sidebar-shadow border-r border-gray-100">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 flex items-center justify-center bg-[#f0f7ff] rounded-xl shadow-sm">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#1a73e8]" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="5" fill="currentColor" />
            </svg>
          </div>
          <span className="text-[20px] font-black tracking-tight text-[#343a40]">AHV WORK</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 pb-10">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-[13px] group ${
              currentPath === item.id
                ? 'bg-blue-50 text-blue-600 font-bold' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span className={`material-symbols-outlined text-[20px] ${currentPath === item.id ? 'text-blue-600' : item.color} group-hover:scale-110 transition-transform`}>
              {item.icon}
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="p-4 border-t border-gray-50 bg-gray-50/20">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-500 transition-colors text-[13px] rounded-xl hover:bg-red-50">
          <span className="material-symbols-outlined text-[20px]">logout</span>
          <span>Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
