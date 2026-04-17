import React, { useState } from 'react';
import NewScanModal from './NewScanModal';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  History, 
  BookOpen, 
  Info, 
  Database, 
  Map as MapIcon, 
  FileText, 
  Users, 
  Settings,
  Plus,
  Folder,
  Clock
} from 'lucide-react';
import { cn } from '../../lib/utils';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'OVERVIEW', path: '/dashboard' },
  { icon: Database, label: 'ASSETS', path: '/assets' },
  { icon: Users, label: 'WORKFORCE', path: '/workforce' },
  { icon: Folder, label: 'DATA INSIGHTS', path: '/datasets' },
  { icon: Clock, label: 'RECENT SCANS', path: '/recent' },
  { icon: History, label: 'DATA LOGS', path: '/history' },
  { icon: FileText, label: 'REPORTS', path: '/reports' },
  { icon: Info, label: 'ABOUT US', path: '/' },
];

export default function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <aside className="w-64 bg-surface-container-low flex flex-col h-screen sticky top-0 border-r border-outline-variant/10">
      <div className="p-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Database className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="font-display font-bold text-lg leading-tight">ArborX AI</h1>
          <p className="text-[10px] font-mono text-on-surface-variant tracking-widest uppercase">V2.4.0-TECHNICAL</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-4 px-4 py-3 rounded-md transition-all group",
              isActive 
                ? "bg-surface-container-lowest shadow-sm text-primary" 
                : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-medium"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs font-bold tracking-wider">{item.label}</span>
            {item.path === '/dashboard' && <div className="ml-auto w-1 h-1 bg-primary rounded-full" />}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-primary hover:bg-primary-container text-white py-3 rounded-md flex items-center justify-center gap-2 transition-colors shadow-lg"
        >
          <Plus className="w-4 h-4" />
          <span className="text-sm font-bold">Start New Scan</span>
        </button>
        
        <div className="mt-6 pt-6 border-t border-outline-variant/20">
          <NavLink
            to="/settings"
            className={({ isActive }) => cn(
              "flex items-center gap-4 px-4 py-3 rounded-md transition-all text-on-surface-variant",
              isActive ? "text-primary" : "hover:text-on-surface"
            )}
          >
            <Settings className="w-5 h-5" />
            <span className="text-xs font-bold tracking-wider uppercase">Settings</span>
          </NavLink>
          <div className="flex items-center gap-4 px-4 py-3 rounded-md text-on-surface-variant">
            <Info className="w-5 h-5" />
            <span className="text-xs font-bold tracking-wider uppercase underline underline-offset-4 cursor-pointer">Support</span>
          </div>
        </div>
      </div>
    </aside>
    <NewScanModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
