import React from 'react';
import { MapPin, Users, History, Navigation, Thermometer, ShieldAlert, Share2, Plus, Minus, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function WorkforcePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <header className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase opacity-50 block mb-2">WORKFORCE OPERATIONAL HUB</span>
          <h1 className="text-5xl font-display font-extrabold text-primary">Team Collaboration & Dispatch</h1>
        </div>
        <div className="flex items-center gap-3 px-5 py-2.5 bg-surface-container-high rounded-lg">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-widest opacity-60 uppercase">14 ACTIVE CREWS</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-surface-container-lowest p-10 rounded-xxl shadow-sm border border-outline-variant/10">
            <header className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <ShieldAlert className="w-8 h-8 text-on-surface opacity-30" />
                <h3 className="text-2xl font-display font-bold">Incoming Alerts</h3>
              </div>
              <span className="px-3 py-1 bg-red-100 text-red-700 text-[10px] font-black rounded font-mono uppercase">HIGH PRIORITY</span>
            </header>
            
            <div className="space-y-4">
              {[
                { id: 'AN-9044', time: '2m ago', title: 'Substation Thermal Spike', desc: 'Temperature exceeded 85°C at Grid Sector 7-B. Immediate cooling check required.', loc: 'NORTHERN QUADRANT, SECTOR 7-B', active: true },
                { id: 'AN-8912', time: '14m ago', title: 'Pressure Drop Detected', desc: 'Main conduit C-4 showing 15% pressure variance from baseline. Non-critical leak suspected.', loc: 'RIVERFRONT DISTRICT, AREA 12' },
                { id: 'AN-7740', time: '45m ago', title: 'Vegetation Encroachment', desc: 'LiDAR scan detected high-risk growth within 2m of high-tension line 44.', loc: 'EASTERN GREENBELT' },
              ].map((alert, i) => (
                <div key={i} className={cn("p-8 rounded-xl border transition-all cursor-pointer group", alert.active ? "bg-white ring-4 ring-primary/5 border-primary shadow-xl" : "bg-surface-container-low border-transparent hover:bg-surface-container-high")}>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono font-bold opacity-40">ANOMALY ID: {alert.id}</span>
                    <span className="text-xs font-bold opacity-30">{alert.time}</span>
                  </div>
                  <h4 className="text-lg font-display font-bold mb-3">{alert.title}</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-medium mb-8">{alert.desc}</p>
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold opacity-50 flex-wrap">
                    <MapPin className="w-3 h-3" /> {alert.loc}
                  </div>
                </div>
              ))}
            </div>
           </div>

           <div className="bg-surface-container-lowest p-10 rounded-xxl shadow-sm border border-outline-variant/10">
             <h3 className="text-2xl font-display font-bold mb-10">History & Analytics</h3>
             <div className="grid grid-cols-2 gap-4 mb-10">
               <div className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-500/10 text-center">
                 <div className="text-[10px] font-mono font-bold opacity-50 uppercase mb-2">SUCCESS RATE</div>
                 <div className="text-4xl font-display font-black text-emerald-700">98.4%</div>
               </div>
               <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-500/10 text-center">
                 <div className="text-[10px] font-mono font-bold opacity-50 uppercase mb-2">AVG RESPONSE</div>
                 <div className="text-4xl font-display font-black text-blue-700">22m</div>
               </div>
             </div>
             <div className="space-y-6">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="opacity-60 uppercase">Repair #8821 (Grid-7)</span>
                  <span className="text-emerald-600">COMPLETED</span>
                </div>
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="opacity-60 uppercase">Inspection #8819 (Conduit)</span>
                  <span className="text-emerald-600">COMPLETED</span>
                </div>
             </div>
           </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <div className="bg-surface-container-lowest px-1 rounded-xxl overflow-hidden shadow-sm border border-outline-variant/10 relative min-h-[500px] flex flex-col group">
             <div className="absolute inset-x-1 top-1 bottom-1 bg-surface-container-high rounded-xxl overflow-hidden">
               <img src="https://picsum.photos/seed/city-top/1500/1000?grayscale" className="w-full h-full object-cover opacity-60 grayscale blur-sm" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-black/40" />
             </div>
             
             <div className="relative z-10 m-10 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 w-80">
                <div className="text-[10px] font-mono font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                   <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" /> LIVE GPS TRACKING
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'CREW-ALFA', status: '(In Transit)', color: 'bg-emerald-500' },
                    { name: 'CREW-BRAVO', status: '(Repairing)', color: 'bg-blue-500' },
                    { name: 'CREW-DELTA', status: '(Stalled)', color: 'bg-blue-200' },
                  ].map((crew, i) => (
                    <div key={i} className="flex items-center gap-4 text-xs font-bold text-white">
                      <div className={cn("w-3 h-3 rounded-full", crew.color)} />
                      <span>{crew.name} <span className="opacity-50 font-normal">{crew.status}</span></span>
                    </div>
                  ))}
                </div>
             </div>

             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="w-64 h-64 border border-white/20 rounded-full animate-[ping_3s_linear_infinite] pointer-events-none" />
                <div className="absolute w-12 h-12 bg-primary rounded-full border-4 border-white shadow-2xl flex items-center justify-center">
                   <Navigation className="w-5 h-5 text-white animate-bounce" />
                </div>
             </div>

             <div className="mt-auto m-10 flex gap-6 z-10">
                <div className="flex-1 bg-white/95 shadow-2xl p-6 rounded-2xl flex items-center gap-6 border-l-8 border-primary">
                   <div className="w-16 h-16 bg-surface-container-high rounded-xl overflow-hidden shadow-inner">
                      <img src="https://picsum.photos/seed/leader/100/100" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   </div>
                   <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[10px] font-mono font-bold opacity-40 uppercase">ACTIVE DISPATCH</span>
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      </div>
                      <h4 className="text-xl font-display font-bold">Leader: Marcus Thorne</h4>
                      <div className="text-xs font-black text-primary uppercase tracking-widest mt-1">EN ROUTE TO GRID SECTOR 7-B</div>
                   </div>
                </div>
                <div className="bg-white/95 shadow-2xl p-6 rounded-2xl flex flex-col items-center justify-center gap-2 border border-outline-variant/20">
                   {[Plus, Minus, Navigation].map((Icon, i) => (
                      <button key={i} className="p-3 hover:bg-surface-container-high rounded-lg transition-colors text-on-surface-variant"><Icon className="w-5 h-5" /></button>
                   ))}
                </div>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-xxl shadow-sm border border-outline-variant/10 flex items-center justify-between group cursor-pointer hover:shadow-xl transition-all">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl overflow-hidden border-2 border-white shadow-xl">
                     <img src="https://picsum.photos/seed/c1/100/100" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                     <h4 className="text-lg font-display font-bold">Crew-Alfa</h4>
                     <p className="text-xs font-medium text-on-surface-variant mt-1 italic">3 Operators • 1 Vehicle</p>
                  </div>
               </div>
               <div className="text-right">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-black rounded uppercase">IN TRANSIT</span>
                  <div className="text-[10px] font-mono font-bold opacity-30 mt-2">ETA: 4 mins</div>
               </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xxl shadow-sm border border-outline-variant/10 flex items-center justify-between group cursor-pointer hover:shadow-xl transition-all opacity-80 grayscale-[0.5]">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl overflow-hidden border-2 border-white shadow-xl">
                     <img src="https://picsum.photos/seed/c2/100/100" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                     <h4 className="text-lg font-display font-bold">Crew-Bravo</h4>
                     <p className="text-xs font-medium text-on-surface-variant mt-1 italic">2 Operators • Heavy Rig</p>
                  </div>
               </div>
               <div className="text-right">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-[10px] font-black rounded uppercase">REPAIRING</span>
                  <div className="text-[10px] font-mono font-bold opacity-30 mt-2">Progress: 65%</div>
               </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-10 rounded-xxl shadow-sm border border-outline-variant/10">
             <header className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-display font-bold">Shift Availability</h3>
                <div className="flex gap-6">
                   <div className="flex items-center gap-2 text-[10px] font-bold uppercase">
                      <div className="w-2.5 h-2.5 bg-primary rounded-full" /> FULL
                   </div>
                   <div className="flex items-center gap-2 text-[10px] font-bold uppercase opacity-30">
                      <div className="w-2.5 h-2.5 bg-outline-variant rounded-full" /> PARTIAL
                   </div>
                </div>
             </header>
             <div className="bg-surface-container-high/40 rounded-3xl p-4">
                <div className="grid grid-cols-7 gap-4 text-center text-[10px] font-bold opacity-40 uppercase tracking-widest mb-4">
                   {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <div key={d}>{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-4 text-center">
                   {[12, 13, 14, 15, 16, 17, 18].map(d => (
                      <div key={d} className={cn("py-4 rounded-xl text-xs font-black transition-all cursor-pointer", d === 15 ? "bg-primary text-white shadow-xl shadow-primary/20 scale-110" : "bg-white hover:bg-surface text-on-surface-variant border border-outline-variant/10 shadow-sm")}>
                         {d}
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
