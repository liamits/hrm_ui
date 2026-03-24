import React from 'react';

const Salary = () => {
  const salaryData = [
    { stt: 1, id: 'BONUS', name: 'Thưởng hiệu suất', taxable: 'Có', desc: 'Thưởng tháng/quý.', status: 'Không hoạt động', date: '11/02/2026' },
    { stt: 2, id: 'OT_SALARY', name: 'Lương tăng ca', taxable: 'Có', desc: 'Phần vượt mức lương ngày thường thường được miễn thuế.', status: 'Hoạt động', date: '11/02/2026' },
    { stt: 3, id: 'PHONE_ALLOW', name: 'Phụ cấp điện thoại', taxable: 'Không', desc: 'Khoản khoán chi phí công việc.', status: 'Hoạt động', date: '11/02/2026' },
    { stt: 4, id: 'LUNCH_ALLOW', name: 'Phụ cấp ăn trưa', taxable: 'Không', desc: 'Thưởng được miễn thuế nếu dưới hạn mức.', status: 'Hoạt động', date: '11/02/2026' },
    { stt: 5, id: 'BASE_SALARY', name: 'Lương cơ bản', taxable: 'Có', desc: 'Lương chính thức theo hợp đồng.', status: 'Hoạt động', date: '11/02/2026' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-700">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-sm font-black text-primary-purple bg-white px-5 py-3 rounded-2xl shadow-xl shadow-purple-100 border border-purple-50">
           <span className="material-symbols-outlined text-[20px] bg-gradient-purple text-transparent bg-clip-text">payments</span>
           <span className="text-gray-200 font-normal">/</span>
           <span className="tracking-tight uppercase">Danh sách loại thu nhập</span>
        </div>
        <button className="bg-gradient-purple text-white font-black px-8 py-3.5 rounded-2xl hover:opacity-90 transition-all flex items-center gap-2 shadow-2xl shadow-purple-200 active:scale-95">
          <span className="material-symbols-outlined text-[22px]">add_circle</span>
          Thêm loại thu nhập
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-wrap gap-6 items-end relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-purple opacity-30"></div>
        <div className="flex-1 min-w-[200px] space-y-2">
           <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-1">Mã loại thu nhập</label>
           <input type="text" placeholder="Nhập mã loại thu nhập để tìm kiếm" className="w-full bg-gray-50/50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-purple/20 focus:bg-white transition-all" />
        </div>
        <div className="flex-1 min-w-[200px] space-y-2">
           <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-1">Tên loại thu nhập</label>
           <input type="text" placeholder="Nhập tên loại thu nhập để tìm kiếm" className="w-full bg-gray-50/50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-purple/20 focus:bg-white transition-all" />
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
                <th className="px-6 py-6 border-l border-gray-50">Mã loại thu nhập</th>
                <th className="px-6 py-6 border-l border-gray-50">Tên loại thu nhập</th>
                <th className="px-6 py-6 border-l border-gray-50">Thu nhập đóng thuế</th>
                <th className="px-6 py-6 border-l border-gray-50">Mô tả</th>
                <th className="px-6 py-6 border-l border-gray-50">Trạng thái</th>
                <th className="px-6 py-6 border-l border-gray-50">Ngày tạo</th>
                <th className="px-8 py-6 text-center border-l border-gray-50">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/50">
              {salaryData.map((item) => (
                <tr key={item.stt} className="hover:bg-primary-purple/[0.02] transition-colors group">
                  <td className="px-8 py-5 text-[12px] font-bold text-gray-300">{item.stt}</td>
                  <td className="px-6 py-5 border-l border-gray-50/10">
                    <span className="text-[13px] font-bold text-gray-700">{item.id}</span>
                  </td>
                  <td className="px-6 py-5 border-l border-gray-50/10">
                    <span className="text-[13px] font-bold text-gray-700">{item.name}</span>
                  </td>
                  <td className="px-6 py-5 border-l border-gray-50/10">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${item.taxable === 'Có' ? 'bg-orange-50 text-orange-500 border-orange-100' : 'bg-teal-50 text-teal-500 border-teal-100'}`}>
                      {item.taxable}
                    </span>
                  </td>
                  <td className="px-6 py-5 border-l border-gray-50/10 text-sm text-gray-400 font-medium max-w-[250px] truncate" title={item.desc}>{item.desc}</td>
                  <td className="px-6 py-5 border-l border-gray-50/10">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${item.status === 'Hoạt động' ? 'bg-green-50 text-green-500 border-green-100' : 'bg-red-50 text-red-500 border-red-100'}`}>
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
           <span>Hiển thị 1 - 5 trong 55 bản ghi</span>
           <div className="flex gap-2">
              <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-gray-100 hover:text-primary-purple transition-colors shadow-sm"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
              <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-purple text-white shadow-xl shadow-purple-200">1</button>
              <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-gray-100 hover:text-primary-purple transition-colors shadow-sm"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Salary;
