import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Plus, CheckCircle2, Circle, Trash2, X, ChevronDown } from "lucide-react";
import { goals as seedGoals } from "../lib/seed";

const FREQUENCIES = ["Daily", "Weekly", "Monthly"];
const CATEGORIES = ["Fard", "Sunnah", "Nafl", "Dhikr", "Quran", "Other"];

export default function PrayerGoals() {
  const [goals, setGoals] = useState(() =>
  seedGoals.map((g) => ({ ...g }))
  );
  const [showModal, setShowModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const [form, setForm] = useState({
    title: "",
    category: "Fard",
    frequency: "Daily",
    target: "",
    description: ""
  });
  const [formError, setFormError] = useState("");

  const toggleComplete = (id) => {
    setGoals((prev) =>
    prev.map((g) =>
    g.id === id ? { ...g, completed: !g.completed } : g
    )
    );
  };

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((g) => g.id !== id));
  };

  const handleFormChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddGoal = () => {
    if (!form.title.trim()) {
      setFormError("Goal title is required.");
      return;
    }
    if (!form.target || isNaN(Number(form.target)) || Number(form.target) < 1) {
      setFormError("Please enter a valid target number.");
      return;
    }
    const newGoal = {
      id: Date.now(),
      title: form.title.trim(),
      category: form.category,
      frequency: form.frequency,
      target: Number(form.target),
      progress: 0,
      completed: false,
      description: form.description.trim()
    };
    setGoals((prev) => [newGoal, ...prev]);
    setForm({ title: "", category: "Fard", frequency: "Daily", target: "", description: "" });
    setFormError("");
    setShowModal(false);
  };

  const incrementProgress = (id) => {
    setGoals((prev) =>
    prev.map((g) => {
      if (g.id !== id) return g;
      const next = Math.min(g.progress + 1, g.target);
      return { ...g, progress: next, completed: next >= g.target };
    })
    );
  };

  const filtered = goals.filter((g) => {
    if (filterStatus === "Active") return !g.completed;
    if (filterStatus === "Completed") return g.completed;
    return true;
  });

  const completedCount = goals.filter((g) => g.completed).length;
  const activeCount = goals.filter((g) => !g.completed).length;

  return (
    <div className="p-8 min-h-screen bg-stone-50" data-source-id="/pages/PrayerGoals.js:85:4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8" data-source-id="/pages/PrayerGoals.js:87:6">
        <div data-source-id="/pages/PrayerGoals.js:88:8">
          <h1 className="text-2xl font-bold text-zinc-900" data-source-id="/pages/PrayerGoals.js:89:10">Prayer Goals</h1>
          <p className="text-sm text-zinc-500 mt-1" data-source-id="/pages/PrayerGoals.js:90:10">
            Track and manage your personal prayer objectives.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors" data-source-id="/pages/PrayerGoals.js:94:8">
          
          <Plus size={16} data-source-id="/pages/PrayerGoals.js:98:10" />
          New Goal
        </button>
      </div>

      {/* Summary strip */}
      <div className="grid grid-cols-3 gap-4 mb-8" data-source-id="/pages/PrayerGoals.js:104:6">
        {[
        { label: "Total Goals", value: goals.length, color: "bg-zinc-100 text-zinc-700" },
        { label: "Active", value: activeCount, color: "bg-emerald-50 text-emerald-700" },
        { label: "Completed", value: completedCount, color: "bg-sky-50 text-sky-700" }].
        map((s) =>
        <div
          key={s.label}
          className="bg-white rounded-xl border border-zinc-200 p-5 flex items-center gap-4" data-source-id="/pages/PrayerGoals.js:110:10">
          
            <span className={`text-3xl font-bold ${s.color.split(" ")[1]}`} data-source-id="/pages/PrayerGoals.js:114:12">{s.value}</span>
            <span className="text-sm text-zinc-500" data-source-id="/pages/PrayerGoals.js:115:12">{s.label}</span>
          </div>
        )}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6" data-source-id="/pages/PrayerGoals.js:121:6">
        {["All", "Active", "Completed"].map((tab) =>
        <button
          key={tab}
          onClick={() => setFilterStatus(tab)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
          filterStatus === tab ?
          "bg-emerald-600 text-white" :
          "bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50"}`
          } data-source-id="/pages/PrayerGoals.js:123:10">
          
            {tab}
          </button>
        )}
      </div>

      {/* Goals list */}
      <div className="space-y-3" data-source-id="/pages/PrayerGoals.js:138:6">
        <AnimatePresence initial={false} data-source-id="/pages/PrayerGoals.js:139:8">
          {filtered.length === 0 &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-zinc-400 text-sm" data-source-id="/pages/PrayerGoals.js:141:12">
            
              No goals here yet. Add one above.
            </motion.div>
          }
          {filtered.map((goal) => {
            const pct = goal.target > 0 ? Math.round(goal.progress / goal.target * 100) : 0;
            return (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.18 }}
                className={`bg-white rounded-xl border ${
                goal.completed ? "border-emerald-200" : "border-zinc-200"} p-5`
                } data-source-id="/pages/PrayerGoals.js:152:14">
                
                <div className="flex items-start gap-4" data-source-id="/pages/PrayerGoals.js:162:16">
                  {/* Toggle */}
                  <button
                    onClick={() => toggleComplete(goal.id)}
                    className="mt-0.5 flex-shrink-0"
                    title={goal.completed ? "Mark incomplete" : "Mark complete"} data-source-id="/pages/PrayerGoals.js:164:18">
                    
                    {goal.completed ?
                    <CheckCircle2 size={22} className="text-emerald-500" data-source-id="/pages/PrayerGoals.js:170:22" /> :

                    <Circle size={22} className="text-zinc-300 hover:text-emerald-400 transition-colors" data-source-id="/pages/PrayerGoals.js:172:22" />
                    }
                  </button>

                  {/* Content */}
                  <div className="flex-1 min-w-0" data-source-id="/pages/PrayerGoals.js:177:18">
                    <div className="flex items-center gap-2 flex-wrap" data-source-id="/pages/PrayerGoals.js:178:20">
                      <span
                        className={`font-semibold text-zinc-900 ${
                        goal.completed ? "line-through text-zinc-400" : ""}`
                        } data-source-id="/pages/PrayerGoals.js:179:22">
                        
                        {goal.title}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium" data-source-id="/pages/PrayerGoals.js:186:22">
                        {goal.category}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500" data-source-id="/pages/PrayerGoals.js:189:22">
                        {goal.frequency}
                      </span>
                    </div>
                    {goal.description ?
                    <p className="text-sm text-zinc-500 mt-1" data-source-id="/pages/PrayerGoals.js:194:22">{goal.description}</p> :
                    null}

                    {/* Progress bar */}
                    <div className="mt-3" data-source-id="/pages/PrayerGoals.js:198:20">
                      <div className="flex items-center justify-between mb-1" data-source-id="/pages/PrayerGoals.js:199:22">
                        <span className="text-xs text-zinc-400" data-source-id="/pages/PrayerGoals.js:200:24">
                          {goal.progress} / {goal.target} completed
                        </span>
                        <span className="text-xs font-medium text-emerald-600" data-source-id="/pages/PrayerGoals.js:203:24">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden" data-source-id="/pages/PrayerGoals.js:205:22">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                          style={{ width: `${pct}%` }} data-source-id="/pages/PrayerGoals.js:206:24" />
                        
                      </div>
                    </div>

                    {/* Log progress button */}
                    {!goal.completed &&
                    <button
                      onClick={() => incrementProgress(goal.id)}
                      className="mt-3 text-xs font-medium text-emerald-600 hover:text-emerald-700 underline underline-offset-2 transition-colors" data-source-id="/pages/PrayerGoals.js:215:22">
                      
                        + Log one completion
                      </button>
                    }
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => deleteGoal(goal.id)}
                    className="flex-shrink-0 text-zinc-300 hover:text-rose-400 transition-colors mt-0.5"
                    title="Delete goal" data-source-id="/pages/PrayerGoals.js:225:18">
                    
                    <Trash2 size={16} data-source-id="/pages/PrayerGoals.js:230:20" />
                  </button>
                </div>
              </motion.div>);

          })}
        </AnimatePresence>
      </div>

      {/* Add Goal Modal */}
      <AnimatePresence data-source-id="/pages/PrayerGoals.js:240:6">
        {showModal &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          onClick={(e) => {if (e.target === e.currentTarget) setShowModal(false);}} data-source-id="/pages/PrayerGoals.js:242:10">
          
            <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.18 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6" data-source-id="/pages/PrayerGoals.js:249:12">
            
              <div className="flex items-center justify-between mb-5" data-source-id="/pages/PrayerGoals.js:256:14">
                <div className="flex items-center gap-2" data-source-id="/pages/PrayerGoals.js:257:16">
                  <Target size={18} className="text-emerald-600" data-source-id="/pages/PrayerGoals.js:258:18" />
                  <h2 className="text-base font-semibold text-zinc-900" data-source-id="/pages/PrayerGoals.js:259:18">New Prayer Goal</h2>
                </div>
                <button onClick={() => setShowModal(false)} className="text-zinc-400 hover:text-zinc-600" data-source-id="/pages/PrayerGoals.js:261:16">
                  <X size={18} data-source-id="/pages/PrayerGoals.js:262:18" />
                </button>
              </div>

              <div className="space-y-4" data-source-id="/pages/PrayerGoals.js:266:14">
                <div data-source-id="/pages/PrayerGoals.js:267:16">
                  <label className="block text-xs font-medium text-zinc-500 mb-1" data-source-id="/pages/PrayerGoals.js:268:18">Goal Title *</label>
                  <input
                  type="text"
                  value={form.title}
                  onChange={(e) => handleFormChange("title", e.target.value)}
                  placeholder="e.g. Pray Fajr on time every day"
                  className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" data-source-id="/pages/PrayerGoals.js:269:18" />
                
                </div>

                <div className="grid grid-cols-2 gap-3" data-source-id="/pages/PrayerGoals.js:278:16">
                  <div data-source-id="/pages/PrayerGoals.js:279:18">
                    <label className="block text-xs font-medium text-zinc-500 mb-1" data-source-id="/pages/PrayerGoals.js:280:20">Category</label>
                    <div className="relative" data-source-id="/pages/PrayerGoals.js:281:20">
                      <select
                      value={form.category}
                      onChange={(e) => handleFormChange("category", e.target.value)}
                      className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-900 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white" data-source-id="/pages/PrayerGoals.js:282:22">
                      
                        {CATEGORIES.map((c) => <option key={c} data-source-id="/pages/PrayerGoals.js:287:47">{c}</option>)}
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" data-source-id="/pages/PrayerGoals.js:289:22" />
                    </div>
                  </div>
                  <div data-source-id="/pages/PrayerGoals.js:292:18">
                    <label className="block text-xs font-medium text-zinc-500 mb-1" data-source-id="/pages/PrayerGoals.js:293:20">Frequency</label>
                    <div className="relative" data-source-id="/pages/PrayerGoals.js:294:20">
                      <select
                      value={form.frequency}
                      onChange={(e) => handleFormChange("frequency", e.target.value)}
                      className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-900 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white" data-source-id="/pages/PrayerGoals.js:295:22">
                      
                        {FREQUENCIES.map((f) => <option key={f} data-source-id="/pages/PrayerGoals.js:300:48">{f}</option>)}
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" data-source-id="/pages/PrayerGoals.js:302:22" />
                    </div>
                  </div>
                </div>

                <div data-source-id="/pages/PrayerGoals.js:307:16">
                  <label className="block text-xs font-medium text-zinc-500 mb-1" data-source-id="/pages/PrayerGoals.js:308:18">Target (number of completions) *</label>
                  <input
                  type="number"
                  min="1"
                  value={form.target}
                  onChange={(e) => handleFormChange("target", e.target.value)}
                  placeholder="e.g. 30"
                  className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" data-source-id="/pages/PrayerGoals.js:309:18" />
                
                </div>

                <div data-source-id="/pages/PrayerGoals.js:319:16">
                  <label className="block text-xs font-medium text-zinc-500 mb-1" data-source-id="/pages/PrayerGoals.js:320:18">Description (optional)</label>
                  <textarea
                  value={form.description}
                  onChange={(e) => handleFormChange("description", e.target.value)}
                  placeholder="Why this goal matters to you…"
                  rows={2}
                  className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none" data-source-id="/pages/PrayerGoals.js:321:18" />
                
                </div>

                {formError &&
              <p className="text-xs text-rose-500" data-source-id="/pages/PrayerGoals.js:331:18">{formError}</p>
              }
              </div>

              <div className="flex gap-3 mt-6" data-source-id="/pages/PrayerGoals.js:335:14">
                <button
                onClick={() => {setShowModal(false);setFormError("");}}
                className="flex-1 border border-zinc-200 text-zinc-600 text-sm font-medium py-2 rounded-lg hover:bg-zinc-50 transition-colors" data-source-id="/pages/PrayerGoals.js:336:16">
                
                  Cancel
                </button>
                <button
                onClick={handleAddGoal}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2 rounded-lg transition-colors" data-source-id="/pages/PrayerGoals.js:342:16">
                
                  Add Goal
                </button>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}