import React from 'react';

interface StaffMember {
  id: string;
  name: string;
  position?: string;
  avatar?: string;
}

interface Department {
  id: string;
  name: string;
  employees: StaffMember[];
}

interface StaffTreeViewProps {
  data: Department[];
}

const StaffTreeView: React.FC<StaffTreeViewProps> = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto p-12 bg-white/40 backdrop-blur-md rounded-[3rem] border border-white/20 shadow-2xl min-h-[700px] relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-200/20 blur-[120px] rounded-full"></div>

      <div className="flex flex-col items-center gap-16 min-w-max relative z-10">
        {/* Company Root Node */}
        <div className="relative group flex flex-col items-center">
          <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white px-10 py-5 rounded-[2rem] shadow-2xl shadow-blue-200 border border-white/20 flex flex-col items-center z-10 relative hover:scale-105 transition-transform duration-500">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-2 backdrop-blur-sm">
              <span className="material-symbols-outlined text-3xl">corporate_fare</span>
            </div>
            <h2 className="text-xl font-black uppercase tracking-[0.2em]">AHV GROUP</h2>
            <div className="absolute -inset-0.5 bg-white/20 rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          {/* Vertical line down to CEO */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[4px] h-[72px] bg-gradient-to-b from-blue-800 to-blue-500"></div>
        </div>

        {/* CEO Node */}
        <div className="relative group flex flex-col items-center mt-2">
          <div className="bg-white backdrop-blur-xl p-6 rounded-[2.5rem] border-[4px] border-blue-800 shadow-[0_0_30px_rgba(30,64,175,0.3)] flex flex-col items-center gap-3 z-10 relative min-w-[280px] hover:shadow-[0_0_40px_rgba(30,64,175,0.6)] hover:-translate-y-2 transition-all duration-500">
            <div className="relative">
              <div className="w-24 h-24 rounded-[1.5rem] overflow-hidden shadow-xl ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Trần%20Đức%20Hiếu" 
                  alt="Trần Đức Hiếu" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-[3px] border-white rounded-full shadow-md"></div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-black text-gray-900 tracking-wide">Trần Đức Hiếu</h3>
              <p className="text-[13px] font-black text-blue-800 uppercase tracking-[0.25em] mt-1">CEO / FOUNDER</p>
            </div>
          </div>
          {/* Vertical line down from CEO to Departments */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[4px] h-[32px] bg-blue-500"></div>
        </div>

        {/* Departments Level */}
        <div className="flex gap-16 relative">
          {/* Horizontal connecting line for departments */}
          {data.length > 1 && (
            <div className="absolute top-[-32px] left-[144px] right-[144px] h-[4px] bg-blue-500 rounded-full shadow-sm"></div>
          )}
          
          {data.map((dept) => (
            <div key={dept.id} className="flex flex-col items-center relative">
              {/* Connector up to horizontal line */}
              <div className="absolute -top-[32px] left-1/2 -translate-x-1/2 w-[4px] h-[32px] bg-blue-500"></div>
              
              {/* Department Card */}
              <div className="bg-white backdrop-blur-xl p-8 rounded-[2.5rem] border-[4px] border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.2)] flex flex-col items-center gap-3 mb-16 z-10 relative w-72 group hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:border-blue-800 hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-[1.5rem] bg-blue-50 text-blue-800 flex items-center justify-center mb-1 shadow-inner group-hover:rotate-12 transition-transform border border-blue-200">
                  <span className="material-symbols-outlined text-3xl">account_tree</span>
                </div>
                <h3 className="text-base font-black text-gray-900 uppercase text-center tracking-widest">{dept.name}</h3>
                <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-800 text-[11px] font-black rounded-full uppercase tracking-widest border border-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-800 animate-pulse"></span>
                  {dept.employees.length} Nhân viên
                </div>
                
                {/* Connector down to staff level */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[3px] h-16 bg-blue-400"></div>
              </div>

              <div className="flex flex-wrap justify-center gap-8 max-w-[600px] relative">
                {/* Staff Horizontal bridge */}
                {dept.employees.length > 1 && (
                  <div className="absolute top-[-32px] left-[20%] right-[20%] h-[3px] bg-blue-400 rounded-full shadow-sm"></div>
                )}
                
                {dept.employees.map((staff) => (
                  <div key={staff.id} className="flex flex-col items-center relative pt-8">
                    {/* Tiny connector to staff card */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-8 bg-blue-400"></div>
                    
                    <div className="bg-white/95 backdrop-blur-md p-5 rounded-[2rem] border-[4px] border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] flex flex-col items-center gap-4 w-56 group hover:border-blue-800 hover:shadow-[0_0_30px_rgba(30,64,175,0.5)] hover:-translate-y-2 transition-all duration-300 cursor-pointer relative z-10">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-[1.2rem] overflow-hidden shadow-xl ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all">
                          <img 
                            src={staff.avatar} 
                            alt={staff.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
                      </div>
                      
                      <div className="text-center w-full">
                        <p className="text-[16px] font-black text-gray-900 line-clamp-1 mb-1 tracking-wide">{staff.name}</p>
                        <p className="text-[11px] text-blue-800 font-black uppercase tracking-[0.1em] line-clamp-1">{staff.position}</p>
                      </div>
                      
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                        <button className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-800 hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-[14px]">mail</span>
                        </button>
                        <button className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-800 hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-[14px]">call</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffTreeView;

