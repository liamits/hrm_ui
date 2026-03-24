import React from 'react';

const Okrs = () => {
  const okrData = [
    { stt: 1, name: '0,5', employee: 'Phạm Minh Hiếu', year: 2026, quarter: 1, week: 10, status: 'Hoạt động', date: '24/03/2026' },
    { stt: 2, name: 'Phúc', employee: 'Nguyễn Hồng Phúc', year: 2026, quarter: 1, week: 4, status: 'Hoạt động', date: '14/03/2026' },
    { stt: 3, name: 'Làm quen', employee: 'Chu Văn Tú', year: 2026, quarter: 1, week: 13, status: 'Hoạt động', date: '13/03/2026' },
    { stt: 4, name: 'Hòa Vốn', employee: 'Đinh Quang Cường', year: 2026, quarter: 1, week: 12, status: 'Hoạt động', date: '10/03/2026' },
    { stt: 5, name: 'Big Bang', employee: 'Chu Đức Hoàng', year: 2026, quarter: 1, week: 12, status: 'Hoạt động', date: '10/03/2026' },
    { stt: 6, name: 'Ổn định', employee: 'Ngô Duy Vũ', year: 2026, quarter: 1, week: 12, status: 'Hoạt động', date: '10/03/2026' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-sm font-black text-primary-purple bg-white px-5 py-3 rounded-2xl shadow-xl shadow-purple-100 border border-purple-50">
           <span className="material-symbols-outlined text-[20px] bg-gradient-purple text-transparent bg-clip-text">target</span>
           <span className="text-gray-200 font-normal">/</span>
           <span className="tracking-tight uppercase">Danh sách OKRs</span>
        </div>
        <button className="bg-gradient-purple text-white font-black px-8 py-3.5 rounded-2xl hover:opacity-90 transition-all flex items-center gap-2 shadow-2xl shadow-purple-200 active:scale-95">
          <span className="material-symbols-outlined text-[22px]">add_task</span>
          Thêm OKRs
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-wrap gap-6 items-end relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-purple opacity-30"></div>
        <div className="flex-1 min-w-[200px] space-y-2">
           <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-1">Tên OKRs</label>
           <input type="text" placeholder="Nhập tên OKRs để tìm kiếm" className="w-full bg-gray-50/50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-purple/20 focus:bg-white transition-all" />
        </div>
        <div className="flex-1 min-w-[200px] space-y-2">
           <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-1">Tên nhân viên</label>
           <select className="w-full bg-gray-50/50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-primary-purple/20 focus:bg-white transition-all">
              <option>Chọn nhân viên</option>
           </select>
        </div>
        <div className="flex-1 min-w-[200px] space-y-2">
           <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-1">Phòng ban</label>
           <select className="w-full bg-gray-50/50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-primary-purple/20 focus:bg-white transition-all">
              <option>Chọn phòng ban</option>
           </select>
        </div>
        <div className="flex-1 min-w-[200px] space-y-2">
           <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-1">Trạng thái</label>
           <select className="w-full bg-gray-50/50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-primary-purple/20 focus:bg-white transition-all">
              <option>Chọn trạng thái</option>
           </select>
        </div>
        <button className="px-8 py-3.5 border-2 border-red-50 text-red-500 font-black rounded-xl text-sm flex items-center gap-2 hover:bg-red-50 transition-all active:scale-95 shadow-sm">
           <span className="material-symbols-outlined text-[20px]">refresh</span>
           Làm mới
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden relative">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/30 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-gray-100">
                <th className="px-8 py-6">STT</th>
                <th className="px-6 py-6 border-l border-gray-50">Tên OKRs</th>
                <th className="px-6 py-6 border-l border-gray-50">Nhân viên</th>
                <th className="px-6 py-6 border-l border-gray-50">Năm</th>
                <th className="px-6 py-6 border-l border-gray-50 uppercase">Quý</th>
                <th className="px-6 py-6 border-l border-gray-50">Tuần</th>
                <th className="px-6 py-6 border-l border-gray-50">Trạng thái</th>
                <th className="px-6 py-6 border-l border-gray-50">Ngày tạo</th>
                <th className="px-8 py-6 text-center border-l border-gray-50">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/50">
              {okrData.map((item) => (
                <tr key={item.stt} className="hover:bg-primary-purple/[0.02] transition-colors group">
                  <td className="px-8 py-5 text-[12px] font-bold text-gray-300">{item.stt}</td>
                  <td className="px-6 py-5 border-l border-gray-50/10">
                    <span className="text-[14px] font-bold text-primary-purple group-hover:underline cursor-pointer">{item.name}</span>
                  </td>
                  <td className="px-6 py-5 border-l border-gray-50/10">
                    <span className="text-[13px] font-bold text-gray-700">{item.employee}</span>
                  </td>
                  <td className="px-6 py-5 border-l border-gray-50/10 text-sm text-gray-500 font-medium">{item.year}</td>
                  <td className="px-6 py-5 border-l border-gray-50/10 text-sm text-gray-500 font-medium">{item.quarter}</td>
                  <td className="px-6 py-5 border-l border-gray-50/10 text-sm text-gray-500 font-medium">{item.week}</td>
                  <td className="px-6 py-5 border-l border-gray-50/10">
                    <span className="px-3 py-1 bg-green-50 text-green-500 text-[10px] font-black uppercase tracking-wider rounded-lg border border-green-100">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 border-l border-gray-50/10 text-[12px] font-bold text-gray-400">{item.date}</td>
                  <td className="px-8 py-5 border-l border-gray-50/10">
                    <div className="flex items-center justify-center gap-3">
                       <button className="w-9 h-9 flex items-center justify-center bg-yellow-50 text-yellow-600 rounded-xl hover:bg-yellow-400 hover:text-white transition-all shadow-sm">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                       </button>
                       <button className="w-9 h-9 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-8 bg-gray-50/30 flex justify-between items-center text-[11px] font-black text-gray-300 px-8 uppercase tracking-widest">
           <span>Hiển thị 1 - 6 trong 55 bản ghi</span>
           <div className="flex gap-2">
              <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-gray-100 hover:text-primary-purple transition-colors shadow-sm"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
              <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-purple text-white shadow-xl shadow-purple-200">1</button>
              <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-gray-100 hover:text-primary-purple transition-colors shadow-sm">2</button>
              <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-gray-100 hover:text-primary-purple transition-colors shadow-sm"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Okrs;
