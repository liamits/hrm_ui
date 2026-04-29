import React, { useState } from 'react';

const LeaveManagement = () => {
  const [activeTab, setActiveTab] = useState<'user' | 'admin'>('user');
  const [showModal, setShowModal] = useState(false);

  // Mock data for leave balance
  const balance = {
    total: 12,
    used: 4.5,
    remaining: 7.5,
    carryOver: 2,
    carryOverExpiry: '31/03/2026'
  };

  // Mock data for requests
  const [requests, setRequests] = useState([
    { id: 1, type: 'Nghỉ phép', start: '2024-04-10', end: '2024-04-10', session: 'Cả ngày', status: 'HR đã duyệt', reason: 'Việc gia đình', requestedAt: '2024-04-05' },
    { id: 2, type: 'Làm Remote', start: '2024-04-15', end: '2024-04-15', session: 'Sáng', status: 'Chờ duyệt', reason: 'Trông con', requestedAt: '2024-04-08' },
    { id: 3, type: 'Nghỉ không lương', start: '2024-04-20', end: '2024-04-21', session: 'Cả ngày', status: 'Từ chối', reason: 'Nghỉ du lịch', requestedAt: '2024-04-09' },
  ]);

  const stats = [
    { label: 'Phép tồn năm cũ', value: balance.carryOver, unit: 'ngày', icon: 'history', color: 'bg-orange-500' },
    { label: 'Phép tích lũy (N+1)', value: balance.total, unit: 'ngày', icon: 'add_task', color: 'bg-blue-500' },
    { label: 'Số ngày đã nghỉ', value: balance.used, unit: 'ngày', icon: 'event_busy', color: 'bg-purple-500' },
    { label: 'Số phép hiện có', value: balance.remaining, unit: 'ngày', icon: 'account_balance_wallet', color: 'bg-teal-500' },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Chờ duyệt': return 'bg-yellow-50 text-yellow-600 border-yellow-100';
      case 'Quản lý đã duyệt': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'HR đã duyệt': return 'bg-green-50 text-green-600 border-green-100';
      case 'Từ chối': return 'bg-red-50 text-red-600 border-red-100';
      default: return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
      {/* Header & Role Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-black text-blue-600 bg-white px-5 py-3 rounded-2xl border border-gray-50">
           <span className="material-symbols-outlined text-[20px] text-blue-600">event_note</span>
           <span className="text-gray-200 font-normal">/</span>
           <span className="tracking-tight uppercase">Quản lý nghỉ phép</span>
        </div>

        <div className="flex bg-white p-1 rounded-2xl border border-gray-100">
          <button 
            onClick={() => setActiveTab('user')}
            className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${activeTab === 'user' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-50'}`}
          >
            CÁ NHÂN
          </button>
          <button 
            onClick={() => setActiveTab('admin')}
            className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${activeTab === 'admin' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-50'}`}
          >
            DUYỆT ĐƠN
          </button>
        </div>
      </div>

      {activeTab === 'user' ? (
        <>
          {/* Balance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-6 border border-gray-50 shadow-xl shadow-gray-200/30 flex items-center gap-5 group hover:scale-[1.02] transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform`}>
                  <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-2xl font-black text-gray-800">
                    {stat.value} <span className="text-xs text-gray-400 font-bold ml-1">{stat.unit}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action & Table */}
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/40 overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-gray-800">Lịch sử nghỉ phép</h3>
                <p className="text-sm text-gray-400 font-medium">Theo dõi và quản lý các đơn đã gửi</p>
              </div>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white font-black px-8 py-3.5 rounded-2xl hover:bg-blue-700 transition-all flex items-center gap-2 active:scale-95"
              >
                <span className="material-symbols-outlined text-[22px]">add_circle</span>
                Tạo đơn mới
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Loại đơn</th>
                    <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Thời gian</th>
                    <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Số ngày / Buổi</th>
                    <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Trạng thái</th>
                    <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Ngày gửi</th>
                    <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {requests.map((req) => (
                    <tr key={req.id} className="group hover:bg-purple-50/30 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${req.type === 'Nghỉ phép' ? 'bg-purple-500' : req.type === 'Làm Remote' ? 'bg-teal-500' : 'bg-orange-500'}`}></div>
                          <span className="font-bold text-gray-700">{req.type}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-sm font-bold text-gray-600">{req.start === req.end ? req.start : `${req.start} → ${req.end}`}</p>
                      </td>
                      <td className="px-8 py-6 uppercase">
                        <span className="text-xs font-black text-gray-400">{req.session}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black border tracking-wider italic ${getStatusStyle(req.status)}`}>
                          {req.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-xs font-bold text-gray-400">{req.requestedAt}</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 text-gray-400 hover:text-primary-purple transition-colors">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                          {req.status === 'Chờ duyệt' && (
                            <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                              <span className="material-symbols-outlined text-[20px]">cancel</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {/* Admin Unified View: Dashboard + History */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
             {[
               { label: 'Chờ duyệt', value: 12, icon: 'hourglass_top', color: 'bg-orange-500' },
               { label: 'Đã duyệt (Tháng này)', value: 45, icon: 'check_circle', color: 'bg-teal-500' },
               { label: 'Từ chối (Tháng này)', value: 3, icon: 'cancel', color: 'bg-red-400' },
               { label: 'Tổng số nhân viên nghỉ', value: 8, icon: 'groups', color: 'bg-primary-purple' },
             ].map((stat, i) => (
               <div key={i} className="bg-white rounded-[2rem] p-6 border border-gray-50 shadow-xl shadow-gray-200/30 flex items-center gap-5">
                 <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center text-white shadow-lg`}>
                   <span className="material-symbols-outlined text-xl">{stat.icon}</span>
                 </div>
                 <div>
                   <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{stat.label}</p>
                   <p className="text-xl font-black text-gray-800">{stat.value}</p>
                 </div>
               </div>
             ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Approval Queue */}
              <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/40 overflow-hidden">
                <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/20">
                    <div>
                      <h3 className="text-xl font-black text-gray-800 uppercase italic tracking-tight">Danh sách chờ duyệt</h3>
                      <p className="text-sm text-gray-400 font-medium">Cần xử lý ngay để chốt công lương</p>
                    </div>
                </div>
                <div className="divide-y divide-gray-50">
                    {[
                      { id: 101, user: 'Lê Văn Tám', dept: 'Kỹ thuật', type: 'Nghỉ phép', duration: '2 ngày', date: '12/04 - 13/04' },
                      { id: 102, user: 'Nguyễn Thị Hoa', dept: 'Kinh doanh', type: 'Làm Remote', duration: '1 buổi', date: '11/04' },
                    ].map((req) => (
                      <div key={req.id} className="p-8 hover:bg-gray-50/30 transition-all group">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-purple text-white flex items-center justify-center font-black text-sm shadow-lg shadow-purple-100">
                              {req.user.split(' ').pop()?.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-black text-gray-800 uppercase italic">{req.user}</h4>
                              <p className="text-[10px] font-black text-primary-purple bg-purple-50 px-2 py-0.5 rounded-lg inline-block uppercase tracking-widest">{req.dept}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                             <button className="bg-red-50 text-red-500 font-black px-5 py-2 rounded-xl text-[10px] hover:bg-red-500 hover:text-white transition-all uppercase italic border border-red-100">Từ chối</button>
                             <button className="bg-gradient-teal text-white font-black px-5 py-2 rounded-xl text-[10px] hover:opacity-90 transition-all shadow-lg shadow-teal-100 uppercase italic">Phê duyệt</button>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-50">
                            <p className="text-[9px] font-black text-gray-300 uppercase mb-1">Loại & Thời gian</p>
                            <p className="text-xs font-bold text-gray-700">{req.type} ({req.date})</p>
                          </div>
                          <div className="col-span-2 bg-gray-50/50 rounded-2xl p-4 border border-gray-50 flex items-center justify-between">
                             <div>
                                <p className="text-[9px] font-black text-gray-300 uppercase mb-1">Số lượng</p>
                                <p className="text-xs font-bold text-gray-700">{req.duration}</p>
                             </div>
                             <button className="text-primary-purple text-[10px] font-black uppercase italic hover:underline">Xem chi tiết đơn</button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Comprehensive History Table for Admins */}
              <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/40 overflow-hidden">
                <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                  <h3 className="text-xl font-black text-gray-800 uppercase italic tracking-tight">Toàn bộ lịch sử (Công ty)</h3>
                  <div className="flex gap-4">
                    <input type="text" placeholder="Tìm tên nhân viên..." className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 text-xs font-bold outline-none focus:border-primary-purple w-48" />
                    <button className="p-2 bg-gray-50 text-gray-400 rounded-xl hover:text-primary-purple transition-all"><span className="material-symbols-outlined text-[20px]">filter_list</span></button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50/50">
                        <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Nhân viên</th>
                        <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Phòng ban</th>
                        <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Loại đơn</th>
                        <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Thời gian</th>
                        <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Trạng thái</th>
                        <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Chi tiết</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {[
                        { name: 'Nguyễn An', dept: 'Marketing', type: 'Nghỉ phép', date: '08/04 - 09/04', status: 'HR đã duyệt' },
                        { name: 'Trần Bình', dept: 'Kỹ thuật', type: 'Làm Remote', date: '07/04', status: 'Từ chối' },
                        { name: 'Phạm Chi', dept: 'Nhân sự', type: 'Nghỉ không lương', date: '05/04', status: 'HR đã duyệt' },
                      ].map((item, i) => (
                        <tr key={i} className="hover:bg-purple-50/20 transition-colors">
                          <td className="px-8 py-5">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-black text-gray-400">{item.name.charAt(0)}</div>
                              <span className="text-[13px] font-bold text-gray-700">{item.name}</span>
                            </div>
                          </td>
                          <td className="px-8 py-5 text-xs font-bold text-gray-400">{item.dept}</td>
                          <td className="px-8 py-5 text-xs font-bold text-gray-600">{item.type}</td>
                          <td className="px-8 py-5 text-xs font-bold text-gray-600">{item.date}</td>
                          <td className="px-8 py-5">
                             <span className={`px-3 py-1 rounded-full text-[9px] font-black border tracking-wider italic ${getStatusStyle(item.status)}`}>{item.status.toUpperCase()}</span>
                          </td>
                          <td className="px-8 py-5 text-right">
                             <button className="text-gray-300 hover:text-primary-purple transition-all"><span className="material-symbols-outlined text-[18px]">open_in_new</span></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-8">
              <div className="bg-gradient-purple rounded-[2.5rem] p-8 text-white shadow-2xl shadow-purple-200">
                 <h3 className="text-lg font-black mb-6 uppercase italic">Tỷ lệ nghỉ (T4)</h3>
                 <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-[10px] font-black mb-2 uppercase tracking-widest"><span>Nghỉ phép</span><span>72%</span></div>
                      <div className="h-1.5 bg-white/20 rounded-full"><div className="h-full bg-white rounded-full w-[72%]"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-black mb-2 uppercase tracking-widest"><span>Remote</span><span>18%</span></div>
                      <div className="h-1.5 bg-white/20 rounded-full"><div className="h-full bg-teal-300 rounded-full w-[18%]"></div></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mock Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="bg-white w-full max-w-xl rounded-[3rem] shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-gradient-purple p-8 text-white relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <h3 className="text-2xl font-black mb-1 italic">ĐĂNG KÝ NGHỈ PHÉP</h3>
              <p className="text-white/70 text-sm font-medium">Vui lòng điền đầy đủ thông tin bên dưới</p>
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center bg-white/20 rounded-2xl hover:bg-white/30 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-10 space-y-6">
               <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">Loại hình nghỉ</label>
                  <select className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl px-6 py-4 outline-none focus:border-primary-purple transition-all font-bold text-gray-700 appearance-none">
                    <option>Nghỉ phép (Trừ quỹ phép)</option>
                    <option>Nghỉ không lương</option>
                    <option>Làm Remote (WFH)</option>
                  </select>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">Từ ngày</label>
                    <input type="date" className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl px-6 py-4 outline-none focus:border-primary-purple transition-all font-bold text-gray-700" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">Đến ngày</label>
                    <input type="date" className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl px-6 py-4 outline-none focus:border-primary-purple transition-all font-bold text-gray-700" />
                  </div>
               </div>

               <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">Thời gian nghỉ</label>
                  <div className="flex gap-2">
                    {['Sáng', 'Chiều', 'Cả ngày'].map((s) => (
                      <button key={s} className={`flex-1 py-3 rounded-2xl border-2 transition-all font-black text-xs ${s === 'Cả ngày' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-50 bg-gray-50 text-gray-400 hover:border-gray-200'}`}>
                        {s.toUpperCase()}
                      </button>
                    ))}
                  </div>
               </div>

               <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">Lý do nghỉ</label>
                  <textarea 
                    rows={3}
                    placeholder="Nhập lý do chi tiết..."
                    className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 transition-all font-bold text-gray-700 resize-none"
                  ></textarea>
               </div>

               <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-600">info</span>
                    <span className="text-xs font-bold text-blue-600">Số phép hiện có sau khi trừ:</span>
                  </div>
                  <span className="text-lg font-black text-blue-600">6.5 ngày</span>
               </div>

               <button className="w-full bg-blue-600 text-white font-black py-5 rounded-3xl hover:bg-blue-700 transition-all active:scale-95 text-lg tracking-widest uppercase italic">
                 Gửi yêu cầu ngay
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveManagement;
