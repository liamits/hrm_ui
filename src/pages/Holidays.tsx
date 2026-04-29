import React, { useState } from 'react';

const Holidays = () => {
  const [selectedDates, setSelectedDates] = useState<string[]>([
    '2026-01-01',
    '2026-02-16',
    '2026-02-17',
    '2026-02-18',
    '2026-02-19',
    '2026-02-20',
    '2026-02-21',
    '2026-02-22',
    '2026-04-27',
    '2026-04-30',
    '2026-05-01',
    '2026-09-02',
    '2026-09-03',
  ]);

  const [newDate, setNewDate] = useState('');
  const [viewDate, setViewDate] = useState(new Date(2026, 3, 1)); // April 2026

  const addDate = () => {
    if (newDate && !selectedDates.includes(newDate)) {
      setSelectedDates(prev => [...prev, newDate].sort());
      setNewDate('');
    }
  };

  const removeDate = (date: string) => {
    setSelectedDates(selectedDates.filter(d => d !== date));
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay(); // 0 (Sun) to 6 (Sat)
  };

  const daysInMonth = getDaysInMonth(viewDate.getFullYear(), viewDate.getMonth());
  const firstDay = getFirstDayOfMonth(viewDate.getFullYear(), viewDate.getMonth());
  // Adjust firstDay for Monday start (T2)
  const offset = firstDay === 0 ? 6 : firstDay - 1;

  const prevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  const nextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));

  const toggleDate = (day: number) => {
    const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    const dateStr = date.toLocaleDateString('en-CA'); // YYYY-MM-DD
    if (selectedDates.includes(dateStr)) {
      removeDate(dateStr);
    } else {
      setSelectedDates([...selectedDates, dateStr].sort());
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700 pb-10">
      {/* Header */}
      <div className="flex items-center gap-2 text-sm font-black text-blue-600 bg-white px-5 py-3 rounded-2xl border border-gray-50 w-fit">
        <span className="material-symbols-outlined text-[20px] text-blue-600">celebration</span>
        <span className="text-gray-200 font-normal">/</span>
        <span className="tracking-tight uppercase">Quản lý Ngày nghỉ lễ</span>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black text-gray-800">Quản lý Ngày nghỉ lễ</h3>
            <p className="text-sm text-gray-400 font-medium">Các ngày này sẽ được tính vào tổng cộng tháng cho nhân sự</p>
          </div>
          <button 
            className="bg-blue-600 text-white font-black px-8 py-3.5 rounded-2xl hover:bg-blue-700 transition-all flex items-center gap-2 active:scale-95"
          >
            <span className="material-symbols-outlined text-[22px]">save</span>
            Lưu cấu hình
          </button>
        </div>

        <div className="p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Calendar View (Shrunk) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between px-2">
              <h4 className="text-lg font-black text-gray-800 uppercase italic tracking-tight">Chọn trên lịch</h4>
              <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl border border-gray-100">
                <button onClick={prevMonth} className="w-8 h-8 flex items-center justify-center bg-white text-gray-400 rounded-lg hover:text-blue-600 transition-all active:scale-90 border border-gray-50">
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <span className="text-[11px] font-black text-gray-700 min-w-[100px] text-center uppercase tracking-wider">
                  T{viewDate.getMonth() + 1} / {viewDate.getFullYear()}
                </span>
                <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center bg-white text-gray-400 rounded-lg hover:text-blue-600 transition-all active:scale-90 border border-gray-50">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-[2rem] border border-gray-50 shadow-sm">
              <div className="grid grid-cols-7 gap-1 mb-3">
                {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map(day => (
                  <div key={day} className="text-center text-[9px] font-black text-gray-300 uppercase tracking-widest py-1">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: offset }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square"></div>
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
                  const dateStr = date.toLocaleDateString('en-CA'); 
                  const isSelected = selectedDates.includes(dateStr);
                  const isToday = new Date().toDateString() === date.toDateString();

                  return (
                    <div 
                      key={day} 
                      onClick={() => toggleDate(day)}
                      className={`
                        aspect-square rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all border-2 relative group
                        ${isSelected 
                          ? 'bg-blue-600 border-transparent text-white scale-105 z-10' 
                          : 'bg-white border-gray-50 text-gray-600 hover:border-blue-200 hover:bg-blue-50/30'
                        }
                        ${isToday && !isSelected ? 'ring-2 ring-blue-600 ring-offset-1' : ''}
                      `}
                    >
                      <span className="text-xs font-black">{day}</span>
                      {isSelected && (
                        <span className="material-symbols-outlined text-[8px] absolute bottom-1 group-hover:animate-bounce">celebration</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 bg-blue-50/50 rounded-xl border border-blue-100/50">
              <span className="material-symbols-outlined text-blue-500 text-[16px]">info</span>
              <p className="text-[10px] font-medium text-blue-600/80 italic">Click vào ô ngày để chọn nhanh</p>
            </div>
          </div>

          {/* Right: Selection & List (Expanded) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-gray-50/50 p-8 rounded-[2.5rem] border border-gray-100/50 space-y-8 h-full">
              <div className="flex items-end justify-between gap-4">
                <div className="flex-1">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 px-1">Thêm thủ công:</label>
                  <div className="flex gap-3">
                    <input 
                      type="date" 
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      className="flex-1 bg-white border-2 border-gray-100 rounded-2xl px-6 py-3.5 outline-none focus:border-blue-600 transition-all font-bold text-gray-700 shadow-sm"
                    />
                    <button 
                      onClick={addDate}
                      disabled={!newDate}
                      className="bg-blue-600 text-white px-8 rounded-2xl font-black text-sm hover:bg-blue-700 transition-all disabled:opacity-50 active:scale-95"
                    >
                      THÊM
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedDates([])}
                  className="px-4 py-3.5 text-[10px] font-black text-red-400 uppercase tracking-widest hover:text-red-600 transition-colors"
                >
                  Xóa tất cả
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between px-1">
                   <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Danh sách ngày đã chọn ({selectedDates.length}):</label>
                </div>
                <div className="flex flex-wrap gap-2 pr-2 custom-scrollbar overflow-y-auto" style={{ maxHeight: '450px' }}>
                  {selectedDates.length > 0 ? (
                    selectedDates.map((date) => (
                      <div 
                        key={date}
                        className="group flex items-center gap-2 bg-white border border-blue-100 pl-4 pr-2 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all animate-in zoom-in-90 duration-300"
                      >
                        <span className="material-symbols-outlined text-blue-600 text-[14px]">calendar_today</span>
                        <span className="text-[13px] font-bold text-gray-700">{formatDate(date)}</span>
                        <button 
                          onClick={() => removeDate(date)}
                          className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-300 hover:bg-red-50 hover:text-red-500 transition-all ml-1"
                        >
                          <span className="material-symbols-outlined text-[16px]">close</span>
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="w-full flex flex-col items-center justify-center py-20 bg-white/50 rounded-3xl border-2 border-dashed border-gray-100">
                       <span className="material-symbols-outlined text-gray-200 text-5xl mb-4">event_busy</span>
                       <p className="text-sm text-gray-400 font-medium italic">Chưa có ngày nghỉ nào được chọn</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Holidays;
