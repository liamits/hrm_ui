import React from 'react';

const Departments = () => {
  const depts = [
    { 
      id: 'CLO', 
      name: 'AHV CLOUD', 
      desc: 'Quản lý, vận hành và phát triển hệ thống hạ tầng trên nền tảng điện toán đám mây', 
      manager: 'Hoàng Thanh Tùng', 
      status: 'Hoạt động',
      color: 'from-purple-500 to-indigo-600'
    },
    { 
      id: 'MOD', 
      name: 'Phòng AHV Modnix', 
      desc: 'Quản lý và phát triển các dụ án của AHV Modnix', 
      manager: 'Phạm Long Vũ', 
      status: 'Hoạt động',
      color: 'from-teal-400 to-green-500'
    },
    { 
      id: 'MED', 
      name: 'Phòng AHV Media', 
      desc: 'Sản xuất nội dung và quản lý kênh truyền thông', 
      manager: 'Nguyễn Ngọc Hoàng', 
      status: 'Hoạt động',
      color: 'from-blue-400 to-cyan-500'
    },
    { 
      id: 'BTN', 
      name: 'BACK OFFICE TN', 
      desc: 'Quản lý và tối ưu quy trình vận hành nội bộ', 
      manager: 'Trần Đức Hiếu', 
      status: 'Hoạt động',
      color: 'from-orange-400 to-red-500'
    },
    { 
      id: 'TEC', 
      name: 'Phòng AHV (Tech)', 
      desc: 'Phát triển sản phẩm, quản lý hệ thống và hạ tầng công nghệ', 
      manager: 'Chu Văn Tú', 
      status: 'Hoạt động',
      color: 'from-pink-500 to-rose-600'
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-sm font-bold text-primary-purple bg-white px-4 py-2 rounded-full shadow-sm border border-gray-50">
           <span className="material-symbols-outlined text-[18px]">corporate_fare</span>
           <span className="text-gray-300 font-normal">/</span>
           <span>Danh sách phòng ban</span>
        </div>
        <button className="bg-gradient-purple text-white font-bold px-7 py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 shadow-xl shadow-purple-100">
          <span className="material-symbols-outlined text-[20px]">add_business</span>
          Thêm phòng ban
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {depts.map((dept) => (
          <div key={dept.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden group hover:scale-[1.03] transition-all duration-300 p-8 flex flex-col relative">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${dept.color} opacity-[0.03] -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
            
            <div className="flex items-start justify-between mb-6">
               <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center text-white shadow-lg shadow-gray-200 group-hover:rotate-6 transition-transform`}>
                  <span className="material-symbols-outlined text-3xl">corporate_fare</span>
               </div>
               <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-wider rounded-lg border border-green-100 italic">
                 {dept.status}
               </span>
            </div>

            <div className="flex-1">
              <h3 className="text-[18px] font-black text-gray-800 mb-1 group-hover:text-primary-purple transition-colors">{dept.name}</h3>
              <p className="text-[11px] font-black text-primary-purple bg-purple-50 px-2 py-0.5 rounded inline-block mb-4 uppercase tracking-wider">Mã: {dept.id}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 font-medium line-clamp-3">
                {dept.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400 border border-gray-50 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${dept.manager}`} alt="" />
                 </div>
                 <div>
                    <p className="text-[11px] text-gray-400 font-black uppercase tracking-tight">Quản lý</p>
                    <p className="text-[12px] font-bold text-gray-700">{dept.manager}</p>
                 </div>
              </div>
              <div className="flex gap-2">
                 <button className="w-9 h-9 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-primary-purple hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[18px]">edit</span>
                 </button>
                 <button className="w-9 h-9 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-red-500 hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                 </button>
              </div>
            </div>
          </div>
        ))}
        
        <button className="bg-gray-50/50 border-2 border-dashed border-gray-200 rounded-[2rem] p-8 flex flex-col items-center justify-center text-gray-400 hover:border-primary-purple hover:text-primary-purple transition-all group min-h-[320px]">
           <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-white">
              <span className="material-symbols-outlined text-4xl">add</span>
           </div>
           <span className="font-bold">Thêm phòng ban mới</span>
        </button>
      </div>
    </div>
  );
};

export default Departments;
