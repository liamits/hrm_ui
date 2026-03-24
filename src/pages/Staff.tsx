import React from 'react';

const Staff = () => {
  const employees = [
    { stt: 1, id: 'MOD016', name: 'Dương Thị Kiều Ngân', email: 'kieungan163@gmail.com', phone: '0338905100', address: 'Hà Nội', color: 'bg-purple-50 text-purple-600 border-purple-100' },
    { stt: 2, id: 'MOD013', name: 'Liêu Minh Đức', email: 'minhducdigital99@gmail.com', phone: '0332035723', address: 'Xóm 4, xã Trùng Khánh, Tỉnh Cao Bằng', color: 'bg-teal-50 text-teal-600 border-teal-100' },
    { stt: 3, id: 'MOD012', name: 'Lê Xuân Hưng', email: 'leehung2704@gmail.com', phone: '0388147808', address: 'thôn Thọ Mai, xã Hưng Hà, tỉnh Hưng Yên', color: 'bg-blue-50 text-blue-600 border-blue-100' },
    { stt: 4, id: 'MOD011', name: 'Nguyễn Thị Ngọc Anh', email: 'nguyenngocanh9725@gmail.com', phone: '0375475196', address: 'Kim Anh, Kim Thành, Hải Dương', color: 'bg-orange-50 text-orange-600 border-orange-100' },
    { stt: 5, id: 'MOD010', name: 'Nguyễn Văn Thành', email: 'thanhnguyen6702@gmail.com', phone: '0789201337', address: 'đội 3, thôn Đỗ Thượng, xã Nguyễn Lương Bằng, TP Hải Phòng', color: 'bg-pink-50 text-pink-600 border-pink-100' },
    { stt: 6, id: '0044', name: 'Lã Thị Hồng Nhung', email: 'nhungle668@gmail.com', phone: '0398652678', address: 'Tân Trung, Xã Vạn Thắng, Tỉnh Ninh Bình', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
    { stt: 7, id: 'MED035', name: 'Đỗ Thị Lượng', email: 'aeri202line@gmail.com', phone: '0901000035', address: '123 Nguyễn Trải, Quận 1, TP.HCM', color: 'bg-rose-50 text-rose-600 border-rose-100' },
  ];

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-sm font-bold text-primary-purple bg-white px-4 py-2 rounded-full shadow-sm border border-gray-50">
           <span className="material-symbols-outlined text-[18px]">home</span>
           <span className="text-gray-300 font-normal">/</span>
           <span>Danh sách nhân viên</span>
        </div>
        <button className="bg-gradient-purple text-white font-bold px-7 py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 shadow-xl shadow-purple-200">
          <span className="material-symbols-outlined text-[20px]">add_circle</span>
          Thêm nhân viên
        </button>
      </div>

      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-wrap gap-6 items-end relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-purple opacity-50"></div>
        <div className="flex-1 min-w-[200px] space-y-2">
           <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-1">Tên nhân viên</label>
           <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-purple transition-colors">search</span>
              <input type="text" placeholder="Nhập tên nhân viên..." className="w-full bg-gray-50 border border-gray-50 rounded-xl px-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-purple/20 focus:bg-white transition-all shadow-inner" />
           </div>
        </div>
        <div className="flex-1 min-w-[200px] space-y-2">
           <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-1">Phòng ban</label>
           <select className="w-full bg-gray-50 border border-gray-50 rounded-xl px-4 py-3 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-primary-purple/20 focus:bg-white transition-all shadow-inner">
              <option>Tất cả phòng ban</option>
           </select>
        </div>
        <div className="flex-1 min-w-[200px] space-y-2">
           <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-1">Trạng thái</label>
           <select className="w-full bg-gray-50 border border-gray-50 rounded-xl px-4 py-3 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-primary-purple/20 focus:bg-white transition-all shadow-inner">
              <option>Chọn trạng thái</option>
           </select>
        </div>
        <button className="px-7 py-3 border-2 border-red-50 text-red-500 font-black rounded-xl text-sm flex items-center gap-2 hover:bg-red-50 transition-all active:scale-95 shadow-sm">
           <span className="material-symbols-outlined text-[20px]">refresh</span>
           Làm mới
        </button>
      </div>

      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden relative">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50/80 to-white text-gray-400 text-[10px] font-black uppercase tracking-[0.1em] border-b border-gray-50">
                <th className="px-8 py-6">STT</th>
                <th className="px-6 py-6">ID</th>
                <th className="px-6 py-6 border-l border-gray-50">Tên nhân viên</th>
                <th className="px-6 py-6">Email</th>
                <th className="px-6 py-6">Số điện thoại</th>
                <th className="px-6 py-6">Địa chỉ</th>
                <th className="px-6 py-6 text-center">Avatar</th>
                <th className="px-8 py-6 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50/50">
              {employees.map((emp) => (
                <tr key={emp.stt} className="hover:bg-primary-purple/[0.02] transition-colors group">
                  <td className="px-8 py-5 text-[12px] font-bold text-gray-300">{emp.stt}</td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-lg text-[11px] font-black border ${emp.color}`}>
                      {emp.id}
                    </span>
                  </td>
                  <td className="px-6 py-5 border-l border-gray-50/50">
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold text-gray-800 group-hover:text-primary-purple transition-colors">{emp.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-500">{emp.email}</td>
                  <td className="px-6 py-5 text-sm text-gray-400 font-medium">{emp.phone}</td>
                  <td className="px-6 py-5 text-sm text-gray-400 max-w-[200px] truncate" title={emp.address}>{emp.address}</td>
                  <td className="px-6 py-5 text-center">
                    <div className="relative w-10 h-10 mx-auto rounded-2xl overflow-hidden shadow-md group-hover:scale-110 transition-transform bg-gradient-to-br from-white to-gray-50 p-0.5">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${emp.name}`} alt="" className="w-full h-full object-cover rounded-[0.9rem]" />
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center justify-center gap-3">
                       <button className="w-9 h-9 flex items-center justify-center bg-teal-50 text-teal-600 rounded-xl hover:bg-teal-600 hover:text-white transition-all shadow-sm">
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
        <div className="p-6 bg-gray-50/30 flex justify-between items-center text-[11px] font-bold text-gray-400 px-8">
           <span>Hiển thị 1 - 7 trong 55 nhân viên</span>
           <div className="flex gap-2">
              <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-gray-100 hover:text-primary-purple transition-colors"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary-purple text-white shadow-lg shadow-purple-100">1</button>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-gray-100 hover:text-primary-purple transition-colors">2</button>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-gray-100 hover:text-primary-purple transition-colors">3</button>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-gray-100 hover:text-primary-purple transition-colors"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
