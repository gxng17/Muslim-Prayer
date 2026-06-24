import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Clock, Target, BookOpen } from "lucide-react";
import { clsx } from "clsx";

const navSections = [
{
  label: "MAIN",
  items: [
  { to: "/", icon: LayoutDashboard, label: "Overview" },
  { to: "/prayer-times", icon: Clock, label: "Prayer Times" }]

},
{
  label: "MANAGEMENT",
  items: [
  { to: "/prayer-goals", icon: Target, label: "Prayer Goals" },
  { to: "/inspirational-content", icon: BookOpen, label: "Inspirational Content" }]

}];


export default function Sidebar() {
  return (
    <aside
      style={{ width: "260px", minWidth: "260px" }}
      className="h-screen bg-slate-900 flex flex-col overflow-y-auto" data-source-id="/components/Sidebar.js:25:4">
      
      {/* Brand */}
      <div className="flex items-center gap-2 px-5 py-5 border-b border-slate-700" data-source-id="/components/Sidebar.js:30:6">
        <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center" data-source-id="/components/Sidebar.js:31:8">
          <BookOpen size={16} className="text-white" data-source-id="/components/Sidebar.js:32:10" />
        </div>
        <span className="text-white font-semibold text-base tracking-tight" data-source-id="/components/Sidebar.js:34:8">PrayerApp</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-6" data-source-id="/components/Sidebar.js:38:6">
        {navSections.map((section) =>
        <div key={section.label} data-source-id="/components/Sidebar.js:40:10">
            <p className="px-3 mb-2 text-xs font-semibold tracking-wider text-slate-500 uppercase" data-source-id="/components/Sidebar.js:41:12">
              {section.label}
            </p>
            <ul className="space-y-0.5" data-source-id="/components/Sidebar.js:44:12">
              {section.items.map(({ to, icon: Icon, label }) =>
            <li key={to} data-source-id="/components/Sidebar.js:46:16">
                  <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                clsx(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive ?
                  "bg-emerald-600 text-white" :
                  "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                )
                } data-source-id="/components/Sidebar.js:47:18">
                
                    <Icon size={16} data-source-id="/components/Sidebar.js:59:20" />
                    {label}
                  </NavLink>
                </li>
            )}
            </ul>
          </div>
        )}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-slate-700" data-source-id="/components/Sidebar.js:70:6">
        <p className="text-xs text-slate-600" data-source-id="/components/Sidebar.js:71:8">&copy; {new Date().getFullYear()} PrayerApp</p>
      </div>
    </aside>);

}