import React from 'react';

const Dashboard = () => {
  const cards = [
    { 
      label: 'Tổng nhân sự', 
      value: '55', 
      desc: '+56 tháng này', 
      gradient: 'bg-gradient-purple', 
      icon: 'groups',
    },
    { 
      label: 'Đang nghỉ phép', 
      value: '0', 
      desc: 'Giảm 10%', 
      gradient: 'bg-gradient-blue', 
      icon: 'person_off',
    },
    { 
      label: 'Chờ duyệt', 
      value: '1', 
      desc: 'Yêu cầu mới', 
      gradient: 'bg-gradient-purple', 
      icon: 'pending_actions',
    },
    { 
      label: 'Hạnh phúc', 
      value: '80%', 
      desc: 'Trạng thái: Tốt', 
      gradient: 'bg-gradient-teal', 
      icon: 'sentiment_very_satisfied',
    },
  ];

  const quickAccess = [
    { label: 'Chấm công', icon: 'schedule', color: 'text-primary-purple' },
    { label: 'Nghỉ phép', icon: 'event_busy', color: 'text-primary-teal' },
    { label: 'Niko', icon: 'mood', color: 'text-support-blue' },
    { label: 'Chat', icon: 'chat', color: 'text-support-salmon' },
    { label: 'Nhân sự', icon: 'person', color: 'text-support-purple' },
    { label: 'OKRs', icon: 'target', color: 'text-red-500' },
    { label: 'Lương thưởng', icon: 'payments', color: 'text-green-500' },
    { label: 'Cài đặt', icon: 'settings', color: 'text-gray-500' },
  ];

  const attendanceData = [
    { label: 'Ngày đi làm', value: '4 ngày', color: 'text-gray-800' },
    { label: 'Đi muộn', value: '3 ngày', color: 'text-orange-500' },
    { label: 'Ngày phép còn', value: '10 ngày', color: 'text-primary-teal' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-1">Chào buổi chiều, Admin.</h2>
          <p className="text-sm text-gray-400 font-medium">Thứ Ba, ngày 24 tháng 3 năm 2026</p>
          <div className="mt-3 inline-block px-3 py-1 bg-primary-purple/10 text-primary-purple text-[10px] font-bold rounded-full uppercase tracking-wider">
             Quản trị viên
          </div>
        </div>
        <button className="bg-primary-teal text-white font-bold px-6 py-2.5 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-teal-100">
          <span className="material-symbols-outlined text-[20px]">schedule</span>
          Chấm công
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.label} className={`${card.gradient} p-6 rounded-2xl relative overflow-hidden text-white shadow-xl hover:scale-[1.02] transition-transform`}>
             <img src="https://demo.bootstrapdash.com/purple/assets/images/dashboard/circle.svg" className="absolute -right-5 -top-5 w-32 opacity-30 pointer-events-none" alt="" />
             <div className="relative z-10">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-sm font-medium opacity-90">{card.label}</h3>
                 <span className="material-symbols-outlined text-[20px] opacity-80">{card.icon}</span>
               </div>
               <p className="text-2xl font-bold mb-4">{card.value}</p>
               <p className="text-[11px] font-medium opacity-80">{card.desc}</p>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl card-shadow">
           <h3 className="text-lg font-bold text-gray-800 mb-8">Truy cập nhanh</h3>
           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {quickAccess.map((item) => (
                <button key={item.label} className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-50 hover:bg-gray-50 transition-all group">
                   <span className={`material-symbols-outlined text-3xl mb-3 ${item.color} group-hover:scale-110 transition-transform`}>{item.icon}</span>
                   <span className="text-[12px] font-bold text-gray-600">{item.label}</span>
                </button>
              ))}
           </div>
        </div>

        <div className="bg-white p-8 rounded-2xl card-shadow flex flex-col">
           <h3 className="text-lg font-bold text-gray-800 mb-8">Chấm công tháng này</h3>
           <div className="flex-1 space-y-6">
              {attendanceData.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                   <span className="text-sm font-medium text-gray-500">{item.label}</span>
                   <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                </div>
              ))}
           </div>
           <div className="mt-10 pt-6 border-t border-gray-50">
              <button className="w-full py-3 bg-gray-50 text-gray-600 text-[13px] font-bold rounded-xl hover:bg-gray-100 transition-colors">
                 Xem chi tiết lịch
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
