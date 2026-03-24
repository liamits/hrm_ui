import React from 'react';

const Assets = () => {
  const stats = [
    { label: 'Tổng tài sản', value: '15', icon: 'inventory_2', color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Sẵn sàng', value: '3', icon: 'check_circle', color: 'text-teal-600', bg: 'bg-teal-50' },
    { label: 'Đang sử dụng', value: '10', icon: 'person', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Bảo trì', value: '1', icon: 'build', color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const assets = [
    { id: 'TS-001', name: 'MacBook Pro 14" M3', code: 'MBP-2024-001', type: 'Laptop', user: 'Nguyễn Ngọc Hoàng', date: '2024-09-15', status: 'Đang sử dụng', condition: 'Mới' },
    { id: 'TS-002', name: 'MacBook Pro 16" M3 Pro', code: 'MBP-2024-002', type: 'Laptop', user: 'Trịnh Quốc Việt', date: '2024-10-01', status: 'Đang sử dụng', condition: 'Mới' },
    { id: 'TS-003', name: 'ThinkPad X1 Carbon Gen 11', code: 'TP-2024-003', type: 'Laptop', user: 'Nguyễn Tiến Dũng', date: '2024-03-20', status: 'Đang sử dụng', condition: 'Tốt' },
    { id: 'TS-004', name: 'Dell Latitude 5540', code: 'DL-2024-004', type: 'Laptop', user: 'Phạm Long Vũ', date: '2024-05-10', status: 'Đang sử dụng', condition: '-' },
    { id: 'TS-005', name: 'MacBook Air 15" M2', code: 'MBA-2023-005', type: 'Laptop', user: '-', date: '2023-11-01', status: 'Sẵn sàng', condition: '-' },
    { id: 'TS-006', name: 'Dell UltraSharp U2723QE 27"', code: 'DU-2024-006', type: 'Màn hình', user: 'Hoàng Thanh Tùng', date: '2024-08-15', status: 'Đang sử dụng', condition: '-' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="flex items-center justify-between mb-8">
        <div>
           <h1 className="text-3xl font-black text-gray-800">Tài sản</h1>
           <p className="text-sm text-gray-400 font-bold mt-1">Quản lý tài sản và thiết bị công ty</p>
        </div>
        <button className="bg-gradient-purple text-white font-black px-8 py-3.5 rounded-2xl shadow-xl shadow-purple-200 hover:opacity-90 transition-all flex items-center gap-2 active:scale-95">
          <span className="material-symbols-outlined text-[22px]">add_circle</span>
          Thêm tài sản
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-50 group hover:scale-[1.02] transition-all">
             <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center ${stat.color} group-hover:bg-primary-purple group-hover:text-white transition-all`}>
                   <span className="material-symbols-outlined text-2xl font-bold">{stat.icon}</span>
                </div>
                <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</span>
             </div>
             <h3 className="text-3xl font-black text-gray-800">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6 mb-8 bg-white p-2 rounded-2xl shadow-lg shadow-gray-100 border border-gray-50 overflow-x-auto">
         {['Tất cả', 'Laptop', 'Màn hình', 'Bàn ghế', 'Khác'].map((tab, idx) => (
            <button key={idx} className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${idx === 0 ? 'bg-primary-purple text-white shadow-lg shadow-purple-200' : 'text-gray-400 hover:bg-gray-50 hover:text-primary-purple'}`}>
               {tab}
            </button>
         ))}
         <div className="flex-1 ml-4 relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
            <input type="text" placeholder="Tìm tài sản, serial, người dùng..." className="w-full bg-gray-50/50 border border-gray-100 rounded-xl px-12 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary-purple/20 transition-all" />
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {assets.map((asset) => (
          <div key={asset.id} className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/40 p-8 flex flex-col group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 opacity-[0.03] -mr-16 -mt-16 rounded-full"></div>
             
             <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-primary-purple transition-all">
                   <span className="material-symbols-outlined text-3xl">{asset.type === 'Laptop' ? 'laptop_mac' : 'desktop_windows'}</span>
                </div>
                <div>
                   <h3 className="text-lg font-black text-gray-800 mb-1 group-hover:text-primary-purple transition-colors">{asset.name}</h3>
                   <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{asset.code}</p>
                </div>
             </div>

             <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-xs">
                   <span className="font-black text-gray-300 uppercase tracking-tighter">PHÂN LOẠI</span>
                   <span className="font-bold text-gray-600">{asset.type}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                   <span className="font-black text-gray-300 uppercase tracking-tighter">NGƯỜI DÙNG</span>
                   <span className="font-bold text-gray-800">{asset.user}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                   <span className="font-black text-gray-300 uppercase tracking-tighter">NGÀY MUA</span>
                   <span className="font-bold text-gray-400 italic">{asset.date}</span>
                </div>
             </div>

             <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
                <div className="flex gap-2">
                   <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${asset.status === 'Đang sử dụng' ? 'bg-blue-50 text-blue-500 border border-blue-100' : 'bg-teal-50 text-teal-500 border border-teal-100'}`}>
                     {asset.status}
                   </span>
                   {asset.condition !== '-' && (
                     <span className="px-3 py-1 bg-purple-50 text-purple-600 text-[10px] font-black uppercase tracking-wider rounded-lg border border-purple-100">
                        {asset.condition}
                     </span>
                   )}
                </div>
                <span className="text-[11px] font-black text-gray-300">{asset.id}</span>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assets;
