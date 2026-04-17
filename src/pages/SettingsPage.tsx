import React from 'react';
import { User, Phone, Mail, Lock, Bell, Activity, Key, Copy, Trash2, HelpCircle, ChevronRight, Info, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

export default function SettingsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-20">
      <header>
        <h1 className="text-5xl font-display font-extrabold text-on-surface mb-2">Settings</h1>
        <nav className="flex items-center gap-8 mt-6 pb-2 border-b border-outline-variant/10">
           {['Dashboard', 'Map', 'Reports', 'Settings'].map(tab => (
             <a key={tab} href="#" className={cn("text-xs font-black uppercase tracking-[0.2em] transition-all border-b-2 py-2 -mb-[10px]", tab === 'Settings' ? "text-primary border-primary" : "text-on-surface-variant border-transparent hover:text-on-surface")}>
               {tab}
             </a>
           ))}
        </nav>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-surface-container-lowest p-10 rounded-xxl shadow-sm border border-outline-variant/10 text-center flex flex-col items-center">
              <div className="relative mb-10 group">
                <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-2xl transform transition-transform group-hover:scale-105 border-4 border-white">
                   <img src="https://picsum.photos/seed/marcus-large/200/200" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -bottom-4 -right-4 p-3 bg-white shadow-xl rounded-2xl border border-outline-variant/10">
                   <Activity className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
              <h2 className="text-3xl font-display font-extrabold mb-1">Marcus Thorne</h2>
              <p className="text-sm font-bold text-on-surface-variant mb-6 italic opacity-60 font-mono">Senior Infrastructure Surveyor</p>
              
              <div className="bg-emerald-100/50 text-emerald-800 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-3 border border-emerald-500/10 mb-10">
                 <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> VERIFIED OPERATOR
              </div>

              <div className="w-full space-y-8 text-left pt-10 border-t border-outline-variant/10">
                 <div>
                    <label className="text-[10px] font-mono font-bold opacity-30 uppercase tracking-widest mb-1.5 block">OPERATOR ID</label>
                    <div className="text-sm font-black font-mono tracking-tight">DS-9928-ALPHA</div>
                 </div>
                 <div>
                    <label className="text-[10px] font-mono font-bold opacity-30 uppercase tracking-widest mb-1.5 block">REGION ASSIGNMENT</label>
                    <div className="text-sm font-bold tracking-wide">Pacific Northwest District</div>
                 </div>
              </div>
           </div>

           <div className="bg-primary-container text-white p-10 rounded-xxl shadow-xl border-l-[12px] border-emerald-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Activity className="w-32 h-32" />
              </div>
              <h3 className="text-xs font-mono font-bold tracking-[0.3em] uppercase opacity-50 mb-8">ACCOUNT HEALTH</h3>
              <div className="flex justify-between items-end mb-4">
                 <span className="text-[10px] font-bold uppercase opacity-60">API QUOTA</span>
                 <span className="text-sm font-black text-emerald-300">82% REMAINING</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-6">
                 <div className="h-full bg-emerald-400 rounded-full" style={{ width: '82%' }} />
              </div>
              <p className="text-[10px] font-mono font-medium leading-relaxed opacity-40 italic">
                Next billing cycle starts in 14 days.
              </p>
           </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-10">
           <section className="bg-surface-container-lowest p-10 rounded-xxl shadow-sm border border-outline-variant/10">
              <header className="flex items-center gap-4 mb-12">
                 <User className="w-6 h-6 text-on-surface opacity-30" />
                 <h3 className="text-2xl font-display font-bold">Account Access</h3>
              </header>
              <div className="grid grid-cols-2 gap-10">
                 <div className="space-y-8">
                    <div>
                       <label className="text-[10px] font-mono font-bold opacity-40 uppercase tracking-widest mb-3 block">EMAIL ADDRESS</label>
                       <div className="px-5 py-4 bg-surface-container-low rounded-xl text-sm font-black text-on-surface-variant flex items-center justify-between shadow-inner border border-outline-variant/5">
                          m.thorne@digital-surveyor.io
                       </div>
                    </div>
                    <div>
                       <label className="text-[10px] font-mono font-bold opacity-40 uppercase tracking-widest mb-3 block">CURRENT PASSWORD</label>
                       <div className="px-5 py-4 bg-surface-container-low rounded-xl text-sm font-black text-on-surface-variant flex items-center justify-between shadow-inner border border-outline-variant/5">
                          ••••••••
                       </div>
                    </div>
                 </div>
                 <div className="space-y-8">
                    <div>
                       <label className="text-[10px] font-mono font-bold opacity-40 uppercase tracking-widest mb-3 block">PRIMARY PHONE</label>
                       <div className="px-5 py-4 bg-surface-container-low rounded-xl text-sm font-black text-on-surface-variant flex items-center justify-between shadow-inner border border-outline-variant/5">
                          +1 (555) 012-3456
                       </div>
                    </div>
                    <div>
                       <label className="text-[10px] font-mono font-bold opacity-40 uppercase tracking-widest mb-3 block">NEW PASSWORD</label>
                       <div className="px-5 py-4 bg-surface-container-high rounded-xl text-sm italic font-medium opacity-40 flex items-center justify-between border border-outline-variant/10">
                          Leave blank to keep current
                       </div>
                    </div>
                 </div>
              </div>
              <button className="mt-12 ml-auto block px-10 py-5 bg-primary text-white rounded-2xl font-black text-sm shadow-xl hover:-translate-y-1 transition-all">Update Credentials</button>
           </section>

           <section className="bg-surface-container-lowest p-10 rounded-xxl shadow-sm border border-outline-variant/10">
              <header className="flex items-center gap-4 mb-12">
                 <Bell className="w-6 h-6 text-on-surface opacity-30" />
                 <h3 className="text-2xl font-display font-bold">Alert Preferences</h3>
              </header>
              <div className="space-y-4">
                 {[
                   { title: 'High-Risk Anomaly Alerts', desc: 'Immediate SMS notification for critical infrastructure failure predictions.', active: true },
                   { title: 'Weekly Performance Digest', desc: 'Email summary of district maintenance logs and team efficiency stats.', active: true },
                   { title: 'System Maintenance', desc: 'In-app notifications for scheduled downtime or version upgrades.', active: false },
                 ].map((opt, i) => (
                   <div key={i} className="flex items-center justify-between p-8 bg-surface-container-low rounded-2xl hover:bg-surface-container-high transition-all cursor-pointer border border-outline-variant/5">
                      <div className="flex-1 pr-12">
                         <h4 className="font-bold text-sm tracking-wide mb-1 transition-colors group-hover:text-primary">{opt.title}</h4>
                         <p className="text-xs text-on-surface-variant font-medium leading-relaxed opacity-60">{opt.desc}</p>
                      </div>
                      <div className={cn("w-14 h-8 rounded-full p-1.5 transition-colors flex items-center", opt.active ? "bg-primary" : "bg-outline-variant/30")}>
                         <div className={cn("w-5 h-5 bg-white rounded-full shadow-lg transform transition-transform", opt.active ? "translate-x-6" : "translate-x-0")} />
                      </div>
                   </div>
                 ))}
              </div>
           </section>

           <section className="bg-surface-container-lowest p-10 rounded-xxl shadow-sm border border-outline-variant/10">
              <header className="flex items-center justify-between mb-12">
                 <div className="flex items-center gap-4">
                    <Key className="w-6 h-6 text-on-surface opacity-30" />
                    <h3 className="text-2xl font-display font-bold">API Access</h3>
                 </div>
                 <button className="flex items-center gap-2 text-[10px] font-black uppercase text-primary tracking-widest hover:underline hover:underline-offset-4">
                    <Plus className="w-4 h-4" /> GENERATE KEY
                 </button>
              </header>

              <div className="space-y-6">
                 <div className="bg-surface-container-low rounded-2xl p-8 border border-l-8 border-primary border-outline-variant/5">
                    <div className="flex justify-between items-start mb-6">
                       <div className="flex items-center gap-4">
                          <h4 className="font-bold text-sm">Production_Main_Key</h4>
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-black uppercase rounded">ACTIVE</span>
                       </div>
                       <div className="flex gap-2">
                          <button className="p-3 hover:bg-white rounded-xl transition-all shadow-sm"><Copy className="w-4 h-4 opacity-50" /></button>
                          <button className="p-3 hover:bg-white rounded-xl transition-all shadow-sm"><Trash2 className="w-4 h-4 opacity-50" /></button>
                       </div>
                    </div>
                    <div className="p-5 bg-surface-container-high rounded-xl font-mono text-sm font-bold text-on-surface-variant overflow-hidden truncate shadow-inner">
                       ds_live_••••••••••••••••••••••••••••••••••••••••••
                    </div>
                    <div className="flex gap-10 mt-6 text-[10px] font-mono font-bold opacity-30 uppercase tracking-tighter">
                       <span>CREATED: OCT 12, 2023</span>
                       <span>LAST USED: 2 HOURS AGO</span>
                    </div>
                 </div>

                 <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5 opacity-50">
                    <div className="flex justify-between items-center mb-6">
                       <div className="flex items-center gap-4">
                          <h4 className="font-bold text-sm">Legacy_Integration_V1</h4>
                          <span className="px-2 py-0.5 bg-outline-variant/30 rounded text-[10px] font-black uppercase">REVOKED</span>
                       </div>
                       <button className="p-3 hover:bg-white rounded-xl transition-all"><Trash2 className="w-4 h-4 opacity-50" /></button>
                    </div>
                    <div className="p-5 bg-surface-container-high rounded-xl font-mono text-sm font-bold text-on-surface-variant overflow-hidden truncate italic opacity-40">
                       ds_old_••••••••••••••••••••••••••••••••••••••••••
                    </div>
                 </div>
              </div>

              <div className="mt-12 p-8 bg-blue-50/50 rounded-2xl border border-blue-500/10 flex items-start gap-4">
                 <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                 <p className="text-sm font-medium leading-relaxed opacity-80">
                   For detailed documentation on integrating the <span className="font-bold text-on-surface">Digital Surveyor API</span> into your existing GIS workflows, please visit our <a href="#" className="underline underline-offset-4 decoration-primary font-bold text-primary">Developer Portal.</a>
                 </p>
              </div>
           </section>
        </div>
      </div>
    </div>
  );
}
