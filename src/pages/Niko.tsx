import React from 'react';

const Niko = () => {
  const weekDays = [
    { label: 'Thứ 2', status: 'empty' },
    { label: 'Thứ 3', status: 'empty' },
    { label: 'Thứ 4', status: 'empty' },
    { label: 'Thứ 5', status: 'active' },
    { label: 'Thứ 6', status: 'empty' },
    { label: 'Thứ 7', status: 'empty' },
    { label: 'Chủ nhật', status: 'locked' },
  ];

  const moods = [
    { label: 'Tệ', icon: 'sentiment_very_dissatisfied', color: 'text-red-500', bg: 'bg-red-50' },
    { label: 'Không tốt', icon: 'sentiment_dissatisfied', color: 'text-orange-500', bg: 'bg-orange-50' },
    { label: 'Bình thường', icon: 'sentiment_neutral', color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Vui vẻ', icon: 'sentiment_satisfied', color: 'text-teal-500', bg: 'bg-teal-50' },
    { label: 'Tuyệt vời', icon: 'sentiment_very_satisfied', color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  return (
    <div className="flex gap-8 animate-in fade-in slide-in-from-right-8 duration-700">
      <div className="flex-1 space-y-8">
        {/* Weekly View */}
        <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-50">
          <h2 className="text-sm font-black text-gray-800 mb-8 uppercase tracking-widest">Tuần làm việc của tôi</h2>
          <div className="flex justify-between gap-4">
            {weekDays.map((day, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-4">
                <span className={`text-[11px] font-black ${day.status === 'active' ? 'text-primary-purple' : 'text-gray-300'}`}>
                  {day.label}
                </span>
                <div className={`w-full aspect-square rounded-2xl border-2 flex items-center justify-center transition-all ${
                  day.status === 'active' ? 'border-primary-purple bg-purple-50 shadow-lg shadow-purple-100' : 
                  day.status === 'locked' ? 'border-gray-50 bg-gray-50/50' : 'border-gray-100 bg-white'
                }`}>
                  {day.status === 'active' && (
                    <div className="flex flex-col items-center">
                       <span className="material-symbols-outlined text-primary-purple text-2xl font-bold">add</span>
                       <div className="w-1.5 h-1.5 bg-primary-purple rounded-full mt-1"></div>
                    </div>
                  )}
                  {day.status === 'locked' && (
                    <span className="material-symbols-outlined text-gray-300">lock</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mood Selector Banner */}
        <div className="bg-[#ffc107] rounded-[2.5rem] p-10 shadow-2xl shadow-yellow-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 -mr-32 -mt-32 rounded-full"></div>
          <div className="relative z-10 text-center mb-10">
             <h2 className="text-2xl font-black text-gray-800">Ngày hôm nay của bạn như thế nào?</h2>
          </div>
          
          <div className="grid grid-cols-5 gap-6 relative z-10">
            {moods.map((mood, idx) => (
              <button 
                key={idx} 
                className="bg-white rounded-3xl p-6 shadow-xl hover:scale-105 hover:shadow-2xl transition-all group flex flex-col items-center gap-4"
              >
                <div className={`w-16 h-16 rounded-2xl ${mood.bg} flex items-center justify-center transition-transform group-hover:rotate-12`}>
                   <span className={`material-symbols-outlined text-4xl font-bold ${mood.color}`}>
                     {mood.icon}
                   </span>
                </div>
                <span className="text-xs font-black text-gray-600 uppercase tracking-tighter">{mood.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar Widgets */}
      <div className="w-80 space-y-8">
         <div className="bg-primary-purple rounded-[2rem] p-8 text-white shadow-2xl shadow-purple-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 -mr-16 -mt-16 rounded-full"></div>
            <div className="flex justify-between items-center mb-6">
               <span className="text-sm font-black uppercase tracking-widest opacity-80">Tỷ lệ phản hồi</span>
               <span className="text-2xl font-black">0%</span>
            </div>
            <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
               <div className="w-0 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
            </div>
         </div>

         <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-100 border border-gray-50 flex flex-col min-h-[250px]">
            <h3 className="text-sm font-black text-gray-800 mb-10 uppercase tracking-widest">Tổng quan</h3>
            <div className="flex-1 flex flex-col items-center justify-center opacity-30">
               <span className="material-symbols-outlined text-6xl text-gray-300">data_exploration</span>
               <p className="text-xs font-bold text-gray-400 mt-4">Biểu đồ tổng quan</p>
            </div>
         </div>

         <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-100 border border-gray-50 flex flex-col min-h-[250px]">
            <h3 className="text-sm font-black text-gray-800 mb-10 uppercase tracking-widest">Chỉ số cảm xúc</h3>
            <div className="flex-1 flex flex-col items-center justify-center opacity-30">
               <span className="material-symbols-outlined text-6xl text-gray-300">monitoring</span>
               <p className="text-xs font-bold text-gray-400 mt-4">Biểu đồ xu hướng</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Niko;
