import React, { useState, useMemo } from 'react';

const Niko = () => {
  const [activeTab, setActiveTab] = useState('social');
  const [selectedTemplate, setSelectedTemplate] = useState('v8');
  const [showPraiseModal, setShowPraiseModal] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [isAdminView, setIsAdminView] = useState(false);

  // CURRENT USER & WALLET (Requirements 1.1, 1.3)
  const [currentUser, setCurrentUser] = useState({
    id: 'ADMIN001',
    name: 'Admin User',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
    wallet: {
      starTotal: 1250,    // Tích lũy (earned from others)
      starUsable: 850,    // Khả dụng (can be used for gifts)
      status: 'active'
    },
    // Gifting Pool (Reset every month, does not accumulate)
    giftableBalance: 500, 
    giftableUsed: 120   
  });

  const [cart, setCart] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([
    { id: 'ORD-001', items: [{ id: 1, name: 'Voucher Coffee 50k', price: 100, quantity: 1 }], totalPrice: 100, employeeId: 'ADMIN001', status: 'approved', time: '2 ngày trước' },
    { id: 'ORD-002', items: [{ id: 2, name: 'Sổ tay AHV Work', price: 200, quantity: 1 }], totalPrice: 200, employeeId: 'ADMIN001', status: 'pending', time: '1 giờ trước' },
  ]);

  const showNotif = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  /* MOCK DATA: SECTORS & CRITERIA (Requirement 1.2) */
  const sectors = [
    { id: 'vh', name: 'Văn hóa', icon: 'diversity_3', criteria: [
        { id: 'c1', name: 'Kỷ luật', stars: 20 },
        { id: 'c2', name: 'Tận tâm', stars: 30 },
        { id: 'c3', name: 'Chủ động', stars: 25 },
        { id: 'c4', name: 'Sáng tạo', stars: 40 }
    ]},
    { id: 'da', name: 'Dự án', icon: 'account_tree', criteria: [
        { id: 'c5', name: 'Đúng hạn', stars: 50 },
        { id: 'c6', name: 'Vượt mục tiêu', stars: 100 },
        { id: 'c7', name: 'Giải quyết vấn đề', stars: 60 }
    ]},
    { id: 'cv', name: 'Công việc', icon: 'business_center', criteria: [
        { id: 'c8', name: 'Hỗ trợ đồng đội', stars: 15 },
        { id: 'c9', name: 'Cải tiến quy trình', stars: 45 }
    ]}
  ];

  /* MOCK DATA: GIFTS (Requirement 1.4.1) */
  const nikoGifts = [
    { id: 1, name: 'Voucher Coffee 50k', price: 100, image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=400&h=300&fit=crop', monthLimit: 5, userLimit: 2, status: 'active', description: 'Thưởng thức cà phê tuyệt ngon tại AHV Lounge' },
    { id: 2, name: 'Sổ tay AHV Work', price: 200, image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=300&fit=crop', monthLimit: 10, userLimit: 1, status: 'active', description: 'Sổ tay cao cấp cho công việc hằng ngày' },
    { id: 3, name: 'Áo thun AHV Limited', price: 500, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&h=300&fit=crop', monthLimit: 2, userLimit: 1, status: 'active', description: 'Phiên bản giới hạn kỷ niệm 10 năm' },
    { id: 4, name: 'Voucher Buffet 500k', price: 1500, image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop', monthLimit: 1, userLimit: 1, status: 'out_of_stock', description: 'Tiệc buffet tối tại khách sạn 5 sao' },
  ];

  const departments = [
    { id: 'MOD', name: 'Phòng Nội dung (MOD)' },
    { id: 'TEC', name: 'Phòng Công nghệ (TEC)' },
    { id: 'MED', name: 'Phòng Media (MED)' },
  ];

  const [employees, setEmployees] = useState([
    { id: 'MOD0046', dept: 'MOD', name: 'Bế Thảo Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy', sentiments: ['mood', 'mood', 'sentiment_very_satisfied', 'mood', 'mood', null], starTotal: 450, starUsable: 300 },
    { id: 'MOD0023', dept: 'MOD', name: 'Cao Sơn Bách', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bach', sentiments: ['sentiment_very_satisfied', 'mood', 'mood', 'sentiment_very_satisfied', 'mood', 'mood'], starTotal: 780, starUsable: 120 },
    { id: 'TEC001', dept: 'TEC', name: 'Chu Văn Tú', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tu', sentiments: ['mood', 'sentiment_very_satisfied', 'mood', 'mood', 'sentiment_very_satisfied', null], starTotal: 1200, starUsable: 850 },
    { id: 'TEC007', dept: 'TEC', name: 'Chu Đức Hoàng', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hoang', sentiments: ['mood', 'mood', 'sentiment_very_satisfied', 'mood', 'mood', 'mood'], starTotal: 560, starUsable: 400 },
    { id: 'MED0049', dept: 'MED', name: 'Dương Thị Kiều Ngân', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ngan', sentiments: ['sentiment_very_satisfied', 'mood', 'mood', 'mood', 'sentiment_very_satisfied', 'mood'], starTotal: 340, starUsable: 200 },
    { id: 'TEC004', dept: 'TEC', name: 'Lê Thanh Tùng', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LeTung', sentiments: ['mood', 'mood', 'sentiment_very_satisfied', 'mood', 'mood', 'mood'], starTotal: 890, starUsable: 600 },
  ]);

  const [posts, setPosts] = useState<any[]>([
    { 
      id: 1, 
      author: { id: 'EMP001', name: 'Phan Văn Hội', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hoi' },
      target: { id: 'TEC004', name: 'Lê Thanh Tùng', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LeTung' },
      content: 'Tầm nhìn kỹ thuật của anh rất rõ ràng và truyền cảm hứng cho cả team.',
      type: 'POST', // POST, ANNOUNCEMENT, SYSTEM
      visibility: 'PUBLIC', // PUBLIC, PRIVATE, DEPARTMENT
      attachments: [{ type: 'IMAGE', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80' }],
      reactions: { LIKE: 12, HAHA: 2, SAD: 0, HEART: 5 },
      comments: [
        { id: 1, user: 'Chu Văn Tú', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tu', text: 'Tầm nhìn của anh Tùng luôn là động lực cho cả team ạ!', time: '15 phút trước' },
      ],
      stars: 70, 
      time: 'cách đây 24 phút',
      hashtags: ['SángTạo', 'TầmNhìn', 'AHVTech'],
      mentions: [{ targetId: 'TEC004', username: '@tungdev' }],
      isLiked: false,
    },
    { 
      id: 2, 
      author: { id: 'MOD0046', name: 'Bế Thảo Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy' },
      target: { id: 'MOD0023', name: 'Cao Sơn Bách', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bach' },
      content: 'Bách đã chuẩn bị tài liệu pitching cực kỳ chuyên nghiệp cho dự án mới.',
      type: 'ANNOUNCEMENT',
      visibility: 'DEPARTMENT',
      attachments: [{ type: 'IMAGE', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80' }],
      reactions: { LIKE: 8, HAHA: 0, SAD: 0, HEART: 12 },
      comments: [],
      stars: 30, 
      time: '5 giờ trước',
      hashtags: ['KỷLuật', 'ChuyênNghiệp'],
      mentions: [{ targetId: 'MOD0023', username: '@sonbach' }],
      isLiked: true,
    },
  ]);

  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);
  const [selectedCriteria, setSelectedCriteria] = useState<any[]>([]);
  const [praiseContent, setPraiseContent] = useState('');
  const [newComment, setNewComment] = useState<{ [key: number]: string }>({});

  const totalPraiseStars = useMemo(() => {
    return selectedCriteria.reduce((sum, c) => sum + c.stars, 0);
  }, [selectedCriteria]);

  const toggleCriterion = (criterion: any) => {
    setSelectedCriteria(prev => {
        if (prev.find(c => c.id === criterion.id)) {
            return prev.filter(c => c.id !== criterion.id);
        }
        return [...prev, criterion];
    });
  };

  const handlePostPraise = () => {
    if (!selectedTarget || selectedCriteria.length === 0) return;
    
    // Check limit before posting
    if (currentUser.giftableUsed + totalPraiseStars > currentUser.giftableBalance) {
        showNotif("Vượt quá hạn mức tặng sao trong tháng!");
        return;
    }

    const targetEmp = employees.find(e => e.id === selectedTarget);
    if (!targetEmp) return;

    const newPost = {
        id: Date.now(),
        author: { id: currentUser.id, name: currentUser.name, avatar: currentUser.avatar },
        target: { id: targetEmp.id, name: targetEmp.name, avatar: targetEmp.avatar },
        content: praiseContent,
        type: 'POST',
        visibility: 'PUBLIC',
        attachments: [],
        reactions: { LIKE: 0, HAHA: 0, SAD: 0, HEART: 0 },
        comments: [],
        stars: totalPraiseStars,
        time: 'Vừa xong',
        hashtags: selectedCriteria.map(c => c.name.replace(/\s+/g, '')),
        mentions: [{ targetId: targetEmp.id, username: `@${targetEmp.name.split(' ').pop()?.toLowerCase()}` }],
        isLiked: false
    };

    setPosts([newPost, ...posts]);
    
    // Reduce user's giftable pool
    setCurrentUser({
        ...currentUser,
        giftableUsed: currentUser.giftableUsed + totalPraiseStars
    });

    // Award stars to recipient (starTotal and starUsable)
    setEmployees(prev => prev.map(emp => 
        emp.id === targetEmp.id 
        ? { ...emp, starTotal: emp.starTotal + totalPraiseStars, starUsable: emp.starUsable + totalPraiseStars }
        : emp
    ));
    
    setShowPraiseModal(false);
    setSelectedTarget(null);
    setSelectedCriteria([]);
    setPraiseContent('');
    showNotif(`Đã tặng ${totalPraiseStars} sao và đăng bài vinh danh thành công!`);
  };

  const handleLike = (postId: number) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        const isLiked = !post.isLiked;
        return { 
          ...post, 
          isLiked, 
          reactions: { 
            ...post.reactions, 
            LIKE: isLiked ? post.reactions.LIKE + 1 : post.reactions.LIKE - 1 
          } 
        };
      }
      return post;
    }));
  };

  const handleAddComment = (postId: number) => {
    if (!newComment[postId]?.trim()) return;
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, { id: Date.now(), user: currentUser.name, avatar: currentUser.avatar, text: newComment[postId], time: 'Vừa xong' }]
        };
      }
      return post;
    }));
    setNewComment(prev => ({ ...prev, [postId]: '' }));
    showNotif("Đã thêm bình luận mới!");
  };

  const addToCart = (gift: any) => {
    if (gift.status === 'out_of_stock') {
        showNotif("Món quà này hiện đã hết hàng!");
        return;
    }

    // Requirement 1.4.1: Check gift purchase limits
    const existingInCart = cart.find(item => item.id === gift.id);
    const cartQuantity = existingInCart ? existingInCart.quantity : 0;
    
    // Check per-user limit
    if (cartQuantity >= gift.userLimit) {
        showNotif(`Số lượng vượt quá giới hạn ${gift.userLimit} phần/người!`);
        return;
    }

    // Check monthly global limit (mock)
    if (gift.monthLimit <= 0) {
        showNotif("Quà này đã đạt giới hạn đổi trong tháng!");
        return;
    }

    setCart(prev => {
        const existing = prev.find(item => item.id === gift.id);
        if (existing) {
            return prev.map(item => item.id === gift.id ? { ...item, quantity: item.quantity + 1 } : item);
        }
        return [...prev, { ...gift, quantity: 1 }];
    });
    showNotif(`Đã thêm ${gift.name} vào giỏ hàng`);
  };

  // ORDER LOGIC (Requirement 1.4.3, 1.4.4)
  const handleCheckout = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (currentUser.wallet.starUsable < total) {
        showNotif("Bạn không đủ sao khả dụng để thực hiện giao dịch này!");
        return;
    }

    const newOrder = {
        id: `ORD-${Date.now().toString().slice(-5)}`,
        items: [...cart],
        totalPrice: total,
        employeeId: currentUser.id,
        status: 'pending',
        time: 'Vừa xong'
    };

    setOrders([newOrder, ...orders]);
    setCart([]);
    setCurrentUser({
        ...currentUser,
        wallet: { ...currentUser.wallet, starUsable: currentUser.wallet.starUsable - total }
    });
    showNotif("Đã tạo đơn hàng thành công! Đang chờ Admin phê duyệt.");
  };

  const handleApproveOrder = (orderId: string) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: 'approved' } : o));
    showNotif("Đã phê duyệt đơn hàng!");
  };

  const handleRejectOrder = (orderId: string) => {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: 'rejected' } : o));
    // Hoàn trả sao (Requirement 1.4.4.2)
    setCurrentUser({
        ...currentUser,
        wallet: { ...currentUser.wallet, starUsable: currentUser.wallet.starUsable + order.totalPrice }
    });
    showNotif("Đã từ chối đơn hàng. Số sao đã được hoàn trả.");
  };

  /* COMPONENTS: REACTION BAR (Requirement 2.1.3) */
  const renderReactions = (post: any) => (
    <div className="flex items-center gap-6 py-4">
        <div className="flex items-center gap-2 group/react relative">
            <div className="flex -space-x-2">
                {Object.entries(post.reactions).filter(([_, count]) => (count as number) > 0).map(([type, _], idx) => (
                    <div key={idx} className="w-6 h-6 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[10px] shadow-sm">
                        {type === 'LIKE' ? '👍' : type === 'HAHA' ? '😂' : type === 'SAD' ? '😢' : '❤️'}
                    </div>
                ))}
            </div>
            <span className="text-[12px] font-bold text-gray-400">
                {Object.values(post.reactions).reduce((a, b) => (a as number) + (b as number), 0)} cảm xúc
            </span>
            <div className="absolute bottom-full left-0 mb-3 hidden group-hover/react:flex bg-white shadow-2xl rounded-full px-5 py-2.5 gap-4 border border-gray-100 animate-in slide-in-from-bottom-2 duration-300 z-50">
                {['👍', '❤️', '😂', '😮', '😢'].map((emoji, i) => (
                    <button key={i} className="text-2xl hover:scale-125 transition-transform" onClick={() => handleLike(post.id)}>{emoji}</button>
                ))}
            </div>
        </div>
        <button className="flex items-center gap-2 text-[12px] font-bold text-gray-400 hover:text-primary-purple transition-colors">
            <span className="material-symbols-outlined text-lg">chat_bubble</span>
            {post.comments.length} bình luận
        </button>
        <button className="flex items-center gap-2 text-[12px] font-bold text-gray-400 hover:text-primary-purple transition-colors ml-auto">
            <span className="material-symbols-outlined text-lg">share</span>
            Chia sẻ
        </button>
    </div>
  );

  const renderCommentSection = (post: any) => (
    <div className="space-y-4 pt-4 border-t border-gray-50">
        <div className="space-y-4">
            {post.comments.map((comment: any) => (
               <div key={comment.id} className="flex gap-3 text-left animate-in slide-in-from-left-2 duration-300">
                   <img src={comment.avatar} className="w-8 h-8 rounded-full shadow-sm" alt="" />
                   <div className="bg-gray-50 px-4 py-3 rounded-2xl flex-1">
                       <div className="flex items-center justify-between mb-1">
                           <span className="text-[11px] font-black text-gray-900">{comment.user}</span>
                           <span className="text-[9px] text-gray-400 font-bold uppercase">{comment.time}</span>
                       </div>
                       <p className="text-[13px] text-gray-600 leading-relaxed font-medium">{comment.text}</p>
                   </div>
               </div>
            ))}
        </div>
        <div className="flex items-center gap-3 mt-4">
           <img src={currentUser.avatar} className="w-8 h-8 rounded-full shadow-md border-2 border-white" alt="" />
           <div className="flex-1 relative">
               <input 
                   type="text"
                   value={newComment[post.id] || ''}
                   onChange={(e) => setNewComment(prev => ({ ...prev, [post.id]: e.target.value }))}
                   onKeyDown={(e) => e.key === 'Enter' && handleAddComment(post.id)}
                   placeholder="Viết cảm nghĩ về lời khen này..."
                   className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-primary-purple/20 rounded-full px-5 py-2.5 text-[12px] transition-all outline-none pr-12 shadow-inner" 
               />
               <button 
                onClick={() => handleAddComment(post.id)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-primary-purple hover:bg-primary-purple/10 rounded-full"
               >
                 <span className="material-symbols-outlined text-lg">send</span>
               </button>
           </div>
        </div>
    </div>
  );

  /* RENDER HELPERS */
  const renderContent = (content: string, hashtags: string[], mentions: any[]) => {
    return (
        <div className="space-y-4">
            <p className="text-gray-700 font-medium leading-relaxed">
                {content}
            </p>
            <div className="flex flex-wrap gap-2">
                {mentions.map((m, idx) => (
                    <span key={`m-${idx}`} className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded cursor-pointer hover:bg-blue-100">{m.username}</span>
                ))}
                {hashtags.map((tag, idx) => (
                    <span key={`t-${idx}`} className="text-primary-purple font-black uppercase tracking-widest bg-primary-purple/5 px-3 py-1 rounded-full text-[10px]">#{tag}</span>
                ))}
            </div>
        </div>
    );
  };

  /* TEMPLATES (Requirement 2.1) */
  const renderPostV1 = (post: any) => (
    <div key={post.id} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex gap-6">
           <img src={post.author.avatar} className="w-14 h-14 rounded-full border-2 border-primary-purple/10" alt="" />
           <div className="flex-1 space-y-4">
               <div className="flex justify-between items-start">
                   <div className="text-left">
                       <div className="text-[15px] font-bold text-gray-900">{post.author.name} <span className="text-gray-400 font-normal mx-1">đã khen tặng</span> {post.target.name}</div>
                       <div className="text-[11px] text-gray-400 mt-1 flex items-center gap-2">
                           <span>{post.time}</span>
                           <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                           <span className="uppercase font-black text-[9px] tracking-widest text-primary-purple">{post.type}</span>
                       </div>
                   </div>
                   <div className="bg-orange-50 text-orange-600 px-4 py-2 rounded-2xl flex items-center gap-2 border border-orange-100">
                        <span className="material-symbols-outlined text-[18px] fill-1">stars</span>
                        <span className="font-black text-[16px]">+{post.stars}</span>
                   </div>
               </div>
               <div className="bg-gray-50/50 p-6 rounded-[2rem] text-left border border-gray-100/50">
                  {renderContent(post.content, post.hashtags, post.mentions)}
                  {post.attachments?.[0]?.type === 'IMAGE' && (
                    <div className="mt-4 rounded-2xl overflow-hidden border border-gray-100">
                        <img src={post.attachments[0].url} className="w-full object-cover max-h-80" alt="" />
                    </div>
                  )}
               </div>
           </div>
        </div>
        <div className="px-2">{renderReactions(post)}{renderCommentSection(post)}</div>
    </div>
  );

  const renderPostV2 = (post: any) => renderPostV1(post);
  const renderPostV3 = (post: any) => renderPostV1(post);
  const renderPostV4 = (post: any) => renderPostV1(post);
  const renderPostV5 = (post: any) => renderPostV1(post);
  const renderPostV6 = (post: any) => renderPostV1(post);
  const renderPostV7 = (post: any) => renderPostV1(post);

  /* REDESIGN V8: LIGHT MODE CYBER (Standard professional white card - Conversation 13089eff) */
  const renderPostV8 = (post: any) => (
    <div key={post.id} className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 relative group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-purple/5 blur-[80px] -mr-32 -mt-32"></div>
        <div className="relative z-10 space-y-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img src={post.author.avatar} className="w-14 h-14 rounded-full border-2 border-white shadow-lg" alt="" />
                    <div className="text-left">
                        <h4 className="text-gray-900 font-black text-[16px] mb-1">{post.author.name}</h4>
                        <div className="flex items-center gap-2">
                            <span className="text-primary-purple/60 text-[10px] uppercase font-black tracking-widest">{post.time}</span>
                            <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                            <div className="flex items-center gap-1 text-gray-400 text-[10px] font-bold">
                                <span className="material-symbols-outlined text-[14px]">public</span>
                                {post.visibility}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-md shadow-inner border border-gray-100 px-5 py-2.5 rounded-2xl flex items-center gap-3">
                    <span className="material-symbols-outlined text-orange-400 text-lg fill-1">stars</span>
                    <span className="text-gray-900 font-black text-lg">+{post.stars}</span>
                </div>
            </div>

            <div className="space-y-6 text-left">
                <div className="flex items-center gap-6 p-4 bg-gray-50/50 rounded-3xl border border-gray-100/50">
                    <img src={post.target.avatar} className="w-20 h-20 rounded-2xl border-2 border-white shadow-md transform -rotate-3 group-hover:rotate-0 transition-transform" alt="" />
                    <div className="space-y-1">
                        <div className="text-[10px] font-black text-primary-purple uppercase tracking-[0.2em]">Khen tặng đồng nghiệp</div>
                        <h2 className="text-[24px] font-black text-gray-900 leading-none uppercase tracking-tighter">
                            {post.target.name}
                        </h2>
                    </div>
                </div>

                <div className="p-8 bg-white rounded-[2rem] border border-gray-50 shadow-inner group-hover:shadow-sm transition-all">
                    {renderContent(post.content, post.hashtags, post.mentions)}
                    {post.attachments?.[0]?.type === 'IMAGE' && (
                        <div className="mt-6 rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                            <img src={post.attachments[0].url} className="w-full object-cover max-h-96" alt="" />
                        </div>
                    )}
                </div>
            </div>
            
            <div className="pt-2">
                {renderReactions(post)}
                {renderCommentSection(post)}
            </div>
        </div>
    </div>
  );

  const renderPostV9 = (post: any) => (
    <div key={post.id} className="bg-gradient-to-b from-yellow-50 to-white max-w-xl mx-auto rounded-[3rem] p-10 border border-yellow-200/50 shadow-2xl mb-10 text-left">
        <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative">
                <div className="w-32 h-32 bg-white rounded-full p-2 shadow-2xl relative z-10 border-4 border-yellow-400">
                    <img src={post.target.avatar} className="w-full h-full rounded-full object-cover" alt="" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-white w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                    <span className="material-symbols-outlined text-[28px] fill-1">military_tech</span>
                </div>
            </div>
            <div className="space-y-2">
                <h3 className="text-[12px] font-black text-yellow-600 uppercase tracking-widest">Achievement Unlocked</h3>
                <h2 className="text-[32px] font-black text-gray-900 uppercase tracking-tighter">{post.target.name}</h2>
            </div>
        </div>
        <div className="mt-10 bg-white p-8 rounded-[2rem] border border-yellow-100 relative group">
            {renderContent(post.content, post.hashtags, post.mentions)}
            <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={post.author.avatar} className="w-8 h-8 rounded-full" alt="" />
                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{post.author.name}</span>
                </div>
                <div className="bg-yellow-400 text-white px-4 py-2 rounded-2xl font-black shadow-lg">+{post.stars} ✨</div>
            </div>
        </div>
        <div className="mt-8">{renderReactions(post)}{renderCommentSection(post)}</div>
    </div>
  );

  const renderPostV10 = (post: any) => (
    <div key={post.id} className="bg-blue-600 rounded-[3rem] p-12 max-w-xl mx-auto mb-10 shadow-2xl overflow-hidden group relative text-white">
        <div className="relative z-10 flex flex-col items-start text-left space-y-8">
            <div className="flex items-center gap-4 bg-white/20 px-6 py-2 rounded-full border border-white/10">
                <img src={post.author.avatar} className="w-8 h-8 rounded-full" alt="" />
                <span className="text-white font-black text-[12px] uppercase">Vinh danh bởi {post.author.name}</span>
            </div>
            <div className="space-y-4">
                <h1 className="text-[64px] font-black text-white leading-none uppercase tracking-tighter">{post.target.name}</h1>
                <div className="w-20 h-4 bg-white rounded-full"></div>
            </div>
            <div className="text-[22px] font-black italic">
                {renderContent(post.content, post.hashtags, post.mentions)}
            </div>
            <div className="flex items-center justify-between w-full pt-8">
                {renderReactions(post)}
                <div className="bg-white text-blue-600 px-8 py-4 rounded-[2rem] font-black text-[24px]">+{post.stars} ST</div>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10">
            {renderCommentSection(post)}
        </div>
    </div>
  );

  return (
    <div className="flex gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 relative h-full">
      {notification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-top-10 fade-in duration-500">
           <div className="bg-gray-800 text-white px-8 py-4 rounded-[1.5rem] shadow-2xl flex items-center gap-4 border border-white/10 shadow-purple-500/20">
              <span className="material-symbols-outlined text-primary-purple animate-pulse">notifications_active</span>
              <span className="text-sm font-bold">{notification}</span>
           </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 space-y-6">
        <div className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary-purple/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
           <div className="relative z-10 text-left text-gray-800">
              <h1 className="text-[2.8rem] font-black leading-tight uppercase tracking-tight">BẢNG THEO DÕI CẢM XÚC</h1>
              <div className="flex items-center gap-3 mt-2">
                <div className="h-1 w-20 bg-primary-purple rounded-full"></div>
                <p className="text-[12px] font-black text-gray-400 tracking-[0.3em] uppercase">SENTIMENT ANALYSIS DASHBOARD</p>
              </div>
           </div>
        </div>

        <div className="flex bg-white p-2 rounded-[2.5rem] shadow-sm border border-gray-100 items-center overflow-x-auto gap-2">
            {['mood', 'social', 'gifts'].map((tab) => (
                <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 flex items-center justify-center gap-3 py-5 rounded-[2rem] transition-all relative overflow-hidden group ${activeTab === tab ? 'bg-primary-purple text-white font-black shadow-xl shadow-purple-500/20' : 'text-gray-400 hover:bg-gray-50'}`}
                >
                    <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">{tab === 'mood' ? 'sentiment_satisfied' : tab === 'social' ? 'forum' : 'redeem'}</span>
                    <span className="text-[14px] uppercase tracking-widest">{tab === 'mood' ? 'Chấm cảm xúc' : tab === 'social' ? 'Mạng xã hội AHV' : 'Đổi quà'}</span>
                </button>
            ))}
        </div>

        {activeTab === 'social' && (
          <div className="space-y-8 animate-in fade-in duration-500 pb-20">
            <div className="flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-xl z-[40] py-6 px-4 rounded-3xl border border-white/50 shadow-sm">
                <div className="flex items-center gap-2 bg-gray-100/50 p-2 rounded-[1.5rem] border border-gray-200/50 shadow-inner max-w-[70%] overflow-x-auto no-scrollbar">
                    {['v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8', 'v9', 'v10'].map(tpl => (
                        <button 
                            key={tpl}
                            onClick={() => setSelectedTemplate(tpl)}
                            className={`px-6 h-11 shrink-0 flex items-center justify-center rounded-xl text-[12px] font-black transition-all ${selectedTemplate === tpl ? 'bg-white text-primary-purple shadow-md border border-gray-100' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            MẪU {tpl.replace('v', '')}
                        </button>
                    ))}
                </div>
                <button onClick={() => setShowPraiseModal(true)} className="bg-gradient-to-r from-primary-purple to-violet-600 text-white px-8 py-4 rounded-[1.5rem] font-black text-[13px] shadow-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest">
                    <span className="material-symbols-outlined text-[22px]">add_reaction</span>
                    Khen tặng
                </button>
            </div>
            
            <div className="grid gap-12 max-w-5xl mx-auto px-4">
                {posts.map((post) => {
                    if (selectedTemplate === 'v1') return renderPostV1(post);
                    if (selectedTemplate === 'v2') return renderPostV2(post);
                    if (selectedTemplate === 'v3') return renderPostV3(post);
                    if (selectedTemplate === 'v4') return renderPostV4(post);
                    if (selectedTemplate === 'v5') return renderPostV5(post);
                    if (selectedTemplate === 'v6') return renderPostV6(post);
                    if (selectedTemplate === 'v7') return renderPostV7(post);
                    if (selectedTemplate === 'v8') return renderPostV8(post);
                    if (selectedTemplate === 'v9') return renderPostV9(post);
                    return renderPostV10(post);
                })}
            </div>
          </div>
        )}

        {/* ... Mood & Gifts View ... (Keep current content) */}
        {activeTab === 'mood' && (
           <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm text-gray-800 text-left animate-in fade-in duration-500">
                <table className="w-full">
                <thead><tr className="text-left"><th className="pb-10 text-[11px] font-black text-gray-300 uppercase tracking-[0.3em] px-6">NHÂN VIÊN</th>{['T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map((day, idx) => <th key={idx} className="pb-10 text-center text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">{day}</th>)}</tr></thead>
                <tbody className="space-y-4">{employees.map((emp) => <tr key={emp.id} className="group hover:bg-gray-50/50 transition-colors"><td className="py-5 px-6"><div className="flex items-center gap-5"><img src={emp.avatar} className="w-12 h-12 rounded-full border-2 shadow-md" alt="" /><div><div className="text-[14px] font-black text-gray-800">{emp.name}</div><div className="text-[10px] text-gray-400 font-bold uppercase">{emp.id}</div></div></div></td>{emp.sentiments.map((mood, idx) => <td key={idx} className="py-5 text-center"><div className="w-12 h-12 mx-auto rounded-2xl bg-gray-50 flex items-center justify-center transition-all group-hover:bg-white">{mood ? <span className={`material-symbols-outlined text-[28px] ${mood === 'sentiment_very_satisfied' ? 'text-purple-500' : 'text-orange-400'}`}>{mood}</span> : <div className="w-6 h-6 border-b-2 border-gray-100"></div>}</div></td>)}</tr>)}</tbody>
                </table>
           </div>
        )}

        {activeTab === 'gifts' && (
            <div className="space-y-10 animate-in fade-in duration-500 pb-20">
                {/* Enhanced Wallet (Requirement 1.3) */}
                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-primary-purple to-violet-700 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                        <div className="relative z-10 space-y-4 text-left">
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Ví Niko: Tích lũy</div>
                            <div className="flex items-baseline gap-2">
                                <div className="text-4xl font-black">{currentUser.wallet.starTotal}</div>
                                <div className="text-sm font-bold opacity-60">sao</div>
                            </div>
                            <p className="text-[11px] opacity-40 leading-relaxed italic">Tổng số sao bạn đã nhận được từ trước đến nay.</p>
                        </div>
                        <span className="material-symbols-outlined text-[80px] opacity-10 absolute -right-4 -bottom-4">auto_awesome</span>
                    </div>
                    <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm relative overflow-hidden group">
                        <div className="relative z-10 space-y-4 text-left">
                            <div className="text-[10px] font-black text-primary-purple uppercase tracking-[0.2em]">Ví Niko: Khả dụng</div>
                            <div className="flex items-baseline gap-2">
                                <div className="text-4xl font-black text-gray-900">{currentUser.wallet.starUsable}</div>
                                <div className="text-sm font-bold text-gray-400">sao</div>
                            </div>
                            <p className="text-[11px] text-gray-400 leading-relaxed">Số sao bạn có thể dùng để đổi quà trong kho.</p>
                        </div>
                        <span className="material-symbols-outlined text-[80px] text-gray-50 absolute -right-4 -bottom-4">redeem</span>
                    </div>
                    <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 flex flex-col justify-center gap-4 text-left">
                        <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-gray-100">
                             <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Đang chờ duyệt</span>
                             <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-xs font-black">{orders.filter(o => o.status === 'pending').length} đơn</span>
                        </div>
                        <button 
                            onClick={() => setIsAdminView(!isAdminView)}
                            className={`w-full py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${isAdminView ? 'bg-primary-purple text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                        >
                            {isAdminView ? 'Chế độ Admin: ON' : 'Chuyển sang Admin'}
                        </button>
                    </div>
                </div>

                <div className="flex gap-10">
                    {/* Gift List (Requirement 1.4.1) */}
                    <div className="flex-1 space-y-8">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                            <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">Kho quà tặng</h3>
                            <div className="flex gap-2">
                                {['Tất cả', 'Voucher', 'Đồ dùng', 'Thời trang'].map(cat => (
                                    <button key={cat} className="px-5 py-2 rounded-xl text-[11px] font-bold bg-gray-50 text-gray-500 hover:bg-gray-100">{cat}</button>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {nikoGifts.map((gift) => (
                                <div key={gift.id} className={`bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden group hover:shadow-2xl transition-all relative ${gift.status === 'out_of_stock' ? 'opacity-60 grayscale' : ''}`}>
                                    <div className="h-60 overflow-hidden relative">
                                        <img src={gift.image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                            <p className="text-white text-[12px] font-medium leading-relaxed">{gift.description}</p>
                                        </div>
                                        <div className="absolute top-4 right-4 flex gap-2">
                                            <div className="bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                                                Giới hạn: {gift.userLimit} / user
                                            </div>
                                        </div>
                                        {gift.status === 'out_of_stock' && (
                                            <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
                                                <span className="bg-white text-gray-900 px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.2em]">Hết hàng</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-8 flex items-center justify-between text-left">
                                        <div>
                                            <h4 className="font-black text-[16px] text-gray-900 mb-1">{gift.name}</h4>
                                            <div className="flex items-center gap-2">
                                                <span className="text-orange-500 font-black text-lg">{gift.price}</span>
                                                <span className="material-symbols-outlined text-orange-400 text-sm fill-1">stars</span>
                                            </div>
                                        </div>
                                        <button 
                                            disabled={gift.status === 'out_of_stock'}
                                            onClick={() => addToCart(gift)} 
                                            className="bg-gray-900 text-white w-14 h-14 rounded-[1.5rem] flex items-center justify-center hover:bg-primary-purple transition-all hover:rotate-6 active:scale-95"
                                        >
                                            <span className="material-symbols-outlined">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cart & Orders Sidebar (Requirement 1.4.2) */}
                    <div className="w-[400px] space-y-8">
                        {/* Cart */}
                        <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl text-left flex flex-col min-h-[400px]">
                            <h3 className="text-[18px] font-black mb-10 uppercase tracking-widest flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary-purple">shopping_bag</span>Giỏ hàng
                            </h3>
                            <div className="flex-1 space-y-6 overflow-y-auto max-h-[300px] px-2">
                                {cart.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center py-10 text-gray-300">
                                        <span className="material-symbols-outlined text-[60px] mb-4">production_quantity_limits</span>
                                        <p className="text-[11px] font-black uppercase tracking-widest text-center">Giỏ hàng trống</p>
                                    </div>
                                ) : (
                                    cart.map(item => (
                                        <div key={item.id} className="flex gap-4 items-center animate-in slide-in-from-right-4 duration-300">
                                            <img src={item.image} className="w-16 h-16 rounded-2xl object-cover shadow-sm" alt="" />
                                            <div className="flex-1">
                                                <div className="text-[13px] font-bold text-gray-900">{item.name}</div>
                                                <div className="text-[11px] text-orange-500 font-black">{item.price} ⭐ x {item.quantity}</div>
                                            </div>
                                            <button 
                                                onClick={() => setCart(cart.filter(i => i.id !== item.id))}
                                                className="text-gray-300 hover:text-red-400 transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-sm">close</span>
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>
                            
                            <div className="pt-8 border-t border-gray-50 mt-auto">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Tổng cộng</span>
                                    <div className="text-2xl font-black text-gray-900">
                                        {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)} ⭐
                                    </div>
                                </div>
                                <button 
                                    disabled={cart.length === 0}
                                    onClick={handleCheckout}
                                    className="w-full bg-gray-900 text-white font-black py-5 rounded-2xl text-[13px] uppercase tracking-widest hover:bg-primary-purple transition-all disabled:opacity-20"
                                >
                                    Đổi quà ngay
                                </button>
                            </div>
                        </div>

                        {/* Order History (Requirement 1.4.3) */}
                        <div className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100 text-left">
                            <h3 className="text-[14px] font-black mb-8 uppercase tracking-widest flex items-center gap-3">
                                <span className="material-symbols-outlined text-gray-400 text-sm">history</span>Lịch sử đổi quà
                            </h3>
                            <div className="space-y-4">
                                {orders.map(order => (
                                    <div key={order.id} className="bg-white p-5 rounded-3xl border border-gray-100 space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="text-[12px] font-black text-gray-900">{order.id}</div>
                                                <div className="text-[10px] text-gray-400 font-medium">{order.time}</div>
                                            </div>
                                            <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
                                                order.status === 'approved' ? 'bg-green-100 text-green-600' : 
                                                order.status === 'rejected' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                                            }`}>
                                                {order.status}
                                            </span>
                                        </div>
                                        <div className="text-[11px] text-gray-600">
                                            {order.items.map((it: any) => it.name).join(', ')}
                                        </div>
                                        <div className="flex justify-between items-center pt-2">
                                            <div className="text-[13px] font-black">{order.totalPrice} ⭐</div>
                                            {isAdminView && order.status === 'pending' && (
                                                <div className="flex gap-2">
                                                    <button onClick={() => handleRejectOrder(order.id)} className="bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">Huỷ</button>
                                                    <button onClick={() => handleApproveOrder(order.id)} className="bg-green-50 text-green-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-green-600 hover:text-white transition-all">Duyệt</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>

      <div className="w-[420px] space-y-8">
         <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-xl text-gray-800 text-left">
            <h3 className="text-[18px] font-black mb-12 uppercase tracking-widest flex items-center gap-2"><span className="material-symbols-outlined text-primary-purple">auto_graph</span>Chỉ số hạnh phúc</h3>
            <div className="flex flex-col items-center mb-16"><div className="w-44 h-44 bg-[#f4f3ff] rounded-[3.5rem] flex items-center justify-center mb-12 shadow-inner group relative"><div className="absolute inset-0 border-4 border-dashed border-primary-purple/10 rounded-[3.5rem] animate-spin-slow"></div><span className="material-symbols-outlined text-[80px] text-primary-purple group-hover:scale-110 transition-transform">sentiment_very_satisfied</span></div><div className="text-center font-black text-[3.5rem]">{4.7} <span className="text-gray-200 text-3xl">/ 5</span></div></div>
            <div className="space-y-6">{[{ label: 'TUYỆT VỜI', color: 'bg-pink-500', percent: '80%' }, { label: 'VUI VẺ', color: 'bg-teal-400', percent: '10%' }, { label: 'BÌNH THƯỜNG', color: 'bg-yellow-400', percent: '10%' }].map((item, idx) => <div key={idx} className="space-y-3"><div className="flex justify-between text-[11px] text-gray-400 font-black uppercase tracking-widest"><span>{item.label}</span><span>{item.percent}</span></div><div className="h-2 w-full bg-gray-50 rounded-full"><div className={`h-full ${item.color} rounded-full`} style={{ width: item.percent }}></div></div></div>)}</div>
         </div>
      </div>

      {/* Praise Modal (Requirement 1.2) */}
      {showPraiseModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-xl" onClick={() => setShowPraiseModal(false)}></div>
          <div className="relative bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 flex flex-col max-h-[95vh]">
            <div className="p-10 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <div className="text-left">
                    <h3 className="text-2xl font-black text-gray-900 uppercase">Khen tặng đồng nghiệp</h3>
                    <p className="text-[12px] text-gray-400 font-bold uppercase tracking-widest mt-1">Ghi nhận nỗ lực & Chia sẻ niềm vui</p>
                </div>
                <div className="flex gap-10">
                    <div className="text-right">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Hạn mức tháng này</div>
                        <div className="text-2xl font-black text-indigo-600">
                            {currentUser.giftableBalance - currentUser.giftableUsed} <span className="text-sm opacity-40">/ {currentUser.giftableBalance}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-10 flex gap-10">
                <div className="flex-1 space-y-10">
                    {/* Target Selection (Requirement: Dropdown by Dept) */}
                    <div className="text-left space-y-6">
                        <label className="text-[11px] font-black text-gray-400 uppercase block tracking-widest">1. Chọn đồng nghiệp</label>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phòng ban</span>
                                <div className="relative group/sel">
                                    <select 
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary-purple/20 rounded-2xl px-6 py-4 text-[14px] font-bold appearance-none outline-none transition-all cursor-pointer hover:bg-gray-100"
                                        onChange={(e) => {
                                            setSelectedDept(e.target.value);
                                            setSelectedTarget(null);
                                        }}
                                        value={selectedDept || ''}
                                    >
                                        <option value="" disabled>Chọn phòng ban...</option>
                                        {departments.map(dept => (
                                            <option key={dept.id} value={dept.id}>{dept.name}</option>
                                        ))}
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover/sel:text-primary-purple pointer-events-none transition-colors">keyboard_arrow_down</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Nhân viên</span>
                                <div className="relative group/sel">
                                    <select 
                                        disabled={!selectedDept}
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary-purple/20 rounded-2xl px-12 py-4 text-[14px] font-bold appearance-none outline-none transition-all cursor-pointer hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                        onChange={(e) => setSelectedTarget(e.target.value)}
                                        value={selectedTarget || ''}
                                    >
                                        <option value="" disabled>Chọn đồng nghiệp...</option>
                                        {employees.filter(emp => emp.dept === selectedDept).map(emp => (
                                            <option key={emp.id} value={emp.id}>{emp.name} ({emp.id})</option>
                                        ))}
                                    </select>
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary-purple text-lg pointer-events-none">person_search</span>
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover/sel:text-primary-purple pointer-events-none transition-colors">keyboard_arrow_down</span>
                                </div>
                            </div>
                        </div>

                        {selectedTarget && (
                            <div className="flex items-center gap-4 p-4 bg-primary-purple/5 rounded-2xl border border-primary-purple/10 animate-in slide-in-from-top-2 duration-300">
                                <img 
                                    src={employees.find(e => e.id === selectedTarget)?.avatar} 
                                    className="w-12 h-12 rounded-full border-2 border-white shadow-sm" 
                                    alt="" 
                                />
                                <div className="text-left">
                                    <div className="text-[14px] font-black text-gray-900">{employees.find(e => e.id === selectedTarget)?.name}</div>
                                    <div className="text-[10px] font-bold text-primary-purple uppercase tracking-widest">{selectedDept} • {selectedTarget}</div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sectors & Criteria */}
                    <div className="text-left">
                        <label className="text-[11px] font-black text-gray-400 uppercase block mb-4 tracking-widest">2. Lĩnh vực & Tiêu chí (Requirement 1.2.2)</label>
                        <div className="grid grid-cols-3 gap-6">
                            {sectors.map(s => (
                                <div key={s.id} className="space-y-4">
                                    <div className="flex items-center gap-2 text-primary-purple">
                                        <span className="material-symbols-outlined text-lg">{s.icon}</span>
                                        <span className="text-[13px] font-black uppercase tracking-wider">{s.name}</span>
                                    </div>
                                    <div className="space-y-2">
                                        {s.criteria.map(c => (
                                            <button 
                                                key={c.id} 
                                                onClick={() => toggleCriterion(c)}
                                                className={`w-full text-left p-4 rounded-2xl border-2 transition-all group ${selectedCriteria.find(sc => sc.id === c.id) ? 'border-primary-purple bg-primary-purple/5 shadow-sm' : 'border-gray-50 hover:border-gray-100 bg-gray-50/50'}`}
                                            >
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className={`text-[12px] font-bold ${selectedCriteria.find(sc => sc.id === c.id) ? 'text-primary-purple' : 'text-gray-600'}`}>{c.name}</span>
                                                    {selectedCriteria.find(sc => sc.id === c.id) && <span className="material-symbols-outlined text-[16px] text-primary-purple">check_circle</span>}
                                                </div>
                                                <div className="text-[11px] font-black text-orange-500">+{c.stars} ⭐</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-left">
                        <label className="text-[11px] font-black text-gray-400 uppercase block mb-4 tracking-widest">3. Lời nhắn chân thành</label>
                        <textarea 
                            value={praiseContent}
                            onChange={(e) => setPraiseContent(e.target.value)}
                            className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-primary-purple/20 rounded-[2rem] p-8 text-[15px] h-40 outline-none transition-all text-gray-800 font-medium shadow-inner" 
                            placeholder="Tại sao bạn muốn khen tặng đồng nghiệp này? Chia sẻ câu chuyện của họ..."
                        ></textarea>
                    </div>
                </div>

                {/* Summary Sidebar */}
                <div className="w-80 space-y-6">
                   <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white space-y-8 sticky top-0 shadow-2xl">
                        <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Tổng kết khen tặng</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm opacity-60"><span>Tiêu chí đã chọn</span><span>{selectedCriteria.length}</span></div>
                            <div className="flex justify-between items-end">
                                <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Tổng sao thưởng</span>
                                <div className="text-4xl font-black text-orange-400">{totalPraiseStars}</div>
                            </div>
                        </div>
                        
                        <div className="h-[1px] bg-white/10 w-full"></div>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                                <span>Hạn mức sau khi tặng</span>
                                <span className={currentUser.giftableBalance - currentUser.giftableUsed - totalPraiseStars < 0 ? 'text-red-400' : 'text-green-400'}>
                                    {currentUser.giftableBalance - currentUser.giftableUsed - totalPraiseStars}
                                </span>
                            </div>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full transition-all duration-500 ${currentUser.giftableBalance - currentUser.giftableUsed - totalPraiseStars < 0 ? 'bg-red-400' : 'bg-primary-purple'}`} 
                                    style={{ width: `${Math.min(100, (totalPraiseStars / (currentUser.giftableBalance - currentUser.giftableUsed)) * 100)}%` }}
                                ></div>
                            </div>
                            {currentUser.giftableBalance - currentUser.giftableUsed - totalPraiseStars < 0 && (
                                <p className="text-[10px] text-red-300 font-bold leading-relaxed italic">Vượt quá hạn mức 500 sao tặng trong tháng! (Requirement 1.2.4)</p>
                            )}
                        </div>

                        <button 
                            disabled={currentUser.giftableBalance - currentUser.giftableUsed - totalPraiseStars < 0 || totalPraiseStars === 0 || !selectedTarget}
                            onClick={handlePostPraise}
                            className="w-full bg-white text-gray-900 font-black py-5 rounded-2xl text-[13px] uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-30 disabled:hover:scale-100 shadow-xl"
                        >
                            Đăng bài vinh danh
                        </button>
                   </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Niko;
