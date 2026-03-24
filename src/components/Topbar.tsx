import React from 'react';

const Topbar = () => {
  return (
    <header className="h-[70px] bg-white flex items-center justify-between px-8 z-10 sticky top-0 border-b border-gray-100">
      <div className="flex items-center gap-8">
        <button className="text-gray-400 hover:text-primary-purple">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="relative hidden md:block">
          <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">search</span>
          <input 
            type="text" 
            placeholder="Search projects" 
            className="bg-transparent pl-8 py-2 text-sm text-gray-600 focus:outline-none w-64"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer group">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=David" className="w-8 h-8 rounded-full" alt="Profile" />
          <span className="text-sm font-medium text-gray-700 group-hover:text-primary-purple transition-colors">Admin</span>
          <span className="material-symbols-outlined text-[16px] text-gray-400 group-hover:text-primary-purple">expand_more</span>
        </div>

        <div className="flex items-center gap-5 text-gray-400 border-l border-gray-100 pl-6">
          <button className="hover:text-primary-purple transition-colors">
            <span className="material-symbols-outlined text-[20px]">fullscreen</span>
          </button>
          <button className="hover:text-primary-purple transition-colors relative">
            <span className="material-symbols-outlined text-[20px]">mail</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary-teal rounded-full border-2 border-white"></span>
          </button>
          <button className="hover:text-primary-purple transition-colors relative">
            <span className="material-symbols-outlined text-[20px]">notifications_active</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-support-salmon rounded-full border-2 border-white"></span>
          </button>
          <button className="hover:text-primary-purple transition-colors">
            <span className="material-symbols-outlined text-[20px]">power_settings_new</span>
          </button>
          <button className="hover:text-primary-purple transition-colors">
            <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
