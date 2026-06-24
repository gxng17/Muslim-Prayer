import React from "react";
import { motion } from "framer-motion";
import { Clock, Target, BookOpen, Bell, CheckCircle2, Star, Moon } from "lucide-react";
import StatCard from "../components/StatCard";
import { prayerTimes, prayerGoals, inspirationalContent } from "../lib/seed";

const recentActivity = [
{ id: 1, type: "prayer", message: "Fajr prayer completed", time: "5:12 AM", icon: CheckCircle2, color: "text-emerald-600" },
{ id: 2, type: "goal", message: "Goal 'Pray all 5 daily prayers' — streak extended to 7 days", time: "6:00 AM", icon: Star, color: "text-amber-500" },
{ id: 3, type: "prayer", message: "Dhuhr prayer completed", time: "1:08 PM", icon: CheckCircle2, color: "text-emerald-600" },
{ id: 4, type: "inspiration", message: "New inspirational quote available", time: "2:00 PM", icon: BookOpen, color: "text-sky-500" },
{ id: 5, type: "prayer", message: "Asr prayer completed", time: "4:45 PM", icon: CheckCircle2, color: "text-emerald-600" },
{ id: 6, type: "goal", message: "Goal 'Read Quran daily' marked complete for today", time: "7:30 PM", icon: Star, color: "text-amber-500" },
{ id: 7, type: "prayer", message: "Maghrib prayer completed", time: "7:52 PM", icon: CheckCircle2, color: "text-emerald-600" }];


function getNextPrayer() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const upcoming = [...prayerTimes].find((p) => {
    const [h, m] = p.time.replace(/ (AM|PM)/, "").split(":").map(Number);
    const isPM = p.time.includes("PM") && h !== 12;
    const isAM = p.time.includes("AM") && h === 12;
    const hour24 = isPM ? h + 12 : isAM ? 0 : h;
    return hour24 * 60 + m > currentMinutes;
  });
  return upcoming ? upcoming.name : "Fajr (tomorrow)";
}

function getGoalsAchieved() {
  return prayerGoals.filter((g) => g.status === "completed").length;
}

export default function Overview() {
  const nextPrayer = getNextPrayer();
  const goalsAchieved = getGoalsAchieved();
  const totalPrayerTimes = prayerTimes.length;
  const totalQuotes = inspirationalContent.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-8 space-y-8" data-source-id="/pages/Overview.js:41:4">
      
      {/* Header */}
      <div data-source-id="/pages/Overview.js:48:6">
        <h1 className="text-2xl font-bold text-zinc-900" data-source-id="/pages/Overview.js:49:8">Overview</h1>
        <p className="text-sm text-zinc-500 mt-1" data-source-id="/pages/Overview.js:50:8">Your daily prayer dashboard — stay consistent, stay connected.</p>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5" data-source-id="/pages/Overview.js:54:6">
        <StatCard
          label="Daily Prayer Times"
          value={totalPrayerTimes}
          delta={0}
          icon={Clock}
          iconColor="bg-emerald-50 text-emerald-600" data-source-id="/pages/Overview.js:55:8" />
        
        <StatCard
          label="Goals Achieved"
          value={goalsAchieved}
          delta={1}
          icon={Target}
          iconColor="bg-sky-50 text-sky-600" data-source-id="/pages/Overview.js:62:8" />
        
        <StatCard
          label="Inspirational Quotes"
          value={totalQuotes}
          delta={2}
          icon={BookOpen}
          iconColor="bg-amber-50 text-amber-600" data-source-id="/pages/Overview.js:69:8" />
        
        <StatCard
          label="Next Prayer"
          value={nextPrayer}
          delta={null}
          icon={Bell}
          iconColor="bg-violet-50 text-violet-600" data-source-id="/pages/Overview.js:76:8" />
        
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden" data-source-id="/pages/Overview.js:86:6">
        <div className="px-6 py-4 border-b border-zinc-100 flex items-center gap-2" data-source-id="/pages/Overview.js:87:8">
          <Moon size={16} className="text-emerald-600" data-source-id="/pages/Overview.js:88:10" />
          <h2 className="text-sm font-semibold text-zinc-800 uppercase tracking-wider" data-source-id="/pages/Overview.js:89:10">Recent Activity</h2>
        </div>
        <ul className="divide-y divide-zinc-100" data-source-id="/pages/Overview.js:91:8">
          {recentActivity.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id} className="flex items-center gap-4 px-6 py-4 hover:bg-zinc-50 transition-colors" data-source-id="/pages/Overview.js:95:14">
                <span className={`flex-shrink-0 ${item.color}`} data-source-id="/pages/Overview.js:96:16">
                  <Icon size={18} data-source-id="/pages/Overview.js:97:18" />
                </span>
                <span className="flex-1 text-sm text-zinc-700" data-source-id="/pages/Overview.js:99:16">{item.message}</span>
                <span className="text-xs text-zinc-400 whitespace-nowrap" data-source-id="/pages/Overview.js:100:16">{item.time}</span>
              </li>);

          })}
        </ul>
      </div>
    </motion.div>);

}