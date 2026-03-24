import React from 'react';

const Evaluation = () => {
  const stats = [
    { label: 'Tổng đánh giá', value: '17', icon: 'groups' },
    { label: 'Hoàn thành', value: '10 / 17', icon: 'check_circle' },
    { label: 'Tỷ lệ hoàn thành', value: '59%', icon: 'percent', progress: 59 },
    { label: 'Điểm trung bình', value: '8.3', icon: 'star' },
  ];

  const evaluations = [
    { name: 'Nguyễn Ngọc Hoàng', role: 'Trưởng phòng', dept: 'Media', self: '8.5', manager: '8.8', final: '8.7', status: 'Hoàn thành' },
    { name: 'Nguyễn Hải Anh', role: 'Artist', dept: 'Media', self: '7.8', manager: '8.0', final: '7.9', status: 'Hoàn thành' },
    { name: 'Trần Tuyết Hoa', role: 'Artist', dept: 'Media', self: '8.2', manager: '-', final: '-', status: 'Chờ QL duyệt' },
    { name: 'Nguyễn Ngọc Trâm', role: 'Editor', dept: 'Media', self: '7.5', manager: '7.8', final: '7.7', status: 'Hoàn thành' },
    { name: 'Nguyễn Tiến Dũng', role: 'Leader', dept: 'DIY Media', self: '8.8', manager: '9.0', final: '8.9', status: 'Hoàn thành' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="flex items-center justify-between mb-8">
        <div>
           <h1 className="text-3xl font-black text-gray-800">Đánh giá</h1>
           <p className="text-sm text-gray-400 font-bold mt-1">Quản lý đánh giá nhân sự và hiệu suất</p>
        </div>
        <button className="bg-white text-primary-purple font-black px-6 py-3 rounded-2xl shadow-xl shadow-purple-100 border border-purple-50 flex items-center gap-2 hover:bg-purple-50 transition-all">
          <span className="material-symbols-outlined text-[20px]">calendar_today</span>
          Đánh giá Q1/2026
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-50 group hover:scale-[1.02] transition-all relative overflow-hidden">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-primary-purple group-hover:bg-primary-purple group-hover:text-white transition-all">
                   <span className="material-symbols-outlined text-2xl font-bold">{stat.icon}</span>
                </div>
                <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</span>
             </div>
             <div className="flex items-end justify-between">
                <h3 className="text-3xl font-black text-gray-800">{stat.value}</h3>
                {stat.progress && (
                   <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-primary-purple" style={{ width: `${stat.progress}%` }}></div>
                   </div>
                )}
             </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-4">
         <select className="bg-white px-6 py-3 rounded-xl shadow-lg shadow-gray-100 border border-gray-50 text-xs font-black text-gray-500 outline-none focus:ring-1 focus:ring-primary-purple/30">
            <option>Tất cả phòng ban</option>
         </select>
         <select className="bg-white px-6 py-3 rounded-xl shadow-lg shadow-gray-100 border border-gray-50 text-xs font-black text-gray-500 outline-none focus:ring-1 focus:ring-primary-purple/30">
            <option>Tất cả trạng thái</option>
         </select>
         <span className="ml-auto text-[11px] font-black text-gray-300 uppercase tracking-widest self-center">17 kết quả</span>
      </div>

      {/* Evaluation Table */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden relative">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/30 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-gray-100">
                <th className="px-10 py-6">Nhân viên</th>
                <th className="px-6 py-6 border-l border-gray-50/50">Phòng ban</th>
                <th className="px-6 py-6 border-l border-gray-50/50">Tự đánh giá</th>
                <th className="px-6 py-6 border-l border-gray-50/50">QL Đánh giá</th>
                <th className="px-6 py-6 border-l border-gray-50/50">Điểm cuối</th>
                <th className="px-10 py-6 text-center border-l border-gray-50/50">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/50">
              {evaluations.map((row, idx) => (
                <tr key={idx} className="hover:bg-primary-purple/[0.02] transition-colors group">
                  <td className="px-10 py-6">
                    <div className="flex flex-col">
                      <span className="text-[15px] font-black text-gray-800 group-hover:text-primary-purple transition-colors">{row.name}</span>
                      <span className="text-[11px] font-bold text-gray-400">{row.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 border-l border-gray-50/10">
                    <span className="px-3 py-1 bg-blue-50 text-blue-500 text-[10px] font-black uppercase tracking-wider rounded-lg border border-blue-100 italic">
                      {row.dept}
                    </span>
                  </td>
                  <td className="px-6 py-6 border-l border-gray-50/10 text-[14px] font-black text-gray-500">{row.self}</td>
                  <td className="px-6 py-6 border-l border-gray-50/10 text-[14px] font-black text-gray-500">{row.manager}</td>
                  <td className="px-6 py-6 border-l border-gray-50/10 text-[14px] font-black text-primary-purple">{row.final}</td>
                  <td className="px-10 py-6 border-l border-gray-50/10">
                    <div className="flex justify-center">
                       <span className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                         row.status === 'Hoàn thành' ? 'bg-green-50 text-green-500 border-green-100' : 'bg-orange-50 text-orange-500 border-orange-100'
                       }`}>
                         <span className="material-symbols-outlined text-sm font-bold">
                           {row.status === 'Hoàn thành' ? 'check_circle' : 'pending'}
                         </span>
                         {row.status}
                       </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-8 bg-gray-50/20 text-center border-t border-gray-50">
           <button className="text-[11px] font-black text-gray-300 uppercase tracking-widest hover:text-primary-purple transition-colors">Xem toàn bộ báo cáo đánh giá</button>
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
