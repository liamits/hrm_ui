import React, { useState, useEffect } from 'react';

// --- Sub-components ---

const CircularProgress = ({ size = 60, strokeWidth = 5, percentage = 0 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="rotate-[-90deg]">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f3f4f6"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#purpleGradient)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          style={{ strokeDashoffset: offset, transition: 'stroke-dashoffset 0.5s ease' }}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute text-[12px] font-black text-red-500">{percentage}%</span>
    </div>
  );
};


// --- Core Values & Mission Section ---

const CoreValuesSection = () => {
  const coreValues = [
    { text: "Chỉ tạo ra nền tảng, phục vụ số đông", icon: "lightbulb", color: "from-blue-100 to-indigo-100 border-blue-200", iconColor: "text-blue-600", shadow: "shadow-blue-300/60" },
    { text: "Khách hàng & AHV là ưu tiên hàng đầu", icon: "favorite", color: "from-rose-100 to-pink-100 border-rose-200", iconColor: "text-rose-600", shadow: "shadow-rose-300/60" },
    { text: "Nhanh bao giờ cũng tốt hơn chậm", icon: "bolt", color: "from-amber-100 to-orange-100 border-amber-200", iconColor: "text-amber-600", shadow: "shadow-amber-300/60" },
    { text: "Tử tế, Trung thực và biết Chia sẻ", icon: "sentiment_satisfied", color: "from-emerald-100 to-teal-100 border-emerald-200", iconColor: "text-emerald-600", shadow: "shadow-emerald-300/60" },
    { text: "Biết ơn, Chủ động và Cam kết", icon: "handshake", color: "from-violet-100 to-purple-100 border-violet-200", iconColor: "text-violet-600", shadow: "shadow-violet-300/60" },
    { text: "AHV Holding cam kết mang đến cho cộng đồng Publisher, người dùng internet toàn cầu một hệ sinh thái chất lượng cao, an toàn bằng chính sự trân trọng và trách nhiệm cao của mình.", icon: "track_changes", color: "from-indigo-100 to-blue-100 border-indigo-200", iconColor: "text-indigo-600", shadow: "shadow-indigo-300/60" },
  ];

  return (
    <div className="space-y-16 mb-24 animate-in fade-in slide-in-from-bottom-10 duration-1000 pt-8">
      {/* --- Header: Extremely Sparkling --- */}
      <div className="flex flex-col items-center text-center space-y-8 pt-4">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
          <div className="relative flex items-center gap-4 px-12 py-5 bg-white/90 backdrop-blur-2xl rounded-full border-4 border-white shadow-3xl transform group-hover:scale-105 transition-transform duration-500">
            <span className="material-symbols-outlined text-3xl text-primary-purple animate-spin-slow">stars</span>
            <span className="text-[14px] font-black text-gray-800 uppercase tracking-[0.6em] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">AHV Holding Culture</span>
            <span className="material-symbols-outlined text-3xl text-pink-500 animate-spin-slow" style={{animationDirection: 'reverse'}}>stars</span>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-7xl font-black text-gray-800 uppercase tracking-tighter leading-none flex items-center gap-8 justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-shimmer drop-shadow-lg">GIÁ TRỊ</span>
            <span className="text-gray-300 transform rotate-12">/</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-[length:200%_auto] animate-shimmer drop-shadow-lg">TẦM NHÌN</span>
          </h2>
          <div className="flex justify-center gap-4">
             {[...Array(5)].map((_, i) => (
               <div key={i} className={`h-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] ${i === 2 ? 'w-56' : 'w-10 opacity-40'} transform hover:scale-110 transition-transform`}></div>
             ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 px-8 max-w-[1600px] mx-auto">
        {/* --- Column 1: Core Values (Giá trị Cốt lõi) --- */}
        <div className="space-y-10 bg-gradient-to-br from-white/90 via-white/50 to-white/90 backdrop-blur-3xl p-14 rounded-[4rem] border-4 border-white shadow-[0_40px_100px_-20px_rgba(168,85,247,0.3)] relative group overflow-hidden">
          {/* Animated Background Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/40 via-indigo-400/40 to-purple-400/40 rounded-full blur-[130px] -mr-40 -mt-40 group-hover:bg-blue-400/60 group-hover:scale-125 transition-transform duration-1000 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-400/40 via-rose-400/40 to-orange-400/40 rounded-full blur-[130px] -ml-40 -mb-40 group-hover:bg-pink-400/60 group-hover:scale-125 transition-transform duration-1000 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-8 mb-16">
              <div className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white flex items-center justify-center shadow-[0_0_40px_rgba(79,70,229,0.7)] animate-float border-4 border-white/50 transform group-hover:rotate-[15deg] transition-transform duration-700">
                <span className="material-symbols-outlined text-6xl drop-shadow-xl">workspace_premium</span>
              </div>
              <div>
                <h3 className="text-4xl font-black text-gray-800 uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 drop-shadow-sm">Giá trị Cốt lõi</h3>
                <div className="flex items-center gap-4 mt-2">
                   <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                   <p className="text-[13px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase tracking-[0.5em] drop-shadow-sm">Foundation Excellence</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 relative">
              {/* Connecting line */}
              <div className="absolute left-[38px] top-10 bottom-10 w-1 bg-gradient-to-b from-blue-400/50 via-purple-400/50 to-pink-400/50 rounded-full blur-[2px]"></div>

              {coreValues.map((v, i) => (
                <div key={i} className={`flex items-center gap-8 p-8 rounded-[3rem] border-4 bg-gradient-to-br ${v.color} hover:scale-[1.03] hover:shadow-[0_30px_60px_-15px_rgba(168,85,247,0.4)] hover:-translate-y-2 transition-all duration-500 cursor-default group/item border-white relative overflow-hidden z-10`}>
                  {/* Item glowing aura and shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-[200%] group-hover/item:translate-x-[200%] transition-transform duration-1000 ease-in-out skew-x-12"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/70 rounded-full blur-3xl -mr-16 -mt-16 group-hover/item:scale-150 transition-transform duration-700"></div>
                  
                  <div className="w-20 h-20 shrink-0 rounded-[2rem] bg-white backdrop-blur-xl flex items-center justify-center shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] group-hover/item:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.2)] group-hover/item:rotate-[20deg] group-hover/item:scale-110 transition-all duration-500 border-2 border-white relative z-10">
                    <span className={`material-symbols-outlined text-5xl ${v.iconColor} drop-shadow-md`}>{v.icon}</span>
                  </div>
                  <span className="text-[20px] font-black text-gray-800 leading-snug flex-1 tracking-tight relative z-10 drop-shadow-sm">{v.text}</span>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-x-4 group-hover/item:translate-x-0 shadow-xl border border-gray-100 relative z-10">
                     <span className={`material-symbols-outlined ${v.iconColor}`}>arrow_forward</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Column 2: Vision (Tầm nhìn) --- */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-14 rounded-[4rem] border-4 border-blue-800/50 shadow-[0_40px_100px_-20px_rgba(30,58,138,0.6)] flex flex-col relative overflow-hidden group">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse"></div>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-900/40 to-slate-800/40 rounded-full blur-[150px] group-hover:scale-125 transition-transform duration-1000"></div>
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-900/30 to-blue-900/30 rounded-full blur-[150px] group-hover:scale-125 transition-transform duration-1000"></div>
          
          <div className="absolute top-10 right-10 select-none opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay">
             <span className="text-[12rem] font-black text-white tracking-tighter leading-none drop-shadow-2xl">2030</span>
          </div>

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-8 mb-20">
              <div className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-cyan-400 to-blue-600 text-white flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.6)] animate-float-delayed border-4 border-white/20 group-hover:rotate-[-15deg] transition-transform duration-700">
                <span className="material-symbols-outlined text-6xl drop-shadow-lg">visibility</span>
              </div>
              <div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter drop-shadow-lg">Tầm nhìn</h3>
                <div className="flex items-center gap-4 mt-2">
                   <div className="h-1 w-12 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                   <p className="text-[13px] font-black text-cyan-400 uppercase tracking-[0.5em] drop-shadow-lg">Strategic Roadmap</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-10 flex-1 relative">
              {/* Connecting line */}
              <div className="absolute left-[38px] top-10 bottom-10 w-1 bg-gradient-to-b from-cyan-400/50 via-purple-400/50 to-pink-400/50 rounded-full blur-[1px]"></div>

              {[
                { t: "TOP 5 GLOBAL", desc: "Nền tảng công nghệ quảng cáo hàng đầu", icon: "public", color: "from-cyan-400 to-blue-500", glow: "shadow-cyan-400/50" },
                { t: "500M TRAFFIC", desc: "Người dùng sử dụng nền tảng hàng ngày", icon: "groups", color: "from-purple-400 to-pink-500", glow: "shadow-purple-400/50" },
                { t: "LEADER APP", desc: "Dẫn đầu thị trường Mobile App toàn cầu", icon: "military_tech", color: "from-amber-400 to-orange-500", glow: "shadow-amber-400/50" }
              ].map((item, i) => (
                <div key={i} className="relative flex items-center gap-10 group/v">
                  <div className={`w-20 h-20 shrink-0 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.3)] border-4 border-white/20 z-10 group-hover/v:scale-125 transition-transform duration-500`}>
                     <span className="material-symbols-outlined text-4xl text-white drop-shadow-md">{item.icon}</span>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border-2 border-white/10 hover:bg-white/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 group-hover/v:border-white/30">
                    <div className={`text-[32px] font-black bg-clip-text text-transparent bg-gradient-to-r ${item.color} mb-3 tracking-tighter leading-none drop-shadow-lg`}>{item.t}</div>
                    <div className="text-[16px] font-bold text-gray-300 uppercase tracking-[0.2em]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-[3rem] border border-white/10 flex items-center gap-8 text-gray-200 backdrop-blur-sm">
               <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rounded-full"></div>
               <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50 animate-pulse"></div>
                  <span className="relative material-symbols-outlined animate-spin-slow text-cyan-300 text-6xl drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">language</span>
               </div>
               <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Quote: Lộng lẫy --- */}
      <div className="max-w-[1600px] mx-auto group px-8 mt-8">
        <div className="relative p-3 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-[5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(168,85,247,0.5)] animate-gradient-xy transform group-hover:scale-[1.02] transition-transform duration-700">
           <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-shimmer" style={{backgroundSize: '200% 100%'}}></div>
           <div className="relative bg-white/95 backdrop-blur-3xl p-16 rounded-[4.5rem] flex flex-col md:flex-row items-center gap-14 px-24 border-2 border-white/50">
              <span className="material-symbols-outlined text-9xl text-gray-100/50 group-hover:text-cyan-200 transition-colors duration-1000 select-none transform group-hover:-translate-y-4">format_quote</span>
              <p className="text-[24px] font-black text-gray-700 leading-relaxed italic text-center flex-1 tracking-tight">
                 "Với AHV Holding - Từ giám đốc cho đến người vận hành, Từ trưởng phòng cho đến bạn dịch vụ chăm sóc khách hàng phải chia sẻ nhau cùng một mục tiêu là lấy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 bg-[length:200%_auto] animate-shimmer drop-shadow-sm border-b-4 border-purple-200">sự hài lòng của khách hàng làm kim chỉ nam</span> cho mọi hành động, mọi hoạt động của công ty"
              </p>
              <span className="material-symbols-outlined text-9xl text-gray-100/50 rotate-180 group-hover:text-pink-200 transition-colors duration-1000 select-none transform group-hover:translate-y-4">format_quote</span>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---


const Okrs = () => {
  const [view, setView] = useState<'list' | 'detail'>('list');
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [expandedObjectives, setExpandedObjectives] = useState<Record<string, boolean>>({ '01': true });
  
  // Modal states
  const [showCheckinModal, setShowCheckinModal] = useState(false);
  const [checkinFormError, setCheckinFormError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const [mockUser, setMockUser] = useState({
    name: 'Đào Thị Hạnh Hoài',
    id: 'BOF007',
    dept: 'BACK OFFICE',
    cycle: 'Chu kỳ 2 / 2026',
    tag: 'Bứt phá',
    avatar: 'DH',
    progress: 0,
    objectives: [
      { 
        id: '01', 
        title: 'Ứng Dụng AI Để Nâng Cao Hiệu Quả Tuyển Dụng Và Chất Lượng Nhân Sự', 
        progress: 10, 
        krs: 5,
        keyResults: [
          { id: 'KR1', title: '100% các vị trí được đáp ứng trong vòng 30 ngày kể từ khi nhận được yêu cầu tuyển dụng', target: 1, t: [0,0,0,0,0,0,0,0,0,0], result: 0, progress: 0 },
          { id: 'KR2', title: 'Ứng dụng AI vào >70 % quy trình tuyển dụng (JD, sourcing, lọc CV, email, đánh giá sơ bộ)', target: 1, t: [0,0,0,0,0,0,0,0,0,0], result: 0, progress: 0 },
          { id: 'KR3', title: 'Giảm ≥ 30% thời gian tuyển dụng trung bình (Time to Hire) so với Quý I', target: 1, t: [0,0,0,0,0,0,0,0,0,0], result: 0, progress: 0 },
          { id: 'KR4', title: 'Xây dựng hệ thống AI screening CV (prompt + tiêu chí chuẩn) áp dụng cho 100% vị trí', target: 1, t: [0,0,0,0,0,0,0,0,0,0], result: 0, progress: 0 },
          { id: 'KR5', title: 'Biến truyền thông tuyển dụng thành kênh thu hút nhân tài chủ động', target: 1, t: [0,0,0,0,0,0,0,0,0,0], result: 0, progress: 0 },
        ]
      },
      { 
        id: '02', 
        title: 'Chuyển Đổi Toàn Diện Vận Hành C&B Sang Mô Hình Tự Động Hóa- Chính Xác- Minh Bạch Bằng AI', 
        progress: 0, 
        krs: 5,
        keyResults: [] 
      },
      { 
        id: '03', 
        title: 'Kiến Tạo Văn Hóa Doanh Nghiệp, Nơi Mỗi Cá Nhân Đều Hạnh Phúc, Sáng Tạo Và Trải Nghiệm Nhân Sự Vượt Trội', 
        progress: 0, 
        krs: 5,
        keyResults: []
      },
    ],
    checkinHistory: [
      { id: 1, date: '2026-04-09', time: '08:00', participant: 'Phạm Minh Hiếu', content: 'Review OKR Q1 progress', confirmed: true },
      { id: 2, date: '2026-04-09', time: '14:00', participant: 'Nguyễn Hồng Phúc', content: 'Sync-up AI recruitment AI recruitment tool', confirmed: false },
      { id: 3, date: '2026-04-10', time: '10:00', participant: 'Chu Văn Tú', content: 'Weekly strategy check', confirmed: false },
      { id: 4, date: '2026-04-08', time: '09:00', participant: 'Đinh Quang Cường', content: 'C&B Automation sync', confirmed: false },
    ]
  });

  const toggleObjective = (id: string) => {
    setExpandedObjectives(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getStatus = (checkin: any) => {
    if (checkin.confirmed) return 'Thành công';
    const checkinDateTime = new Date(`${checkin.date}T${checkin.time}`);
    const endOfDay = new Date(`${checkin.date}T23:59:59`);
    if (currentTime < checkinDateTime) return 'Đang chờ';
    if (currentTime >= checkinDateTime && currentTime <= endOfDay) return 'Đang diễn ra';
    return 'Thất bại';
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Thành công': return 'bg-green-50 text-green-500 border-green-100';
      case 'Thất bại': return 'bg-red-50 text-red-500 border-red-100';
      case 'Đang chờ': return 'bg-blue-50 text-blue-500 border-blue-100';
      case 'Đang diễn ra': return 'bg-orange-50 text-orange-500 border-orange-100 animate-pulse';
      default: return 'bg-gray-50 text-gray-500 border-gray-100';
    }
  };

  const handleConfirm = (id: number) => {
    setMockUser(prev => ({
      ...prev,
      checkinHistory: prev.checkinHistory.map(ch => ch.id === id ? { ...ch, confirmed: true } : ch)
    }));
  };

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
    setView('detail');
  };

  if (view === 'detail') {
    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500 pb-20">
        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[12px] font-medium text-gray-400">
             <span>AHV Work</span>
             <span className="material-symbols-outlined text-sm">chevron_right</span>
             <span>Quản lý OKR</span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-gray-800">Chi tiết OKR Nhân viên</h2>
            <button onClick={() => setView('list')} className="flex items-center gap-2 text-gray-500 hover:text-primary-purple transition-colors font-bold text-sm">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
              Quay lại danh sách OKR
            </button>
          </div>
        </div>

        {/* User Detail Card */}
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-purple-50 shadow-inner bg-gradient-purple flex items-center justify-center text-white text-2xl font-black">
              {mockUser.avatar}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-gray-800">{mockUser.name}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-500 text-[10px] font-black uppercase tracking-wider rounded-lg border border-blue-100">{mockUser.dept}</span>
                <span className="px-3 py-1 bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-wider rounded-lg border border-gray-100">{mockUser.id}</span>
                <span className="px-3 py-1 bg-purple-50 text-primary-purple text-[10px] font-black uppercase tracking-wider rounded-lg border border-purple-100">{mockUser.cycle}</span>
                <span className="px-3 py-1 bg-teal-50 text-teal-500 text-[10px] font-black uppercase tracking-wider rounded-lg border border-teal-100">{mockUser.tag}</span>
              </div>
            </div>
          </div>
          <button className="bg-[#1a73e8] text-white font-black px-8 py-3.5 rounded-2xl shadow-lg shadow-blue-100">
            <span className="material-symbols-outlined">add</span> Thêm Objective
          </button>
        </div>

        {/* Objectives */}
        <div className="space-y-4 pt-4">
          {mockUser.objectives.map((obj) => (
            <div key={obj.id} className="bg-white rounded-[1.5rem] border border-gray-100 shadow-lg shadow-gray-200/30 overflow-hidden">
              <div 
                onClick={() => toggleObjective(obj.id)}
                className="p-6 pl-8 flex items-center gap-8 group cursor-pointer hover:bg-gray-50/30 transition-colors"
              >
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center font-black text-lg border border-blue-100">
                  {obj.id}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-[15px] font-black text-gray-700 leading-snug group-hover:text-primary-purple">
                      {obj.title}
                    </h4>
                    <div className="flex items-center gap-6 shrink-0">
                       <div className="flex items-center gap-6">
                         <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
                           <div className="h-full bg-gradient-purple" style={{ width: `${obj.progress}%` }}></div>
                         </div>
                         <span className="text-sm font-black text-red-500">0%</span>
                       </div>
                       <div className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-[10px] font-black text-gray-400 uppercase tracking-widest">{obj.krs} KR</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-primary-purple"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                  <button className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-red-500"><span className="material-symbols-outlined text-[18px]">delete</span></button>
                  <span className={`material-symbols-outlined text-gray-400 transition-transform duration-300 ${expandedObjectives[obj.id] ? 'rotate-180' : ''}`}>expand_more</span>
                </div>
              </div>

              { expandedObjectives[obj.id] && obj.keyResults.length > 0 && (
                <div className="border-t border-gray-100 animate-in slide-in-from-top-4 duration-300 translate-z-0">
                   <div className="overflow-x-auto bg-gray-50/10">
                      <table className="w-full text-left text-[11px] border-collapse min-w-[1200px]">
                        <thead>
                          <tr className="bg-gray-50/50 text-gray-400 font-black uppercase tracking-wider text-[9px] border-b border-gray-100">
                            <th className="px-5 py-4 w-16">Mã</th>
                            <th className="px-5 py-4 border-l border-gray-100">Key Result</th>
                            <th className="px-4 py-4 border-l border-gray-100 text-center">Mục tiêu</th>
                            {[...Array(10)].map((_, i) => (
                              <th key={i} className="px-3 py-4 border-l border-gray-100 text-center">T{i+1}</th>
                            ))}
                            <th className="px-4 py-4 border-l border-gray-100 text-center">Kết quả</th>
                            <th className="px-4 py-4 border-l border-gray-100 text-center">Tiến độ</th>
                            <th className="px-4 py-4 border-l border-gray-100 text-center">Liên kết</th>
                            <th className="px-6 py-4 border-l border-gray-100 text-center">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                           {obj.keyResults.map((kr) => (
                             <tr key={kr.id} className="bg-white hover:bg-gray-50/50 transition-colors">
                               <td className="px-5 py-5 font-black text-blue-500">{kr.id}</td>
                               <td className="px-5 py-5 border-l border-gray-50 max-w-[300px] leading-relaxed text-gray-600 font-medium">{kr.title}</td>
                               <td className="px-4 py-5 border-l border-gray-50 text-center font-black text-blue-600">{kr.target}</td>
                               {kr.t.map((val, idx) => (
                                 <td key={idx} className="px-3 py-5 border-l border-gray-50 text-center font-black text-gray-700">{val}</td>
                               ))}
                               <td className="px-4 py-5 border-l border-gray-50 text-center font-black text-red-500">{kr.result}</td>
                               <td className="px-4 py-5 border-l border-gray-50 text-center font-black text-red-500">0%</td>
                               <td className="px-4 py-5 border-l border-gray-50 text-center">
                                  <span className="text-gray-300 italic text-[10px]">Gõ @ tìm nhân viên</span>
                               </td>
                               <td className="px-6 py-5 border-l border-gray-50 text-center">
                                  <div className="flex justify-center gap-1">
                                    <button className="p-1.5 text-blue-400 hover:bg-blue-50 rounded-lg"><span className="material-symbols-outlined text-sm">edit</span></button>
                                    <button className="p-1.5 text-red-400 hover:bg-red-50 rounded-lg"><span className="material-symbols-outlined text-sm">delete</span></button>
                                  </div>
                               </td>
                             </tr>
                           ))}
                        </tbody>
                      </table>
                   </div>
                   <div className="p-4 bg-gray-50/30 border-t border-gray-100">
                      <button className="flex items-center gap-2 text-primary-purple font-black text-xs hover:opacity-80 ml-6">
                         <span className="material-symbols-outlined text-sm">add</span>
                         Thêm Key Result mới
                      </button>
                   </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Check-ins */}
        <div className="pt-10 space-y-6">
          <div className="flex items-center gap-3 ml-4">
             <span className="material-symbols-outlined text-indigo-500">event_available</span>
             <h3 className="text-lg font-black text-gray-800 uppercase tracking-tight">Lịch sử Check-in</h3>
          </div>
          <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-gray-400 text-[11px] font-black uppercase tracking-widest border-b border-gray-100">
                  <th className="px-8 py-5">STT</th>
                  <th className="px-6 py-5 border-l border-gray-50">Ngày/Giờ</th>
                  <th className="px-6 py-5 border-l border-gray-50">Người check-in</th>
                  <th className="px-6 py-5 border-l border-gray-50">Nội dung</th>
                  <th className="px-6 py-5 border-l border-gray-50 text-center">Trạng thái</th>
                  <th className="px-6 py-5 border-l border-gray-50 text-center">Hành động</th>
                  <th className="px-8 py-5 text-center border-l border-gray-50">Xác nhận</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {mockUser.checkinHistory.map((item, index) => {
                  const status = getStatus(item);
                  return (
                    <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-8 py-5 text-sm font-black text-gray-300">0{index + 1}</td>
                      <td className="px-6 py-5 border-l border-gray-50">
                        <div className="space-y-0.5"><div className="text-[13px] font-bold text-gray-700">{item.date}</div><div className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">{item.time}</div></div>
                      </td>
                      <td className="px-6 py-5 border-l border-gray-50">
                        <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center text-[10px] font-black border border-indigo-100">{item.participant.split(' ').pop()?.charAt(0)}</div><span className="text-[13px] font-bold text-gray-700">{item.participant}</span></div>
                      </td>
                      <td className="px-6 py-5 border-l border-gray-50 text-[13px] text-gray-500 italic max-w-md">"{item.content}"</td>
                      <td className="px-6 py-5 border-l border-gray-50 text-center"><span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border whitespace-nowrap ${getStatusStyle(status)}`}>{status}</span></td>
                      <td className="px-6 py-5 border-l border-gray-50 text-center">
                         <div className="flex justify-center gap-1">
                            <button className="p-1.5 text-blue-400 hover:bg-blue-50 rounded-lg transition-all"><span className="material-symbols-outlined text-sm">edit</span></button>
                            <button className="p-1.5 text-red-400 hover:bg-red-50 rounded-lg transition-all"><span className="material-symbols-outlined text-sm">delete</span></button>
                         </div>
                      </td>
                      <td className="px-8 py-5 border-l border-gray-50 text-center">
                        {status === 'Đang diễn ra' && <button onClick={() => handleConfirm(item.id)} className="bg-gradient-purple text-white text-[11px] font-black px-4 py-2 rounded-xl shadow-lg shadow-purple-100 hover:opacity-90 transition-all">Xác nhận</button>}
                        {status === 'Thành công' && <span className="material-symbols-outlined text-green-500">check_circle</span>}
                        {(status === 'Thất bại' || status === 'Đang chờ') && <span className="text-[11px] font-bold text-gray-300 italic">N/A</span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-gray-50/10 border border-gray-100 border-t-0 rounded-b-[2rem]">
             <button 
               onClick={() => { setShowCheckinModal(true); setCheckinFormError(false); }}
               className="flex items-center gap-2 text-primary-purple font-black text-xs hover:opacity-80 ml-6"
             >
                <span className="material-symbols-outlined text-sm">add</span>
                Thêm checkin mới
             </button>
          </div>
        </div>

        {/* Checkin Modal */}
        {showCheckinModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="bg-gradient-purple p-8 text-white relative">
                <button 
                  onClick={() => setShowCheckinModal(false)}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
                <h3 className="text-2xl font-black mb-1">Tạo lịch Check-in mới</h3>
                <p className="text-white/70 text-sm font-medium">Theo dõi tiến độ OKR nhân sự</p>
              </div>
              
              <div className="p-8 space-y-5">
                {checkinFormError && (
                  <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <span className="material-symbols-outlined text-red-500">error</span>
                    <span className="text-xs font-bold text-red-500">Lỗi: Lịch check-in bất thường phải tạo trước giờ bắt đầu ít nhất 30 phút.</span>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Loại lịch</label>
                    <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 focus:ring-2 focus:ring-primary-purple/20 outline-none transition-all appearance-none">
                      <option>Lịch bất thường</option>
                      <option>Lịch cố định (Hàng tuần)</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Người tham gia</label>
                    <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 focus:ring-2 focus:ring-primary-purple/20 outline-none transition-all appearance-none">
                      <option>Chọn người tham gia</option>
                      <option>Phạm Minh Hiếu</option>
                      <option>Nguyễn Hồng Phúc</option>
                      <option>Chu Văn Tú</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Ngày bắt đầu</label>
                    <input type="date" defaultValue="2026-04-10" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 focus:ring-2 focus:ring-primary-purple/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Ngày kết thúc</label>
                    <input type="date" defaultValue="2026-04-10" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 focus:ring-2 focus:ring-primary-purple/20 outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5 invisible h-0"></div> {/* Spacer or use full width */}
                  <div className="space-y-1.5 w-full col-span-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Giờ bắt đầu</label>
                    <input type="time" defaultValue="14:00" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 focus:ring-2 focus:ring-primary-purple/20 outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Nội dung cuộc họp</label>
                  <textarea 
                    rows={3} 
                    placeholder="Nhập nội dung chính của buổi check-in..."
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 focus:ring-2 focus:ring-primary-purple/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-4 flex gap-4">
                  <button 
                    onClick={() => setCheckinFormError(true)}
                    className="flex-1 bg-gradient-purple text-white font-black py-4 rounded-2xl shadow-xl shadow-purple-100 hover:opacity-90 active:scale-95 transition-all"
                  >
                    Xác nhận tạo lịch
                  </button>
                  <button 
                    onClick={() => setShowCheckinModal(false)}
                    className="px-8 border border-gray-100 text-gray-400 font-black py-4 rounded-2xl hover:bg-gray-50 transition-all"
                  >
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700 pb-12">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[12px] font-medium text-gray-400"><span>Trang chủ</span><span className="material-symbols-outlined text-sm">chevron_right</span><span>Quản lý OKR</span></div>
            <h1 className="text-3xl font-black text-gray-800">Mục tiêu & Kết quả chính</h1>
          </div>
          <button className="flex items-center gap-3 bg-gradient-to-r from-primary-purple to-indigo-600 text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-purple-200 hover:scale-105 hover:shadow-2xl transition-all active:scale-95 text-[15px]">
            <span className="material-symbols-outlined text-[28px]">add_circle</span> Thêm OKR Mới
          </button>
        </div>
        
        {/* Culture & Mission Section */}
        <CoreValuesSection />

        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-wrap gap-8 items-end">
          <div className="flex-1 min-w-[240px] space-y-3">
             <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Chu kỳ</label>
             <div className="relative group">
                <select className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-primary-purple/20 transition-all appearance-none"><option>Quý 2/2026 (2026)</option></select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                <button className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-purple"><span className="material-symbols-outlined text-[18px]">settings</span></button>
             </div>
          </div>
          <div className="flex-1 min-w-[240px] space-y-3"><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Nhân viên</label><select className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold text-gray-400 outline-none transition-all"><option>Chọn nhân viên</option></select></div>
          <div className="flex-1 min-w-[240px] space-y-3"><label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Phòng ban</label><select className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-5 py-4 text-sm font-bold text-gray-400 outline-none transition-all"><option>Chọn phòng ban</option></select></div>
          <button className="px-8 py-3.5 border-2 border-orange-50 text-orange-500 font-black rounded-2xl text-sm flex items-center gap-2 hover:bg-orange-50 transition-all group">
             <span className="material-symbols-outlined text-[20px] group-hover:rotate-180 transition-transform duration-500">refresh</span> Làm mới
          </button>
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex items-center gap-4 bg-gradient-to-r from-purple-50 to-white p-4 py-3 rounded-2xl border border-purple-100/50 w-fit pr-12 shadow-sm">
           <div className="w-10 h-10 rounded-xl bg-gradient-purple flex items-center justify-center text-white"><span className="material-symbols-outlined">person</span></div>
           <h3 className="text-[15px] font-black text-gray-800 uppercase tracking-tight">Mục tiêu cá nhân của tôi</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div onClick={() => handleUserClick(mockUser)} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:translate-y-[-6px] transition-all cursor-pointer group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-purple opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center justify-between mb-2">
              <div className="space-y-1"><h4 className="text-[15px] font-black text-gray-800 group-hover:text-primary-purple transition-colors leading-tight">{mockUser.name}</h4><p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{mockUser.id}</p></div>
              <CircularProgress percentage={mockUser.progress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Okrs;
