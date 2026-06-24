import React, { useState } from "react";
import { CheckCircle2, Circle, Clock, Sun, Sunrise, Sunset, Moon, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { prayerTimes } from "../lib/seed";

const prayerIcons = {
  Fajr: Sunrise,
  Dhuhr: Sun,
  Asr: Sun,
  Maghrib: Sunset,
  Isha: Moon
};

const prayerColors = {
  Fajr: { bg: "bg-indigo-50", icon: "text-indigo-500", badge: "bg-indigo-100 text-indigo-700" },
  Dhuhr: { bg: "bg-amber-50", icon: "text-amber-500", badge: "bg-amber-100 text-amber-700" },
  Asr: { bg: "bg-orange-50", icon: "text-orange-500", badge: "bg-orange-100 text-orange-700" },
  Maghrib: { bg: "bg-rose-50", icon: "text-rose-500", badge: "bg-rose-100 text-rose-700" },
  Isha: { bg: "bg-slate-100", icon: "text-slate-500", badge: "bg-slate-200 text-slate-700" }
};

function getNextPrayer(rows) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  for (const row of rows) {
    const [time, meridiem] = row.time.split(" ");
    const [h, m] = time.split(":").map(Number);
    let hours = h;
    if (meridiem === "PM" && h !== 12) hours += 12;
    if (meridiem === "AM" && h === 12) hours = 0;
    const rowMinutes = hours * 60 + m;
    if (rowMinutes > currentMinutes) return row.name;
  }
  return rows[0]?.name;
}

