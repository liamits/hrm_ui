import React from 'react';

const LeaveTypes = () => {
  const leaveTypes = [
    { 
      id: 'BT', 
      name: 'Business Trip', 
      paid: true, 
      deduct: false, 
      proof: true, 
      maxDays: 'Không giới hạn',
      desc: 'Đi công tác: Có lệnh điều động / Vé máy bay / Hóa đơn công tác.',
      icon: 'flight',
      color: 'bg-blue-500'
    },
    { 
      id: 'UL', 
      name: 'Unpaid Leave', 
      paid: false, 
      deduct: true, 
      proof: false, 
      maxDays: 'Theo quỹ phép',
      desc: 'Nghỉ không lương: Đối trừ vào quỹ phép năm hoặc trừ lương trực tiếp.',
      icon: 'money_off',
      color: 'bg-gray-500'
    },
    { 
      id: 'WFH', 
      name: 'Work From Home', 
      paid: true, 
      deduct: false, 
      proof: false, 
      maxDays: '12 ngày/năm',
      desc: 'Làm việc từ xa: Giữ nguyên lương, không cần minh chứng cụ thể.',
      icon: 'home_work',
      color: 'bg-teal-500'
    },
    { 
      id: 'SL', 
      name: 'Sick Leave', 
      paid: true, 
      deduct: false, 
      proof: true, 
      maxDays: '15 ngày/năm',
      desc: 'Nghỉ ốm: Hưởng lương bảo hiểm, yêu cầu ảnh giấy xác nhận của bác sĩ.',
      icon: 'medical_services',
      color: 'bg-red-500'
    },
    { 
      id: 'AL', 
      name: 'Annual Leave', 
      paid: true, 
      deduct: true, 
      proof: false, 
      maxDays: '12-14 ngày',
      desc: 'Nghỉ phép năm: Nghỉ hưởng lương, đối trừ trực tiếp vào quỹ phép năm.',
      icon: 'event_available',
      color: 'bg-purple-500'
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-black text-primary-purple bg-white px-5 py-3 rounded-2xl shadow-xl shadow-purple-100 border border-purple-50">
           <span className="material-symbols-outlined text-[20px] bg-gradient-purple text-transparent bg-clip-text">event_busy</span>
           <span className="text-gray-200 font-normal">/</span>
           <span className="tracking-tight uppercase">Danh sách loại nghỉ</span>
        </div>
        <button className="bg-gradient-purple text-white font-black px-8 py-3.5 rounded-2xl hover:opacity-90 transition-all flex items-center gap-2 shadow-2xl shadow-purple-200 active:scale-95">
          <span className="material-symbols-outlined text-[22px]">add_circle</span>
          Thêm loại nghỉ phép
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaveTypes.map((type) => (
          <div key={type.id} className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/40 p-8 flex flex-col group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 ${type.color} opacity-[0.03] -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
            
            <div className="flex items-start justify-between mb-8">
               <div className={`w-16 h-16 rounded-3xl ${type.color} flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                  <span className="material-symbols-outlined text-3xl font-bold">{type.icon}</span>
               </div>
               <div className="flex flex-col items-end gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Mã: {type.id}</span>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider italic ${type.paid ? 'bg-green-50 text-green-500 border border-green-100' : 'bg-red-50 text-red-500 border border-red-100'}`}>
                    {type.paid ? 'Có lương' : 'Không lương'}
                  </div>
               </div>
            </div>

            <div className="flex-1">
               <h3 className="text-xl font-black text-gray-800 mb-2 group-hover:text-primary-purple transition-colors">{type.name}</h3>
               <p className="text-sm text-gray-400 font-medium leading-relaxed mb-8 line-clamp-3 italic">
                 {type.desc}
               </p>

               <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-50 group-hover:bg-purple-50 group-hover:border-purple-100 transition-all">
                     <p className="text-[10px] font-black text-gray-300 uppercase mb-1">Khấu trừ</p>
                     <p className={`text-[12px] font-bold ${type.deduct ? 'text-orange-500' : 'text-teal-500'}`}>
                       {type.deduct ? 'Có khấu trừ' : 'Không khấu trừ'}
                     </p>
                  </div>
                  <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-50 group-hover:bg-purple-50 group-hover:border-purple-100 transition-all">
                     <p className="text-[10px] font-black text-gray-300 uppercase mb-1">Minh chứng</p>
                     <p className={`text-[12px] font-bold ${type.proof ? 'text-purple-600' : 'text-gray-400'}`}>
                       {type.proof ? 'Yêu cầu' : 'Không yêu cầu'}
                     </p>
                  </div>
               </div>
            </div>

            <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
               <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-300 text-[18px]">history_toggle_off</span>
                  <span className="text-[11px] font-black text-gray-400 uppercase tracking-tight">{type.maxDays}</span>
               </div>
               <div className="flex gap-2">
                  <button className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-2xl hover:bg-primary-purple hover:text-white transition-all shadow-sm">
                     <span className="material-symbols-outlined text-[20px]">edit</span>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm">
                     <span className="material-symbols-outlined text-[20px]">delete</span>
                  </button>
               </div>
            </div>
          </div>
        ))}

        <button className="bg-white/50 border-4 border-dashed border-gray-100 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-gray-300 hover:border-primary-purple hover:text-primary-purple hover:bg-white transition-all group min-h-[380px] shadow-sm">
           <div className="w-20 h-20 rounded-full border-4 border-dashed border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white shadow-xl shadow-gray-100">
              <span className="material-symbols-outlined text-5xl">add</span>
           </div>
           <span className="font-black uppercase tracking-widest text-sm">Thêm loại nghỉ mới</span>
        </button>
      </div>
    </div>
  );
};

export default LeaveTypes;
