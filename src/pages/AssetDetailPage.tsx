import React from 'react';
import { useLocation } from 'react-router-dom';
import { Maximize2, Rotate3d, Layers, Zap, Box, Thermometer, Calendar, CheckCircle2, FileText } from 'lucide-react';
import { cn } from '../lib/utils';

export default function AssetDetailPage() {
  const location = useLocation();
  const scan = location.state || {
    classification: 'Tower HV-772',
    location: '45.3223° N, 122.6765° W — NORTH CASCADE SECTOR',
    risk: 'OPERATIONAL',
    riskColor: 'bg-emerald-100/50 text-emerald-700',
    image: 'https://picsum.photos/seed/tower-inner/1200/675?grayscale'
  };

  const isNominal = scan.risk === 'NOMINAL' || scan.risk === 'OPERATIONAL';

  const dateInputRef = React.useRef<HTMLInputElement>(null);

  const handleScheduleClick = () => {
    if (dateInputRef.current) {
      if ('showPicker' in HTMLInputElement.prototype) {
        dateInputRef.current.showPicker();
      } else {
        dateInputRef.current.focus();
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <header className="flex items-end justify-between">
        <div>
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-surface-container-highest rounded text-[10px] font-mono font-bold text-on-surface-variant">SCAN DETAILS</span>
            <span className={cn("px-3 py-1 rounded text-[10px] font-mono font-bold", scan.riskColor || (isNominal ? 'bg-emerald-100/50 text-emerald-700' : 'bg-red-100/50 text-red-700'))}>
              STATUS: {scan.risk}
            </span>
          </div>
          <h1 className="text-7xl font-display font-extrabold text-on-surface">{scan.classification}</h1>
          <p className="text-on-surface-variant font-mono text-sm tracking-wider mt-4">LOCATION: {scan.location}</p>
        </div>
        <div className="flex gap-4 mb-2">
          <button className="px-8 py-4 bg-surface-container-high rounded-xl text-sm font-bold border border-outline-variant/10 shadow-sm transition-all hover:bg-surface-container-highest">EXPORT DATASET</button>
          <button onClick={handleScheduleClick} className="px-8 py-4 bg-primary text-white rounded-xl text-sm font-bold shadow-xl flex items-center gap-3 transition-transform hover:-translate-y-0.5 relative overflow-hidden">
            <Calendar className="w-4 h-4" /> SCHEDULE INSPECTION
            <input 
              ref={dateInputRef}
              type="date" 
              className="absolute opacity-0 w-0 h-0"
              onChange={(e) => {
                if(e.target.value) alert(`Inspection scheduled for ${e.target.value}`);
              }}
            />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="bg-surface-container-lowest rounded-[32px] overflow-hidden shadow-sm relative group aspect-[16/9]">
            <img src={scan.image} className="w-full h-full object-cover grayscale-[0.3] transition-transform duration-[15s] group-hover:scale-105" alt="Asset" referrerPolicy="no-referrer" />
            <div className="absolute top-10 left-10 px-8 py-6 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="text-[10px] font-mono font-bold tracking-widest text-white/50 uppercase mb-2">VISUAL ANALYSIS</div>
              <h3 className="text-2xl font-display font-bold text-white tracking-wide">High-Res LiDAR Overlay</h3>
            </div>
            <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)] border-2 border-white animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] border-2 border-white animate-pulse" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1.5 bg-white shadow-2xl rounded-2xl border border-outline-variant/20">
              {[Maximize2, Layers, Rotate3d].map((Icon, i) => (
                <button key={i} className="p-4 hover:bg-surface-container-high text-on-surface-variant transition-colors rounded-xl"><Icon className="w-5 h-5" /></button>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest p-10 rounded-[32px] shadow-sm border border-outline-variant/10">
            <header className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-display font-bold">Maintenance History & Logged Events</h3>
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-on-surface-variant uppercase italic">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" /> Last Audit: 12 days ago
              </div>
            </header>
            <div className="space-y-4">
              <div className="grid grid-cols-12 gap-6 px-4 mb-4 text-[10px] font-mono font-bold tracking-widest text-on-surface-variant opacity-50 uppercase">
                <div className="col-span-2">EVENT ID</div><div className="col-span-2">DATE</div><div className="col-span-3">CATEGORY</div><div className="col-span-3">TECHNICIAN</div><div className="col-span-2 text-right">OUTCOME</div>
              </div>
              {[
                { id: 'MNT-9921', date: '2024-05-14', cat: 'UAV Inspection', tech: 'Marcus Thorne', outcome: 'Pass', color: 'bg-emerald-100 text-emerald-800' },
                { id: 'MNT-8812', date: '2023-11-22', cat: 'Veg Clearance', tech: 'S. Rivera', outcome: 'Done', color: 'bg-emerald-100 text-emerald-800' },
                { id: 'MNT-7440', date: '2023-04-10', cat: 'Emergency Repair', tech: 'North Resp', outcome: 'Crit', color: 'bg-red-100 text-red-800' },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-12 gap-6 px-4 py-8 bg-surface-container-low rounded-2xl items-center hover:bg-surface-container-high transition-colors cursor-pointer">
                  <div className="col-span-2 font-bold text-sm">{row.id}</div>
                  <div className="col-span-2 font-mono text-xs opacity-60 font-bold">{row.date}</div>
                  <div className="col-span-3 text-sm font-bold">{row.cat}</div>
                  <div className="col-span-3 flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-surface-container-highest" /><span className="text-xs font-semibold">{row.tech}</span></div>
                  <div className="col-span-2 text-right"><span className={cn("px-3 py-1 rounded text-[10px] font-black uppercase", row.color)}>{row.outcome}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          {[
            { label: 'OPERATIONAL VOLTAGE', value: '502.4 kV', icon: Zap, color: 'text-emerald-500', barColor: '#10b981' },
            { label: 'TOWER STRUCTURAL TILT', value: '0.042°', icon: Box, color: 'text-blue-500', barColor: '#3b82f6' },
            { label: 'AMBIENT TEMP', value: '18.2° C', icon: Thermometer, color: 'text-blue-400', barColor: '#60a5fa' },
          ].map((stat, i) => (
            <div key={i} className={cn("p-10 bg-surface-container-lowest rounded-[32px] shadow-sm border border-outline-variant/10 relative overflow-hidden transition-all hover:shadow-xl", i === 0 && "border-l-8 border-l-emerald-500", i === 1 && "border-l-8 border-l-blue-500")}>
              <div className="flex justify-between items-start mb-8">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-on-surface-variant uppercase">{stat.label}</span>
                  <div className="text-5xl font-display font-black tracking-tight">{stat.value}</div>
                </div>
                <stat.icon className={cn("w-8 h-8", stat.color)} />
              </div>
              <div className="flex gap-2 h-8">
                {[45, 38, 52, 64, 48, 42].map((v, j) => (
                  <div key={j} className="flex-1 rounded-sm" style={{ backgroundColor: stat.barColor, height: `${v}%`, opacity: j === 3 ? 1 : 0.2 }} />
                ))}
              </div>
            </div>
          ))}
          <div className="p-10 bg-surface-container-high/40 rounded-[32px] text-center border border-dashed border-outline-variant/40 space-y-6">
            <button className="w-full py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-2xl shadow-lg hover:bg-primary-container transition-all">Dispatch Team</button>
            <div className="space-y-2 opacity-60">
              <div className="flex items-center gap-2 text-[10px] font-bold font-mono"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> SYSTEM HEALTH</div>
              <div className="flex items-center gap-2 text-[10px] font-bold font-mono ml-4">? SUPPORT</div>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-20 pt-10 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center text-on-surface-variant text-[10px] font-mono font-bold uppercase tracking-widest opacity-60">
        <div>© 2024 THE INFRASTRUCTURE EDITORIAL. COMPLIANCE V2.4</div>
        <div className="flex gap-10 mt-4 md:mt-0">
          {['Privacy Policy', 'Documentation', 'Audit'].map(t => <a key={t} href="#" className="hover:text-on-surface">{t}</a>)}
        </div>
      </footer>
    </div>
  );
}
