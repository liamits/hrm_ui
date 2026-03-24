import React from 'react';

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPath, onNavigate }) => {
  const menuItems = [
    { id: 'dashboard', icon: 'grid_view', label: 'Bảng điều khiển', color: 'text-purple-500' },
    { id: 'nhan-su', icon: 'person', label: 'Nhân sự', color: 'text-teal-500' },
    { id: 'corporate_fare', icon: 'corporate_fare', label: 'Phòng ban', color: 'text-blue-500' },
    { id: 'schedule', icon: 'schedule', label: 'Chấm công', color: 'text-orange-500' },
    { id: 'mood', icon: 'mood', label: 'Lịch Niko', color: 'text-pink-500' },
    { id: 'event_busy', icon: 'event_busy', label: 'Nghỉ phép & OT', color: 'text-red-500' },
    { id: 'target', icon: 'target', label: 'OKRs', color: 'text-indigo-500' },
    { id: 'payments', icon: 'payments', label: 'Lương thưởng', color: 'text-green-500' },
    { id: 'task_alt', icon: 'task_alt', label: 'Ca làm việc', color: 'text-cyan-500' },
    { id: 'security_update_good', icon: 'security_update_good', label: 'Đánh giá', color: 'text-yellow-500' },
    { id: 'inventory_2', icon: 'inventory_2', label: 'Tài sản', color: 'text-amber-400' },
    { id: 'chat', icon: 'chat', label: 'Chat nội bộ', color: 'text-violet-500' },
    { id: 'settings', icon: 'settings', label: 'Cài đặt', color: 'text-slate-500' },
  ];

  return (
    <aside className="w-64 bg-white h-screen flex flex-col z-20 overflow-y-auto sidebar-shadow border-r border-gray-100">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-purple rounded-lg shadow-lg">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tight text-[#343a40] italic">AHV WORK</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 pb-10">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-[13px] group ${
              currentPath === item.id
                ? 'bg-purple-50 text-primary-purple font-bold shadow-sm border border-purple-100' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-primary-purple'
            }`}
          >
            <span className={`material-symbols-outlined text-[20px] ${currentPath === item.id ? 'text-primary-purple' : item.color} group-hover:scale-110 transition-transform`}>
              {item.icon}
            </span>
            <span>{item.label}</span>
            {currentPath === item.id && <span className="ml-auto material-symbols-outlined text-sm">home</span>}
          </button>
        ))}
      </nav>
      
      <div className="p-4 border-t border-gray-50 bg-gray-50/30">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-500 transition-colors text-[13px] rounded-xl hover:bg-red-50">
          <span className="material-symbols-outlined text-[20px]">logout</span>
          <span>Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
