import React, { useState, useMemo } from 'react';
import StaffTreeView from '../components/StaffTreeView';

const Staff = () => {
  const [viewMode, setViewMode] = useState<'table' | 'tree'>('table');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<any>(null);
  const [formData, setFormData] = useState({
    time: '',
    position: '',
    department: '',
    note: ''
  });

  const employees = useMemo(() => {
    const baseEmployees = [
      { id: 'MOD016', name: 'Dương Thị Kiều Ngân', email: 'kieungan163@gmail.com', phone: '0338905100', address: 'Hà Nội', color: 'bg-purple-50 text-purple-600 border-purple-100', deptName: 'MODNIX', position: 'Nhân viên' },
      { id: 'MOD013', name: 'Liêu Minh Đức', email: 'minhducdigital99@gmail.com', phone: '0332035723', address: 'Xóm 4, xã Trùng Khánh, Tỉnh Cao Bằng', color: 'bg-teal-50 text-teal-600 border-teal-100', deptName: 'MODNIX', position: 'Trưởng nhóm' },
      { id: 'MOD012', name: 'Lê Xuân Hưng', email: 'leehung2704@gmail.com', phone: '0388147808', address: 'thôn Thọ Mai, xã Hưng Hà, tỉnh Hưng Yên', color: 'bg-blue-50 text-blue-600 border-blue-100', deptName: 'MODNIX', position: 'Nhân viên' },
      { id: 'BTN044', name: 'Lã Thị Hồng Nhung', email: 'nhungle668@gmail.com', phone: '0398652678', address: 'Tân Trung, Xã Vạn Thắng, Tỉnh Ninh Bình', color: 'bg-indigo-50 text-indigo-600 border-indigo-100', deptName: 'BACK OFFICE', position: 'Nhân viên' },
      { id: 'MED035', name: 'Đỗ Thị Lượng', email: 'aeri202line@gmail.com', phone: '0901000035', address: '123 Nguyễn Trải, Quận 1, TP.HCM', color: 'bg-rose-50 text-rose-600 border-rose-100', deptName: 'MEDIA', position: 'Quản lý' },
      { id: 'TEC001', name: 'Nguyễn Quang Hải', email: 'quanghai@gmail.com', phone: '0987654321', address: 'Hà Nội', color: 'bg-blue-50 text-blue-600 border-blue-100', deptName: 'TECH', position: 'Tech Lead' },
      { id: 'CLD001', name: 'Trần Bảo Anh', email: 'baoanh@gmail.com', phone: '0912345678', address: 'Đà Nẵng', color: 'bg-sky-50 text-sky-600 border-sky-100', deptName: 'CLOUD', position: 'Cloud Engineer' },
    ];

    const generateFake = (dept: string, count: number, startIdx: number, prefix: string, color: string) => {
      const names = ['Nguyễn Văn', 'Trần Thị', 'Lê Hoàng', 'Phạm Minh', 'Hoàng Ngọc', 'Vũ Đức', 'Đặng Thùy', 'Bùi Xuân', 'Đỗ Hà', 'Ngô Kiến'];
      const lasts = ['Anh', 'Bình', 'Châu', 'Dũng', 'Em', 'Phong', 'Giang', 'Hà', 'Khang', 'Linh', 'Minh', 'Nga', 'Oanh', 'Phúc', 'Quân', 'Tâm', 'Uyên', 'Vy', 'Xuân', 'Yến'];
      
      return Array.from({ length: count }).map((_, i) => {
        const name = `${names[(i + startIdx) % names.length]} ${lasts[(i * 3 + startIdx) % lasts.length]}`;
        return {
          id: `${prefix}${String(startIdx + i).padStart(3, '0')}`,
          name,
          email: `nv${startIdx + i}@ahv.com`,
          phone: `09${Math.floor(Math.random() * 80000000 + 10000000)}`,
          address: 'Hà Nội',
          color,
          deptName: dept,
          position: i === 0 ? 'Phó phòng' : 'Nhân viên'
        };
      });
    };

    const all = [
      ...baseEmployees,
      ...generateFake('TECH', 7, 2, 'TEC', 'bg-blue-50 text-blue-600 border-blue-100'),
      ...generateFake('MODNIX', 6, 17, 'MOD', 'bg-purple-50 text-purple-600 border-purple-100'),
      ...generateFake('BACK OFFICE', 8, 45, 'BTN', 'bg-indigo-50 text-indigo-600 border-indigo-100'),
      ...generateFake('MEDIA', 7, 36, 'MED', 'bg-rose-50 text-rose-600 border-rose-100'),
      ...generateFake('CLOUD', 6, 2, 'CLD', 'bg-sky-50 text-sky-600 border-sky-100'),
    ];

    return all.map((emp, idx) => ({ ...emp, stt: idx + 1 }));
  }, []);

  const treeData = useMemo(() => {
    const depts: Record<string, any> = {};
    employees.forEach(emp => {
      const deptName = emp.deptName || 'Khác';
      if (!depts[deptName]) {
        depts[deptName] = {
          id: deptName,
          name: deptName,
          employees: []
        };
      }
      depts[deptName].employees.push({
        id: emp.id,
        name: emp.name,
        position: emp.position,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${emp.name}`
      });
    });
    return Object.values(depts);
  }, [employees]);

  const handleOpenModal = (emp: any) => {
    setSelectedStaff(emp);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStaff(null);
    setFormData({ time: '', position: '', department: '', note: '' });
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-bold text-primary-purple bg-white px-4 py-2 rounded-full shadow-sm border border-gray-50">
             <span className="material-symbols-outlined text-[18px]">home</span>
             <span className="text-gray-300 font-normal">/</span>
             <span>Danh sách nhân viên</span>
          </div>
          
          <div className="flex bg-white p-1 rounded-xl border border-gray-100 shadow-sm">
            <button 
              onClick={() => setViewMode('table')}
              className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-2 ${viewMode === 'table' ? 'bg-primary-purple text-white shadow-md' : 'text-gray-400 hover:bg-gray-50'}`}
            >
              <span className="material-symbols-outlined text-[16px]">list</span>
              Danh sách
            </button>
            <button 
              onClick={() => setViewMode('tree')}
              className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-2 ${viewMode === 'tree' ? 'bg-primary-purple text-white shadow-md' : 'text-gray-400 hover:bg-gray-50'}`}
            >
              <span className="material-symbols-outlined text-[16px]">account_tree</span>
              Sơ đồ cây
            </button>
          </div>
        </div>
        
        <button className="bg-gradient-purple text-white font-bold px-7 py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 shadow-xl shadow-purple-200">
          <span className="material-symbols-outlined text-[20px]">add_circle</span>
          Thêm nhân viên
        </button>
      </div>

      {viewMode === 'table' ? (
        <>
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
                    <th className="px-6 py-6 border-l border-gray-50">Phòng ban</th>
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
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{emp.position}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-500">{emp.email}</td>
                      <td className="px-6 py-5 text-sm text-gray-400 font-medium">{emp.phone}</td>
                      <td className="px-6 py-5 border-l border-gray-50/50">
                        <span className="text-xs font-bold text-gray-600 bg-gray-50 px-3 py-1 rounded-full">{emp.deptName}</span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div className="relative w-10 h-10 mx-auto rounded-2xl overflow-hidden shadow-md group-hover:scale-110 transition-transform bg-gradient-to-br from-white to-gray-50 p-0.5">
                           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${emp.name}`} alt="" className="w-full h-full object-cover rounded-[0.9rem]" />
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex items-center justify-center gap-3">
                           <button 
                              onClick={() => handleOpenModal(emp)}
                              className="w-9 h-9 flex items-center justify-center bg-purple-50 text-primary-purple rounded-xl hover:bg-primary-purple hover:text-white transition-all shadow-sm group/btn"
                              title="Lịch sử làm việc"
                           >
                              <span className="material-symbols-outlined text-[18px] group-hover/btn:rotate-12 transition-transform">history</span>
                           </button>
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
               <span>Hiển thị 1 - {employees.length} trong {employees.length} nhân viên</span>
               <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-gray-100 hover:text-primary-purple transition-colors"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary-purple text-white shadow-lg shadow-purple-100">1</button>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-gray-100 hover:text-primary-purple transition-colors">2</button>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-gray-100 hover:text-primary-purple transition-colors">3</button>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-gray-100 hover:text-primary-purple transition-colors"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
               </div>
            </div>
          </div>
        </>
      ) : (
        <div className="animate-in zoom-in-95 duration-500">
          <StaffTreeView data={treeData} />
        </div>
      )}

      {/* Work History Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" onClick={handleCloseModal}></div>
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-purple"></div>
            
            <div className="p-10 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-gray-800">Lịch sử làm việc</h3>
                  <p className="text-[13px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                    Nhân viên: <span className="text-primary-purple">{selectedStaff?.name}</span>
                  </p>
                </div>
                <button onClick={handleCloseModal} className="w-10 h-10 flex items-center justify-center rounded-2xl hover:bg-gray-100 text-gray-400 transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-1">Thời gian</label>
                  <input 
                    type="text" 
                    placeholder="Ví dụ: 03/2026 - Hiện tại" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-purple/20 focus:bg-white transition-all shadow-inner"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-1">Vị trí / Chức vụ</label>
                    <input 
                      type="text" 
                      placeholder="Nhập vị trí..." 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-purple/20 focus:bg-white transition-all shadow-inner"
                      value={formData.position}
                      onChange={(e) => setFormData({...formData, position: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-1">Phòng ban</label>
                    <input 
                      type="text" 
                      placeholder="Nhập phòng ban..." 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-purple/20 focus:bg-white transition-all shadow-inner"
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-1">Ghi chú</label>
                  <textarea 
                    rows={4}
                    placeholder="Nhập ghi chú chi tiết về mốc làm việc này..." 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-purple/20 focus:bg-white transition-all shadow-inner resize-none"
                    value={formData.note}
                    onChange={(e) => setFormData({...formData, note: e.target.value})}
                  ></textarea>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  onClick={handleCloseModal}
                  className="flex-1 px-8 py-4 border-2 border-gray-50 text-gray-400 font-black rounded-[1.5rem] text-[13px] uppercase tracking-widest hover:bg-gray-50 transition-all active:scale-95 shadow-sm"
                >
                  Hủy bỏ
                </button>
                <button 
                  onClick={() => {
                    console.log('Saving work history:', formData);
                    handleCloseModal();
                  }}
                  className="flex-1 px-8 py-4 bg-gradient-purple text-white font-black rounded-[1.5rem] text-[13px] uppercase tracking-widest hover:shadow-xl hover:shadow-purple-200 transition-all active:scale-95 shadow-lg shadow-purple-100"
                >
                  Lưu thông tin
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staff;

