import React from "react";
import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-14 bg-white border-b border-zinc-200 flex items-center justify-between px-6 shrink-0" data-source-id="/components/Topbar.js:6:4">
      {/* Search */}
      <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-1.5 w-64" data-source-id="/components/Topbar.js:8:6">
        <Search size={15} className="text-zinc-400 shrink-0" data-source-id="/components/Topbar.js:9:8" />
        <input
          type="text"
          placeholder="Search…"
          className="bg-transparent text-sm text-zinc-700 placeholder-zinc-400 outline-none w-full" data-source-id="/components/Topbar.js:10:8" />
        
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3" data-source-id="/components/Topbar.js:18:6">
        {/* Bell */}
        <button className="relative w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-100 transition-colors" data-source-id="/components/Topbar.js:20:8">
          <Bell size={17} className="text-zinc-500" data-source-id="/components/Topbar.js:21:10" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500" data-source-id="/components/Topbar.js:22:10" />
        </button>

        {/* User chip */}
        <div className="flex items-center gap-2 pl-1" data-source-id="/components/Topbar.js:26:8">
          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center" data-source-id="/components/Topbar.js:27:10">
            <span className="text-xs font-semibold text-white" data-source-id="/components/Topbar.js:28:12">AL</span>
          </div>
          <div className="hidden sm:flex flex-col leading-tight" data-source-id="/components/Topbar.js:30:10">
            <span className="text-sm font-medium text-zinc-800" data-source-id="/components/Topbar.js:31:12">Aisha Latif</span>
            <span className="text-xs text-zinc-400" data-source-id="/components/Topbar.js:32:12">User</span>
          </div>
        </div>
      </div>
    </header>);

}