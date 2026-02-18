
import React from 'react';
import Layout from '../components/Layout';
import { ZONES } from '../data';
import { ZoneId } from '../types';

interface HomeProps {
  onSelectZone: (id: ZoneId) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectZone }) => {
  return (
    <Layout activeTab="home" onNavigate={() => {}}>
      <div className="px-4 py-6">
        <h2 className="text-3xl font-bold mb-2">Where to next?</h2>
        <p className="text-gray-500 mb-6">Discover the hidden gems of Tanzania</p>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
          </div>
          <input 
            className="block w-full pl-11 pr-4 py-4 bg-[#f0f4f1] border-none rounded-xl shadow-sm focus:ring-2 focus:ring-primary/50 text-base placeholder:text-gray-400 transition-all" 
            placeholder="Search Serengeti, Zanzibar, etc." 
            type="text" 
          />
        </div>
      </div>

      <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar mb-6">
        <button className="whitespace-nowrap px-6 py-2 rounded-full bg-primary text-white font-semibold text-sm">All Zones</button>
        {ZONES.map(z => (
          <button 
            key={z.id}
            onClick={() => onSelectZone(z.id)}
            className="whitespace-nowrap px-6 py-2 rounded-full bg-white text-gray-600 font-medium text-sm shadow-sm border border-gray-100 hover:border-primary/20"
          >
            {z.name.replace(' Zone', '')}
          </button>
        ))}
      </div>

      <div className="px-4 pt-4 pb-4">
        <h2 className="text-xl font-extrabold tracking-tight">Explore Safari Zones</h2>
        <p className="text-sm text-[#61896b]">Select a region to start your adventure</p>
      </div>

      <div className="flex-1 space-y-5 px-4 pb-24">
        {ZONES.map((zone, idx) => (
          <div 
            key={zone.id}
            onClick={() => onSelectZone(zone.id)}
            className={`group relative overflow-hidden rounded-xl bg-white shadow-md cursor-pointer transition-all hover:shadow-xl ${idx === 0 ? 'ring-2 ring-primary' : 'border border-[#f0f4f1]'}`}
          >
            <div className="relative h-48 w-full">
              <img 
                alt={zone.name} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                src={zone.image} 
              />
              <div className="glass-overlay absolute inset-0"></div>
              {idx === 0 && (
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                  Most Popular
                </span>
              )}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-primary/20 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2 inline-block">
                  {zone.tagline}
                </span>
                <h3 className="text-2xl font-bold text-white leading-none">{zone.name}</h3>
                <p className="text-xs font-medium text-white/80 mt-1">{zone.regions}</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-white">
              <div className="flex -space-x-2">
                <div className="h-7 w-7 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-[10px] font-bold">W</div>
                <div className="h-7 w-7 rounded-full border-2 border-white bg-green-200 text-green-800 flex items-center justify-center text-[10px] font-bold">NP</div>
              </div>
              <button className="rounded-lg bg-primary px-5 py-2 text-xs font-bold text-white transition-transform active:scale-95">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
