import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Overview from "./pages/Overview";
import PrayerTimes from "./pages/PrayerTimes";
import PrayerGoals from "./pages/PrayerGoals";
import InspirationalContent from "./pages/InspirationalContent";

export default function App() {
  return (
    <HashRouter data-source-id="/App.js:12:4">
      <div className="flex h-screen bg-stone-50 overflow-hidden" data-source-id="/App.js:13:6">
        <Sidebar data-source-id="/App.js:14:8" />
        <div className="flex flex-col flex-1 overflow-hidden" data-source-id="/App.js:15:8">
          <Topbar data-source-id="/App.js:16:10" />
          <main className="flex-1 overflow-y-auto" data-source-id="/App.js:17:10">
            <Routes data-source-id="/App.js:18:12">
              <Route path="/" element={<Overview data-source-id="/App.js:19:39" />} data-source-id="/App.js:19:14" />
              <Route path="/prayer-times" element={<PrayerTimes data-source-id="/App.js:20:51" />} data-source-id="/App.js:20:14" />
              <Route path="/prayer-goals" element={<PrayerGoals data-source-id="/App.js:21:51" />} data-source-id="/App.js:21:14" />
              <Route path="/inspirational-content" element={<InspirationalContent data-source-id="/App.js:22:60" />} data-source-id="/App.js:22:14" />
              <Route path="*" element={<Navigate to="/" replace data-source-id="/App.js:23:39" />} data-source-id="/App.js:23:14" />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>);

}