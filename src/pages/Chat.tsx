import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  sender: string;
  content: string;
  time: string;
  isMe: boolean;
  isDeleted?: boolean;
  avatar?: string;
}

const Chat: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initial messages for different channels
  const [channelMessages, setChannelMessages] = useState<Record<string, Message[]>>({
    'Toàn công ty': [
      { id: 1, sender: 'Bạn', content: 'Test message 1 from round 2', time: '23:02', isMe: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Me' },
      { id: 2, sender: 'Bạn', content: 'Test message 2 from round 2', time: '23:02', isMe: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Me' },
      { id: 3, sender: 'Bạn', content: 'Test message 3 from round 2', time: '23:02', isMe: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Me' },
      { id: 4, sender: 'Bạn', content: 'Round 3 test', time: '23:03', isMe: true, isDeleted: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Me' },
      { id: 5, sender: 'Bạn', content: 'Test reply & reaction', time: '00:10', isMe: true, isDeleted: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Me' },
    ],
    'AHV Modnix': [
      { id: 1, sender: 'Admin', content: 'Chào mừng các bạn đến với kênh AHV Modnix!', time: '10:00', isMe: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin' },
    ],
    'AHV Media (DIY)': [],
    'AHV Media': [],
    'Giám sát': [],
    'Cloud': [],
    'OKRs': [],
    'Back Office': [],
    'Công nghệ': [],
  });

  const channels = [
    { name: 'Toàn công ty', members: 55, icon: 'groups' },
    { name: 'AHV Modnix', members: 12, icon: 'corporate_fare' },
    { name: 'AHV Media (DIY)', members: 5, icon: 'corporate_fare' },
    { name: 'AHV Media', members: 8, icon: 'corporate_fare' },
    { name: 'Giám sát', members: 2, icon: 'corporate_fare' },
    { name: 'Cloud', members: 4, icon: 'corporate_fare' },
    { name: 'OKRs', members: 1, icon: 'corporate_fare' },
    { name: 'Back Office', members: 8, icon: 'corporate_fare' },
    { name: 'Công nghệ', members: 15, icon: 'corporate_fare' },
  ];

  const handleSend = () => {
    if (!inputValue.trim() || !activeChannel) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: 'Bạn',
      content: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Me'
    };

    setChannelMessages({
      ...channelMessages,
      [activeChannel]: [...(channelMessages[activeChannel] || []), newMessage]
    });
    setInputValue('');
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [channelMessages, activeChannel]);

  return (
    <div className="h-[calc(100vh-140px)] bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex animate-in zoom-in-95 duration-500">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-50 flex flex-col bg-gray-50/30">
        <div className="p-8 flex justify-between items-center border-b border-gray-50 bg-white">
           <h2 className="text-xl font-black text-gray-800 tracking-tight">Chat</h2>
           <button className="w-10 h-10 rounded-xl bg-purple-50 text-primary-purple flex items-center justify-center hover:bg-primary-purple hover:text-white transition-all shadow-sm">
              <span className="material-symbols-outlined text-[18px]">edit_square</span>
           </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
           <div className="px-4 py-3">
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">KÊNH CHUNG</span>
           </div>
           {channels.map((chan, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveChannel(chan.name)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all group ${activeChannel === chan.name ? 'bg-white shadow-lg shadow-gray-200 border border-gray-100' : 'hover:bg-white/50'}`}
              >
                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${activeChannel === chan.name ? 'bg-purple-50 text-primary-purple' : 'bg-gray-100 text-gray-400 group-hover:bg-purple-50 group-hover:text-primary-purple'}`}>
                    <span className="material-symbols-outlined text-[20px]">{chan.icon}</span>
                 </div>
                 <div className="flex-1 text-left">
                    <p className={`text-[13px] font-black ${activeChannel === chan.name ? 'text-primary-purple' : 'text-gray-700'}`}>{chan.name}</p>
                    <p className="text-[10px] font-bold text-gray-400">{chan.members} thành viên</p>
                 </div>
              </button>
           ))}
        </div>
        
        <div className="p-4 border-t border-gray-50 bg-white">
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gray-50">
                <div className="w-10 h-10 rounded-full bg-primary-purple flex items-center justify-center text-white font-black text-xs">AD</div>
                <div className="flex-1">
                    <p className="text-[11px] font-black text-gray-800">Admin</p>
                    <p className="text-[9px] font-bold text-gray-400 uppercase">Hệ thống</p>
                </div>
                <button className="text-gray-300 hover:text-red-500 transition-all">
                    <span className="material-symbols-outlined text-xl">logout</span>
                </button>
            </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative bg-white">
        {activeChannel ? (
          <>
            {/* Header */}
            <div className="px-10 py-6 border-b border-gray-50 flex items-center justify-between animate-in slide-in-from-top-4 duration-300">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-primary-purple shadow-sm">
                     <span className="material-symbols-outlined text-2xl font-bold">{channels.find(c => c.name === activeChannel)?.icon}</span>
                  </div>
                  <div>
                     <h3 className="text-lg font-black text-gray-800">{activeChannel}</h3>
                     <p className="text-xs font-bold text-gray-400 flex items-center gap-1">
                        {channels.find(c => c.name === activeChannel)?.members} thành viên
                     </p>
                  </div>
               </div>
               <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-xl hover:bg-gray-50 text-gray-400 flex items-center justify-center transition-all">
                     <span className="material-symbols-outlined text-xl">search</span>
                  </button>
                  <button className="w-10 h-10 rounded-xl hover:bg-gray-50 text-gray-400 flex items-center justify-center transition-all">
                     <span className="material-symbols-outlined text-xl">push_pin</span>
                  </button>
                  <button 
                    onClick={() => setActiveChannel(null)}
                    className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm"
                    title="Đóng chat"
                  >
                     <span className="material-symbols-outlined text-xl">close</span>
                  </button>
               </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-8 bg-gray-50/10 scroll-smooth">
                <div className="flex justify-center mb-8">
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest bg-white border border-gray-100 px-4 py-1.5 rounded-full shadow-sm">22-03</span>
                </div>
               
               {(channelMessages[activeChannel] || []).map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
                     <div className={`flex items-start gap-4 max-w-[70%] ${msg.isMe ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-10 h-10 rounded-xl border shadow-sm overflow-hidden flex-shrink-0 ${msg.isMe ? 'border-purple-100 bg-purple-50' : 'border-gray-100 bg-gray-50'}`}>
                           <img src={msg.avatar} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className={`flex flex-col gap-2 ${msg.isMe ? 'items-end' : ''}`}>
                           <div className="flex items-center gap-2">
                              <span className={`text-[11px] font-black uppercase ${msg.isMe ? 'text-gray-400' : 'text-primary-purple'}`}>{msg.sender}</span>
                              <span className="text-[10px] font-bold text-gray-300 italic">{msg.time}</span>
                           </div>
                           
                           {msg.isDeleted ? (
                               <div className="bg-red-50/50 border border-red-100 rounded-3xl px-6 py-4 flex flex-col gap-1 relative overflow-hidden group shadow-sm shadow-red-50">
                                   <div className="flex items-center gap-2 text-red-500">
                                       <span className="material-symbols-outlined text-[18px] font-black">delete</span>
                                       <span className="text-[11px] font-black uppercase tracking-wider">Đã xóa bởi Admin</span>
                                   </div>
                                   <p className="text-xs font-bold text-red-300 italic">{msg.content}</p>
                               </div>
                           ) : (
                               <div className={`px-6 py-4 rounded-3xl shadow-xl transition-all ${msg.isMe ? 'bg-[#38bdf8] text-white rounded-tr-none shadow-sky-100' : 'bg-white border border-gray-100 text-gray-700 rounded-tl-none shadow-gray-100'}`}>
                                  <p className="text-sm font-bold leading-relaxed">{msg.content}</p>
                               </div>
                           )}
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Input */}
            <div className="p-8 border-t border-gray-50 bg-white">
               <form 
                 onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                 className="relative group"
                >
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 flex gap-3">
                     <button type="button" className="text-gray-300 hover:text-primary-purple transition-all flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl font-bold">attach_file</span>
                     </button>
                  </div>
                  <input 
                     type="text" 
                     value={inputValue}
                     onChange={(e) => setInputValue(e.target.value)}
                     placeholder="Nhập tin nhắn..." 
                     className="w-full bg-gray-50 border border-gray-100 rounded-[2rem] px-16 py-5 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary-purple/10 focus:bg-white transition-all shadow-inner"
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4">
                     <button type="button" className="text-gray-300 hover:text-yellow-500 transition-all flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl font-bold">sentiment_satisfied</span>
                     </button>
                     <button 
                       type="submit"
                       className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl transition-all active:scale-95 ${inputValue.trim() ? 'bg-[#38bdf8] text-white shadow-sky-100 hover:scale-110' : 'bg-gray-100 text-gray-300 shadow-none'}`}
                      >
                        <span className="material-symbols-outlined text-2xl font-bold">send</span>
                     </button>
                  </div>
               </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-10 bg-gray-50/10 animate-in fade-in duration-500">
             <div className="w-24 h-24 rounded-[2rem] bg-white shadow-2xl shadow-gray-200 flex items-center justify-center mb-6 text-gray-100">
                <span className="material-symbols-outlined text-5xl">chat_bubble</span>
             </div>
             <h3 className="text-lg font-black text-gray-400 uppercase tracking-widest mb-4">Chọn kênh để bắt đầu</h3>
             <p className="text-xs font-bold text-gray-300 mb-8 text-center max-w-xs">Chọn một kênh từ danh sách bên trái để xem tin nhắn và tham gia thảo luận</p>
             <button className="flex items-center gap-2 bg-gradient-purple text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-purple-100 hover:scale-105 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-lg">edit_square</span>
                Tin nhắn mới
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