export default function PrayerTimes() {
  const [completed, setCompleted] = useState(() => {
    const initial = {};
    prayerTimes.forEach((p) => {initial[p.name] = p.completed ?? false;});
    return initial;
  });

  const nextPrayer = getNextPrayer(prayerTimes);

  function toggle(name) {
    setCompleted((prev) => ({ ...prev, [name]: !prev[name] }));
  }

  const completedCount = Object.values(completed).filter(Boolean).length;
  const total = prayerTimes.length;

  return (
    <div className="p-8 max-w-3xl mx-auto" data-source-id="/pages/PrayerTimes.js:54:4">
      {/* Header */}
      <div className="mb-8" data-source-id="/pages/PrayerTimes.js:56:6">
        <h1 className="text-2xl font-bold text-zinc-900" data-source-id="/pages/PrayerTimes.js:57:8">Prayer Times</h1>
        <p className="text-zinc-500 mt-1 text-sm" data-source-id="/pages/PrayerTimes.js:58:8">
          Today's schedule · {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>

      {/* Progress banner */}
      <div className="bg-emerald-600 rounded-2xl p-6 mb-8 text-white flex items-center justify-between" data-source-id="/pages/PrayerTimes.js:64:6">
        <div data-source-id="/pages/PrayerTimes.js:65:8">
          <p className="text-emerald-100 text-sm font-medium uppercase tracking-wider mb-1" data-source-id="/pages/PrayerTimes.js:66:10">Today's Progress</p>
          <p className="text-3xl font-bold" data-source-id="/pages/PrayerTimes.js:67:10">{completedCount} <span className="text-emerald-200 text-xl font-normal" data-source-id="/pages/PrayerTimes.js:67:61">/ {total} prayers</span></p>
          <p className="text-emerald-100 text-sm mt-1" data-source-id="/pages/PrayerTimes.js:68:10">
            {completedCount === total ?
            "All prayers completed — MashaAllah!" :
            `Next up: ${nextPrayer}`}
          </p>
        </div>
        <div className="flex flex-col items-center gap-1" data-source-id="/pages/PrayerTimes.js:74:8">
          <div className="relative w-16 h-16" data-source-id="/pages/PrayerTimes.js:75:10">
            <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64" data-source-id="/pages/PrayerTimes.js:76:12">
              <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="6" data-source-id="/pages/PrayerTimes.js:77:14" />
              <circle
                cx="32" cy="32" r="26"
                fill="none"
                stroke="white"
                strokeWidth="6"
                strokeDasharray={`${2 * Math.PI * 26}`}
                strokeDashoffset={`${2 * Math.PI * 26 * (1 - completedCount / total)}`}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.5s ease" }} data-source-id="/pages/PrayerTimes.js:78:14" />
              
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold" data-source-id="/pages/PrayerTimes.js:89:12">
              {Math.round(completedCount / total * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* Prayer list */}
      <div className="flex flex-col gap-3" data-source-id="/pages/PrayerTimes.js:97:6">
        {prayerTimes.map((prayer, idx) => {
          const Icon = prayerIcons[prayer.name] ?? Star;
          const colors = prayerColors[prayer.name] ?? prayerColors.Isha;
          const isDone = completed[prayer.name];
          const isNext = prayer.name === nextPrayer && !isDone;

          return (
            <motion.div
              key={prayer.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.3 }}
              className={`relative flex items-center gap-4 rounded-xl border p-5 transition-all duration-200 cursor-pointer select-none
                ${isDone ?
              "bg-zinc-50 border-zinc-200 opacity-70" :
              isNext ?
              "bg-white border-emerald-400 shadow-md ring-1 ring-emerald-300" :
              "bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-sm"}`
              }
              onClick={() => toggle(prayer.name)} data-source-id="/pages/PrayerTimes.js:105:12">
              
              {/* Icon box */}
              <div className={`rounded-lg p-3 ${colors.bg} flex-shrink-0`} data-source-id="/pages/PrayerTimes.js:120:14">
                <Icon className={`w-5 h-5 ${colors.icon}`} data-source-id="/pages/PrayerTimes.js:121:16" />
              </div>

              {/* Name + time */}
              <div className="flex-1 min-w-0" data-source-id="/pages/PrayerTimes.js:125:14">
                <div className="flex items-center gap-2 flex-wrap" data-source-id="/pages/PrayerTimes.js:126:16">
                  <span className={`font-semibold text-base ${isDone ? "line-through text-zinc-400" : "text-zinc-900"}`} data-source-id="/pages/PrayerTimes.js:127:18">
                    {prayer.name}
                  </span>
                  {isNext &&
                  <span className="text-xs font-medium bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full" data-source-id="/pages/PrayerTimes.js:131:20">
                      Next
                    </span>
                  }
                  {isDone &&
                  <span className="text-xs font-medium bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded-full" data-source-id="/pages/PrayerTimes.js:136:20">
                      Completed
                    </span>
                  }
                </div>
                <div className="flex items-center gap-1 mt-0.5 text-zinc-500 text-sm" data-source-id="/pages/PrayerTimes.js:141:16">
                  <Clock className="w-3.5 h-3.5" data-source-id="/pages/PrayerTimes.js:142:18" />
                  <span data-source-id="/pages/PrayerTimes.js:143:18">{prayer.time}</span>
                  {prayer.rakaat &&
                  <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${colors.badge}`} data-source-id="/pages/PrayerTimes.js:145:20">
                      {prayer.rakaat} Rak'ah
                    </span>
                  }
                </div>
              </div>

              {/* Check toggle */}
              <AnimatePresence mode="wait" data-source-id="/pages/PrayerTimes.js:153:14">
                {isDone ?
                <motion.div
                  key="checked"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  transition={{ duration: 0.15 }} data-source-id="/pages/PrayerTimes.js:155:18">
                  
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" data-source-id="/pages/PrayerTimes.js:162:20" />
                  </motion.div> :

                <motion.div
                  key="unchecked"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  transition={{ duration: 0.15 }} data-source-id="/pages/PrayerTimes.js:165:18">
                  
                    <Circle className="w-6 h-6 text-zinc-300" data-source-id="/pages/PrayerTimes.js:172:20" />
                  </motion.div>
                }
              </AnimatePresence>
            </motion.div>);

        })}
      </div>

      <p className="text-center text-xs text-zinc-400 mt-8" data-source-id="/pages/PrayerTimes.js:181:6">
        Tap a prayer to mark it as completed · Times shown for your local timezone
      </p>
    </div>);

}