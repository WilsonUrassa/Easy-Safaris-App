
import React from 'react';
import Layout from '../components/Layout';
import { ZONES, PARKS } from '../data';
import { ZoneId } from '../types';

interface ZoneDetailProps {
  zoneId: ZoneId;
  onBack: () => void;
  onSelectPark: (parkId: string) => void;
}

const ZoneDetail: React.FC<ZoneDetailProps> = ({ zoneId, onBack, onSelectPark }) => {
  const zone = ZONES.find(z => z.id === zoneId);
  const zoneParks = PARKS.filter(p => p.zone === zoneId);

  if (!zone) return null;

  return (
    <Layout 
      activeTab="home" 
      onNavigate={() => {}} 
      title={zone.name}
      onBack={onBack}
    >
      <div className="px-4 pt-6 pb-2">
        <nav className="flex text-xs font-medium text-primary mb-2 gap-1 items-center uppercase tracking-widest">
          <span>Destinations</span>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span>Tanzania</span>
        </nav>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#111813]">{zone.name}</h2>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
          Explore {zone.regions}. Home to {zone.tagline.toLowerCase()} and much more.
        </p>
      </div>

      <div className="flex gap-2 px-4 py-4 overflow-x-auto no-scrollbar">
        <button className="whitespace-nowrap bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">All Parks</button>
        <button className="whitespace-nowrap bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium">Big Five</button>
        <button className="whitespace-nowrap bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium">Trekking</button>
      </div>

      <main className="flex-1 px-4 space-y-6 pb-24">
        {zoneParks.length > 0 ? (
          zoneParks.map(park => (
            <div 
              key={park.id}
              onClick={() => onSelectPark(park.id)}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 transition-all hover:shadow-lg cursor-pointer"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img 
                  alt={park.name} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={park.image} 
                />
                <div className="absolute inset-0 glass-overlay flex flex-col justify-end p-5">
                  <div className="flex gap-2 mb-2">
                    {park.tags.map(tag => (
                      <span key={tag} className="bg-primary px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white text-2xl font-bold leading-tight">{park.name}</h3>
                  <p className="text-white/80 text-sm mt-1 line-clamp-2 italic">{park.description}</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between border-t border-gray-50">
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-[18px]">{park.statusIcon || 'verified'}</span>
                  <span className="text-xs font-bold">{park.statusText || 'Top Destination'}</span>
                </div>
                <button className="text-sm font-bold text-[#111813] flex items-center gap-1">
                  Explore <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 text-center">
            <span className="material-symbols-outlined text-gray-300 text-6xl">travel_explore</span>
            <p className="text-gray-500 mt-4">Discovering more destinations for this zone soon.</p>
          </div>
        )}
      </main>

      {/* Dynamic CTA */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-30 w-full max-w-md px-6">
        <button className="w-full bg-[#111813] text-white py-4 rounded-full font-bold shadow-2xl flex items-center justify-center gap-2 transition-transform active:scale-95">
          <span className="material-symbols-outlined text-[20px]">flight_takeoff</span>
          Plan Your Safari
        </button>
      </div>
    </Layout>
  );
};

export default ZoneDetail;
