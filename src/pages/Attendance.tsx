import React from 'react';

const Attendance = () => {
  const daysHeader = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  
  const calendarData = [
    { day: 1, type: 'sunday', stats: '0/55', percent: 0 }, 
    { day: 2, stats: '0/55', percent: 0 }, 
    { day: 3, stats: '5/55', percent: 10 }, 
    { day: 4, stats: '12/55', percent: 22 }, 
    { day: 5, stats: '45/55', percent: 82 }, 
    { day: 6, stats: '52/55', percent: 95 }, 
    { day: 7, stats: '0/55', percent: 0 },
    
    { day: 8, type: 'sunday', stats: '0/55', percent: 0 }, 
    { day: 9, stats: '48/55', percent: 87 }, 
    { day: 10, stats: '53/55', percent: 96 }, 
    { day: 11, stats: '42/55', percent: 76 }, 
    { day: 12, stats: '55/55', percent: 100 }, 
    { day: 13, stats: '50/55', percent: 91 }, 
    { day: 14, stats: '46/55', percent: 84 },
    
    { day: 15, type: 'sunday', stats: '0/55', percent: 0 }, 
    { day: 16, stats: '51/55', percent: 93 }, 
    { day: 17, stats: '49/55', percent: 89 }, 
    { day: 18, stats: '53/55', percent: 96 }, 
    { day: 19, stats: '55/55', percent: 100 }, 
    { day: 20, stats: '52/55', percent: 95 }, 
    { day: 21, stats: '48/55', percent: 87 },
    
    { day: 22, type: 'sunday', stats: '0/55', percent: 0 }, 
    { day: 23, stats: '54/55', percent: 98 }, 
    { day: 24, type: 'today', stats: '55/55', percent: 100 }, 
    { day: 25, stats: '-' }, 
    { day: 26, stats: '-' }, 
    { day: 27, stats: '-' }, 
    { day: 28, stats: '-' },
    
    { day: 29, type: 'sunday', stats: '0/55', percent: 0 }, 
    { day: 30, stats: '-' }, 
    { day: 31, stats: '-' }, 
    { day: 1, type: 'next', stats: '-' }, 
    { day: 2, type: 'next', stats: '-' }, 
    { day: 3, type: 'next', stats: '-' }, 
    { day: 4, type: 'next', stats: '-' },
  ];

  const getStatusColor = (percent: number) => {
    if (percent === 100) return 'text-purple-600 bg-purple-50 border-purple-100';
    if (percent >= 90) return 'text-teal-600 bg-teal-50 border-teal-100';
    if (percent >= 80) return 'text-blue-600 bg-blue-50 border-blue-100';
    if (percent > 0) return 'text-orange-600 bg-orange-50 border-orange-100';
    return 'text-gray-400 bg-gray-50 border-gray-100';
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-sm font-black text-primary-purple bg-white px-5 py-3 rounded-2xl shadow-xl shadow-purple-100 border border-purple-50">
           <span className="material-symbols-outlined text-[20px] bg-gradient-purple text-transparent bg-clip-text">calendar_month</span>
           <span className="text-gray-200 font-normal">/</span>
           <span className="tracking-tight uppercase">Bảng chấm công</span>
        </div>
        
        <div className="flex items-center gap-4">
           <div className="flex gap-2 bg-white p-2 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="relative group">
                 <select className="appearance-none bg-gray-50 text-[13px] font-black px-4 py-2 pr-10 rounded-xl outline-none text-gray-700 hover:bg-gray-100 transition-colors border border-transparent focus:border-primary-purple/30">
                    <option>2026</option>
                 </select>
                 <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-sm font-bold">expand_more</span>
              </div>
              <div className="relative group">
                 <select className="appearance-none bg-gray-50 text-[13px] font-black px-4 py-2 pr-10 rounded-xl outline-none text-gray-700 hover:bg-gray-100 transition-colors border border-transparent focus:border-primary-purple/30">
                    <option>Tháng 03</option>
                 </select>
                 <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-sm font-bold">expand_more</span>
              </div>
           </div>
           <div className="flex bg-white p-1.5 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <button className="px-6 py-2 text-[12px] font-black bg-gradient-purple text-white rounded-xl shadow-lg shadow-purple-200 transition-all active:scale-95 uppercase tracking-wider">Tháng</button>
              <button className="px-6 py-2 text-[12px] font-black text-gray-400 hover:text-primary-purple hover:bg-purple-50/50 rounded-xl transition-all uppercase tracking-wider">Năm</button>
           </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-purple-500/10 border border-gray-100 p-2">
        <div className="grid grid-cols-7">
          {daysHeader.map(day => (
            <div key={day} className="py-6 text-center text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] border-b border-gray-50">
              {day}
            </div>
          ))}

          {calendarData.map((item, idx) => (
            <div 
              key={idx} 
              className={`min-h-[160px] p-6 border-r border-b border-gray-50 relative transition-all duration-300 group overflow-hidden ${
                item.type === 'sunday' ? 'bg-gray-50/40 pattern-dots' : 
                item.type === 'next' ? 'bg-gray-50/20 opacity-40 pattern-diagonal' : 'hover:bg-purple-50/20'
              } ${item.type === 'today' ? 'bg-purple-50/50 ring-4 ring-primary-purple ring-inset z-10' : ''}`}
            >
              <div className={`absolute top-4 right-5 text-[14px] font-black transition-all group-hover:scale-125 ${
                item.type === 'today' ? 'text-primary-purple' : 
                item.type === 'next' ? 'text-gray-200' : 'text-gray-300 group-hover:text-gray-600'
              }`}>
                {item.day < 10 ? `0${item.day}` : item.day}
              </div>

              {item.stats !== '-' && (
                <div className="mt-6 flex flex-col h-full justify-between">
                   <div className="space-y-4">
                      <div className={`flex items-center gap-3 px-3 py-2 rounded-xl border text-[12px] font-black transition-all group-hover:translate-x-1 ${getStatusColor(item.percent || 0)}`}>
                         <div className="flex absolute -left-1 opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all">
                            <div className="w-1 h-4 bg-current rounded-full"></div>
                         </div>
                         <span className="material-symbols-outlined text-[18px]">group</span>
                         <span>{item.stats}</span>
                      </div>
                      
                      <div className="flex items-center gap-3 px-3 text-[11px] font-black text-gray-400 group-hover:text-gray-600 transition-colors">
                         <span className="material-symbols-outlined text-[18px] opacity-40">alarm</span>
                         <span className="italic">08:00 - 17:30</span>
                      </div>
                   </div>

                   <div className="flex justify-between items-end mt-4">
                      {item.percent ? (
                        <div className="w-10 h-1 font-black rounded-full bg-gray-100 overflow-hidden">
                           <div className={`h-full bg-current ${getStatusColor(item.percent).split(' ')[0]}`} style={{ width: `${item.percent}%` }}></div>
                        </div>
                      ) : <div/>}
                      <span className={`material-symbols-outlined text-[24px] transition-all group-hover:scale-125 ${
                        item.percent === 100 ? 'text-purple-500 drop-shadow-lg' : 
                        item.percent && item.percent > 0 ? 'text-teal-400' : 'text-gray-100'
                      }`}>
                        {item.percent && item.percent > 0 ? 'check_circle' : 'circle'}
                      </span>
                   </div>
                </div>
              )}
              
              {item.type === 'today' && (
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-purple"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-8 justify-center py-4">
         <div className="flex items-center gap-3 px-5 py-2.5 bg-white rounded-2xl shadow-lg shadow-gray-100 border border-gray-50">
            <div className="w-3 h-3 rounded-full bg-purple-500 shadow-lg shadow-purple-200"></div>
            <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest">Đầy đủ (100%)</span>
         </div>
         <div className="flex items-center gap-3 px-5 py-2.5 bg-white rounded-2xl shadow-lg shadow-gray-100 border border-gray-50">
            <div className="w-3 h-3 rounded-full bg-teal-400 shadow-lg shadow-teal-200"></div>
            <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest">Cao (90%+)</span>
         </div>
         <div className="flex items-center gap-3 px-5 py-2.5 bg-white rounded-2xl shadow-lg shadow-gray-100 border border-gray-50">
            <div className="w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-200"></div>
            <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest">Trung bình (80%+)</span>
         </div>
         <div className="flex items-center gap-3 px-5 py-2.5 bg-white rounded-2xl shadow-lg shadow-gray-100 border border-gray-50">
            <div className="w-3 h-3 rounded-full bg-orange-400 shadow-lg shadow-orange-200"></div>
            <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest">Thấp ({'<'}80%)</span>
         </div>
      </div>
    </div>
  );
};

export default Attendance;
