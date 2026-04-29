import React, { useState } from 'react';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('personal');

    const profileData = {
        name: "Đào Thị Hạnh Hoài",
        role: "Team Leader",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hoai",
        personalInfo: {
            email: "daothihanhhoai@gmail.com",
            phone: "0901000021",
            address: "P. Châu Sơn - TP. Sông Công - Thái Nguyên"
        },
        professionalInfo: {
            position: "Team Leader",
            department: "BACK OFFICE",
            departmentCode: "BOF",
            joinDate: "4/3/2026"
        },
        workHistory: [
            { 
                time: "04/2026 - Hiện tại", 
                position: "Team Leader", 
                department: "BACK OFFICE", 
                note: "Được bổ nhiệm vị trí Team Leader dựa trên hiệu suất xuất sắc và năng lực lãnh đạo." 
            },
            { 
                time: "01/2026 - 03/2026", 
                position: "Senior Staff", 
                department: "BACK OFFICE", 
                note: "Phụ trách các dự án trọng điểm và hỗ trợ đào tạo nhân sự mới." 
            },
            { 
                time: "06/2025 - 12/2025", 
                position: "Junior Staff", 
                department: "BACK OFFICE", 
                note: "Hoàn thành xuất sắc các mục tiêu quý và đóng góp vào cải tiến quy trình phòng ban." 
            },
            { 
                time: "03/2025 - 05/2025", 
                position: "Intern", 
                department: "BACK OFFICE", 
                note: "Thực tập sinh tiềm năng, làm quen với quy trình vận hành của AHV WORK." 
            }
        ]
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 h-full overflow-y-auto pb-10">
            <div className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-purple/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col items-start gap-8">
                    <h1 className="text-[2.2rem] font-black text-gray-800 tracking-tight">Hồ sơ của tôi</h1>
                    
                    {/* Tabs */}
                    <div className="flex gap-10 border-b border-gray-100 w-full">
                        <button 
                            onClick={() => setActiveTab('personal')}
                            className={`pb-4 text-[13px] font-bold uppercase tracking-widest transition-all relative ${activeTab === 'personal' ? 'text-primary-purple' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">person</span>
                                Hồ sơ cá nhân
                            </div>
                            {activeTab === 'personal' && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-purple rounded-full animate-in zoom-in-y duration-300"></div>}
                        </button>
                        <button 
                            onClick={() => setActiveTab('security')}
                            className={`pb-4 text-[13px] font-bold uppercase tracking-widest transition-all relative ${activeTab === 'security' ? 'text-primary-purple' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">lock</span>
                                Đổi mật khẩu
                            </div>
                            {activeTab === 'security' && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-purple rounded-full animate-in zoom-in-y duration-300"></div>}
                        </button>
                    </div>

                    {/* Profile Header Card */}
                    <div className="w-full flex flex-col items-center py-10 bg-gray-50/30 rounded-[2.5rem] border border-gray-100/50">
                        <div className="relative">
                            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white mb-6">
                                <img src={profileData.avatar} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <button className="absolute bottom-6 right-0 bg-primary-purple text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[16px]">edit</span>
                            </button>
                        </div>
                        <h2 className="text-2xl font-black text-gray-800">{profileData.name}</h2>
                        <p className="text-[13px] text-gray-400 font-bold uppercase tracking-widest mt-1">{profileData.role}</p>
                    </div>

                    {/* Information Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {/* Personal Info */}
                        <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm text-left space-y-8 group hover:shadow-md transition-all">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                                        <span className="material-symbols-outlined text-[20px]">person</span>
                                    </div>
                                    <h3 className="text-[14px] font-black uppercase tracking-widest text-gray-800">Thông tin cá nhân</h3>
                                </div>
                                <button className="text-gray-300 hover:text-primary-purple transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group/item">
                                    <span className="material-symbols-outlined text-gray-300 text-[18px] group-hover/item:text-primary-purple transition-colors">mail</span>
                                    <span className="text-[13px] text-gray-500 font-medium">{profileData.personalInfo.email}</span>
                                </div>
                                <div className="flex items-center gap-4 group/item">
                                    <span className="material-symbols-outlined text-gray-300 text-[18px] group-hover/item:text-primary-purple transition-colors">call</span>
                                    <span className="text-[13px] text-gray-500 font-medium">{profileData.personalInfo.phone}</span>
                                </div>
                                <div className="flex items-center gap-4 group/item">
                                    <span className="material-symbols-outlined text-gray-300 text-[18px] group-hover/item:text-primary-purple transition-colors">home</span>
                                    <span className="text-[13px] text-gray-500 font-medium">{profileData.personalInfo.address}</span>
                                </div>
                            </div>
                        </div>

                        {/* Professional Info */}
                        <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm text-left space-y-8 group hover:shadow-md transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500">
                                    <span className="material-symbols-outlined text-[20px]">badge</span>
                                </div>
                                <h3 className="text-[14px] font-black uppercase tracking-widest text-gray-800">Thông tin chuyên môn</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center justify-between group/item">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-gray-300 text-[18px] group-hover/item:text-primary-purple transition-colors">work</span>
                                        <span className="text-[13px] text-gray-500 font-medium">Chuyên môn</span>
                                    </div>
                                    <span className="text-[13px] font-bold text-gray-800">{profileData.professionalInfo.position}</span>
                                </div>
                                <div className="flex items-center justify-between group/item">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-gray-300 text-[18px] group-hover/item:text-primary-purple transition-colors">account_tree</span>
                                        <span className="text-[13px] text-gray-500 font-medium">Bộ phận</span>
                                    </div>
                                    <span className="text-[13px] font-bold text-gray-800 uppercase">{profileData.professionalInfo.department}</span>
                                </div>
                                <div className="flex items-center justify-between group/item">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-gray-300 text-[18px] group-hover/item:text-primary-purple transition-colors">domain</span>
                                        <span className="text-[13px] text-gray-500 font-medium">Mã phòng</span>
                                    </div>
                                    <span className="text-[13px] font-bold text-gray-800">{profileData.professionalInfo.departmentCode}</span>
                                </div>
                                <div className="flex items-center justify-between group/item">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-gray-300 text-[18px] group-hover/item:text-primary-purple transition-colors">calendar_today</span>
                                        <span className="text-[13px] text-gray-500 font-medium">Ngày tạo</span>
                                    </div>
                                    <span className="text-[13px] font-bold text-gray-800">{profileData.professionalInfo.joinDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Work History Timeline (Requirement) */}
                    <div className="w-full bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm text-left space-y-10 group hover:shadow-md transition-all">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                                    <span className="material-symbols-outlined text-[20px]">history</span>
                                </div>
                                <h3 className="text-[14px] font-black uppercase tracking-widest text-gray-800">Quá trình làm việc</h3>
                            </div>
                        </div>

                        <div className="relative pl-8 space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
                            {profileData.workHistory.map((milestone, idx) => (
                                <div key={idx} className="relative group/ms">
                                    {/* Timeline Dot */}
                                    <div className={`absolute -left-[30px] top-1 w-6 h-6 rounded-full border-4 border-white shadow-md z-10 transition-all duration-500 ${idx === 0 ? 'bg-primary-purple scale-110' : 'bg-gray-200 group-hover/ms:bg-primary-purple/40'}`}></div>
                                    
                                    <div className="space-y-4">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                <span className={`text-[12px] font-black uppercase tracking-tighter px-3 py-1 rounded-lg ${idx === 0 ? 'bg-primary-purple text-white shadow-lg shadow-purple-200' : 'bg-gray-100 text-gray-500'}`}>
                                                    {milestone.time}
                                                </span>
                                                <h4 className="text-[16px] font-black text-gray-800 uppercase tracking-tight">{milestone.position}</h4>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <span className="material-symbols-outlined text-[16px]">account_tree</span>
                                                    <span className="text-[11px] font-bold uppercase tracking-widest">{milestone.department}</span>
                                                </div>
                                                <button className="text-gray-300 hover:text-primary-purple transition-colors opacity-0 group-hover/ms:opacity-100 transition-opacity">
                                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-gray-50/50 p-6 rounded-[1.5rem] border border-gray-100/50 relative overflow-hidden group-hover/ms:bg-white group-hover/ms:border-primary-purple/10 transition-all">
                                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                                <span className="material-symbols-outlined text-[40px]">format_quote</span>
                                            </div>
                                            <p className="text-[13px] text-gray-600 leading-relaxed font-medium relative z-10">
                                                {milestone.note}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
