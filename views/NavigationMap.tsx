
import React from 'react';
import Layout from '../components/Layout';

interface MapProps {
  onBack: () => void;
}

const NavigationMap: React.FC<MapProps> = ({ onBack }) => {
  return (
    <Layout activeTab="map" onNavigate={() => {}} onBack={onBack} title="Offline Navigation">
      <div className="h-full flex flex-col">
        {/* Map Status Bar */}
        <div className="flex items-center justify-between bg-primary/10 px-4 py-2 border-b border-primary/20">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm font-bold">cloud_off</span>
            <p className="text-[10px] font-bold uppercase tracking-wider text-primary">Offline Mode Active</p>
          </div>
          <p className="text-[10px] text-gray-500 font-medium">Map updated 2h ago</p>
        </div>

        {/* Interactive Map Area */}
        <div className="relative flex-1 bg-slate-200 overflow-hidden">
          {/* Simulated Map Background */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAW2yE3zJk5qP9NJO9iUeVqyn6yFNfRXV9rh4n74kXkoQSPN5kzE-Y7HCOaHV-vdn92DqJ8oteTvi7fBQMZCHqDN0IJE-FPigK0nA-yXgWWJ_esB78PmCwWDmiHsXHGethgKrSkEiiPu3Pp00VG9aMdPmmmG9-l2hUnlkLJF0lyFu_WjTBED3qDoqT4mBLau1518GDItk89uF5c1qS9O_IWHMOk53TDAPThLuvDM-h4kB5fNZlv5GwUTfbe6xle4bVhJzzFchHRHg')" }}>
            
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 border-2 border-dashed border-primary/40 flex items-center justify-center">
              <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">Safe Passage Zone</span>
            </div>
            
            <div className="absolute bottom-40 right-10 w-48 h-48 rounded-full bg-red-500/10 border-2 border-dashed border-red-500/30 flex items-center justify-center rotate-12">
              <span className="text-[10px] font-bold text-red-500/60 uppercase tracking-widest text-center leading-tight">High Risk Area<br/>(Predator Activity)</span>
            </div>

            {/* Path Marker */}
            <div className="absolute left-[242px] top-[442px] z-10">
              <div className="relative flex h-6 w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-primary border-4 border-white shadow-lg"></span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute right-4 top-4 flex flex-col gap-2 z-20">
            <button className="flex size-11 items-center justify-center rounded-lg bg-white shadow-lg text-gray-700">
              <span className="material-symbols-outlined">explore</span>
            </button>
            <div className="flex flex-col rounded-lg bg-white shadow-lg overflow-hidden">
              <button className="flex size-11 items-center justify-center border-b border-gray-100 text-gray-700">
                <span className="material-symbols-outlined">add</span>
              </button>
              <button className="flex size-11 items-center justify-center text-gray-700">
                <span className="material-symbols-outlined">remove</span>
              </button>
            </div>
            <button className="flex size-11 items-center justify-center rounded-lg bg-white shadow-lg text-primary">
              <span className="material-symbols-outlined">my_location</span>
            </button>
          </div>

          <div className="absolute left-4 top-4 z-20">
            <button className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-lg border border-gray-100">
              <span className="material-symbols-outlined text-red-500 text-xl">report</span>
              <span className="text-sm font-bold text-gray-800">Report Issue</span>
            </button>
          </div>
        </div>

        {/* Progress Drawer */}
        <div className="bg-white rounded-t-3xl shadow-[0_-8px_30px_rgb(0,0,0,0.12)] border-t border-gray-100 p-6 pt-2">
          <div className="flex justify-center py-2 mb-4">
            <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
          </div>
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 leading-none">Route Progress</p>
              <h2 className="text-xl font-bold">To Seronera Camp</h2>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-primary">4.2</span>
              <span className="text-sm font-bold text-gray-400 ml-1">km left</span>
            </div>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full mb-6 overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: '65%' }}></div>
          </div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div>
              <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Est. Time</p>
              <p className="text-lg font-bold">1h 20m</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Elevation</p>
              <p className="text-lg font-bold">1,500m</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Next Gain</p>
              <p className="text-lg font-bold text-primary">+120m</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NavigationMap;
