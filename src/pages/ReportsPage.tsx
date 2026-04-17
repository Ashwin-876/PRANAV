import React from 'react';
import { 
  Plus, 
  Search, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  CheckCircle2, 
  Download, 
  FileText,
  BarChart3,
  Layers,
  Settings2,
  AlertCircle
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function ReportsPage() {
  const handleDownload = (reportName: string) => {
    // Simulate report generation and download
    const content = `Report Title: ${reportName}\nGenerated on: ${new Date().toLocaleString()}\nArborX Infrastructure Audit Data\n--------------------------------\nThis is a mock report containing telemetry data for Northwest Pipeline V2.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${reportName.replace(/\s+/g, '_').toLowerCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto flex gap-12">
      <div className="flex-1 space-y-12">
        <header>
          <h1 className="text-5xl font-display font-extrabold text-primary mb-4">Report Generator</h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-3xl">
            Compile multi-source infrastructure telemetry into professional-grade exports. Select regions, define temporal ranges, and customize analytical depth.
          </p>
        </header>

        <section className="bg-surface-container-lowest p-10 rounded-xxl shadow-sm border border-outline-variant/10">
          <header className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-display font-bold">Data Selection</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="text-[10px] font-mono font-bold tracking-widest text-on-surface-variant uppercase mb-4 block">PROJECT REGION</label>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-surface-container-low rounded-xl cursor-not-allowed opacity-60">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-on-surface-variant" />
                    <div>
                      <div className="font-bold text-sm">Sector 7-G Industrial</div>
                      <div className="text-xs font-medium text-on-surface-variant mt-1">42.8km surveyed area</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </div>
                
                <div className="flex items-center justify-between p-6 bg-surface-container-lowest border-2 border-primary rounded-xl ring-4 ring-primary/5">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-bold text-sm">Mainline Terminal Alpha</div>
                      <div className="text-xs font-medium text-on-surface-variant mt-1">12.5km core infrastructure</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-mono font-bold tracking-widest text-on-surface-variant uppercase mb-4 block">SCAN DATE RANGE</label>
              <div className="bg-surface-container-low p-8 rounded-xl space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase mb-2">FROM</div>
                    <div className="px-4 py-3 bg-white rounded-lg text-sm font-semibold flex items-center justify-between">
                      10/01/2024 <Calendar className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase mb-2">TO</div>
                    <div className="px-4 py-3 bg-white rounded-lg text-sm font-semibold flex items-center justify-between">
                      11/24/2024 <Calendar className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-white rounded-lg text-xs font-bold shadow-sm">Last 7 Days</button>
                  <button className="flex-1 py-2 bg-white rounded-lg text-xs font-bold shadow-sm">Last Month</button>
                  <button className="flex-1 py-2 bg-primary text-white rounded-lg text-xs font-bold shadow-lg">Custom Range</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest p-10 rounded-xxl shadow-sm border border-outline-variant/10">
          <header className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Settings2 className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-display font-bold">Analysis Parameters</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: 'Raw Sensor Data', desc: 'Full telemetry logs and LiDAR point cloud samples.', active: true },
              { icon: Layers, title: 'Hi-Res Imagery', desc: 'Include 4K inspection photos with thermal overlays.', active: true },
              { icon: Settings2, title: 'AI Analysis Logs', desc: 'Neural net confidence scores and prediction heatmaps.', active: false },
            ].map((param, i) => (
              <div key={i} className={cn(
                "p-8 rounded-xl border transition-all cursor-pointer group",
                param.active ? "bg-surface shadow ring-2 ring-primary/20 border-primary" : "bg-surface-container-low opacity-60 border-transparent hover:opacity-100"
              )}>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <param.icon className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
                  </div>
                  <div className={cn("w-5 h-5 rounded-sm border flex items-center justify-center transition-colors", param.active ? "bg-primary border-primary" : "border-outline-variant")}>
                    {param.active && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                </div>
                <h4 className="font-bold text-sm mb-3">{param.title}</h4>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">{param.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold">Recently Generated Reports</h2>
            <button className="text-sm font-bold text-primary hover:underline underline-offset-4">View All Archive</button>
          </div>

          <div className="bg-surface-container-low rounded-xxl overflow-hidden border border-outline-variant/10">
            <div className="grid grid-cols-12 gap-4 px-8 py-4 border-b border-outline-variant/20 text-[10px] font-mono font-bold tracking-widest opacity-50 uppercase">
              <div className="col-span-4">REPORT NAME & IDENTIFIER</div>
              <div className="col-span-2 text-center">FORMAT</div>
              <div className="col-span-2 text-center">STATUS</div>
              <div className="col-span-2 text-center">DATE</div>
              <div className="col-span-2 text-right">ACTION</div>
            </div>

            <div className="divide-y divide-outline-variant/10">
              {[
                { name: 'Monthly Integrity Audit - Oct 2023', id: 'REP-8829-NW', format: 'PDF / CSV', status: 'Ready', date: 'Nov 12, 2023 • 09:14 AM', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100' },
                { name: 'Critical Anomaly Incident Report #42', id: 'REP-9012-ERR', format: 'PDF / JSON', status: 'Archived', date: 'Nov 08, 2023 • 16:45 PM', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-100' },
                { name: 'Full Telemetry Dump - Sector 7-G', id: 'REP-1022-DAT', format: 'JSON / CSV', status: 'Ready', date: 'Oct 30, 2023 • 11:20 AM', icon: Layers, color: 'text-purple-600', bg: 'bg-purple-100' },
              ].map((report, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 px-8 py-8 items-center hover:bg-surface-container-lowest transition-colors group">
                  <div className="col-span-4 flex items-center gap-6">
                    <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", report.bg)}>
                      <report.icon className={cn("w-6 h-6", report.color)} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm tracking-wide">{report.name}</h4>
                      <p className="text-[10px] font-mono font-bold text-on-surface-variant mt-1 uppercase tracking-tighter opacity-50">ID: {report.id}</p>
                    </div>
                  </div>
                  <div className="col-span-2 text-center flex justify-center">
                    <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold border border-outline-variant/10">{report.format}</span>
                  </div>
                  <div className="col-span-2 text-center flex items-center justify-center gap-2">
                    <div className={cn("w-1.5 h-1.5 rounded-full", report.status === 'Ready' ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-on-surface-variant")} />
                    <span className="text-xs font-bold">{report.status}</span>
                  </div>
                  <div className="col-span-2 text-center text-[10px] font-bold text-on-surface-variant leading-tight">
                    {report.date.split(' • ').map(p => <div key={p}>{p}</div>)}
                  </div>
                  <div className="col-span-2 text-right">
                    <button 
                      onClick={() => handleDownload(report.name)}
                      className="p-3 bg-surface-container-high hover:bg-primary hover:text-white rounded-xl transition-all shadow-sm active:scale-95"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="w-[420px] space-y-8">
        <div className="bg-primary-container text-white p-10 rounded-xxl shadow-2xl space-y-12">
          <header className="flex justify-between items-center">
            <h3 className="text-3xl font-display font-extrabold">Compilation Summary</h3>
          </header>

          <div className="space-y-8">
            {[
              { label: 'Total Scans Found', value: '142' },
              { label: 'Anomaly Count', value: '28', isAlert: true },
              { label: 'Estimated File Size', value: '84.5 MB' },
              { label: 'Generated At', value: 'Nov 24, 14:22' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-medium opacity-60">{stat.label}</span>
                <div className="flex items-center gap-3">
                  {stat.isAlert && <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />}
                  <span className="text-3xl font-display font-black">{stat.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-10">
            <button 
              onClick={() => handleDownload('Latest_Infrastructure_Compilation_Report')}
              className="w-full bg-white text-primary flex items-center justify-center gap-3 py-5 rounded-2xl font-black text-sm shadow-xl hover:-translate-y-1 transition-transform active:scale-95"
            >
              <Download className="w-4 h-4" />
              Export as PDF
            </button>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => handleDownload('Regional_Telemetry_Export_CSV')}
                className="bg-white/10 hover:bg-white/20 py-4 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all border border-white/5 active:scale-95"
              >
                <FileText className="w-4 h-4" /> CSV
              </button>
              <button 
                onClick={() => handleDownload('Regional_Telemetry_Export_JSON')}
                className="bg-white/10 hover:bg-white/20 py-4 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all border border-white/5 active:scale-95"
              >
                <Layers className="w-4 h-4" /> JSON
              </button>
            </div>
          </div>
        </div>

        <div className="relative rounded-xxl overflow-hidden aspect-[4/3] group shadow-xl">
          <img 
            src="https://picsum.photos/seed/aerial/800/600" 
            className="w-full h-full object-cover grayscale transition-transform duration-[10s] group-hover:scale-110" 
            alt="Aerial view"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-6 right-6 px-3 py-1 bg-emerald-500 rounded text-[10px] font-black tracking-widest text-white uppercase shadow-lg animate-pulse">
            LIVE SYNC
          </div>
          <div className="absolute bottom-8 left-8 right-8">
            <div className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/50 uppercase mb-2">REGION VIEW</div>
            <h4 className="text-2xl font-display font-bold text-white leading-tight">Terminal Alpha Coverage</h4>
          </div>
        </div>

        <div className="p-8 bg-surface-container-high rounded-xxl border border-outline-variant/10 text-center space-y-2">
          <div className="text-[10px] font-mono font-bold tracking-widest text-on-surface-variant uppercase">ACTIVE PROJECT</div>
          <div className="text-lg font-display font-bold flex items-center justify-center gap-3">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            Northwest Pipeline V2
          </div>
        </div>
      </div>
    </div>
  );
}
