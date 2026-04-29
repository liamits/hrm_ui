import React from 'react';

const Topbar = () => {
  return (
    <header className="h-[70px] bg-white flex items-center justify-between px-8 z-10 sticky top-0 border-b border-gray-100">
      <div className="flex items-center gap-8">
        <button className="text-gray-400 hover:text-primary-purple">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="text-right hidden sm:block">
             <div className="text-sm font-bold text-gray-700 group-hover:text-primary-purple transition-colors">admin</div>
             <div className="text-[10px] font-medium text-gray-400 -mt-1 uppercase tracking-tighter">super_admin</div>
          </div>
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" className="w-10 h-10 rounded-full border border-gray-100 shadow-sm" alt="Profile" />
          <div className="flex items-center gap-4 border-l border-gray-100 pl-6 ml-2">
            <button className="text-gray-400 hover:text-primary-purple transition-colors relative">
              <span className="material-symbols-outlined text-[24px]">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
