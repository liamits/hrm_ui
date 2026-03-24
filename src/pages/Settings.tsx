import React, { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('payroll');

  const tabs = [
    { id: 'payroll', label: 'Lương thưởng', icon: 'payments' },
    { id: 'attendance', label: 'Chấm công', icon: 'schedule' },
    { id: 'leave', label: 'Nghỉ phép', icon: 'event_busy' },
    { id: 'okrs', label: 'OKRs', icon: 'target' },
    { id: 'account', label: 'Tài khoản', icon: 'person' },
  ];

  const payrollSettings = [
    { label: 'BHTN nhân viên (%)', value: '1', key: 'payroll.bhtn_rate' },
    { label: 'BHXH nhân viên (%)', value: '8', key: 'payroll.bhxh_rate' },
    { label: 'BHYT nhân viên (%)', value: '1.5', key: 'payroll.bhyt_rate' },
    { label: 'Ngày chốt lương hàng tháng', value: '25', key: 'payroll.close_day' },
    { label: 'Tỷ lệ P1 (%)', value: '70', key: 'payroll.p1_ratio' },
    { label: 'Tỷ lệ P2 (%)', value: '10', key: 'payroll.p2_ratio' },
    { label: 'Tỷ lệ P3 (%)', value: '20', key: 'payroll.p3_ratio' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-10 duration-700">
      <div className="mb-8">
         <h1 className="text-3xl font-black text-gray-800 tracking-tight">Cài đặt hệ thống</h1>
         <p className="text-sm text-gray-400 font-bold mt-1">Cấu hình chấm công, lương thưởng, nghỉ phép, OKRs</p>
      </div>

      <div className="flex bg-white p-2 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-50 items-center justify-between overflow-x-auto gap-2">
         {tabs.map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-8 py-3.5 rounded-[1.5rem] transition-all whitespace-nowrap ${
                activeTab === tab.id 
                ? 'bg-primary-purple text-white shadow-lg shadow-purple-200' 
                : 'text-gray-400 hover:bg-purple-50 hover:text-primary-purple'
              }`}
            >
               <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
               <span className="text-xs font-black uppercase tracking-widest">{tab.label}</span>
            </button>
         ))}
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 p-6 space-y-4">
        {payrollSettings.map((item, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-[2rem] hover:bg-purple-50/50 transition-all border border-transparent hover:border-purple-100"
          >
            <div>
               <h4 className="text-[14px] font-black text-gray-700 group-hover:text-primary-purple transition-colors">{item.label}</h4>
               <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mt-1">{item.key}</p>
            </div>
            <div className="mt-4 md:mt-0 relative w-40">
               <input 
                 type="text" 
                 defaultValue={item.value}
                 className="w-full bg-gray-50 border border-gray-50 rounded-2xl px-6 py-3 text-sm font-black text-center text-gray-700 focus:outline-none focus:ring-4 focus:ring-primary-purple/10 focus:bg-white transition-all shadow-inner" 
               />
               <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-gray-300 text-sm">edit</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-4">
         <button className="px-10 py-4 font-black text-gray-400 hover:text-gray-600 transition-colors uppercase tracking-widest text-xs">Hủy thay đổi</button>
         <button className="bg-gradient-purple text-white font-black px-12 py-4 rounded-2xl shadow-2xl shadow-purple-200 hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-widest">
           Lưu cấu hình
         </button>
      </div>
    </div>
  );
};

export default Settings;
