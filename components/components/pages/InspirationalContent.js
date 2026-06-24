import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Heart, Share2, RefreshCw, Search, Tag, ChevronRight, Star, Quote } from "lucide-react";
import { inspirationalContent } from "../lib/seed";

const CATEGORIES = ["All", "Quran", "Hadith", "Dua", "Reflection"];

export default function InspirationalContent() {
  const [liked, setLiked] = useState({});
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [shared, setShared] = useState(null);

  const quotes = useMemo(
    () => inspirationalContent.filter((item) => item.featured),
    []
  );

  const filtered = useMemo(() => {
    return inspirationalContent.filter((item) => {
      const matchesSearch =
      search.trim() === "" ||
      item.text.toLowerCase().includes(search.toLowerCase()) ||
      item.source.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const quoteOfDay = quotes[quoteIndex % quotes.length];

  function toggleLike(id) {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function handleShare(id) {
    setShared(id);
    setTimeout(() => setShared(null), 1800);
  }

  function cycleQuote() {
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
  }

  return (
    <div className="p-8 max-w-5xl mx-auto" data-source-id="/pages/InspirationalContent.js:48:4">
      {/* Header */}
      <div className="mb-8" data-source-id="/pages/InspirationalContent.js:50:6">
        <h1 className="text-2xl font-bold text-zinc-900" data-source-id="/pages/InspirationalContent.js:51:8">Inspirational Content</h1>
        <p className="text-zinc-500 mt-1 text-sm" data-source-id="/pages/InspirationalContent.js:52:8">
          Daily reflections, Quranic verses, and hadith to nourish your heart.
        </p>
      </div>

      {/* Quote of the Day */}
      <AnimatePresence mode="wait" data-source-id="/pages/InspirationalContent.js:58:6">
        <motion.div
          key={quoteIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="relative bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl p-8 mb-8 overflow-hidden" data-source-id="/pages/InspirationalContent.js:59:8">
          
          <div className="absolute top-4 right-4 opacity-10" data-source-id="/pages/InspirationalContent.js:67:10">
            <Quote size={96} className="text-white" data-source-id="/pages/InspirationalContent.js:68:12" />
          </div>
          <div className="flex items-center gap-2 mb-4" data-source-id="/pages/InspirationalContent.js:70:10">
            <Star size={14} className="text-emerald-300" data-source-id="/pages/InspirationalContent.js:71:12" />
            <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wider" data-source-id="/pages/InspirationalContent.js:72:12">
              Quote of the Day
            </span>
          </div>
          <p className="text-white text-xl font-medium leading-relaxed mb-4 max-w-2xl" data-source-id="/pages/InspirationalContent.js:76:10">
            &ldquo;{quoteOfDay?.text}&rdquo;
          </p>
          <p className="text-emerald-300 text-sm font-medium" data-source-id="/pages/InspirationalContent.js:79:10">
            — {quoteOfDay?.source}
          </p>
          <div className="flex items-center gap-3 mt-6" data-source-id="/pages/InspirationalContent.js:82:10">
            <button
              onClick={() => toggleLike(quoteOfDay?.id)}
              className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg transition-colors ${
              liked[quoteOfDay?.id] ?
              "bg-rose-500 text-white" :
              "bg-white/10 text-white hover:bg-white/20"}`
              } data-source-id="/pages/InspirationalContent.js:83:12">
              
              <Heart size={14} fill={liked[quoteOfDay?.id] ? "currentColor" : "none"} data-source-id="/pages/InspirationalContent.js:91:14" />
              {liked[quoteOfDay?.id] ? "Liked" : "Like"}
            </button>
            <button
              onClick={() => handleShare(quoteOfDay?.id)}
              className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors" data-source-id="/pages/InspirationalContent.js:94:12">
              
              <Share2 size={14} data-source-id="/pages/InspirationalContent.js:98:14" />
              {shared === quoteOfDay?.id ? "Copied!" : "Share"}
            </button>
            <button
              onClick={cycleQuote}
              className="ml-auto flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors" data-source-id="/pages/InspirationalContent.js:101:12">
              
              <RefreshCw size={14} data-source-id="/pages/InspirationalContent.js:105:14" />
              Next quote
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6" data-source-id="/pages/InspirationalContent.js:113:6">
        <div className="relative flex-1" data-source-id="/pages/InspirationalContent.js:114:8">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" data-source-id="/pages/InspirationalContent.js:115:10" />
          <input
            type="text"
            placeholder="Search verses, hadith, reflections…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-zinc-200 rounded-lg bg-white text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" data-source-id="/pages/InspirationalContent.js:116:10" />
          
        </div>
        <div className="flex gap-2 flex-wrap" data-source-id="/pages/InspirationalContent.js:124:8">
          {CATEGORIES.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            activeCategory === cat ?
            "bg-emerald-600 text-white" :
            "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`
            } data-source-id="/pages/InspirationalContent.js:126:12">
            
              {cat}
            </button>
          )}
        </div>
      </div>

      {/* Content Grid */}
      {filtered.length === 0 ?
      <div className="text-center py-16 text-zinc-400" data-source-id="/pages/InspirationalContent.js:143:8">
          <BookOpen size={36} className="mx-auto mb-3 opacity-40" data-source-id="/pages/InspirationalContent.js:144:10" />
          <p className="text-sm" data-source-id="/pages/InspirationalContent.js:145:10">No content matches your search.</p>
        </div> :

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-source-id="/pages/InspirationalContent.js:148:8">
          {filtered.map((item, i) =>
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04, duration: 0.25 }}
          className="bg-white border border-zinc-200 rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow" data-source-id="/pages/InspirationalContent.js:150:12">
          
              <div className="flex items-start justify-between gap-2" data-source-id="/pages/InspirationalContent.js:157:14">
                <span
              className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
              item.category === "Quran" ?
              "bg-emerald-50 text-emerald-700" :
              item.category === "Hadith" ?
              "bg-sky-50 text-sky-700" :
              item.category === "Dua" ?
              "bg-violet-50 text-violet-700" :
              "bg-amber-50 text-amber-700"}`
              } data-source-id="/pages/InspirationalContent.js:158:16">
              
                  <Tag size={10} data-source-id="/pages/InspirationalContent.js:169:18" />
                  {item.category}
                </span>
                {item.featured &&
            <Star size={13} className="text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" data-source-id="/pages/InspirationalContent.js:173:18" />
            }
              </div>

              <p className="text-zinc-800 text-sm leading-relaxed flex-1" data-source-id="/pages/InspirationalContent.js:177:14">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-1" data-source-id="/pages/InspirationalContent.js:181:14">
                <p className="text-zinc-400 text-xs font-medium" data-source-id="/pages/InspirationalContent.js:182:16">{item.source}</p>
                <div className="flex items-center gap-1" data-source-id="/pages/InspirationalContent.js:183:16">
                  <button
                onClick={() => toggleLike(item.id)}
                className={`p-1.5 rounded-lg transition-colors ${
                liked[item.id] ?
                "text-rose-500 bg-rose-50" :
                "text-zinc-400 hover:text-rose-400 hover:bg-rose-50"}`
                } data-source-id="/pages/InspirationalContent.js:184:18">
                
                    <Heart size={14} fill={liked[item.id] ? "currentColor" : "none"} data-source-id="/pages/InspirationalContent.js:192:20" />
                  </button>
                  <button
                onClick={() => handleShare(item.id)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors" data-source-id="/pages/InspirationalContent.js:194:18">
                
                    {shared === item.id ?
                <span className="text-xs text-emerald-600 font-medium px-1" data-source-id="/pages/InspirationalContent.js:199:22">Copied!</span> :

                <Share2 size={14} data-source-id="/pages/InspirationalContent.js:201:22" />
                }
                  </button>
                  <button className="p-1.5 rounded-lg text-zinc-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors" data-source-id="/pages/InspirationalContent.js:204:18">
                    <ChevronRight size={14} data-source-id="/pages/InspirationalContent.js:205:20" />
                  </button>
                </div>
              </div>
            </motion.div>
        )}
        </div>
      }
    </div>);

}