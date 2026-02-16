
import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Lock, 
  MessageCircle, 
  PhoneCall, 
  ChevronLeft, 
  Zap,
  Award,
  Layers,
  Fingerprint,
  Send,
  Unlock,
  CheckCircle2,
  MapPin,
  Clock,
  MonitorSmartphone,
  Facebook,
  Instagram,
  Mail,
  Music,
  Camera,
  Settings,
  AppWindow,
  Wifi,
  Battery,
  Signal,
  Compass,
  LayoutGrid,
  Video,
  StickyNote,
  Sparkles,
  Search,
  Bot,
  UserRound,
  Info
} from 'lucide-react';
import { geminiService } from './geminiService';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [adviceRequest, setAdviceRequest] = useState('');
  const [adviceResponse, setAdviceResponse] = useState('');
  const [loadingAdvice, setLoadingAdvice] = useState(false);

  const phoneNumber = "07700583840";
  const waLink = `https://wa.me/964${phoneNumber.substring(1)}`;
  const fbLink = "https://www.facebook.com/share/1Abg8MoWEe/";
  const tgLink = "https://t.me/iraq20252";
  const mapsLink = "https://maps.app.goo.gl/iLDUJYHYAXm9PC_FA";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Honor X9b Server',
      desc: 'حذف حسابات Honor X9b مضمون 100%.',
      icon: <Layers className="w-8 h-8 text-[#d4af37]" />,
      color: 'border-[#d4af37]/20',
      msg: 'أريد استفسار عن حذف حساب Honor X9b'
    },
    {
      title: 'خدمات FRP',
      desc: 'تخطى حسابات جوجل لكافة أجهزة الأندرويد.',
      icon: <Fingerprint className="w-8 h-8 text-[#00f2ff]" />,
      color: 'border-[#00f2ff]/20',
      msg: 'أريد استفسار عن تخطي حساب جوجل FRP'
    },
    {
      title: 'تخطي الأيكلود الشامل',
      desc: 'دعم من iPhone 6 إلى iPhone 17 Pro Max.',
      icon: <Lock className="w-8 h-8 text-[#556b2f]" />,
      color: 'border-[#556b2f]/20',
      msg: 'أريد استفسار عن تخطي الأيكلود لجميع الموديلات'
    },
    {
      title: 'شاشات الوكالة',
      desc: 'تبديل شاشات أصلية مع ضمان المصنع.',
      icon: <MonitorSmartphone className="w-8 h-8 text-white" />,
      color: 'border-white/10',
      msg: 'أريد استفسار عن تبديل شاشة وكالة أصلية'
    }
  ];

  const handleGetAdvice = async () => {
    if (!adviceRequest) return;
    setLoadingAdvice(true);
    setAdviceResponse('');
    try {
      const result = await geminiService.getRepairAdvice(adviceRequest);
      setAdviceResponse(result || "");
    } catch (e) {
      setAdviceResponse("تفضل بزيارتنا في بعقوبة حي المعلمين وسنجد الحل المناسب لهاتفك.");
    }
    setLoadingAdvice(false);
  };

  return (
    <div className="min-h-screen bg-[#050b1a] overflow-x-hidden text-slate-200 selection:bg-[#00f2ff] selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-2 bg-[#050b1a]/98 backdrop-blur-md border-b border-[#d4af37]/20 shadow-lg' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-[#00f2ff] via-[#d4af37] to-[#556b2f] p-1.5 rounded-lg shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              <Smartphone className="text-slate-900 w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-white leading-none">كلاسك <span className="text-[#00f2ff]">فون</span></h1>
              <span className="text-[7px] text-[#d4af37] font-black uppercase block tracking-widest mt-0.5">DIALA - BAQUBAH</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-5 py-2 rounded-xl font-black text-xs hover:brightness-110 shadow-lg flex items-center gap-2 transition-all active:scale-95">
              <MessageCircle className="w-4 h-4" /> واتساب
            </a>
            <a href={fbLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#00f2ff] to-[#d4af37] text-slate-900 px-5 py-2 rounded-xl font-black text-xs hover:brightness-110 shadow-lg transition-all active:scale-95">
              دردشة FB
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-24 pb-12 px-4 relative overflow-hidden">
        <div className="container mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-premium rounded-full border border-[#d4af37]/40 mb-6 shadow-2xl animate-float">
            <Award className="w-5 h-5 text-[#d4af37]" />
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.3em]">بإدارة المبدع: أحمد النعيمي</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black leading-tight text-white mb-4">
            تخطي الأيكلود <span className="text-[#00f2ff]">الشامل</span> <br />
            <span className="text-[#d4af37] italic text-2xl md:text-4xl block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#00f2ff]">من iPhone 6 إلى iPhone 17 Pro Max</span>
          </h2>
          
          <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-[550px] mb-8">
            لا داعي للقلق بعد الآن! نحن نقدم الحلول النهائية لفك قفل التنشيط لكافة موديلات آبل بأساليب مضمونة، مع دعم كامل لسيرفرات <span className="text-white">Honor</span> وتخطي <span className="text-[#00f2ff]">FRP</span>.
          </p>

          <div className="relative mb-12 scale-100 w-full max-w-xl mx-auto">
             <div className="absolute -inset-24 bg-[#00f2ff]/10 blur-[120px] rounded-full opacity-50"></div>
             <div className="relative glass-premium p-8 rounded-[3.5rem] border-[#00f2ff]/40 shadow-[0_0_100px_rgba(0,242,255,0.25)]">
                
                <div className="flex items-center justify-between gap-10 relative">
                  {/* Locked Phone (Activation Lock) */}
                  <div className="flex-1 flex flex-col items-center gap-5">
                    <div className="relative w-44 h-80 bg-[#1c1c1e] rounded-[3rem] border-[4px] border-slate-700 shadow-2xl overflow-hidden ring-1 ring-slate-800">
                       <div className="absolute inset-[4px] rounded-[2.8rem] overflow-hidden bg-white">
                          <div className="absolute top-1 inset-x-0 flex justify-center z-40">
                              <div className="w-16 h-4 bg-black rounded-full"></div>
                          </div>
                          
                          <div className="h-full w-full flex flex-col items-center p-6 pt-12 text-slate-900">
                              <div className="mb-4">
                                <UserRound className="w-12 h-12 text-[#007aff]" />
                              </div>
                              <h3 className="text-xl font-black mb-2 tracking-tight">iPhone</h3>
                              <h4 className="text-base font-bold mb-3">مقيد بالمالك</h4>
                              <div className="text-[10px] text-slate-500 text-center leading-relaxed font-medium mb-6">
                                يرتبط هذا الـ iPhone بـ Apple ID. أدخل الـ Apple ID وكلمة السر اللذين تم استخدامهما لإعداد هذا الـ iPhone.
                              </div>
                              
                              <div className="w-full space-y-4">
                                <div className="border-b border-slate-200 py-2">
                                  <div className="text-[10px] text-slate-400 font-bold mb-1">Apple ID</div>
                                  <div className="text-xs text-slate-300">k•••••@icloud.com</div>
                                </div>
                                <div className="border-b border-slate-200 py-2">
                                  <div className="text-[10px] text-slate-400 font-bold mb-1">Password</div>
                                </div>
                              </div>
                              
                              <div className="mt-auto w-full">
                                <div className="text-[#007aff] text-[10px] font-bold text-center mb-4">فتح القفل برمز الدخول؟</div>
                                <div className="h-0.5 w-1/3 bg-slate-200 mx-auto rounded-full"></div>
                              </div>
                          </div>
                       </div>
                    </div>
                    <div className="bg-red-500/20 px-5 py-1.5 rounded-full border border-red-500/30">
                       <span className="text-red-500 text-[10px] font-black uppercase tracking-widest">قبل التخطي</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-gradient-to-br from-[#00f2ff] to-[#d4af37] p-5 rounded-full shadow-[0_0_40px_rgba(0,242,255,0.8)] border-2 border-white animate-pulse scale-110">
                       <Sparkles className="w-10 h-10 text-slate-900 fill-slate-900" />
                    </div>
                  </div>

                  {/* Unlocked Phone (iOS Home Screen) */}
                  <div className="flex-1 flex flex-col items-center gap-5">
                    <div className="relative w-44 h-80 bg-slate-800 rounded-[3rem] border-[4px] border-[#00f2ff] shadow-[0_0_50px_rgba(0,242,255,0.5)] overflow-hidden ring-1 ring-[#00f2ff]/40">
                       <div className="absolute inset-0 bg-gradient-to-br from-[#00f2ff]/60 via-indigo-600/50 to-black z-0"></div>
                       <div className="absolute inset-[4px] rounded-[2.8rem] overflow-hidden z-10">
                          {/* Top Bar Indicators */}
                          <div className="absolute top-2 inset-x-6 flex justify-between items-center z-50">
                             <span className="text-[8px] text-white font-bold">9:41</span>
                             <div className="flex gap-1 items-center">
                                <Signal className="w-2.5 h-2.5 text-white" />
                                <Wifi className="w-2.5 h-2.5 text-white" />
                                <Battery className="w-3 h-3 text-white" />
                             </div>
                          </div>

                          {/* FaceID/Success Overlay */}
                          <div className="absolute top-12 inset-x-3 z-40">
                             <div className="bg-white/95 backdrop-blur-md py-2 px-3 rounded-2xl border border-[#00f2ff]/50 shadow-2xl flex items-center justify-center gap-2 animate-bounce">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span className="text-[8px] text-slate-900 font-black">تم التخطي بنجاح!</span>
                             </div>
                          </div>
                          
                          {/* App Grid */}
                          <div className="relative p-5 pt-20 grid grid-cols-4 gap-y-6 gap-x-3">
                             {[
                               { name: 'هاتف', icon: <PhoneCall className="w-6 h-6 text-white" />, color: 'bg-gradient-to-b from-[#65d66e] to-[#4cd964]' },
                               { name: 'صور', icon: <LayoutGrid className="w-6 h-6 text-orange-400" />, color: 'bg-white' },
                               { name: 'رسائل', icon: <MessageCircle className="w-6 h-6 text-white" />, color: 'bg-gradient-to-b from-[#65d66e] to-[#4cd964]' },
                               { name: 'خرائط', icon: <MapPin className="w-6 h-6 text-white" />, color: 'bg-gradient-to-b from-[#5ac8fa] to-[#007aff]' },
                               { name: 'بريد', icon: <Mail className="w-6 h-6 text-white" />, color: 'bg-gradient-to-b from-[#34aadc] to-[#007aff]' },
                               { name: 'موسيقى', icon: <Music className="w-6 h-6 text-white" />, color: 'bg-gradient-to-b from-[#ff5e7d] to-[#ff2d55]' },
                               { name: 'كاميرا', icon: <Camera className="w-6 h-6 text-white" />, color: 'bg-gradient-to-b from-[#a3a3a3] to-[#737373]' },
                               { name: 'إعدادات', icon: <Settings className="w-6 h-6 text-white" />, color: 'bg-gradient-to-b from-[#e5e5e5] to-[#a3a3a3]' }
                             ].map((app, i) => (
                               <div key={i} className="flex flex-col items-center">
                                 <div className={`${app.color} w-9 h-9 rounded-[22%] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] active:scale-90 transition-transform border border-white/10`}>
                                    {app.icon}
                                 </div>
                                 <div className="text-[6px] text-white mt-1.5 font-bold tracking-tight">{app.name}</div>
                               </div>
                             ))}
                          </div>

                          {/* Dock */}
                          <div className="absolute bottom-5 inset-x-3 h-16 bg-white/30 backdrop-blur-3xl rounded-[2.2rem] border border-white/25 flex items-center justify-around px-4 shadow-2xl">
                             <div className="w-10 h-10 bg-gradient-to-b from-[#65d66e] to-[#4cd964] rounded-[24%] flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                               <PhoneCall className="w-6 h-6 text-white" />
                             </div>
                             <div className="w-10 h-10 bg-gradient-to-b from-[#5ac8fa] to-[#007aff] rounded-[24%] flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                               <Compass className="w-6 h-6 text-white" />
                             </div>
                             <div className="w-10 h-10 bg-gradient-to-b from-[#65d66e] to-[#4cd964] rounded-[24%] flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                               <MessageCircle className="w-6 h-6 text-white" />
                             </div>
                             <div className="w-10 h-10 bg-gradient-to-b from-[#ff5e7d] to-[#ff2d55] rounded-[24%] flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                               <Music className="w-6 h-6 text-white" />
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="bg-[#00f2ff]/20 px-5 py-1.5 rounded-full border border-[#00f2ff]/30 shadow-xl">
                       <span className="text-[#00f2ff] text-[10px] font-black uppercase tracking-widest">بعد التخطي</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center border-t border-white/10 pt-8">
                   <div className="flex items-center justify-center gap-4 mb-2">
                      <Unlock className="w-8 h-8 text-[#00f2ff]" />
                      <div className="text-[#00f2ff] font-black text-3xl leading-none text-glow-turquoise tracking-tighter uppercase">Fully Unlocked</div>
                   </div>
                   <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em]">iPhone 6 to 17 Pro Max • Zero Lock Issues</div>
                </div>
             </div>
          </div>

          <div className="flex flex-col w-full max-w-[280px] gap-4 mt-8">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white w-full py-4.5 rounded-[1.5rem] font-black text-base shadow-[0_20px_50px_rgba(37,211,102,0.4)] flex items-center justify-center gap-4 hover:scale-105 transition-all">
              <MessageCircle className="w-6 h-6" /> تواصل واتساب الآن
            </a>
            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-4 px-8 py-3.5 glass-premium rounded-[1.5rem] border-[#00f2ff]/40 hover:border-[#00f2ff]/70 transition-colors shadow-2xl">
              <PhoneCall className="text-[#00f2ff] w-6 h-6" />
              <div className="text-white font-black text-lg">{phoneNumber}</div>
            </a>
          </div>
        </div>
      </header>

      {/* AI Assistant Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="glass-premium p-10 md:p-14 rounded-[4.5rem] border-[#d4af37]/50 relative max-w-4xl mx-auto shadow-[0_0_120px_rgba(0,0,0,0.6)] overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f2ff]/10 blur-[100px] -z-10"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4af37]/10 blur-[100px] -z-10"></div>

             <div className="space-y-10">
                <div className="flex flex-col items-center gap-4">
                   <div className="bg-gradient-to-br from-[#00f2ff] to-[#d4af37] p-5 rounded-[2rem] shadow-2xl animate-bounce duration-[5000ms]">
                      <Bot className="text-slate-900 w-11 h-11" />
                   </div>
                   <h3 className="text-3xl font-black text-white">المساعد الذكي لمكتب كلاسك</h3>
                   <div className="flex items-center gap-4 text-[#d4af37] text-xs font-black uppercase tracking-[0.5em]">
                      <Sparkles className="w-5 h-5 fill-[#d4af37]" /> تشخيص فوري بالذكاء الاصطناعي
                   </div>
                </div>

                <div className="relative group">
                   <textarea 
                     value={adviceRequest}
                     onChange={(e) => setAdviceRequest(e.target.value)}
                     placeholder="اشرح مشكلة هاتفك بالتفصيل (مثلاً: iPhone 13 Pro Max معلق على علامة التفاحة)..."
                     className="w-full bg-[#050b1a]/95 rounded-[2.5rem] p-8 outline-none border border-white/10 focus:border-[#00f2ff] h-48 text-white text-lg text-right shadow-inner transition-all placeholder:text-slate-600 resize-none leading-relaxed"
                   />
                   <button 
                     onClick={handleGetAdvice}
                     disabled={loadingAdvice || !adviceRequest}
                     className="absolute bottom-8 left-8 bg-gradient-to-br from-[#00f2ff] to-[#00a3ff] text-slate-900 px-10 py-4 rounded-[1.5rem] font-black text-sm flex items-center gap-3 shadow-2xl disabled:opacity-30 active:scale-95 transition-all"
                   >
                     {loadingAdvice ? (
                        <>
                          <Clock className="animate-spin w-6 h-6" /> جاري التحليل...
                        </>
                     ) : (
                        <>
                          <Search className="w-6 h-6" /> ابدأ التشخيص
                        </>
                     )}
                   </button>
                </div>

                {adviceResponse && (
                   <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
                      <div className="p-10 bg-[#0a1628]/95 rounded-[3.5rem] border border-[#d4af37]/40 text-right shadow-2xl backdrop-blur-3xl">
                         <div className="flex items-center justify-end gap-4 mb-5">
                            <span className="text-sm font-black text-[#d4af37] uppercase tracking-[0.3em]">تقرير التشخيص التقني - كلاسك فون</span>
                            <div className="w-16 h-2 bg-[#d4af37]/50 rounded-full"></div>
                         </div>
                         <p className="text-white text-base md:text-lg leading-relaxed font-medium whitespace-pre-wrap">
                            {adviceResponse}
                         </p>
                         <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap justify-end gap-8">
                            <div className="flex items-center gap-3 text-green-400 text-sm font-black">
                               <CheckCircle2 className="w-6 h-6" /> قطع أصلية متوفرة
                            </div>
                            <div className="flex items-center gap-3 text-[#00f2ff] text-sm font-black">
                               <Zap className="w-6 h-6" /> صيانة بأحدث الأجهزة
                            </div>
                         </div>
                      </div>
                      <a 
                        href={`${waLink}?text=${encodeURIComponent(`مرحباً مكتب كلاسك فون، المساعد الذكي شخص لي هذه المشكلة: ${adviceRequest}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#25D366] text-white py-6 rounded-[2rem] font-black text-lg flex items-center justify-center gap-5 shadow-[0_20px_50px_rgba(37,211,102,0.5)] active:scale-95 transition-all hover:brightness-110"
                      >
                         <MessageCircle className="w-8 h-8" /> احجز دورك للصيانة الآن
                      </a>
                   </div>
                )}
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-[#070d1d]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-14">خدمات <span className="text-[#d4af37]">سيرفر كلاسك</span></h2>
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((s, i) => (
              <a 
                key={i} 
                href={`${waLink}?text=${encodeURIComponent(s.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-premium p-8 rounded-[3rem] border-2 ${s.color} text-right block hover:bg-white/5 active:scale-95 transition-all group shadow-2xl relative overflow-hidden`}
              >
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/5 blur-2xl -z-10 rounded-full"></div>
                <div className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-5 bg-white/5 border border-white/10 mx-auto group-hover:scale-110 transition-transform shadow-inner scale-110">
                  {s.icon}
                </div>
                <h4 className="text-lg font-black mb-2 text-center text-white">{s.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-medium text-center mb-5">{s.desc}</p>
                <div className="text-xs text-[#00f2ff] font-black text-center border-t border-white/10 pt-4 uppercase tracking-[0.2em] group-hover:text-white transition-colors">استفسر الآن</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-white/5 bg-[#050b1a]/90 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'بعقوبة - حي المعلمين', val: 'موقعنا', icon: <MapPin className="text-[#d4af37] w-8 h-8" />, link: mapsLink },
              { label: 'شاشات وكالة أصلية', val: '+9,500', icon: <MonitorSmartphone className="text-[#00f2ff] w-8 h-8" /> },
              { label: 'Honor Server', val: '+6,200', icon: <Layers className="text-[#556b2f] w-8 h-8" /> },
              { label: 'iPhone 6 - 17 Pro Max', val: 'دعم كامل', icon: <Lock className="text-white w-8 h-8" /> }
            ].map((s, i) => (
              s.link ? (
                <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className="text-center p-8 glass-premium rounded-[2.5rem] border-white/5 hover:bg-white/5 active:scale-95 transition-all shadow-xl">
                  <div className="mb-4 flex justify-center animate-pulse">{s.icon}</div>
                  <div className="text-xl font-black text-white mb-1">{s.val}</div>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-tighter">{s.label}</p>
                </a>
              ) : (
                <div key={i} className="text-center p-8 glass-premium rounded-[2.5rem] border-white/5 shadow-xl">
                  <div className="mb-4 flex justify-center">{s.icon}</div>
                  <div className="text-xl font-black text-white mb-1">{s.val}</div>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-tighter">{s.label}</p>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050b1a] pt-20 pb-16 border-t border-[#d4af37]/30 rounded-t-[5rem] shadow-[0_-40px_80px_rgba(0,0,0,0.7)]">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 mb-16 flex flex-col items-center">
            <a 
              href={tgLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-4 px-16 py-5 bg-gradient-to-r from-[#00f2ff]/30 to-transparent border border-[#00f2ff]/50 rounded-full hover:bg-[#00f2ff]/30 transition-all shadow-2xl active:scale-95 mb-10 group"
            >
              <Send className="w-8 h-8 text-[#00f2ff] group-hover:translate-x-2 transition-transform" />
              <span className="text-[#00f2ff] text-xl font-black">قناتنا على التلغرام</span>
            </a>
            
            <div className="flex items-center gap-5">
               <div className="w-20 h-[2px] bg-gradient-to-l from-transparent to-[#d4af37]"></div>
               <h2 className="text-4xl font-black text-white tracking-[0.4em]">كلاسك <span className="text-[#00f2ff]">فون</span></h2>
               <div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-[#d4af37]"></div>
            </div>

            <p className="text-slate-500 text-base font-medium max-w-[380px] mx-auto leading-relaxed">
              المقر الأول والموثوق لصيانة وبرمجة الهواتف في ديالى. نتميز بالسرعة والدقة بإشراف التقني <span className="text-[#d4af37] font-black underline decoration-[#d4af37]/50 underline-offset-8">أحمد النعيمي</span>.
            </p>
            
            <div className="flex gap-8 justify-center mt-10">
              <a href={fbLink} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-[1.5rem] glass-premium flex items-center justify-center text-slate-400 hover:text-[#d4af37] transition-all border border-white/10 shadow-2xl hover:-translate-y-3">
                <Facebook className="w-8 h-8" />
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-[1.5rem] glass-premium flex items-center justify-center text-slate-400 hover:text-[#25D366] transition-all border border-white/10 shadow-2xl hover:-translate-y-3">
                <MessageCircle className="w-8 h-8" />
              </a>
              <a href={`tel:${phoneNumber}`} className="w-16 h-16 rounded-[1.5rem] glass-premium flex items-center justify-center text-slate-400 hover:text-[#00f2ff] transition-all border border-white/10 shadow-2xl hover:-translate-y-3">
                <PhoneCall className="w-8 h-8" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-12">
            <div className="text-xs text-slate-700 font-black uppercase tracking-[0.6em] mb-5">
              © 2024 KLASK PHONE LAB • BAQUBAH - DIALA
            </div>
            <div className="inline-block px-8 py-3 bg-[#d4af37]/5 border border-[#d4af37]/40 rounded-full shadow-2xl">
              <span className="text-[#d4af37] text-xs font-black uppercase tracking-[0.4em]">Designed & Managed by Ahmed Al-Nuaimi</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a href={waLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-12 left-12 bg-[#25D366] p-6 rounded-[2.2rem] shadow-[0_30px_80px_rgba(37,211,102,0.7)] z-[200] border border-white/50 active:scale-90 transition-all hover:scale-110 hover:brightness-110 group">
        <MessageCircle className="text-white w-12 h-12 group-hover:rotate-12 transition-transform" />
        <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-6 py-3 rounded-2xl text-base font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all shadow-2xl pointer-events-none translate-x-8 group-hover:translate-x-0">
          هل تحتاج مساعدة؟ تواصل معنا
        </div>
      </a>
    </div>
  );
};

export default App;
